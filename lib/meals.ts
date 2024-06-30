import fs from "node:fs";
import sql from "better-sqlite3";
import slugify from "slugify";
import xss from "xss";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));

  // throw new Error("Failed to fetch meals");
  return db.prepare("SELECT * FROM meals").all();
}

// 서버 컴포넌트에서는 async await을 사용할 수 있다. => why?!

export function getMeal(slug: string) {
  return db.prepare("SELECT * FROM meals WHERE slug = ?").get(slug);
}

export async function saveMeal(meal: any) {
  meal.slug = slugify(meal.title, { lower: true });
  meal.instructions = xss(meal.instructions);

  const extension = meal.image.name.split(".").pop();
  const fileName = `${meal.slug}.${extension}`; // 파일 이름이 겹치지 않도록 주의해야 한다.

  // 얻은 파일 이름을 public 폴더에 저장하기
  const stream = fs.createWriteStream(`public/images/${fileName}`);
  const bufferedImage = await meal.image.arrayBuffer(); // arrayBuffer()는 Promise를 반환한다.

  // 첫 번째 인자: 쓰고 싶은 내용
  // 두 번째 인자: 작성이 끝나면 실행될 함수
  stream.write(Buffer.from(bufferedImage), (error) => {
    if (error) {
      throw new Error("Saving image failed!");
    }
  });

  meal.image = `/images/${fileName}`;

  if (!meal.creator) {
    meal.creator = "Unknown Creator";
  }

  db.prepare(
    `
    INSERT INTO meals (
      title, 
      summary, 
      instructions, 
      creator, 
      creator_email, 
      image, 
      slug) 
    VALUES (
      @title, 
      @summary, 
      @instructions, 
      @creator, 
      @creator_email, 
      @image, 
      @slug
    )
    `
  ).run(meal);
}

// 이미지는 파일 시스템에 저장해야 한다.
// 데이터베이스에 이미지를 저장하는 것은 좋지 않음.
// public 폴더에 이미지를 저장할 것인데, 단점이 몇가지 있다.

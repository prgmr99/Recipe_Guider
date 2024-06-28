import sql from "better-sqlite3";

const db = sql("meals.db");

export async function getAllMeals() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  return db.prepare("SELECT * FROM meals").all();
}

// 서버 컴포넌트에서는 async await을 사용할 수 있다. => why?!

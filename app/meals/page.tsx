import { Suspense } from "react";
import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";

async function Meals() {
  const meals: any = await getAllMeals();

  return <MealsGrid meals={meals} />;
}

export default function MealsPage() {
  // next.js에서는 이미 해당 컴포넌트가 기본적으로 서버에서 실행되기 때문에
  // fetch를 사용하지 않아도 되고, 서버에서 직접 가져오면 된다.

  return (
    <>
      <header className={classes.header}>
        <h1>
          Delicious meals, created{" "}
          <span className={classes.highlight}>by you</span>
        </h1>
        <p>
          Choose your favorite recipe and cook it yourself. It is easy and fun!
        </p>
        <p className={classes.cta}>
          <Link href="/meals/share">Share Your Favorite Recipe</Link>
        </p>
      </header>
      <main className={classes.main}>
        <Suspense
          fallback={<p className={classes.loading}>Fetching meals...</p>}
        >
          <Meals />
        </Suspense>
      </main>
    </>
  );
}

// next.js에서는 꽤 공격적인 캐싱을 한다.
// 정확히는 페이지의 데이터를 포함해 방문한 모든 페이지를 캐시하고 다른 페이지로 갔다가 돌아오면
// 캐시에서 기존 페이지를 로드해 최대한 빨리 보여준다.

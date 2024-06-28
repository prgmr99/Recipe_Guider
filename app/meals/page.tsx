import Link from "next/link";
import classes from "./page.module.css";
import MealsGrid from "@/components/meals/meals-grid";
import { getAllMeals } from "@/lib/meals";

export default async function MealsPage() {
  // next.js에서는 이미 해당 컴포넌트가 기본적으로 서버에서 실행되기 때문에
  // fetch를 사용하지 않아도 되고, 서버에서 직접 가져오면 된다.
  const meals: any = await getAllMeals();

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
        <MealsGrid meals={meals} />
      </main>
    </>
  );
}

import MealItem from "./meal-item";
import classes from "./meals-grid.module.css";

interface Meal {
  id: string;
  name: string;
}

export default function MealsGrid({ meals }: { meals: Meal[] }) {
  return (
    <ul className={classes.meals}>
      {meals.map((meal) => (
        <li key={meal.id}>
          <MealItem {...meal} />
        </li>
      ))}
    </ul>
  );
}

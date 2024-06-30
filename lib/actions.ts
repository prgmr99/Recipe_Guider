"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// 서버 액션을 해당 함수에서만 보장한다.

export async function shareMeal(formData: FormData) {
  const meal = {
    creator: formData.get("creator") as string,
    creator_email: formData.get("email") as string,
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: formData.get("image") as string,
  };

  await saveMeal(meal);
  redirect("/meals");
}

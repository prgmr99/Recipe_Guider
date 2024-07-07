"use server";
import { redirect } from "next/navigation";
import { saveMeal } from "./meals";

// 서버 액션을 해당 함수에서만 보장한다.
// client 쪽에서만 required 속성으로 유효성 검사를 하기에는 부족하다.
// server 쪽에서도 유효성 검사를 할 필요가 있다. (Devtool에서 required 속성을 제거할 수 있음.)

function isInvalidText(text: string) {
  return !text || text.trim() === "";
}

export async function shareMeal(prevState: any, formData: any) {
  const imageFile = formData.get("image");
  const meal = {
    title: formData.get("title") as string,
    summary: formData.get("summary") as string,
    instructions: formData.get("instructions") as string,
    image: imageFile instanceof File ? imageFile : null,
    creator: formData.get("creator") as string,
    creator_email: formData.get("email") as string,
  };

  if (
    isInvalidText(meal.title) ||
    isInvalidText(meal.summary) ||
    isInvalidText(meal.instructions) ||
    isInvalidText(meal.creator) ||
    isInvalidText(meal.creator_email) ||
    !meal.creator_email.includes("@") ||
    !meal.image ||
    meal.image.size === 0
  ) {
    return {
      message: "Invalid input.",
    };
  }

  await saveMeal(meal);
  redirect("/meals");
}

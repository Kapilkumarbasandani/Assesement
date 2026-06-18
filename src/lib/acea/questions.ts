import { ACEA_CATEGORIES, ACEA_QUESTIONS } from "./questions-data";

export { ACEA_CATEGORIES, ACEA_QUESTIONS };

export interface AceaQuestion {
  id: number;
  categoryId: number;
  categorySlug: string;
  categoryName: string;
  text: string;
  tooltip: string;
  evidenceRequired: string;
  weightage: number;
}

export const QUESTIONS: AceaQuestion[] = [...ACEA_QUESTIONS];
export const TOTAL_QUESTIONS = QUESTIONS.length;

export const SCORE_LABELS: Record<number, string> = {
  0: "Not Available",
  1: "Very Weak",
  2: "Basic",
  3: "Adequate",
  4: "Good",
  5: "Excellent",
};

export function getQuestionById(id: number): AceaQuestion | undefined {
  return QUESTIONS.find((q) => q.id === id);
}

export function getQuestionsByCategory(categoryId: number): AceaQuestion[] {
  return QUESTIONS.filter((q) => q.categoryId === categoryId);
}

export function getCategoryProgress(
  currentIndex: number
): { categoryName: string; questionInCategory: number; totalInCategory: number } {
  const q = QUESTIONS[currentIndex];
  if (!q) return { categoryName: "", questionInCategory: 0, totalInCategory: 0 };
  const inCat = QUESTIONS.filter((x) => x.categoryId === q.categoryId);
  const pos = inCat.findIndex((x) => x.id === q.id) + 1;
  return { categoryName: q.categoryName, questionInCategory: pos, totalInCategory: inCat.length };
}

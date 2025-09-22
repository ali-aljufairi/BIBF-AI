export type CategoryType =
  | "AWS ML"
  | "Data Science"
  | "Cloud Computing"
  | "ML Ops"
  | "Tutorials"
  | "Tech Insights";

export const getCategoryColor = (category: CategoryType): string => {
  const colorMap: Record<CategoryType, string> = {
    "AWS ML": "from-orange-500 to-red-500",
    "Data Science": "from-emerald-500 to-teal-500",
    "Cloud Computing": "from-sky-500 to-blue-500",
    "ML Ops": "from-purple-500 to-violet-500",
    "Tutorials": "from-pink-500 to-rose-500",
    "Tech Insights": "from-indigo-500 to-purple-500",
  };

  return colorMap[category] || "from-gray-500 to-gray-600";
};
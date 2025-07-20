import { motion } from "framer-motion";
import CategoryCard from "./category-card";
import { CategoryType } from "../../interfaces/categories";

interface CategoryInfo {
  name: CategoryType;
  color: string;
  count: string;
}

export default function CategoryGrid() {
  const categories: CategoryInfo[] = [
    { name: "AWS ML", color: "from-orange-500 to-red-500", count: "12 articles" },
    { name: "Data Science", color: "from-emerald-500 to-teal-500", count: "8 articles" },
    { name: "Cloud Computing", color: "from-sky-500 to-blue-500", count: "15 articles" },
    { name: "ML Ops", color: "from-purple-500 to-violet-500", count: "6 articles" },
    { name: "Tutorials", color: "from-pink-500 to-rose-500", count: "20 articles" },
    { name: "Tech Insights", color: "from-indigo-500 to-purple-500", count: "10 articles" },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      {categories.map((category, index) => (
        <CategoryCard
          key={category.name}
          name={category.name}
          color={category.color}
          count={category.count}
          index={index}
        />
      ))}
    </motion.div>
  );
}

import { motion } from "framer-motion";
import Link from "next/link";
import { CategoryType } from "../../interfaces/categories";

interface CategoryCardProps {
  name: CategoryType;
  color: string;
  count: string;
  index: number;
}

export default function CategoryCard({ name, color, count, index }: CategoryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link href={`/${name.toLowerCase().replace(" ", "-")}`}>
        <div className="relative group cursor-pointer">
          <div className={`absolute inset-0 bg-gradient-to-r ${color} rounded-xl opacity-75 group-hover:opacity-100 transition-opacity`} />
          <div className="relative p-6 flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-white mb-2">{name}</h3>
            <span className="text-sm text-white/80">{count}</span>
          </div>
          {/* Hover effect */}
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 rounded-xl transition-colors" />
        </div>
      </Link>
    </motion.div>
  );
}

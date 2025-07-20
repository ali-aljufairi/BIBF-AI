import { CategoryType, getCategoryColor } from '../../interfaces/categories';
import { cn } from '../../utils/cn';

interface CategoryBadgeProps {
  category: CategoryType;
  className?: string;
}

export const CategoryBadge = ({ category, className }: CategoryBadgeProps) => {
  const colorClass = getCategoryColor(category);
  
  return (
    <span 
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-gradient-to-r',
        colorClass,
        'text-white',
        className
      )}
    >
      {category}
    </span>
  );
};

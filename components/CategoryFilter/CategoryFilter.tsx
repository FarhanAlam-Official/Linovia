'use client';

import React from 'react';
import { Category, CategoryId } from '@/lib/types';

interface CategoryFilterProps {
  categories: Category[];
  selectedCategory: CategoryId;
  onCategoryChange: (category: CategoryId) => void;
  className?: string;
}

export const CategoryFilter: React.FC<CategoryFilterProps> = ({
  categories,
  selectedCategory,
  onCategoryChange,
  className = ''
}) => {
  return (
    <div className={`flex flex-wrap gap-2 ${className}`}>
      {categories.map((category) => {
        const Icon = category.icon;
        const isSelected = category.id === selectedCategory;
        
        return (
          <button
            key={category.id}
            onClick={() => onCategoryChange(category.id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all ${
              isSelected
                ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20 border border-purple-500/20'
            }`}
          >
            <Icon className="w-4 h-4" />
            <span>{category.name}</span>
            {category.count > 0 && (
              <span className={`ml-1 px-2 py-0.5 rounded-full text-xs ${
                isSelected ? 'bg-white/20' : 'bg-purple-500/20'
              }`}>
                {category.count}
              </span>
            )}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryFilter;


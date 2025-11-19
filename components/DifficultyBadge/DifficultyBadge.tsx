'use client';

import React from 'react';
import { DifficultyLevel } from '@/lib/types';

interface DifficultyBadgeProps {
  difficulty: DifficultyLevel;
  size?: 'sm' | 'md' | 'lg';
}

const difficultyColors = {
  beginner: 'bg-green-500/20 text-green-400 border-green-500/30',
  intermediate: 'bg-yellow-500/20 text-yellow-400 border-yellow-500/30',
  advanced: 'bg-red-500/20 text-red-400 border-red-500/30'
};

const difficultyLabels = {
  beginner: 'Beginner',
  intermediate: 'Intermediate',
  advanced: 'Advanced'
};

const sizeClasses = {
  sm: 'text-xs px-2 py-0.5',
  md: 'text-sm px-3 py-1',
  lg: 'text-base px-4 py-1.5'
};

export const DifficultyBadge: React.FC<DifficultyBadgeProps> = ({ 
  difficulty, 
  size = 'md' 
}) => {
  return (
    <span
      className={`inline-flex items-center rounded-full border font-medium ${difficultyColors[difficulty]} ${sizeClasses[size]}`}
    >
      {difficultyLabels[difficulty]}
    </span>
  );
};

export default DifficultyBadge;


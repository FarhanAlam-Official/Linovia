import React from 'react';

// Core data types
export interface Command {
  id: string;
  name: string;
  category: CategoryId;
  difficulty: DifficultyLevel;
  description: string;
  usage: string;
  examples: CommandExample[];
  flags: CommandFlag[];
  tags: string[];
  lastUpdated: string;
  popularity: number;
  relatedCommands?: string[];
}

export interface CommandExample {
  cmd: string;
  desc: string;
  output?: string;
  explanation?: string;
}

export interface CommandFlag {
  flag: string;
  desc: string;
  example?: string;
  deprecated?: boolean;
}

export interface Category {
  id: CategoryId;
  name: string;
  icon: React.ComponentType;
  count: number;
  description: string;
  color: string;
}

export interface Tutorial {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  category: CategoryId;
  content: string;
  estimatedTime: number; // in minutes
  prerequisites: string[];
  commands: string[]; // command IDs
  tags: string[];
  author: string;
  lastUpdated: string;
  rating: number;
  completions: number;
}

export interface QuizQuestion {
  id: string;
  question: string;
  type: 'multiple-choice' | 'fill-blank' | 'command-completion';
  options?: string[];
  correctAnswer: string | string[];
  explanation: string;
  difficulty: DifficultyLevel;
  category: CategoryId;
  commandId?: string;
  points: number;
}

export interface Quiz {
  id: string;
  title: string;
  description: string;
  difficulty: DifficultyLevel;
  category: CategoryId;
  questions: QuizQuestion[];
  timeLimit?: number; // in minutes
  passingScore: number; // percentage
}

// Enums and Union Types
export type CategoryId = 
  | 'all'
  | 'files'
  | 'search' 
  | 'system'
  | 'processes'
  | 'disk'
  | 'network'
  | 'packages'
  | 'compression'
  | 'archive'
  | 'text'
  | 'users'
  | 'permissions'
  | 'services'
  | 'shell'
  | 'git'
  | 'advanced';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';

export type SortOption = 'name' | 'category' | 'difficulty' | 'popularity' | 'recent';

export type ViewMode = 'grid' | 'list' | 'compact';

// User and Settings Types
export interface UserPreferences {
  theme: 'dark' | 'light' | 'system';
  favorites: string[]; // command IDs
  completedTutorials: string[];
  quizScores: Record<string, number>;
  viewMode: ViewMode;
  showAdvanced: boolean;
  notifications: boolean;
  autoSave: boolean;
}

export interface SearchFilters {
  category: CategoryId;
  difficulty: DifficultyLevel | 'all';
  tags: string[];
  showFavoritesOnly: boolean;
}

export interface SearchState {
  query: string;
  filters: SearchFilters;
  sortBy: SortOption;
  results: Command[];
  totalResults: number;
  isLoading: boolean;
}

// Component Props Types
export interface CommandCardProps {
  command: Command;
  isExpanded: boolean;
  onToggleExpand: (commandId: string) => void;
  onToggleFavorite: (commandId: string) => void;
  isFavorite: boolean;
  viewMode: ViewMode;
}

export interface FilterProps {
  categories: Category[];
  onCategoryChange: (category: CategoryId) => void;
  onDifficultyChange: (difficulty: DifficultyLevel | 'all') => void;
  onToggleFavorites: () => void;
  currentFilters: SearchFilters;
}

export interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  onClear: () => void;
  placeholder?: string;
  suggestions?: string[];
}

// API Response Types
export interface ApiResponse<T> {
  data: T;
  success: boolean;
  message?: string;
  error?: string;
}

export interface PaginatedResponse<T> extends ApiResponse<T[]> {
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Analytics and Performance Types
export interface AnalyticsEvent {
  type: 'command_view' | 'command_copy' | 'search' | 'tutorial_start' | 'quiz_complete';
  data: Record<string, any>;
  timestamp: string;
  userId?: string;
}

export interface PerformanceMetrics {
  loadTime: number;
  searchTime: number;
  renderTime: number;
  memoryUsage?: number;
}

// Error Types
export interface AppError {
  code: string;
  message: string;
  details?: any;
  timestamp: string;
}

// Context Types
export interface AppContextType {
  commands: Command[];
  categories: Category[];
  tutorials: Tutorial[];
  userPreferences: UserPreferences;
  searchState: SearchState;
  updatePreferences: (preferences: Partial<UserPreferences>) => void;
  toggleFavorite: (commandId: string) => void;
  updateSearchState: (state: Partial<SearchState>) => void;
  isLoading: boolean;
  error: AppError | null;
}
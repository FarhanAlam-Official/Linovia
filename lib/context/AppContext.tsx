'use client';

import React, { createContext, useContext, useReducer, useEffect, ReactNode } from 'react';
import { AppContextType, UserPreferences, SearchState, Command, Category, Tutorial, AppError } from '../types';
import { commands, categories, tutorials, updateCategoryCounts } from '../data/commands';

// Default user preferences
const defaultPreferences: UserPreferences = {
  theme: 'dark',
  favorites: [],
  completedTutorials: [],
  quizScores: {},
  viewMode: 'grid',
  showAdvanced: false,
  notifications: true,
  autoSave: true
};

// Default search state
const defaultSearchState: SearchState = {
  query: '',
  filters: {
    category: 'all',
    difficulty: 'all',
    tags: [],
    showFavoritesOnly: false
  },
  sortBy: 'name',
  results: [],
  totalResults: 0,
  isLoading: false
};

// App state interface
interface AppState {
  commands: Command[];
  categories: Category[];
  tutorials: Tutorial[];
  userPreferences: UserPreferences;
  searchState: SearchState;
  isLoading: boolean;
  error: AppError | null;
}

// Action types
type AppAction =
  | { type: 'SET_LOADING'; payload: boolean }
  | { type: 'SET_ERROR'; payload: AppError | null }
  | { type: 'UPDATE_PREFERENCES'; payload: Partial<UserPreferences> }
  | { type: 'TOGGLE_FAVORITE'; payload: string }
  | { type: 'UPDATE_SEARCH_STATE'; payload: Partial<SearchState> }
  | { type: 'LOAD_DATA'; payload: { commands: Command[]; categories: Category[]; tutorials: Tutorial[] } };

// Initial state
const initialState: AppState = {
  commands: [],
  categories: [],
  tutorials: [],
  userPreferences: defaultPreferences,
  searchState: defaultSearchState,
  isLoading: true,
  error: null
};

// Reducer function
const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case 'SET_LOADING':
      return { ...state, isLoading: action.payload };
    
    case 'SET_ERROR':
      return { ...state, error: action.payload, isLoading: false };
    
    case 'UPDATE_PREFERENCES':
      const updatedPreferences = { ...state.userPreferences, ...action.payload };
      // Save to localStorage
      if (typeof window !== 'undefined') {
        localStorage.setItem('userPreferences', JSON.stringify(updatedPreferences));
      }
      return { ...state, userPreferences: updatedPreferences };
    
    case 'TOGGLE_FAVORITE':
      const commandId = action.payload;
      const currentFavorites = state.userPreferences.favorites;
      const updatedFavorites = currentFavorites.includes(commandId)
        ? currentFavorites.filter(id => id !== commandId)
        : [...currentFavorites, commandId];
      
      const newPreferences = { ...state.userPreferences, favorites: updatedFavorites };
      if (typeof window !== 'undefined') {
        localStorage.setItem('userPreferences', JSON.stringify(newPreferences));
      }
      return { ...state, userPreferences: newPreferences };
    
    case 'UPDATE_SEARCH_STATE':
      return { ...state, searchState: { ...state.searchState, ...action.payload } };
    
    case 'LOAD_DATA':
      return {
        ...state,
        commands: action.payload.commands,
        categories: action.payload.categories,
        tutorials: action.payload.tutorials,
        isLoading: false
      };
    
    default:
      return state;
  }
};

// Create context
const AppContext = createContext<AppContextType | undefined>(undefined);

// Provider component
interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  // Load user preferences from localStorage
  useEffect(() => {
    if (typeof window !== 'undefined') {
      const savedPreferences = localStorage.getItem('userPreferences');
      if (savedPreferences) {
        try {
          const preferences = JSON.parse(savedPreferences);
          dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences });
        } catch (error) {
          console.warn('Failed to parse saved preferences:', error);
        }
      }
    }
  }, []);

  // Load initial data
  useEffect(() => {
    const loadData = () => {
      try {
        const categoriesWithCounts = updateCategoryCounts(commands);
        dispatch({
          type: 'LOAD_DATA',
          payload: {
            commands,
            categories: categoriesWithCounts,
            tutorials
          }
        });
      } catch (error) {
        dispatch({
          type: 'SET_ERROR',
          payload: {
            code: 'LOAD_ERROR',
            message: 'Failed to load application data',
            details: error,
            timestamp: new Date().toISOString()
          }
        });
      }
    };

    // Simulate loading delay for better UX
    setTimeout(loadData, 500);
  }, []);

  // Context value
  const contextValue: AppContextType = {
    commands: state.commands,
    categories: state.categories,
    tutorials: state.tutorials,
    userPreferences: state.userPreferences,
    searchState: state.searchState,
    isLoading: state.isLoading,
    error: state.error,
    
    updatePreferences: (preferences: Partial<UserPreferences>) => {
      dispatch({ type: 'UPDATE_PREFERENCES', payload: preferences });
    },
    
    toggleFavorite: (commandId: string) => {
      dispatch({ type: 'TOGGLE_FAVORITE', payload: commandId });
    },
    
    updateSearchState: (searchState: Partial<SearchState>) => {
      dispatch({ type: 'UPDATE_SEARCH_STATE', payload: searchState });
    }
  };

  return (
    <AppContext.Provider value={contextValue}>
      {children}
    </AppContext.Provider>
  );
};

// Hook to use the app context
export const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};
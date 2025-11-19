'use client';

import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout/Layout';
import { useAppContext } from '@/lib/context/AppContext';
import { CommandCard } from '@/components/CommandCard/CommandCard';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter/CategoryFilter';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { Command, CategoryId, DifficultyLevel, SortOption, ViewMode } from '@/lib/types';
import Fuse from 'fuse.js';
import { 
  Grid, List, LayoutGrid, Filter, SortAsc, 
  Star, Search as SearchIcon, Sparkles 
} from 'lucide-react';
import {
  extractKeywords,
  findMatchingPatterns,
  scoreCommandForNaturalLanguage,
  enhanceCommandForSearch,
  stripSearchableText
} from '@/lib/utils/naturalLanguageSearch';

export default function Commands() {
  const { commands, categories, userPreferences, toggleFavorite, updatePreferences, isLoading } = useAppContext();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [sortBy, setSortBy] = useState<SortOption>('name');
  const [viewMode, setViewMode] = useState<ViewMode>(userPreferences.viewMode);
  const [expandedCommands, setExpandedCommands] = useState<Set<string>>(new Set());
  const [showFavoritesOnly, setShowFavoritesOnly] = useState(false);
  const [naturalLanguageMode, setNaturalLanguageMode] = useState(false);

  // Configure Fuse.js for regular search
  const fuse = useMemo(() => {
    return new Fuse(commands, {
      keys: [
        { name: 'name', weight: 10.0 }, // Very high weight for exact name matches
        { name: 'description', weight: 0.1 },
        { name: 'tags', weight: 0.05 }
        // Removed category to avoid irrelevant matches
      ],
      threshold: 0.3, // Even stricter threshold
      includeScore: true,
      minMatchCharLength: 2,
      findAllMatches: false,
      ignoreLocation: false,
      shouldSort: true,
      // Use extended search for better control
      useExtendedSearch: false
    });
  }, [commands]);

  // Configure Fuse.js for natural language search
  const naturalLanguageFuse = useMemo(() => {
    // Create enhanced commands with searchable text
    const enhancedCommands = commands.map(cmd => enhanceCommandForSearch(cmd));
    
    return new Fuse(enhancedCommands, {
      keys: [
        { name: 'name', weight: 0.3 },
        { name: 'description', weight: 0.4 },
        { name: 'searchableText', weight: 0.5 }, // Higher weight for natural language
        { name: 'tags', weight: 0.2 },
        { name: 'category', weight: 0.1 }
      ],
      threshold: 0.4, // More lenient for natural language
      includeScore: true,
      ignoreLocation: true, // Search anywhere in the text
      minMatchCharLength: 2
    });
  }, [commands]);

  // Filter and search commands
  const filteredCommands = useMemo(() => {
    let results: Command[] = [];

    // Search
    if (searchQuery.trim()) {
      if (naturalLanguageMode) {
        // Natural language search (only when toggle is ON)
        const keywords = extractKeywords(searchQuery);
        const patternMatches = findMatchingPatterns(keywords);
        
        // First, try Fuse.js search with enhanced fields
        const fuseResults = naturalLanguageFuse.search(searchQuery);
        // Filter out poor matches (score > 0.5 means poor match)
        const goodFuseResults = fuseResults.filter(result => {
          const score = result.score || 1;
          return score <= 0.5;
        });
        const fuseCommands = goodFuseResults.map(result => stripSearchableText(result.item));
        
        // Then, score and rank commands based on natural language relevance
        const scoredCommands = fuseCommands.map(cmd => ({
          command: cmd,
          score: scoreCommandForNaturalLanguage(cmd, keywords, patternMatches)
        }));
        
        // Also check pattern matches that might not be in fuse results
        const patternCommandIds = new Set(
          patternMatches.flatMap(pattern => {
            return commands
              .filter(cmd => cmd.name.toLowerCase().includes(pattern.toLowerCase()))
              .map(cmd => cmd.id);
          })
        );
        
        // Add pattern-matched commands that aren't already in results
        const allCommandIds = new Set(scoredCommands.map(sc => sc.command.id));
        patternCommandIds.forEach(id => {
          if (!allCommandIds.has(id)) {
            const cmd = commands.find(c => c.id === id);
            if (cmd) {
              const cmdScore = scoreCommandForNaturalLanguage(cmd, keywords, patternMatches);
              // Only add if score is positive
              if (cmdScore > 0) {
                scoredCommands.push({
                  command: cmd,
                  score: cmdScore
                });
              }
            }
          }
        });
        
        // Sort by score (highest first) and filter out zero scores
        const validScoredCommands = scoredCommands.filter(sc => sc.score > 0);
        validScoredCommands.sort((a, b) => b.score - a.score);
        
        // Remove duplicates
        const seenIds = new Set<string>();
        results = validScoredCommands
          .map(sc => sc.command)
          .filter(cmd => {
            if (seenIds.has(cmd.id)) {
              return false;
            }
            seenIds.add(cmd.id);
            return true;
          });
      } else {
        // Regular search (default)
        const queryLower = searchQuery.toLowerCase().trim();
        
        // First, check for exact name match
        const exactMatch = commands.find(cmd => cmd.name.toLowerCase() === queryLower);
        
        if (exactMatch) {
          // If exact match exists, show ONLY the exact match
          results = [exactMatch];
        } else {
          // Check for commands that start with the query (prefix match)
          const prefixMatches = commands.filter(cmd => 
            cmd.name.toLowerCase().startsWith(queryLower)
          );
          
          if (prefixMatches.length > 0) {
            // If we have prefix matches, only show those (sorted alphabetically)
            results = prefixMatches.sort((a, b) => a.name.localeCompare(b.name));
          } else {
            // No exact or prefix match, use Fuse.js but be very strict
            const searchResults = fuse.search(searchQuery);
            
            // Filter to only include results where the query appears in the name or is a very close match
            const strictMatches = searchResults.filter(result => {
              const score = result.score || 1;
              const cmdName = result.item.name.toLowerCase();
              
              // Only include if:
              // 1. Name contains the query (substring match), OR
              // 2. Score is excellent (< 0.2) and matches name/description
              const nameContainsQuery = cmdName.includes(queryLower);
              const excellentScore = score < 0.2;
              
              return nameContainsQuery || excellentScore;
            });
            
            // Sort results to prioritize name matches
            const sortedResults = strictMatches.sort((a, b) => {
              const aName = a.item.name.toLowerCase();
              const bName = b.item.name.toLowerCase();
              
              // Contains query in name gets highest priority
              const aContains = aName.includes(queryLower);
              const bContains = bName.includes(queryLower);
              
              if (aContains && !bContains) return -1;
              if (bContains && !aContains) return 1;
              
              // Then use Fuse.js score
              return (a.score || 1) - (b.score || 1);
            });
            
            // Remove duplicates and map to commands
            const seenIds = new Set<string>();
            results = sortedResults
              .map(result => result.item)
              .filter(cmd => {
                if (seenIds.has(cmd.id)) {
                  return false;
                }
                seenIds.add(cmd.id);
                return true;
              });
          }
        }
      }
    } else {
      // No search query - show all commands
      results = commands;
    }

    // Category filter
    if (selectedCategory !== 'all') {
      results = results.filter(cmd => cmd.category === selectedCategory);
    }

    // Difficulty filter
    if (selectedDifficulty !== 'all') {
      results = results.filter(cmd => cmd.difficulty === selectedDifficulty);
    }

    // Favorites filter
    if (showFavoritesOnly) {
      results = results.filter(cmd => userPreferences.favorites.includes(cmd.id));
    }

    // Sort
    const sortedResults = [...results].sort((a, b) => {
      switch (sortBy) {
        case 'name':
          return a.name.localeCompare(b.name);
        case 'category':
          return a.category.localeCompare(b.category);
        case 'difficulty':
          const difficultyOrder = { beginner: 0, intermediate: 1, advanced: 2 };
          return difficultyOrder[a.difficulty] - difficultyOrder[b.difficulty];
        case 'popularity':
          return b.popularity - a.popularity;
        case 'recent':
          return new Date(b.lastUpdated).getTime() - new Date(a.lastUpdated).getTime();
        default:
          return 0;
      }
    });

    // Ensure we return a new array to trigger React re-render
    return sortedResults;
  }, [commands, searchQuery, selectedCategory, selectedDifficulty, showFavoritesOnly, sortBy, fuse, naturalLanguageFuse, naturalLanguageMode, userPreferences.favorites]);

  const handleToggleExpand = (commandId: string) => {
    setExpandedCommands(prev => {
      const next = new Set(prev);
      if (next.has(commandId)) {
        next.delete(commandId);
      } else {
        next.add(commandId);
      }
      return next;
    });
  };

  const handleViewModeChange = (mode: ViewMode) => {
    setViewMode(mode);
    updatePreferences({ viewMode: mode });
  };

  const handleClearSearch = () => {
    setSearchQuery('');
  };

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Linux Commands Reference
            </h1>
            <p className="text-purple-300 text-lg">
              Comprehensive Linux commands reference with detailed examples
            </p>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6 mb-8">
            {/* Search Bar */}
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <div className="flex-1">
                  <SearchBar
                    value={searchQuery}
                    onChange={setSearchQuery}
                    onClear={handleClearSearch}
                    placeholder={naturalLanguageMode 
                      ? "Ask a question: 'how to kill a process', 'how to delete a user'..."
                      : "Search commands by name, description, or tags..."
                    }
                  />
                </div>
                <button
                  onClick={() => {
                    setNaturalLanguageMode(!naturalLanguageMode);
                    if (naturalLanguageMode) {
                      // Clear search when switching back to normal mode
                      setSearchQuery('');
                    }
                  }}
                  className={`flex items-center gap-2 px-4 py-3 rounded-lg font-semibold transition-all whitespace-nowrap ${
                    naturalLanguageMode
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                      : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20 border border-purple-500/20'
                  }`}
                  title={naturalLanguageMode ? 'Switch to command search' : 'Enable smart search for questions'}
                >
                  <Sparkles className={`w-4 h-4 ${naturalLanguageMode ? 'text-white' : 'text-purple-400'}`} />
                  <span className="hidden sm:inline">
                    {naturalLanguageMode ? 'Smart Search' : 'Smart Search'}
                  </span>
                  <span className="sm:hidden">
                    {naturalLanguageMode ? 'Smart' : 'Smart'}
                  </span>
                </button>
              </div>
              {naturalLanguageMode && (
                <div className="flex items-center gap-2 text-sm text-purple-300 bg-purple-500/10 rounded-lg p-3 border border-purple-500/20">
                  <Sparkles className="w-4 h-4 text-purple-400" />
                  <span>Smart search is active. Ask questions like &quot;how to kill a process&quot; or &quot;find large files&quot;</span>
                </div>
              )}
            </div>

            {/* Category Filter */}
            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />

            {/* Additional Filters */}
            <div className="flex flex-wrap items-center gap-4">
              {/* Difficulty Filter */}
              <div className="flex items-center gap-2">
                <Filter className="w-5 h-5 text-purple-400" />
                <select
                  value={selectedDifficulty}
                  onChange={(e) => setSelectedDifficulty(e.target.value as DifficultyLevel | 'all')}
                  className="px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 appearance-none cursor-pointer hover:border-purple-500/40 transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a855f7' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="all" className="bg-slate-900 text-white">All Difficulties</option>
                  <option value="beginner" className="bg-slate-900 text-white">Beginner</option>
                  <option value="intermediate" className="bg-slate-900 text-white">Intermediate</option>
                  <option value="advanced" className="bg-slate-900 text-white">Advanced</option>
                </select>
              </div>

              {/* Sort */}
              <div className="flex items-center gap-2">
                <SortAsc className="w-5 h-5 text-purple-400" />
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 appearance-none cursor-pointer hover:border-purple-500/40 transition-colors"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a855f7' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 0.75rem center',
                    paddingRight: '2.5rem'
                  }}
                >
                  <option value="name" className="bg-slate-900 text-white">Sort by Name</option>
                  <option value="category" className="bg-slate-900 text-white">Sort by Category</option>
                  <option value="difficulty" className="bg-slate-900 text-white">Sort by Difficulty</option>
                  <option value="popularity" className="bg-slate-900 text-white">Sort by Popularity</option>
                  <option value="recent" className="bg-slate-900 text-white">Sort by Recent</option>
                </select>
              </div>

              {/* Favorites Toggle */}
              <button
                onClick={() => setShowFavoritesOnly(!showFavoritesOnly)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                  showFavoritesOnly
                    ? 'bg-gradient-to-r from-yellow-600 to-orange-600 text-white'
                    : 'bg-white/10 backdrop-blur-sm text-purple-200 hover:bg-white/20 border border-purple-500/20'
                }`}
              >
                <Star className={`w-4 h-4 ${showFavoritesOnly ? 'fill-current' : ''}`} />
                <span>Favorites Only</span>
              </button>

              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 ml-auto">
                <LayoutGrid className="w-5 h-5 text-purple-400" />
                <div className="flex bg-white/10 backdrop-blur-sm border border-purple-500/20 rounded-lg p-1">
                  <button
                    onClick={() => handleViewModeChange('grid')}
                    className={`p-2 rounded transition-all ${
                      viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-white/10'
                    }`}
                    title="Grid view"
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleViewModeChange('list')}
                    className={`p-2 rounded transition-all ${
                      viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-white/10'
                    }`}
                    title="List view"
                  >
                    <List className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => handleViewModeChange('compact')}
                    className={`p-2 rounded transition-all ${
                      viewMode === 'compact' ? 'bg-purple-600 text-white' : 'text-purple-300 hover:bg-white/10'
                    }`}
                    title="Compact view"
                  >
                    <LayoutGrid className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Results Count */}
          <div className="mb-6">
            <p className="text-purple-300">
              Showing <span className="font-semibold text-white">{filteredCommands.length}</span> of{' '}
              <span className="font-semibold text-white">{commands.length}</span> commands
            </p>
          </div>

          {/* Commands Grid/List */}
          {filteredCommands.length === 0 ? (
            <EmptyState
              icon={SearchIcon}
              title="No commands found"
              description={
                showFavoritesOnly
                  ? "You don't have any favorite commands yet. Start adding some!"
                  : "Try adjusting your search or filters to find what you're looking for."
              }
              action={
                showFavoritesOnly
                  ? undefined
                  : {
                      label: 'Clear Filters',
                      onClick: () => {
                        setSearchQuery('');
                        setSelectedCategory('all');
                        setSelectedDifficulty('all');
                        setShowFavoritesOnly(false);
                      }
                    }
              }
            />
          ) : (
            <div
              className={
                viewMode === 'compact'
                  ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'
                  : viewMode === 'list'
                  ? 'space-y-4'
                  : 'grid grid-cols-1 md:grid-cols-2 gap-6'
              }
            >
              {filteredCommands.map((command) => (
                <CommandCard
                  key={command.id}
                  command={command}
                  isExpanded={expandedCommands.has(command.id)}
                  onToggleExpand={handleToggleExpand}
                  onToggleFavorite={toggleFavorite}
                  isFavorite={userPreferences.favorites.includes(command.id)}
                  viewMode={viewMode}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

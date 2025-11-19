'use client';

import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout/Layout';
import { useAppContext } from '@/lib/context/AppContext';
import { SearchBar } from '@/components/SearchBar/SearchBar';
import { CategoryFilter } from '@/components/CategoryFilter/CategoryFilter';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { CategoryId } from '@/lib/types';
import Fuse from 'fuse.js';
import { Copy, Check, Search as SearchIcon, Printer } from 'lucide-react';

export default function CheatSheet() {
  const { commands, categories, isLoading } = useAppContext();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [copiedCommand, setCopiedCommand] = useState<string | null>(null);

  // Configure Fuse.js for fuzzy search
  const fuse = useMemo(() => {
    return new Fuse(commands, {
      keys: ['name', 'description', 'usage'],
      threshold: 0.3,
      includeScore: true
    });
  }, [commands]);

  // Filter and search commands
  const filteredCommands = useMemo(() => {
    let results = commands;

    // Search
    if (searchQuery.trim()) {
      const searchResults = fuse.search(searchQuery);
      results = searchResults.map(result => result.item);
    }

    // Category filter
    if (selectedCategory !== 'all') {
      results = results.filter(cmd => cmd.category === selectedCategory);
    }

    // Sort by name
    return [...results].sort((a, b) => a.name.localeCompare(b.name));
  }, [commands, searchQuery, selectedCategory, fuse]);

  // Group commands by category
  const groupedCommands = useMemo(() => {
    const grouped: Record<string, typeof filteredCommands> = {};
    
    filteredCommands.forEach(cmd => {
      const categoryName = categories.find(c => c.id === cmd.category)?.name || 'Other';
      if (!grouped[categoryName]) {
        grouped[categoryName] = [];
      }
      grouped[categoryName].push(cmd);
    });

    return grouped;
  }, [filteredCommands, categories]);

  const handleCopy = async (text: string, commandId: string) => {
    await navigator.clipboard.writeText(text);
    setCopiedCommand(commandId);
    setTimeout(() => setCopiedCommand(null), 2000);
  };

  const handlePrint = () => {
    window.print();
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
          <div className="mb-8 flex items-center justify-between flex-wrap gap-4">
            <div>
            <h1 className="text-4xl font-bold gradient-text mb-4">
                Linux Command Cheat Sheet
              </h1>
              <p className="text-purple-300 text-lg">
                Quick reference guide for essential Linux commands
              </p>
            </div>
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg shadow-purple-500/50 transition-all hover:scale-105 print:hidden"
            >
              <Printer className="w-5 h-5" />
              <span>Print</span>
            </button>
          </div>

          {/* Search and Filters */}
          <div className="space-y-6 mb-8 print:hidden">
            <SearchBar
              value={searchQuery}
              onChange={setSearchQuery}
              onClear={handleClearSearch}
              placeholder="Search commands..."
            />

            <CategoryFilter
              categories={categories}
              selectedCategory={selectedCategory}
              onCategoryChange={setSelectedCategory}
            />
          </div>

          {/* Results Count */}
          <div className="mb-6 print:hidden">
            <p className="text-purple-300">
              Showing <span className="font-semibold text-white">{filteredCommands.length}</span> commands
            </p>
          </div>

          {/* Cheat Sheet Content */}
          {filteredCommands.length === 0 ? (
            <EmptyState
              icon={SearchIcon}
              title="No commands found"
              description="Try adjusting your search or filters to find what you're looking for."
              action={{
                label: 'Clear Filters',
                onClick: () => {
                  setSearchQuery('');
                  setSelectedCategory('all');
                }
              }}
            />
          ) : (
            <div className="space-y-8">
              {Object.entries(groupedCommands).map(([categoryName, categoryCommands]) => (
                <div key={categoryName} className="break-inside-avoid">
                  <h2 className="text-2xl font-bold text-white mb-4 pb-2 border-b border-purple-500/30">
                    {categoryName}
                  </h2>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categoryCommands.map((command) => (
                      <div
                        key={command.id}
                        className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all break-inside-avoid"
                      >
                        {/* Command Name and Copy */}
                        <div className="flex items-start justify-between mb-2">
                          <code className="text-lg font-bold text-purple-400 font-mono">
                            {command.name}
                          </code>
                          <button
                            onClick={() => handleCopy(command.usage, command.id)}
                            className="p-1.5 hover:bg-white/10 rounded-lg transition-colors flex-shrink-0"
                            title="Copy usage"
                          >
                            {copiedCommand === command.id ? (
                              <Check className="w-4 h-4 text-green-400" />
                            ) : (
                              <Copy className="w-4 h-4 text-purple-300" />
                            )}
                          </button>
                        </div>

                        {/* Usage */}
                        <div className="bg-black/40 rounded-lg p-3 mb-2 border border-cyan-500/20">
                          <code className="text-cyan-400 font-mono text-sm break-all">
                            {command.usage}
                          </code>
                        </div>

                        {/* Description */}
                        <p className="text-purple-200 text-sm mb-3 line-clamp-2">
                          {command.description}
                        </p>

                        {/* Common Flags */}
                        {command.flags && command.flags.length > 0 && (
                          <div className="space-y-1">
                            <p className="text-xs text-purple-400 font-semibold mb-1">Common Flags:</p>
                            <div className="flex flex-wrap gap-1">
                              {command.flags.slice(0, 3).map((flag, index) => (
                                <span
                                  key={index}
                                  className="px-2 py-0.5 bg-purple-500/20 text-purple-300 rounded text-xs font-mono"
                                >
                                  {flag.flag.split(' ')[0]}
                                </span>
                              ))}
                              {command.flags.length > 3 && (
                                <span className="px-2 py-0.5 text-purple-400 text-xs">
                                  +{command.flags.length - 3} more
                                </span>
                              )}
                            </div>
                          </div>
                        )}

                        {/* Quick Example */}
                        {command.examples && command.examples.length > 0 && (
                          <div className="mt-3 pt-3 border-t border-purple-500/20">
                            <p className="text-xs text-purple-400 font-semibold mb-1">Example:</p>
                            <code className="text-purple-300 font-mono text-xs block bg-black/40 rounded p-2 break-all">
                              {command.examples[0].cmd}
                            </code>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            background: white;
            color: black;
          }
          .print\\:hidden {
            display: none !important;
          }
          .break-inside-avoid {
            break-inside: avoid;
            page-break-inside: avoid;
          }
        }
      `}</style>
    </Layout>
  );
}

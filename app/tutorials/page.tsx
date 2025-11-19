'use client';

import React, { useState, useMemo } from 'react';
import Layout from '@/components/Layout/Layout';
import { useAppContext } from '@/lib/context/AppContext';
import { DifficultyBadge } from '@/components/DifficultyBadge/DifficultyBadge';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { CodeBlock } from '@/components/CodeBlock/CodeBlock';
import { Tutorial, CategoryId, DifficultyLevel } from '@/lib/types';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import { 
  GraduationCap, Clock, Star, Users, BookOpen, 
  X, ArrowLeft, CheckCircle, Filter 
} from 'lucide-react';
import Link from 'next/link';

export default function Tutorials() {
  const { tutorials, commands, categories, isLoading, userPreferences, updatePreferences } = useAppContext();
  
  const [selectedTutorial, setSelectedTutorial] = useState<Tutorial | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');

  // Filter tutorials
  const filteredTutorials = useMemo(() => {
    let results = tutorials;

    if (selectedCategory !== 'all') {
      results = results.filter(t => t.category === selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      results = results.filter(t => t.difficulty === selectedDifficulty);
    }

    return results.sort((a, b) => {
      // Sort by completed status first, then by rating
      const aCompleted = userPreferences.completedTutorials.includes(a.id);
      const bCompleted = userPreferences.completedTutorials.includes(b.id);
      if (aCompleted !== bCompleted) {
        return aCompleted ? 1 : -1;
      }
      return b.rating - a.rating;
    });
  }, [tutorials, selectedCategory, selectedDifficulty, userPreferences.completedTutorials]);

  const handleStartTutorial = (tutorial: Tutorial) => {
    setSelectedTutorial(tutorial);
  };

  const handleCompleteTutorial = (tutorialId: string) => {
    const completed = userPreferences.completedTutorials;
    if (!completed.includes(tutorialId)) {
      updatePreferences({
        completedTutorials: [...completed, tutorialId]
      });
    }
  };

  const isTutorialCompleted = (tutorialId: string) => {
    return userPreferences.completedTutorials.includes(tutorialId);
  };

  const getCategoryName = (categoryId: CategoryId) => {
    return categories.find(c => c.id === categoryId)?.name || categoryId;
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

  // Tutorial Detail View
  if (selectedTutorial) {
    const isCompleted = isTutorialCompleted(selectedTutorial.id);
    const relatedCommands = selectedTutorial.commands
      .map(cmdId => commands.find(c => c.id === cmdId))
      .filter(Boolean);

    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Back Button */}
            <button
              onClick={() => setSelectedTutorial(null)}
              className="flex items-center gap-2 text-purple-300 hover:text-white mb-6 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to Tutorials</span>
            </button>

            {/* Tutorial Header */}
            <div className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-8 border border-purple-500/20 mb-8">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <h1 className="text-4xl font-bold text-white mb-4">{selectedTutorial.title}</h1>
                  <p className="text-purple-200 text-lg mb-4">{selectedTutorial.description}</p>
                  
                  <div className="flex flex-wrap items-center gap-4">
                    <DifficultyBadge difficulty={selectedTutorial.difficulty} />
                    <div className="flex items-center gap-2 text-purple-300">
                      <Clock className="w-4 h-4" />
                      <span>{selectedTutorial.estimatedTime} min</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span>{selectedTutorial.rating.toFixed(1)}</span>
                    </div>
                    <div className="flex items-center gap-2 text-purple-300">
                      <Users className="w-4 h-4" />
                      <span>{selectedTutorial.completions} completions</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tags */}
              {selectedTutorial.tags && selectedTutorial.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {selectedTutorial.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}

              {/* Complete Button */}
              <button
                onClick={() => handleCompleteTutorial(selectedTutorial.id)}
                className={`mt-6 flex items-center gap-2 px-6 py-3 rounded-lg font-semibold transition-all ${
                  isCompleted
                    ? 'bg-green-600 text-white'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg shadow-purple-500/50'
                }`}
              >
                {isCompleted ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Completed</span>
                  </>
                ) : (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    <span>Mark as Complete</span>
                  </>
                )}
              </button>
            </div>

            {/* Prerequisites */}
            {selectedTutorial.prerequisites && selectedTutorial.prerequisites.length > 0 && (
              <div className="bg-yellow-500/10 border border-yellow-500/30 rounded-lg p-4 mb-8">
                <h3 className="text-yellow-400 font-semibold mb-2">Prerequisites</h3>
                <ul className="list-disc list-inside text-yellow-200 space-y-1">
                  {selectedTutorial.prerequisites.map((prereq, index) => (
                    <li key={index}>{prereq}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Tutorial Content */}
            <div className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-8 border border-purple-500/20 mb-8">
              <div className="prose prose-invert prose-purple max-w-none">
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    code: ({ node, inline, className, children, ...props }: any) => {
                      const match = /language-(\w+)/.exec(className || '');
                      const codeString = String(children).replace(/\n$/, '');
                      
                      return !inline && match ? (
                        <CodeBlock code={codeString} language={match[1]} />
                      ) : (
                        <code className={className} {...props}>
                          {children}
                        </code>
                      );
                    }
                  }}
                >
                  {selectedTutorial.content}
                </ReactMarkdown>
              </div>
            </div>

            {/* Related Commands */}
            {relatedCommands.length > 0 && (
              <div className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-8 border border-purple-500/20">
                <h3 className="text-2xl font-bold text-white mb-4">Related Commands</h3>
                <div className="grid md:grid-cols-2 gap-4">
                  {relatedCommands.map((cmd) => (
                    <Link
                      key={cmd!.id}
                      href={`/commands?search=${cmd!.name}`}
                      className="bg-black/40 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                    >
                      <code className="text-purple-400 font-mono font-bold text-lg mb-2 block">
                        {cmd!.name}
                      </code>
                      <p className="text-purple-200 text-sm">{cmd!.description}</p>
                    </Link>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </Layout>
    );
  }

  // Tutorial List View
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Linux Tutorials
            </h1>
            <p className="text-purple-300 text-lg">
              Step-by-step Linux tutorials for beginners and advanced users
            </p>
          </div>

          {/* Filters */}
          <div className="flex flex-wrap items-center gap-4 mb-8">
            <Filter className="w-5 h-5 text-purple-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value as CategoryId)}
              className="px-4 py-2 bg-slate-900/90 backdrop-blur-sm border border-purple-500/20 rounded-lg text-white focus:outline-none focus:border-purple-500/50 focus:ring-2 focus:ring-purple-500/20 appearance-none cursor-pointer hover:border-purple-500/40 transition-colors"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%23a855f7' d='M6 9L1 4h10z'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'no-repeat',
                backgroundPosition: 'right 0.75rem center',
                paddingRight: '2.5rem'
              }}
            >
              <option value="all" className="bg-slate-900 text-white">All Categories</option>
              {categories.filter(c => c.id !== 'all').map((category) => (
                <option key={category.id} value={category.id} className="bg-slate-900 text-white">
                  {category.name}
                </option>
              ))}
            </select>
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

          {/* Tutorials Grid */}
          {filteredTutorials.length === 0 ? (
            <EmptyState
              icon={BookOpen}
              title="No tutorials found"
              description="Try adjusting your filters to find tutorials."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredTutorials.map((tutorial) => {
                const isCompleted = isTutorialCompleted(tutorial.id);
                
                return (
                  <div
                    key={tutorial.id}
                    className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer group"
                    onClick={() => handleStartTutorial(tutorial)}
                  >
                    {isCompleted && (
                      <div className="flex justify-end mb-2">
                        <CheckCircle className="w-5 h-5 text-green-400" />
                      </div>
                    )}
                    
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <GraduationCap className="w-6 h-6 text-purple-400" />
                      </div>
                      <DifficultyBadge difficulty={tutorial.difficulty} size="sm" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                      {tutorial.title}
                    </h3>
                    <p className="text-purple-200 text-sm mb-4 line-clamp-3">
                      {tutorial.description}
                    </p>

                    <div className="flex items-center justify-between text-sm text-purple-300 mb-4">
                      <div className="flex items-center gap-2">
                        <Clock className="w-4 h-4" />
                        <span>{tutorial.estimatedTime} min</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        <span>{tutorial.rating.toFixed(1)}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Users className="w-4 h-4" />
                        <span>{tutorial.completions}</span>
                      </div>
                    </div>

                    {/* Tags */}
                    {tutorial.tags && tutorial.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2">
                        {tutorial.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}

                    <button className="w-full mt-4 px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg shadow-purple-500/50 transition-all hover:scale-105">
                      Start Tutorial
                    </button>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}

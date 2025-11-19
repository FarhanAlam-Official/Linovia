'use client';

import React, { useState } from 'react';
import { Command, ViewMode } from '@/lib/types';
import { ChevronDown, ChevronUp, Copy, Check, Star, ExternalLink } from 'lucide-react';
import { DifficultyBadge } from '../DifficultyBadge/DifficultyBadge';
import { CodeBlock } from '../CodeBlock/CodeBlock';

interface CommandCardProps {
  command: Command;
  isExpanded: boolean;
  onToggleExpand: (commandId: string) => void;
  onToggleFavorite: (commandId: string) => void;
  isFavorite: boolean;
  viewMode: ViewMode;
}

export const CommandCard: React.FC<CommandCardProps> = ({
  command,
  isExpanded,
  onToggleExpand,
  onToggleFavorite,
  isFavorite,
  viewMode
}) => {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (text: string) => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const isCompact = viewMode === 'compact';
  const isList = viewMode === 'list';

  if (isCompact) {
    return (
      <div 
        className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-lg p-4 border border-purple-500/20 hover:border-purple-500/50 transition-all cursor-pointer"
        onClick={() => onToggleExpand(command.id)}
      >
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              <code className="text-lg font-bold text-purple-400 font-mono">{command.name}</code>
              <DifficultyBadge difficulty={command.difficulty} size="sm" />
              <span className="text-sm text-purple-200 truncate">{command.description}</span>
            </div>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleCopy(command.usage);
              }}
              className="p-2 hover:bg-white/10 rounded-lg transition-colors ml-2"
              title="Copy usage"
            >
            {copied ? (
              <Check className="w-4 h-4 text-green-400" />
            ) : (
              <Copy className="w-4 h-4 text-purple-300" />
            )}
          </button>
        </div>
      </div>
    );
  }

  return (
    <div 
      className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl border border-purple-500/20 hover:border-purple-500/50 transition-all overflow-hidden cursor-pointer"
      onClick={() => onToggleExpand(command.id)}
    >
      {/* Header */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-4">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 mb-2">
              <code className="text-2xl font-bold text-purple-400 font-mono">{command.name}</code>
              <DifficultyBadge difficulty={command.difficulty} />
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onToggleFavorite(command.id);
                }}
                className={`p-1.5 rounded-lg transition-colors ${
                  isFavorite
                    ? 'text-yellow-400 hover:bg-yellow-400/10'
                    : 'text-purple-300 hover:bg-white/10'
                }`}
                title={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              >
                <Star className={`w-5 h-5 ${isFavorite ? 'fill-current' : ''}`} />
              </button>
            </div>
            <p className="text-purple-200 mb-3">{command.description}</p>
            <div className="flex items-center gap-4 flex-wrap">
              <div className="bg-black/40 rounded-lg px-4 py-2 border border-cyan-500/20">
                <code className="text-cyan-400 font-mono text-sm">{command.usage}</code>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  handleCopy(command.usage);
                }}
                className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                title="Copy usage"
              >
                {copied ? (
                  <Check className="w-4 h-4 text-green-400" />
                ) : (
                  <Copy className="w-4 h-4 text-purple-300" />
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Tags */}
        {command.tags && command.tags.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {command.tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded text-xs"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Expand/Collapse Button */}
        <div
          className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors cursor-pointer z-10 relative"
        >
          {isExpanded ? (
            <>
              <ChevronUp className="w-4 h-4" />
              <span className="text-sm">Show Less</span>
            </>
          ) : (
            <>
              <ChevronDown className="w-4 h-4" />
              <span className="text-sm">Show More</span>
            </>
          )}
        </div>
      </div>

      {/* Expanded Content */}
      {isExpanded && (
        <div 
          className="border-t border-purple-500/20 p-6 space-y-6"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Examples */}
          {command.examples && command.examples.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Examples</h4>
              <div className="space-y-4">
                {command.examples.map((example, index) => (
                  <div key={index} className="space-y-2">
                    <CodeBlock code={example.cmd} language="bash" />
                    <p className="text-purple-200 text-sm">{example.desc}</p>
                    {example.explanation && (
                      <p className="text-purple-300 text-sm italic">{example.explanation}</p>
                    )}
                    {example.output && (
                      <div className="bg-black/40 rounded-lg p-4 border border-green-500/20">
                        <p className="text-xs text-green-400 mb-2">Output:</p>
                        <pre className="text-green-300 text-sm font-mono whitespace-pre-wrap">
                          {example.output}
                        </pre>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Flags */}
          {command.flags && command.flags.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Flags & Options</h4>
              <div className="grid md:grid-cols-2 gap-3">
                {command.flags.map((flag, index) => (
                  <div
                    key={index}
                    className="bg-black/40 rounded-lg p-4 border border-purple-500/20"
                  >
                    <code className="text-cyan-400 font-mono text-sm mb-1 block">
                      {flag.flag}
                    </code>
                    <p className="text-purple-200 text-sm">{flag.desc}</p>
                    {flag.example && (
                      <code className="text-purple-400 font-mono text-xs mt-2 block">
                        {flag.example}
                      </code>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Related Commands */}
          {command.relatedCommands && command.relatedCommands.length > 0 && (
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Related Commands</h4>
              <div className="flex flex-wrap gap-2">
                {command.relatedCommands.map((relatedCmd) => (
                  <span
                    key={relatedCmd}
                    className="px-3 py-1.5 bg-purple-500/20 text-purple-300 rounded-lg text-sm font-mono hover:bg-purple-500/30 transition-colors cursor-pointer"
                  >
                    {relatedCmd}
                  </span>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default CommandCard;


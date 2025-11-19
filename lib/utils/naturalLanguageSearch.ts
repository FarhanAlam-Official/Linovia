/**
 * Natural Language Search Utilities
 * Handles queries like "how to kill a process" or "how do I delete a user"
 */

import { Command } from '../types';

// Common natural language patterns mapped to command keywords
const naturalLanguagePatterns: Record<string, string[]> = {
  // Process management
  'kill': ['kill', 'pkill', 'killall'],
  'process': ['kill', 'ps', 'top', 'htop'],
  'kill process': ['kill', 'pkill', 'killall'],
  'stop process': ['kill', 'pkill', 'killall'],
  'terminate process': ['kill', 'pkill', 'killall'],
  'end process': ['kill', 'pkill', 'killall'],
  
  // User management
  'user': ['useradd', 'userdel', 'usermod', 'passwd'],
  'delete user': ['userdel'],
  'remove user': ['userdel'],
  'create user': ['useradd'],
  'add user': ['useradd'],
  'change password': ['passwd'],
  'list users': ['getent', 'cat'],
  
  // File operations
  'file': ['ls', 'rm', 'cp', 'mv', 'cat', 'touch'],
  'delete file': ['rm'],
  'remove file': ['rm'],
  'copy file': ['cp'],
  'move file': ['mv'],
  'rename file': ['mv'],
  'directory': ['mkdir', 'rmdir', 'cd', 'ls'],
  'create directory': ['mkdir'],
  'make directory': ['mkdir'],
  'remove directory': ['rmdir', 'rm'],
  'delete directory': ['rmdir', 'rm'],
  'list files': ['ls'],
  'find file': ['find', 'locate'],
  'search file': ['find', 'grep', 'locate'],
  
  // Permissions
  'change permissions': ['chmod'],
  'change owner': ['chown'],
  'make executable': ['chmod +x'],
  
  // System info
  'disk space': ['df', 'du'],
  'disk usage': ['df', 'du'],
  'system info': ['uname', 'hostnamectl'],
  'memory usage': ['free', 'top', 'htop'],
  'cpu usage': ['top', 'htop', 'mpstat'],
  
  // Network
  'check connection': ['ping', 'curl'],
  'download file': ['wget', 'curl'],
  'network status': ['netstat', 'ss', 'ip'],
  
  // Text processing
  'search text': ['grep', 'awk', 'sed'],
  'find text': ['grep'],
  'replace text': ['sed'],
  'count lines': ['wc -l'],
  
  // Compression
  'compress file': ['gzip', 'zip', 'tar'],
  'extract archive': ['tar', 'unzip', 'gunzip'],
  'unzip file': ['unzip'],
  
  // Package management
  'install package': ['apt install', 'yum install', 'dnf install'],
  'update packages': ['apt update', 'yum update'],
  'remove package': ['apt remove', 'yum remove'],
};

/**
 * Detects if a query is a natural language question
 */
export function isNaturalLanguageQuery(query: string): boolean {
  const lowerQuery = query.toLowerCase().trim();
  const naturalLanguageIndicators = [
    'how to',
    'how do i',
    'how do you',
    'how can i',
    'how can you',
    'what command',
    'which command',
    'show me',
    'help me',
    'i want to',
    'i need to',
  ];
  
  return naturalLanguageIndicators.some(indicator => 
    lowerQuery.startsWith(indicator)
  );
}

/**
 * Extracts keywords from a natural language query
 */
export function extractKeywords(query: string): string[] {
  const lowerQuery = query.toLowerCase().trim();
  
  // Remove common question words
  const cleaned = lowerQuery
    .replace(/^(how to|how do i|how do you|how can i|how can you|what command|which command|show me|help me|i want to|i need to)\s+/i, '')
    .replace(/\?/g, '')
    .trim();
  
  // Split into words and filter out common stop words
  const stopWords = new Set(['a', 'an', 'the', 'is', 'are', 'was', 'were', 'be', 'been', 'being', 'have', 'has', 'had', 'do', 'does', 'did', 'will', 'would', 'should', 'could', 'may', 'might', 'must', 'can', 'this', 'that', 'these', 'those', 'i', 'you', 'he', 'she', 'it', 'we', 'they', 'me', 'him', 'her', 'us', 'them']);
  
  const words = cleaned
    .split(/\s+/)
    .filter(word => word.length > 2 && !stopWords.has(word));
  
  return words;
}

/**
 * Finds matching commands based on natural language patterns
 */
export function findMatchingPatterns(keywords: string[]): string[] {
  const matches: Set<string> = new Set();
  const keywordString = keywords.join(' ');
  
  // Only match if we have meaningful keywords (at least 2 characters each)
  if (keywords.length === 0 || keywords.some(k => k.length < 2)) {
    return [];
  }
  
  // Check for exact pattern matches (full phrase)
  for (const [pattern, commands] of Object.entries(naturalLanguagePatterns)) {
    // Check if pattern is contained in keywords or vice versa (exact match)
    if (keywordString.includes(pattern) || pattern.includes(keywordString)) {
      commands.forEach(cmd => matches.add(cmd));
      continue;
    }
    
    // Check if all words in pattern are in keywords (partial match)
    // Only match if pattern has multiple words and all are present
    const patternWords = pattern.split(' ').filter(w => w.length > 2);
    if (patternWords.length > 1 && patternWords.every(word => keywordString.includes(word))) {
      commands.forEach(cmd => matches.add(cmd));
      continue;
    }
  }
  
  // Check for individual keyword matches - be more strict
  // Only match if keyword is a complete word match in the pattern
  keywords.forEach(keyword => {
    if (keyword.length < 3) return; // Skip very short keywords
    
    for (const [pattern, commands] of Object.entries(naturalLanguagePatterns)) {
      const patternWords = pattern.split(' ');
      
      // Only match if keyword is a complete word in the pattern (not substring)
      const exactWordMatch = patternWords.some(patternWord => 
        patternWord.toLowerCase() === keyword.toLowerCase()
      );
      
      // Or if the pattern starts with the keyword (for multi-word patterns)
      const startsWithMatch = patternWords.length > 0 && 
        patternWords[0].toLowerCase().startsWith(keyword.toLowerCase()) &&
        keyword.length >= 4; // Require at least 4 chars for prefix match
      
      if (exactWordMatch || startsWithMatch) {
        commands.forEach(cmd => matches.add(cmd));
      }
    }
  });
  
  return Array.from(matches);
}

/**
 * Enhances command data for better natural language search
 * Creates a searchable text field from description, examples, and tags
 */
export function enhanceCommandForSearch(command: Command): Command & { searchableText: string } {
  // Combine description, example descriptions, and tags into searchable text
  const exampleTexts = command.examples
    ?.map(ex => `${ex.desc} ${ex.explanation || ''}`)
    .join(' ') || '';
  
  const flagTexts = command.flags
    ?.map(flag => `${flag.desc}`)
    .join(' ') || '';
  
  const searchableText = [
    command.description,
    exampleTexts,
    flagTexts,
    command.tags?.join(' ') || '',
    command.name
  ].filter(Boolean).join(' ').toLowerCase();
  
  return {
    ...command,
    searchableText
  };
}

/**
 * Converts enhanced command back to regular Command (removes searchableText)
 */
export function stripSearchableText(enhancedCommand: Command & { searchableText?: string }): Command {
  const { searchableText, ...command } = enhancedCommand;
  return command;
}

/**
 * Scores commands based on natural language query relevance
 */
export function scoreCommandForNaturalLanguage(
  command: Command,
  keywords: string[],
  patternMatches: string[]
): number {
  let score = 0;
  let hasMatch = false;
  const searchableText = enhanceCommandForSearch(command).searchableText;
  const commandName = command.name.toLowerCase();
  
  // Check if command name matches any pattern (highest priority)
  if (patternMatches.length > 0) {
    const exactMatch = patternMatches.some(match => 
      commandName === match.toLowerCase() || commandName.includes(match.toLowerCase())
    );
    if (exactMatch) {
      score += 100;
      hasMatch = true;
    }
  }
  
  // Check keyword matches in searchable text
  if (keywords.length > 0) {
    keywords.forEach(keyword => {
      // Exact command name match
      if (commandName === keyword) {
        score += 80;
        hasMatch = true;
      } else if (commandName.includes(keyword)) {
        score += 50;
        hasMatch = true;
      }
      
      // Description match
      if (command.description.toLowerCase().includes(keyword)) {
        score += 20;
        hasMatch = true;
      }
      
      // Searchable text match (includes examples, flags)
      if (searchableText.includes(keyword)) {
        score += 10;
        hasMatch = true;
      }
      
      // Tags match
      if (command.tags?.some(tag => tag.toLowerCase().includes(keyword))) {
        score += 15;
        hasMatch = true;
      }
    });
  }
  
  // If no actual match found, return 0 (don't include this command)
  if (!hasMatch) {
    return 0;
  }
  
  // Only boost popular commands if we already have a match
  if (score > 0) {
    score += command.popularity * 0.1;
  }
  
  return score;
}


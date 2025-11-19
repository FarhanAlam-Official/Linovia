import { Command, Category, Tutorial, Quiz } from '../types';
import { 
  Terminal, Book, Search, Award, Zap, Filter, 
  HardDrive, Network, Package, Archive, FileText,
  Users, Shield, Settings, GitBranch, Cpu
} from 'lucide-react';
import { quizzes as importedQuizzes } from './quizzes';

export const categories: Category[] = [
  {
    id: 'all',
    name: 'All Commands',
    icon: Terminal,
    count: 0, // Will be calculated dynamically
    description: 'Complete collection of Linux commands',
    color: 'purple'
  },
  {
    id: 'files',
    name: 'Files & Directories',
    icon: Book,
    count: 0,
    description: 'File and directory operations',
    color: 'blue'
  },
  {
    id: 'search',
    name: 'Search & Find',
    icon: Search,
    count: 0,
    description: 'Search for files, text, and patterns',
    color: 'green'
  },
  {
    id: 'system',
    name: 'System Info',
    icon: Award,
    count: 0,
    description: 'System information and monitoring',
    color: 'yellow'
  },
  {
    id: 'processes',
    name: 'Process Management',
    icon: Zap,
    count: 0,
    description: 'Process control and monitoring',
    color: 'red'
  },
  {
    id: 'disk',
    name: 'Disk & Storage',
    icon: HardDrive,
    count: 0,
    description: 'Disk usage and storage management',
    color: 'indigo'
  },
  {
    id: 'network',
    name: 'Network',
    icon: Network,
    count: 0,
    description: 'Network operations and connectivity',
    color: 'cyan'
  },
  {
    id: 'packages',
    name: 'Package Management',
    icon: Package,
    count: 0,
    description: 'Software package management',
    color: 'orange'
  },
  {
    id: 'compression',
    name: 'Compression',
    icon: Archive,
    count: 0,
    description: 'File compression and archiving',
    color: 'pink'
  },
  {
    id: 'text',
    name: 'Text Processing',
    icon: FileText,
    count: 0,
    description: 'Text manipulation and processing',
    color: 'emerald'
  },
  {
    id: 'users',
    name: 'User Management',
    icon: Users,
    count: 0,
    description: 'User account management',
    color: 'violet'
  },
  {
    id: 'permissions',
    name: 'Permissions',
    icon: Shield,
    count: 0,
    description: 'File and directory permissions',
    color: 'amber'
  },
  {
    id: 'services',
    name: 'System Services',
    icon: Settings,
    count: 0,
    description: 'System service management',
    color: 'rose'
  },
  {
    id: 'shell',
    name: 'Shell & Environment',
    icon: Terminal,
    count: 0,
    description: 'Shell configuration and environment',
    color: 'teal'
  },
  {
    id: 'git',
    name: 'Git Version Control',
    icon: GitBranch,
    count: 0,
    description: 'Git version control system',
    color: 'lime'
  },
  {
    id: 'advanced',
    name: 'Advanced',
    icon: Cpu,
    count: 0,
    description: 'Advanced system administration',
    color: 'gray'
  }
];

export const commands: Command[] = [
  {
    id: 'ls',
    name: 'ls',
    category: 'files',
    difficulty: 'beginner',
    description: 'List directory contents with detailed information about files and directories',
    usage: 'ls [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'ls -la',
        desc: 'List all files including hidden ones in long format',
        output: 'total 64\ndrwxr-xr-x  5 user group 4096 Nov 15 10:30 .\ndrwxr-xr-x  3 user group 4096 Nov 14 09:15 ..',
        explanation: 'The -l flag provides detailed information including permissions, owner, size, and modification date. The -a flag shows hidden files that start with a dot.'
      },
      {
        cmd: 'ls -lh /home',
        desc: 'List files in human-readable sizes',
        output: 'drwxr-xr-x 3 user group 4.0K Nov 15 10:30 user1\ndrwxr-xr-x 2 user group 2.0K Nov 14 15:45 user2'
      },
      {
        cmd: 'ls -lt',
        desc: 'Sort by modification time, newest first'
      },
      {
        cmd: 'ls -lS',
        desc: 'Sort by file size, largest first'
      },
      {
        cmd: 'ls -R',
        desc: 'List subdirectories recursively'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'Use long listing format showing permissions, owner, size, date',
        example: 'ls -l'
      },
      {
        flag: '-a',
        desc: 'Show all files including hidden files (starting with .)',
        example: 'ls -la'
      },
      {
        flag: '-h',
        desc: 'Print sizes in human readable format (KB, MB, GB)',
        example: 'ls -lh'
      },
      {
        flag: '-t',
        desc: 'Sort by modification time, newest first',
        example: 'ls -lt'
      },
      {
        flag: '-r',
        desc: 'Reverse order while sorting',
        example: 'ls -lr'
      },
      {
        flag: '-S',
        desc: 'Sort by file size, largest first',
        example: 'ls -lS'
      },
      {
        flag: '-R',
        desc: 'List subdirectories recursively',
        example: 'ls -R'
      },
      {
        flag: '-i',
        desc: 'Print the index number (inode) of each file',
        example: 'ls -li'
      },
      {
        flag: '-d',
        desc: 'List directories themselves, not their contents',
        example: 'ls -ld */'
      }
    ],
    tags: ['directory', 'listing', 'files', 'permissions'],
    lastUpdated: '2024-11-15',
    popularity: 95,
    relatedCommands: ['cd', 'pwd', 'find', 'tree']
  },
  {
    id: 'cd',
    name: 'cd',
    category: 'files',
    difficulty: 'beginner',
    description: 'Change the current working directory to navigate through the filesystem',
    usage: 'cd [DIRECTORY]',
    examples: [
      {
        cmd: 'cd /home/user',
        desc: 'Change to absolute path',
        explanation: 'Use absolute paths starting with / to navigate to any location in the filesystem'
      },
      {
        cmd: 'cd ..',
        desc: 'Move up one directory level',
        explanation: 'The .. notation represents the parent directory'
      },
      {
        cmd: 'cd ~',
        desc: 'Go to home directory',
        explanation: 'The ~ symbol is a shortcut to your home directory'
      },
      {
        cmd: 'cd -',
        desc: 'Switch to previous directory',
        explanation: 'The - symbol takes you back to the last directory you were in'
      }
    ],
    flags: [
      {
        flag: '..',
        desc: 'Parent directory (one level up)',
        example: 'cd ..'
      },
      {
        flag: '~',
        desc: 'Home directory of current user',
        example: 'cd ~'
      },
      {
        flag: '-',
        desc: 'Previous working directory',
        example: 'cd -'
      },
      {
        flag: '.',
        desc: 'Current directory',
        example: 'cd .'
      }
    ],
    tags: ['navigation', 'directory', 'path'],
    lastUpdated: '2024-11-15',
    popularity: 98,
    relatedCommands: ['pwd', 'ls', 'pushd', 'popd']
  },
  {
    id: 'grep',
    name: 'grep',
    category: 'search',
    difficulty: 'intermediate',
    description: 'Search text using patterns (regular expressions)',
    usage: 'grep [OPTIONS] PATTERN [FILE...]',
    examples: [
      {
        cmd: 'grep "error" log.txt',
        desc: 'Search for "error" in log file',
        output: 'line 45: Error connecting to database\nline 127: Fatal error in module X',
        explanation: 'Basic text search - finds all lines containing the word "error"'
      },
      {
        cmd: 'grep -r "TODO" .',
        desc: 'Recursively search for "TODO" in all files',
        explanation: 'The -r flag searches recursively through all subdirectories'
      },
      {
        cmd: 'grep -i "warning" *.log',
        desc: 'Case-insensitive search in log files',
        explanation: 'The -i flag ignores case differences, matching "Warning", "WARNING", etc.'
      },
      {
        cmd: 'grep -n "function" script.js',
        desc: 'Show line numbers with matches',
        explanation: 'The -n flag displays the line number where each match occurs'
      }
    ],
    flags: [
      {
        flag: '-i',
        desc: 'Ignore case distinctions in patterns and data',
        example: 'grep -i "error" file.txt'
      },
      {
        flag: '-r',
        desc: 'Read all files under each directory recursively',
        example: 'grep -r "pattern" /path'
      },
      {
        flag: '-n',
        desc: 'Prefix each line with line number within file',
        example: 'grep -n "error" log.txt'
      },
      {
        flag: '-v',
        desc: 'Invert match - select non-matching lines',
        example: 'grep -v "comment" file.txt'
      },
      {
        flag: '-c',
        desc: 'Count matching lines instead of printing them',
        example: 'grep -c "error" log.txt'
      },
      {
        flag: '-l',
        desc: 'Print only names of files with matching lines',
        example: 'grep -l "TODO" *.txt'
      }
    ],
    tags: ['search', 'text', 'regex', 'pattern'],
    lastUpdated: '2024-11-15',
    popularity: 87,
    relatedCommands: ['find', 'awk', 'sed', 'egrep']
  },
  {
    id: 'pwd',
    name: 'pwd',
    category: 'files',
    difficulty: 'beginner',
    description: 'Print the full pathname of the current working directory',
    usage: 'pwd [OPTIONS]',
    examples: [
      {
        cmd: 'pwd',
        desc: 'Display current directory path',
        output: '/home/user/Documents',
        explanation: 'Shows the absolute path of your current location in the filesystem'
      },
      {
        cmd: 'pwd -P',
        desc: 'Show physical path without symlinks',
        explanation: 'Resolves symbolic links to show the actual physical directory path'
      }
    ],
    flags: [
      {
        flag: '-P',
        desc: 'Display the physical current working directory (resolve symlinks)',
        example: 'pwd -P'
      },
      {
        flag: '-L',
        desc: 'Display the logical current working directory (with symlinks)',
        example: 'pwd -L'
      }
    ],
    tags: ['navigation', 'path', 'directory'],
    lastUpdated: '2024-11-15',
    popularity: 92,
    relatedCommands: ['cd', 'ls', 'dirname', 'basename']
  },
  {
    id: 'mkdir',
    name: 'mkdir',
    category: 'files',
    difficulty: 'beginner',
    description: 'Create new directories with specified names and permissions',
    usage: 'mkdir [OPTIONS] DIRECTORY...',
    examples: [
      {
        cmd: 'mkdir newdir',
        desc: 'Create a single directory',
        explanation: 'Creates a new directory named "newdir" in the current location'
      },
      {
        cmd: 'mkdir -p path/to/nested/dir',
        desc: 'Create nested directories (parent directories too)',
        explanation: 'The -p flag creates all necessary parent directories if they don\'t exist'
      },
      {
        cmd: 'mkdir -m 755 mydir',
        desc: 'Create directory with specific permissions',
        explanation: 'Sets permissions to rwxr-xr-x (owner: read/write/execute, group/others: read/execute)'
      },
      {
        cmd: 'mkdir dir1 dir2 dir3',
        desc: 'Create multiple directories at once',
        explanation: 'Creates three directories simultaneously'
      }
    ],
    flags: [
      {
        flag: '-p',
        desc: 'Create parent directories as needed, no error if existing',
        example: 'mkdir -p dir1/dir2/dir3'
      },
      {
        flag: '-m MODE',
        desc: 'Set file mode (permissions) for created directories',
        example: 'mkdir -m 755 newdir'
      },
      {
        flag: '-v',
        desc: 'Print a message for each created directory (verbose)',
        example: 'mkdir -v newdir'
      }
    ],
    tags: ['directory', 'create', 'filesystem'],
    lastUpdated: '2024-11-15',
    popularity: 88,
    relatedCommands: ['rmdir', 'ls', 'cd', 'chmod']
  },
  {
    id: 'rm',
    name: 'rm',
    category: 'files',
    difficulty: 'beginner',
    description: 'Remove files or directories permanently (use with caution!)',
    usage: 'rm [OPTIONS] FILE...',
    examples: [
      {
        cmd: 'rm file.txt',
        desc: 'Delete a single file',
        explanation: 'Permanently removes the file - this action cannot be undone'
      },
      {
        cmd: 'rm -rf directory',
        desc: 'Force delete directory and contents recursively',
        explanation: 'DANGER: Recursively deletes directory and all contents without prompting'
      },
      {
        cmd: 'rm -i *.txt',
        desc: 'Prompt before each deletion',
        explanation: 'Interactive mode asks for confirmation before deleting each file'
      },
      {
        cmd: 'rm -- -filename',
        desc: 'Remove file with name starting with dash',
        explanation: 'The -- tells rm that what follows are filenames, not options'
      }
    ],
    flags: [
      {
        flag: '-r',
        desc: 'Remove directories and their contents recursively',
        example: 'rm -r directory'
      },
      {
        flag: '-f',
        desc: 'Force removal, ignore nonexistent files, never prompt',
        example: 'rm -f file.txt'
      },
      {
        flag: '-i',
        desc: 'Prompt before every removal for confirmation',
        example: 'rm -i *.txt'
      },
      {
        flag: '-v',
        desc: 'Verbose mode - explain what is being done',
        example: 'rm -v file.txt'
      }
    ],
    tags: ['delete', 'remove', 'files', 'dangerous'],
    lastUpdated: '2024-11-15',
    popularity: 85,
    relatedCommands: ['rmdir', 'mv', 'cp', 'trash']
  },
  {
    id: 'cp',
    name: 'cp',
    category: 'files',
    difficulty: 'beginner',
    description: 'Copy files and directories from source to destination',
    usage: 'cp [OPTIONS] SOURCE... DEST',
    examples: [
      {
        cmd: 'cp file.txt backup.txt',
        desc: 'Copy file to new name',
        explanation: 'Creates an exact copy of file.txt named backup.txt'
      },
      {
        cmd: 'cp -r dir1 dir2',
        desc: 'Copy directory recursively',
        explanation: 'Copies entire directory structure and all contents'
      },
      {
        cmd: 'cp -p file.txt dest/',
        desc: 'Copy preserving attributes',
        explanation: 'Preserves original timestamps, permissions, and ownership'
      },
      {
        cmd: 'cp *.txt backup/',
        desc: 'Copy all .txt files to backup directory',
        explanation: 'Uses wildcard to copy multiple files matching the pattern'
      }
    ],
    flags: [
      {
        flag: '-r',
        desc: 'Copy directories recursively',
        example: 'cp -r source_dir dest_dir'
      },
      {
        flag: '-i',
        desc: 'Interactive mode - prompt before overwrite',
        example: 'cp -i file.txt dest/'
      },
      {
        flag: '-p',
        desc: 'Preserve file attributes (mode, ownership, timestamps)',
        example: 'cp -p file.txt backup/'
      },
      {
        flag: '-v',
        desc: 'Verbose - explain what is being done',
        example: 'cp -v file.txt dest/'
      },
      {
        flag: '-u',
        desc: 'Copy only when source is newer than destination',
        example: 'cp -u *.txt backup/'
      },
      {
        flag: '-a',
        desc: 'Archive mode - preserve all attributes, recursive',
        example: 'cp -a source_dir dest_dir'
      }
    ],
    tags: ['copy', 'duplicate', 'backup', 'files'],
    lastUpdated: '2024-11-15',
    popularity: 90,
    relatedCommands: ['mv', 'rsync', 'scp', 'dd']
  },
  {
    id: 'mv',
    name: 'mv',
    category: 'files',
    difficulty: 'beginner',
    description: 'Move or rename files and directories',
    usage: 'mv [OPTIONS] SOURCE... DEST',
    examples: [
      {
        cmd: 'mv old.txt new.txt',
        desc: 'Rename a file',
        explanation: 'Changes the filename from old.txt to new.txt'
      },
      {
        cmd: 'mv file.txt /home/user/',
        desc: 'Move file to different directory',
        explanation: 'Moves the file to the specified directory while keeping the same name'
      },
      {
        cmd: 'mv -i file.txt dest/',
        desc: 'Prompt before overwriting',
        explanation: 'Asks for confirmation if destination file already exists'
      },
      {
        cmd: 'mv *.txt documents/',
        desc: 'Move multiple files with wildcard',
        explanation: 'Moves all .txt files to the documents directory'
      }
    ],
    flags: [
      {
        flag: '-i',
        desc: 'Interactive mode - prompt before overwrite',
        example: 'mv -i file.txt dest/'
      },
      {
        flag: '-f',
        desc: 'Force move without prompting',
        example: 'mv -f file.txt dest/'
      },
      {
        flag: '-n',
        desc: 'No clobber - do not overwrite existing file',
        example: 'mv -n file.txt dest/'
      },
      {
        flag: '-v',
        desc: 'Verbose - show what files are being moved',
        example: 'mv -v *.txt dest/'
      }
    ],
    tags: ['move', 'rename', 'relocate', 'files'],
    lastUpdated: '2024-11-15',
    popularity: 87,
    relatedCommands: ['cp', 'rename', 'ln', 'rsync']
  },
  {
    id: 'touch',
    name: 'touch',
    category: 'files',
    difficulty: 'beginner',
    description: 'Create empty files or update file timestamps',
    usage: 'touch [OPTIONS] FILE...',
    examples: [
      {
        cmd: 'touch newfile.txt',
        desc: 'Create empty file',
        explanation: 'Creates a new empty file if it doesn\'t exist'
      },
      {
        cmd: 'touch file1.txt file2.txt file3.txt',
        desc: 'Create multiple files',
        explanation: 'Creates several empty files at once'
      },
      {
        cmd: 'touch -t 202301011200 file.txt',
        desc: 'Set specific timestamp',
        explanation: 'Sets the timestamp to January 1, 2023 at 12:00'
      },
      {
        cmd: 'touch -r reference.txt new.txt',
        desc: 'Copy timestamp from another file',
        explanation: 'Sets new.txt timestamp to match reference.txt'
      }
    ],
    flags: [
      {
        flag: '-a',
        desc: 'Change only the access time',
        example: 'touch -a file.txt'
      },
      {
        flag: '-m',
        desc: 'Change only the modification time',
        example: 'touch -m file.txt'
      },
      {
        flag: '-c',
        desc: 'Do not create any files',
        example: 'touch -c file.txt'
      },
      {
        flag: '-t STAMP',
        desc: 'Use specified time instead of current time',
        example: 'touch -t 202301011200 file.txt'
      },
      {
        flag: '-r FILE',
        desc: 'Use this file\'s times instead of current time',
        example: 'touch -r reference.txt file.txt'
      }
    ],
    tags: ['create', 'timestamp', 'empty', 'files'],
    lastUpdated: '2024-11-15',
    popularity: 78,
    relatedCommands: ['stat', 'ls', 'date', 'utime']
  },
  {
    id: 'cat',
    name: 'cat',
    category: 'files',
    difficulty: 'beginner',
    description: 'Concatenate files and display their contents on standard output',
    usage: 'cat [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'cat file.txt',
        desc: 'Display file contents',
        output: 'Hello World\nThis is a test file\nEnd of file',
        explanation: 'Prints the entire contents of the file to the terminal'
      },
      {
        cmd: 'cat file1.txt file2.txt',
        desc: 'Concatenate and display multiple files',
        explanation: 'Shows contents of file1.txt followed by file2.txt'
      },
      {
        cmd: 'cat -n file.txt',
        desc: 'Show line numbers',
        output: '     1	Hello World\n     2	This is a test file\n     3	End of file',
        explanation: 'Numbers each line of output'
      },
      {
        cmd: 'cat > newfile.txt',
        desc: 'Create file and write to it (Ctrl+D to end)',
        explanation: 'Redirects input to create a new file; type content then press Ctrl+D'
      }
    ],
    flags: [
      {
        flag: '-n',
        desc: 'Number all output lines',
        example: 'cat -n file.txt'
      },
      {
        flag: '-b',
        desc: 'Number non-empty output lines only',
        example: 'cat -b file.txt'
      },
      {
        flag: '-s',
        desc: 'Squeeze multiple adjacent blank lines into one',
        example: 'cat -s file.txt'
      },
      {
        flag: '-E',
        desc: 'Display $ at end of each line',
        example: 'cat -E file.txt'
      },
      {
        flag: '-T',
        desc: 'Display TAB characters as ^I',
        example: 'cat -T file.txt'
      },
      {
        flag: '-A',
        desc: 'Equivalent to -vET (show all)',
        example: 'cat -A file.txt'
      }
    ],
    tags: ['display', 'concatenate', 'view', 'text'],
    lastUpdated: '2024-11-15',
    popularity: 93,
    relatedCommands: ['less', 'more', 'head', 'tail', 'tac']
  },
  {
    id: 'less',
    name: 'less',
    category: 'files',
    difficulty: 'beginner',
    description: 'View file contents with pagination and navigation',
    usage: 'less [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'less file.txt',
        desc: 'View file with pagination',
        explanation: 'Opens file in a pager; use arrows/Page Up/Down to navigate, q to quit'
      },
      {
        cmd: 'less -N file.txt',
        desc: 'Show line numbers',
        explanation: 'Displays line numbers on the left side'
      },
      {
        cmd: 'less +F /var/log/syslog',
        desc: 'Follow mode like tail -f',
        explanation: 'Starts in follow mode to watch file changes in real-time'
      },
      {
        cmd: 'ps aux | less',
        desc: 'Page through command output',
        explanation: 'Use less to navigate through long command output'
      }
    ],
    flags: [
      {
        flag: '-N',
        desc: 'Show line numbers',
        example: 'less -N file.txt'
      },
      {
        flag: '-S',
        desc: 'Chop long lines (no wrap)',
        example: 'less -S file.txt'
      },
      {
        flag: '-i',
        desc: 'Case-insensitive searches',
        example: 'less -i file.txt'
      },
      {
        flag: '+F',
        desc: 'Follow mode - like tail -f',
        example: 'less +F /var/log/syslog'
      },
      {
        flag: '-X',
        desc: 'Do not clear screen on exit',
        example: 'less -X file.txt'
      },
      {
        flag: '-R',
        desc: 'Display raw control characters (colors)',
        example: 'less -R colored_output.txt'
      }
    ],
    tags: ['pager', 'view', 'navigate', 'scroll'],
    lastUpdated: '2024-11-15',
    popularity: 89,
    relatedCommands: ['more', 'cat', 'head', 'tail', 'vim']
  },
  {
    id: 'head',
    name: 'head',
    category: 'files',
    difficulty: 'beginner',
    description: 'Output the first part of files',
    usage: 'head [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'head file.txt',
        desc: 'Show first 10 lines',
        output: 'Line 1\nLine 2\n...\nLine 10',
        explanation: 'Displays the first 10 lines of the file (default behavior)'
      },
      {
        cmd: 'head -n 20 file.txt',
        desc: 'Show first 20 lines',
        explanation: 'Displays the first 20 lines instead of the default 10'
      },
      {
        cmd: 'head -c 100 file.txt',
        desc: 'Show first 100 bytes',
        explanation: 'Shows the first 100 characters/bytes of the file'
      },
      {
        cmd: 'head -n -5 file.txt',
        desc: 'Show all but last 5 lines',
        explanation: 'Displays everything except the last 5 lines'
      }
    ],
    flags: [
      {
        flag: '-n NUM',
        desc: 'Print first NUM lines instead of 10',
        example: 'head -n 20 file.txt'
      },
      {
        flag: '-c NUM',
        desc: 'Print first NUM bytes',
        example: 'head -c 100 file.txt'
      },
      {
        flag: '-q',
        desc: 'Never print headers giving file names',
        example: 'head -q file1 file2'
      },
      {
        flag: '-v',
        desc: 'Always print headers with file names',
        example: 'head -v file.txt'
      }
    ],
    tags: ['preview', 'beginning', 'first', 'lines'],
    lastUpdated: '2024-11-15',
    popularity: 82,
    relatedCommands: ['tail', 'cat', 'less', 'more']
  },
  {
    id: 'tail',
    name: 'tail',
    category: 'files',
    difficulty: 'beginner',
    description: 'Output the last part of files',
    usage: 'tail [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'tail file.txt',
        desc: 'Show last 10 lines',
        output: 'Line 991\nLine 992\n...\nLine 1000',
        explanation: 'Displays the last 10 lines of the file (default behavior)'
      },
      {
        cmd: 'tail -n 50 file.txt',
        desc: 'Show last 50 lines',
        explanation: 'Displays the last 50 lines instead of the default 10'
      },
      {
        cmd: 'tail -f /var/log/syslog',
        desc: 'Follow log file in real-time',
        explanation: 'Continuously displays new lines as they are added to the file'
      },
      {
        cmd: 'tail +10 file.txt',
        desc: 'Show from line 10 to end',
        explanation: 'Displays everything starting from line 10 to the end of file'
      }
    ],
    flags: [
      {
        flag: '-n NUM',
        desc: 'Output last NUM lines',
        example: 'tail -n 20 file.txt'
      },
      {
        flag: '-f',
        desc: 'Follow - output appended data as file grows',
        example: 'tail -f /var/log/syslog'
      },
      {
        flag: '-F',
        desc: 'Follow with retry - useful for log rotation',
        example: 'tail -F /var/log/syslog'
      },
      {
        flag: '-c NUM',
        desc: 'Output last NUM bytes',
        example: 'tail -c 100 file.txt'
      },
      {
        flag: '+NUM',
        desc: 'Start output from line NUM',
        example: 'tail +10 file.txt'
      }
    ],
    tags: ['preview', 'end', 'last', 'follow', 'logs'],
    lastUpdated: '2024-11-15',
    popularity: 88,
    relatedCommands: ['head', 'cat', 'less', 'watch']
  },
  {
    id: 'find',
    name: 'find',
    category: 'search',
    difficulty: 'intermediate',
    description: 'Search for files in directory hierarchy based on various criteria',
    usage: 'find [PATH...] [OPTIONS] [EXPRESSION]',
    examples: [
      {
        cmd: 'find . -name "*.txt"',
        desc: 'Find all .txt files in current dir',
        output: './document.txt\n./notes/readme.txt\n./backup/old.txt',
        explanation: 'Searches recursively for files with .txt extension'
      },
      {
        cmd: 'find /home -type d -name "backup"',
        desc: 'Find directories named backup',
        explanation: 'Searches for directories (not files) with the name "backup"'
      },
      {
        cmd: 'find . -size +10M',
        desc: 'Find files larger than 10MB',
        explanation: 'Locates files bigger than 10 megabytes'
      },
      {
        cmd: 'find . -name "*.log" -mtime -7',
        desc: 'Find .log files modified in last 7 days',
        explanation: 'Combines multiple criteria: file extension and modification time'
      },
      {
        cmd: 'find . -name "*.tmp" -delete',
        desc: 'Find and delete all .tmp files',
        explanation: 'Finds temporary files and deletes them (use with caution!)'
      }
    ],
    flags: [
      {
        flag: '-name PATTERN',
        desc: 'Search by filename matching PATTERN (case-sensitive)',
        example: 'find . -name "*.pdf"'
      },
      {
        flag: '-iname PATTERN',
        desc: 'Like -name but case-insensitive',
        example: 'find . -iname "*.PDF"'
      },
      {
        flag: '-type f',
        desc: 'Find regular files only',
        example: 'find . -type f'
      },
      {
        flag: '-type d',
        desc: 'Find directories only',
        example: 'find . -type d'
      },
      {
        flag: '-size +SIZE',
        desc: 'Find files larger than SIZE',
        example: 'find . -size +100M'
      },
      {
        flag: '-mtime N',
        desc: 'Modified N days ago',
        example: 'find . -mtime -7'
      },
      {
        flag: '-exec CMD {} \\;',
        desc: 'Execute CMD on each found file',
        example: 'find . -name "*.txt" -exec cat {} \\;'
      },
      {
        flag: '-delete',
        desc: 'Delete found files',
        example: 'find . -name "*.tmp" -delete'
      }
    ],
    tags: ['search', 'locate', 'files', 'recursive'],
    lastUpdated: '2024-11-15',
    popularity: 91,
    relatedCommands: ['locate', 'which', 'whereis', 'grep']
  },
  {
    id: 'locate',
    name: 'locate',
    category: 'search',
    difficulty: 'beginner',
    description: 'Find files by name using database (faster than find)',
    usage: 'locate [OPTIONS] PATTERN',
    examples: [
      {
        cmd: 'locate file.txt',
        desc: 'Find files named file.txt',
        output: '/home/user/file.txt\n/tmp/file.txt\n/backup/file.txt',
        explanation: 'Quickly searches the file database for matching filenames'
      },
      {
        cmd: 'locate -i document',
        desc: 'Case-insensitive search',
        explanation: 'Finds files with "document", "Document", "DOCUMENT", etc.'
      },
      {
        cmd: 'locate -c "*.pdf"',
        desc: 'Count PDF files',
        output: '127',
        explanation: 'Returns the number of PDF files found instead of listing them'
      },
      {
        cmd: 'locate -r ".*\\.log$"',
        desc: 'Find log files using regex',
        explanation: 'Uses regular expression to find files ending with .log'
      }
    ],
    flags: [
      {
        flag: '-i',
        desc: 'Ignore case distinctions',
        example: 'locate -i README'
      },
      {
        flag: '-c',
        desc: 'Only print count of matches',
        example: 'locate -c "*.txt"'
      },
      {
        flag: '-l NUM',
        desc: 'Limit output to NUM entries',
        example: 'locate -l 10 "*.log"'
      },
      {
        flag: '-r REGEX',
        desc: 'Search using regular expression',
        example: 'locate -r ".*\\.conf$"'
      },
      {
        flag: '-b',
        desc: 'Match only basename of files',
        example: 'locate -b file.txt'
      }
    ],
    tags: ['search', 'database', 'fast', 'index'],
    lastUpdated: '2024-11-15',
    popularity: 75,
    relatedCommands: ['find', 'updatedb', 'which', 'whereis']
  },
  {
    id: 'which',
    name: 'which',
    category: 'search',
    difficulty: 'beginner',
    description: 'Show full path of shell commands',
    usage: 'which [OPTIONS] COMMAND...',
    examples: [
      {
        cmd: 'which python',
        desc: 'Show path to python',
        output: '/usr/bin/python',
        explanation: 'Shows where the python command is located in the filesystem'
      },
      {
        cmd: 'which -a python',
        desc: 'Show all matching paths',
        output: '/usr/bin/python\n/usr/local/bin/python\n/home/user/.local/bin/python',
        explanation: 'Lists all locations where python is found in PATH'
      },
      {
        cmd: 'which ls cd pwd',
        desc: 'Check multiple commands',
        explanation: 'Shows paths for multiple commands at once'
      }
    ],
    flags: [
      {
        flag: '-a',
        desc: 'Print all matching executables in PATH',
        example: 'which -a gcc'
      }
    ],
    tags: ['path', 'executable', 'command', 'location'],
    lastUpdated: '2024-11-15',
    popularity: 79,
    relatedCommands: ['whereis', 'type', 'command', 'locate']
  },
  {
    id: 'whereis',
    name: 'whereis',
    category: 'search',
    difficulty: 'beginner',
    description: 'Locate binary, source, and manual for command',
    usage: 'whereis [OPTIONS] COMMAND',
    examples: [
      {
        cmd: 'whereis python',
        desc: 'Find python binary, source, man pages',
        output: 'python: /usr/bin/python /usr/share/man/man1/python.1.gz',
        explanation: 'Shows binary location and manual page location'
      },
      {
        cmd: 'whereis -b gcc',
        desc: 'Find only binary',
        output: 'gcc: /usr/bin/gcc',
        explanation: 'Shows only the executable location'
      },
      {
        cmd: 'whereis -m ls',
        desc: 'Find only manual pages',
        explanation: 'Shows only the manual page locations'
      }
    ],
    flags: [
      {
        flag: '-b',
        desc: 'Search only for binaries',
        example: 'whereis -b python'
      },
      {
        flag: '-m',
        desc: 'Search only for manual sections',
        example: 'whereis -m ls'
      },
      {
        flag: '-s',
        desc: 'Search only for sources',
        example: 'whereis -s gcc'
      }
    ],
    tags: ['locate', 'binary', 'manual', 'source'],
    lastUpdated: '2024-11-15',
    popularity: 68,
    relatedCommands: ['which', 'locate', 'man', 'type']
  },
  {
    id: 'chmod',
    name: 'chmod',
    category: 'permissions',
    difficulty: 'intermediate',
    description: 'Change file access permissions (read, write, execute)',
    usage: 'chmod [OPTIONS] MODE FILE...',
    examples: [
      {
        cmd: 'chmod 755 script.sh',
        desc: 'Set rwxr-xr-x permissions',
        explanation: 'Owner: read/write/execute, Group/Others: read/execute'
      },
      {
        cmd: 'chmod +x file.sh',
        desc: 'Add execute permission for all',
        explanation: 'Makes the file executable by owner, group, and others'
      },
      {
        cmd: 'chmod -R 644 dir/',
        desc: 'Recursively set rw-r--r--',
        explanation: 'Sets read/write for owner, read-only for group/others on all files in directory'
      },
      {
        cmd: 'chmod u+w,go-w file.txt',
        desc: 'Add write for user, remove for group/others',
        explanation: 'Symbolic mode: u=user, g=group, o=others, +=add, -=remove'
      }
    ],
    flags: [
      {
        flag: '-R',
        desc: 'Change files and directories recursively',
        example: 'chmod -R 755 directory'
      },
      {
        flag: '-v',
        desc: 'Verbose - output a diagnostic for every file processed',
        example: 'chmod -v 644 file.txt'
      },
      {
        flag: '-c',
        desc: 'Like verbose but report only when a change is made',
        example: 'chmod -c 755 script.sh'
      },
      {
        flag: '--reference=FILE',
        desc: 'Use FILE\'s mode instead of MODE values',
        example: 'chmod --reference=ref.txt file.txt'
      }
    ],
    tags: ['permissions', 'security', 'access', 'mode'],
    lastUpdated: '2024-11-15',
    popularity: 84,
    relatedCommands: ['chown', 'chgrp', 'umask', 'ls']
  },
  {
    id: 'chown',
    name: 'chown',
    category: 'permissions',
    difficulty: 'intermediate',
    description: 'Change file owner and group ownership',
    usage: 'chown [OPTIONS] [USER][:GROUP] FILE...',
    examples: [
      {
        cmd: 'chown user file.txt',
        desc: 'Change owner to user',
        explanation: 'Changes the file owner to "user", group remains unchanged'
      },
      {
        cmd: 'chown user:group file.txt',
        desc: 'Change owner and group',
        explanation: 'Changes both owner to "user" and group to "group"'
      },
      {
        cmd: 'chown -R user:group dir/',
        desc: 'Recursively change ownership',
        explanation: 'Changes ownership of directory and all its contents'
      },
      {
        cmd: 'chown :group file.txt',
        desc: 'Change only group',
        explanation: 'Changes only the group, leaving owner unchanged'
      }
    ],
    flags: [
      {
        flag: '-R',
        desc: 'Operate on files and directories recursively',
        example: 'chown -R user:group directory'
      },
      {
        flag: '-v',
        desc: 'Verbose - output diagnostic for every file processed',
        example: 'chown -v user file.txt'
      },
      {
        flag: '-c',
        desc: 'Like verbose but report only when change is made',
        example: 'chown -c user:group file.txt'
      },
      {
        flag: '--reference=FILE',
        desc: 'Use FILE\'s owner and group rather than specifying them',
        example: 'chown --reference=ref.txt file.txt'
      }
    ],
    tags: ['ownership', 'user', 'group', 'permissions'],
    lastUpdated: '2024-11-15',
    popularity: 76,
    relatedCommands: ['chmod', 'chgrp', 'ls', 'id']
  },
  {
    id: 'ps',
    name: 'ps',
    category: 'processes',
    difficulty: 'intermediate',
    description: 'Report a snapshot of current processes',
    usage: 'ps [OPTIONS]',
    examples: [
      {
        cmd: 'ps aux',
        desc: 'Show all processes with detailed info',
        output: 'USER       PID %CPU %MEM    VSZ   RSS TTY      STAT START   TIME COMMAND\nroot         1  0.0  0.1  19356  1544 ?        Ss   10:30   0:01 /sbin/init',
        explanation: 'Shows all processes for all users with CPU, memory usage'
      },
      {
        cmd: 'ps -ef',
        desc: 'Show all processes in full format',
        explanation: 'Full format listing showing parent process IDs (PPID)'
      },
      {
        cmd: 'ps -u username',
        desc: 'Show processes for specific user',
        explanation: 'Lists only processes owned by the specified user'
      },
      {
        cmd: 'ps -C firefox',
        desc: 'Show processes by command name',
        explanation: 'Shows all processes with the command name "firefox"'
      }
    ],
    flags: [
      {
        flag: 'a',
        desc: 'Show processes for all users',
        example: 'ps a'
      },
      {
        flag: 'u',
        desc: 'Display user-oriented format',
        example: 'ps u'
      },
      {
        flag: 'x',
        desc: 'Show processes not attached to terminal',
        example: 'ps x'
      },
      {
        flag: '-e',
        desc: 'Select all processes',
        example: 'ps -e'
      },
      {
        flag: '-f',
        desc: 'Full format listing',
        example: 'ps -ef'
      },
      {
        flag: '-u USER',
        desc: 'Show processes for specific user',
        example: 'ps -u john'
      },
      {
        flag: '-C COMMAND',
        desc: 'Show processes by command name',
        example: 'ps -C apache2'
      }
    ],
    tags: ['processes', 'running', 'system', 'monitoring'],
    lastUpdated: '2024-11-15',
    popularity: 86,
    relatedCommands: ['top', 'htop', 'pgrep', 'kill']
  },
  {
    id: 'top',
    name: 'top',
    category: 'processes',
    difficulty: 'intermediate',
    description: 'Display and update sorted information about processes dynamically',
    usage: 'top [OPTIONS]',
    examples: [
      {
        cmd: 'top',
        desc: 'Display real-time process information',
        explanation: 'Shows live updating list of processes sorted by CPU usage'
      },
      {
        cmd: 'top -u username',
        desc: 'Show processes for specific user',
        explanation: 'Filters to show only processes owned by the specified user'
      },
      {
        cmd: 'top -d 5',
        desc: 'Update every 5 seconds',
        explanation: 'Changes the refresh interval from default 3 seconds to 5 seconds'
      },
      {
        cmd: 'top -p 1234,5678',
        desc: 'Monitor specific PIDs',
        explanation: 'Monitors only the processes with specified process IDs'
      }
    ],
    flags: [
      {
        flag: '-d SEC',
        desc: 'Set delay between screen updates to SEC seconds',
        example: 'top -d 2'
      },
      {
        flag: '-u USER',
        desc: 'Display only processes with a user id matching USER',
        example: 'top -u apache'
      },
      {
        flag: '-p PID',
        desc: 'Monitor only processes with specified PIDs',
        example: 'top -p 1234,5678'
      },
      {
        flag: '-n NUM',
        desc: 'Update display NUM times then exit',
        example: 'top -n 5'
      },
      {
        flag: '-b',
        desc: 'Batch mode (useful for output to file)',
        example: 'top -b -n 1'
      }
    ],
    tags: ['processes', 'monitor', 'realtime', 'performance'],
    lastUpdated: '2024-11-15',
    popularity: 88,
    relatedCommands: ['htop', 'ps', 'iotop', 'atop']
  },
  {
    id: 'htop',
    name: 'htop',
    category: 'processes',
    difficulty: 'intermediate',
    description: 'Interactive process viewer (better than top)',
    usage: 'htop [OPTIONS]',
    examples: [
      {
        cmd: 'htop',
        desc: 'Launch interactive process viewer',
        explanation: 'Opens colorful, interactive process manager with mouse support'
      },
      {
        cmd: 'htop -u username',
        desc: 'Show processes for specific user',
        explanation: 'Filters to show only processes owned by the specified user'
      },
      {
        cmd: 'htop -p PID',
        desc: 'Monitor specific process',
        explanation: 'Focuses on a specific process ID'
      },
      {
        cmd: 'htop -t',
        desc: 'Tree view of processes',
        explanation: 'Shows processes in a tree structure showing parent-child relationships'
      }
    ],
    flags: [
      {
        flag: '-u USER',
        desc: 'Show only processes of USER',
        example: 'htop -u www-data'
      },
      {
        flag: '-p PID',
        desc: 'Show only given PIDs',
        example: 'htop -p 1234'
      },
      {
        flag: '-d DELAY',
        desc: 'Update delay in tenths of seconds',
        example: 'htop -d 15'
      },
      {
        flag: '-t',
        desc: 'Tree view of processes',
        example: 'htop -t'
      }
    ],
    tags: ['processes', 'interactive', 'monitor', 'colorful'],
    lastUpdated: '2024-11-15',
    popularity: 85,
    relatedCommands: ['top', 'ps', 'atop', 'iotop']
  },
  {
    id: 'kill',
    name: 'kill',
    category: 'processes',
    difficulty: 'intermediate',
    description: 'Send signal to a process (terminate by default)',
    usage: 'kill [OPTIONS] PID...',
    examples: [
      {
        cmd: 'kill 1234',
        desc: 'Terminate process with PID 1234',
        explanation: 'Sends SIGTERM signal for graceful termination'
      },
      {
        cmd: 'kill -9 1234',
        desc: 'Force kill process (SIGKILL)',
        explanation: 'Immediately terminates the process (cannot be ignored)'
      },
      {
        cmd: 'kill -15 1234',
        desc: 'Gracefully terminate (SIGTERM)',
        explanation: 'Default signal - asks process to terminate cleanly'
      },
      {
        cmd: 'kill -HUP 1234',
        desc: 'Send hangup signal (reload config)',
        explanation: 'Often used to reload configuration files'
      }
    ],
    flags: [
      {
        flag: '-9',
        desc: 'Send SIGKILL signal - force kill immediately',
        example: 'kill -9 1234'
      },
      {
        flag: '-15',
        desc: 'Send SIGTERM signal - graceful termination (default)',
        example: 'kill -15 1234'
      },
      {
        flag: '-l',
        desc: 'List available signal names',
        example: 'kill -l'
      },
      {
        flag: '-s SIGNAL',
        desc: 'Specify signal to send',
        example: 'kill -s HUP 1234'
      },
      {
        flag: '-HUP',
        desc: 'Send hangup signal (reload configuration)',
        example: 'kill -HUP 1234'
      }
    ],
    tags: ['kill', 'terminate', 'signal', 'processes'],
    lastUpdated: '2024-11-15',
    popularity: 83,
    relatedCommands: ['killall', 'pkill', 'ps', 'pgrep']
  },
  {
    id: 'killall',
    name: 'killall',
    category: 'processes',
    difficulty: 'intermediate',
    description: 'Kill processes by name',
    usage: 'killall [OPTIONS] NAME...',
    examples: [
      {
        cmd: 'killall firefox',
        desc: 'Kill all firefox processes',
        explanation: 'Terminates all processes with the name "firefox"'
      },
      {
        cmd: 'killall -9 chrome',
        desc: 'Force kill all chrome processes',
        explanation: 'Sends SIGKILL to all chrome processes'
      },
      {
        cmd: 'killall -u username',
        desc: 'Kill all processes owned by user',
        explanation: 'Terminates all processes owned by the specified user'
      },
      {
        cmd: 'killall -i firefox',
        desc: 'Interactive mode - ask before killing',
        explanation: 'Prompts for confirmation before terminating each process'
      }
    ],
    flags: [
      {
        flag: '-9',
        desc: 'Send SIGKILL signal (force kill)',
        example: 'killall -9 firefox'
      },
      {
        flag: '-i',
        desc: 'Interactive mode - ask before killing each process',
        example: 'killall -i chrome'
      },
      {
        flag: '-u USER',
        desc: 'Kill only processes owned by USER',
        example: 'killall -u john firefox'
      },
      {
        flag: '-v',
        desc: 'Verbose - report successful kills',
        example: 'killall -v firefox'
      },
      {
        flag: '-w',
        desc: 'Wait for all killed processes to die',
        example: 'killall -w firefox'
      }
    ],
    tags: ['kill', 'name', 'processes', 'terminate'],
    lastUpdated: '2024-11-15',
    popularity: 77,
    relatedCommands: ['kill', 'pkill', 'pgrep', 'ps']
  },
  {
    id: 'wget',
    name: 'wget',
    category: 'network',
    difficulty: 'beginner',
    description: 'Non-interactive network downloader',
    usage: 'wget [OPTIONS] URL...',
    examples: [
      {
        cmd: 'wget https://example.com/file.zip',
        desc: 'Download file',
        explanation: 'Downloads the file to current directory with original filename'
      },
      {
        cmd: 'wget -c https://example.com/largefile.iso',
        desc: 'Continue incomplete download',
        explanation: 'Resumes a partially downloaded file'
      },
      {
        cmd: 'wget -r -l2 https://example.com',
        desc: 'Download website recursively',
        explanation: 'Downloads website with 2 levels of recursion'
      },
      {
        cmd: 'wget -O myfile.zip https://example.com/file.zip',
        desc: 'Save with different name',
        explanation: 'Downloads and saves file with specified name'
      }
    ],
    flags: [
      {
        flag: '-c',
        desc: 'Continue getting partially-downloaded file',
        example: 'wget -c url'
      },
      {
        flag: '-O FILE',
        desc: 'Write documents to FILE',
        example: 'wget -O newname.zip url'
      },
      {
        flag: '-r',
        desc: 'Turn on recursive retrieving',
        example: 'wget -r url'
      },
      {
        flag: '-l DEPTH',
        desc: 'Maximum recursion depth (0 for infinite)',
        example: 'wget -r -l2 url'
      },
      {
        flag: '-b',
        desc: 'Go to background immediately after startup',
        example: 'wget -b url'
      },
      {
        flag: '-q',
        desc: 'Quiet mode - turn off output',
        example: 'wget -q url'
      }
    ],
    tags: ['download', 'http', 'ftp', 'web'],
    lastUpdated: '2024-11-15',
    popularity: 84,
    relatedCommands: ['curl', 'aria2c', 'lynx', 'links']
  },
  {
    id: 'curl',
    name: 'curl',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Transfer data from or to a server',
    usage: 'curl [OPTIONS] URL...',
    examples: [
      {
        cmd: 'curl https://api.example.com',
        desc: 'Make GET request',
        output: '{"status": "ok", "message": "Hello World"}',
        explanation: 'Sends HTTP GET request and displays response'
      },
      {
        cmd: 'curl -O https://example.com/file.zip',
        desc: 'Download file keeping original name',
        explanation: 'Downloads file and saves with original filename'
      },
      {
        cmd: 'curl -X POST -d "data=value" https://api.example.com',
        desc: 'Make POST request with data',
        explanation: 'Sends POST request with form data'
      },
      {
        cmd: 'curl -H "Content-Type: application/json" -d \'{"key":"value"}\' https://api.example.com',
        desc: 'POST JSON data',
        explanation: 'Sends JSON payload with proper content type header'
      }
    ],
    flags: [
      {
        flag: '-O',
        desc: 'Write output to file named as remote file',
        example: 'curl -O url'
      },
      {
        flag: '-o FILE',
        desc: 'Write output to FILE instead of stdout',
        example: 'curl -o myfile.txt url'
      },
      {
        flag: '-X METHOD',
        desc: 'Specify request method (GET, POST, PUT, DELETE)',
        example: 'curl -X POST url'
      },
      {
        flag: '-d DATA',
        desc: 'Send DATA in POST request',
        example: 'curl -d "key=value" url'
      },
      {
        flag: '-H HEADER',
        desc: 'Pass custom header to server',
        example: 'curl -H "Authorization: Bearer token" url'
      },
      {
        flag: '-i',
        desc: 'Include HTTP response headers in output',
        example: 'curl -i url'
      },
      {
        flag: '-L',
        desc: 'Follow redirects',
        example: 'curl -L url'
      }
    ],
    tags: ['http', 'api', 'download', 'rest'],
    lastUpdated: '2024-11-15',
    popularity: 89,
    relatedCommands: ['wget', 'httpie', 'lynx', 'nc']
  },
  {
    id: 'ssh',
    name: 'ssh',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Secure shell remote login program',
    usage: 'ssh [OPTIONS] USER@HOST [COMMAND]',
    examples: [
      {
        cmd: 'ssh user@host',
        desc: 'Connect to remote host',
        explanation: 'Opens secure shell connection to remote server'
      },
      {
        cmd: 'ssh -p 2222 user@host',
        desc: 'Connect on specific port',
        explanation: 'Connects using port 2222 instead of default port 22'
      },
      {
        cmd: 'ssh -i ~/.ssh/key.pem user@host',
        desc: 'Use specific identity file',
        explanation: 'Authenticates using specified private key file'
      },
      {
        cmd: 'ssh user@host "ls -la"',
        desc: 'Execute command on remote host',
        explanation: 'Runs command on remote server and returns output'
      }
    ],
    flags: [
      {
        flag: '-p PORT',
        desc: 'Port to connect to on remote host',
        example: 'ssh -p 2222 user@host'
      },
      {
        flag: '-i FILE',
        desc: 'Identity file (private key) for authentication',
        example: 'ssh -i ~/.ssh/key.pem user@host'
      },
      {
        flag: '-L PORT:HOST:PORT',
        desc: 'Forward local port to remote',
        example: 'ssh -L 8080:localhost:80 user@host'
      },
      {
        flag: '-R PORT:HOST:PORT',
        desc: 'Forward remote port to local',
        example: 'ssh -R 8080:localhost:80 user@host'
      },
      {
        flag: '-X',
        desc: 'Enable X11 forwarding',
        example: 'ssh -X user@host'
      },
      {
        flag: '-v',
        desc: 'Verbose mode for debugging',
        example: 'ssh -v user@host'
      }
    ],
    tags: ['remote', 'secure', 'login', 'shell'],
    lastUpdated: '2024-11-15',
    popularity: 91,
    relatedCommands: ['scp', 'sftp', 'rsync', 'telnet']
  },
  {
    id: 'scp',
    name: 'scp',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Secure copy files over SSH',
    usage: 'scp [OPTIONS] SOURCE... DESTINATION',
    examples: [
      {
        cmd: 'scp file.txt user@host:/path/',
        desc: 'Copy file to remote server',
        explanation: 'Securely copies local file to remote server'
      },
      {
        cmd: 'scp user@host:/remote/file.txt .',
        desc: 'Copy file from remote server',
        explanation: 'Downloads file from remote server to current directory'
      },
      {
        cmd: 'scp -r directory/ user@host:/path/',
        desc: 'Copy directory recursively',
        explanation: 'Copies entire directory structure to remote server'
      },
      {
        cmd: 'scp -P 2222 file.txt user@host:/path/',
        desc: 'Copy using specific SSH port',
        explanation: 'Uses non-standard SSH port for the connection'
      }
    ],
    flags: [
      {
        flag: '-r',
        desc: 'Copy directories recursively',
        example: 'scp -r dir/ user@host:/path/'
      },
      {
        flag: '-P PORT',
        desc: 'SSH port on remote host',
        example: 'scp -P 2222 file.txt user@host:/'
      },
      {
        flag: '-i FILE',
        desc: 'Identity file (private key)',
        example: 'scp -i key.pem file.txt user@host:/'
      },
      {
        flag: '-v',
        desc: 'Verbose mode',
        example: 'scp -v file.txt user@host:/'
      },
      {
        flag: '-C',
        desc: 'Enable compression',
        example: 'scp -C largefile.zip user@host:/'
      }
    ],
    tags: ['copy', 'secure', 'remote', 'ssh'],
    lastUpdated: '2024-11-15',
    popularity: 82,
    relatedCommands: ['ssh', 'sftp', 'rsync', 'cp']
  },
  {
    id: 'rsync',
    name: 'rsync',
    category: 'files',
    difficulty: 'intermediate',
    description: 'Remote file synchronization tool',
    usage: 'rsync [OPTIONS] SOURCE DEST',
    examples: [
      {
        cmd: 'rsync -avz src/ dest/',
        desc: 'Sync directories with compression',
        explanation: 'Archive mode with verbose output and compression'
      },
      {
        cmd: 'rsync -avz --delete src/ dest/',
        desc: 'Sync and delete extra files',
        explanation: 'Removes files in destination that don\'t exist in source'
      },
      {
        cmd: 'rsync -avz -e ssh src/ user@host:dest/',
        desc: 'Sync over SSH',
        explanation: 'Synchronizes files to remote server over SSH'
      },
      {
        cmd: 'rsync -avz --progress src/ dest/',
        desc: 'Show progress during transfer',
        explanation: 'Displays progress information for each file'
      }
    ],
    flags: [
      {
        flag: '-a',
        desc: 'Archive mode - preserve permissions, times, etc',
        example: 'rsync -a src/ dest/'
      },
      {
        flag: '-v',
        desc: 'Verbose output',
        example: 'rsync -av src/ dest/'
      },
      {
        flag: '-z',
        desc: 'Compress file data during transfer',
        example: 'rsync -avz src/ dest/'
      },
      {
        flag: '-r',
        desc: 'Recurse into directories',
        example: 'rsync -r src/ dest/'
      },
      {
        flag: '--delete',
        desc: 'Delete files in dest not in source',
        example: 'rsync -av --delete src/ dest/'
      },
      {
        flag: '-e SHELL',
        desc: 'Specify remote shell to use',
        example: 'rsync -ave ssh src/ user@host:dest/'
      },
      {
        flag: '--progress',
        desc: 'Show progress during transfer',
        example: 'rsync -av --progress src/ dest/'
      }
    ],
    tags: ['sync', 'backup', 'remote', 'incremental'],
    lastUpdated: '2024-11-15',
    popularity: 86,
    relatedCommands: ['scp', 'cp', 'mv', 'ssh']
  },
  {
    id: 'ping',
    name: 'ping',
    category: 'network',
    difficulty: 'beginner',
    description: 'Send ICMP ECHO_REQUEST packets to network hosts',
    usage: 'ping [OPTIONS] HOST',
    examples: [
      {
        cmd: 'ping google.com',
        desc: 'Ping a host continuously',
        output: 'PING google.com (142.250.191.14): 56 data bytes\n64 bytes from 142.250.191.14: icmp_seq=1 ttl=115 time=12.3 ms',
        explanation: 'Tests network connectivity to google.com'
      },
      {
        cmd: 'ping -c 4 8.8.8.8',
        desc: 'Send 4 packets then stop',
        explanation: 'Pings Google DNS server 4 times then exits'
      },
      {
        cmd: 'ping -i 2 localhost',
        desc: 'Wait 2 seconds between packets',
        explanation: 'Sets interval between ping packets to 2 seconds'
      },
      {
        cmd: 'ping -s 1024 host',
        desc: 'Send larger packets',
        explanation: 'Sends packets of 1024 bytes instead of default 56 bytes'
      }
    ],
    flags: [
      {
        flag: '-c COUNT',
        desc: 'Stop after sending COUNT packets',
        example: 'ping -c 5 google.com'
      },
      {
        flag: '-i INTERVAL',
        desc: 'Wait INTERVAL seconds between packets',
        example: 'ping -i 2 host'
      },
      {
        flag: '-t TTL',
        desc: 'Set time to live',
        example: 'ping -t 64 host'
      },
      {
        flag: '-s SIZE',
        desc: 'Specify packet size in bytes',
        example: 'ping -s 1024 host'
      },
      {
        flag: '-q',
        desc: 'Quiet output - only show summary',
        example: 'ping -q -c 10 host'
      }
    ],
    tags: ['network', 'connectivity', 'icmp', 'test'],
    lastUpdated: '2024-11-15',
    popularity: 92,
    relatedCommands: ['traceroute', 'nslookup', 'dig', 'netstat']
  },
  {
    id: 'netstat',
    name: 'netstat',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Display network connections, routing tables, interface statistics',
    usage: 'netstat [OPTIONS]',
    examples: [
      {
        cmd: 'netstat -tuln',
        desc: 'Show listening ports',
        output: 'tcp        0      0 0.0.0.0:22              0.0.0.0:*               LISTEN\nudp        0      0 0.0.0.0:68              0.0.0.0:*',
        explanation: 'Shows TCP and UDP listening ports with numbers instead of service names'
      },
      {
        cmd: 'netstat -i',
        desc: 'Display interface statistics',
        explanation: 'Shows network interface statistics like packets sent/received'
      },
      {
        cmd: 'netstat -r',
        desc: 'Show routing table',
        explanation: 'Displays the kernel routing table'
      },
      {
        cmd: 'netstat -an | grep :80',
        desc: 'Show connections on port 80',
        explanation: 'Filters to show only HTTP connections'
      }
    ],
    flags: [
      {
        flag: '-t',
        desc: 'Show TCP connections',
        example: 'netstat -t'
      },
      {
        flag: '-u',
        desc: 'Show UDP connections',
        example: 'netstat -u'
      },
      {
        flag: '-l',
        desc: 'Show only listening ports',
        example: 'netstat -l'
      },
      {
        flag: '-n',
        desc: 'Show numerical addresses instead of resolving hosts',
        example: 'netstat -n'
      },
      {
        flag: '-p',
        desc: 'Show PID/name of programs',
        example: 'netstat -p'
      },
      {
        flag: '-r',
        desc: 'Show routing table',
        example: 'netstat -r'
      },
      {
        flag: '-i',
        desc: 'Show interface statistics',
        example: 'netstat -i'
      }
    ],
    tags: ['network', 'connections', 'ports', 'routing'],
    lastUpdated: '2024-11-15',
    popularity: 78,
    relatedCommands: ['ss', 'lsof', 'nmap', 'iptables']
  },
  {
    id: 'ss',
    name: 'ss',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Modern replacement for netstat',
    usage: 'ss [OPTIONS]',
    examples: [
      {
        cmd: 'ss -tuln',
        desc: 'Show listening TCP and UDP ports',
        output: 'State      Recv-Q Send-Q Local Address:Port               Peer Address:Port\nLISTEN     0      128          *:22                       *:*',
        explanation: 'Faster and more detailed than netstat for the same information'
      },
      {
        cmd: 'ss -p',
        desc: 'Show processes using sockets',
        explanation: 'Displays which processes are using network connections'
      },
      {
        cmd: 'ss -o state established',
        desc: 'Show established connections with timers',
        explanation: 'Shows only active connections with timing information'
      },
      {
        cmd: 'ss dst 192.168.1.1',
        desc: 'Show connections to specific IP',
        explanation: 'Filters connections by destination IP address'
      }
    ],
    flags: [
      {
        flag: '-t',
        desc: 'Show TCP sockets',
        example: 'ss -t'
      },
      {
        flag: '-u',
        desc: 'Show UDP sockets',
        example: 'ss -u'
      },
      {
        flag: '-l',
        desc: 'Show only listening sockets',
        example: 'ss -l'
      },
      {
        flag: '-n',
        desc: 'Do not resolve service names',
        example: 'ss -n'
      },
      {
        flag: '-p',
        desc: 'Show process using socket',
        example: 'ss -p'
      },
      {
        flag: '-o',
        desc: 'Show timer information',
        example: 'ss -o'
      }
    ],
    tags: ['network', 'sockets', 'modern', 'fast'],
    lastUpdated: '2024-11-15',
    popularity: 74,
    relatedCommands: ['netstat', 'lsof', 'nmap', 'iptables']
  },
  {
    id: 'ifconfig',
    name: 'ifconfig',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Configure network interface (legacy)',
    usage: 'ifconfig [INTERFACE] [OPTIONS]',
    examples: [
      {
        cmd: 'ifconfig',
        desc: 'Display all active network interfaces',
        output: 'eth0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500\n        inet 192.168.1.100  netmask 255.255.255.0',
        explanation: 'Shows configuration of all active network interfaces'
      },
      {
        cmd: 'ifconfig eth0',
        desc: 'Display specific interface',
        explanation: 'Shows details for eth0 interface only'
      },
      {
        cmd: 'sudo ifconfig eth0 192.168.1.100',
        desc: 'Set IP address',
        explanation: 'Assigns IP address to eth0 interface'
      },
      {
        cmd: 'sudo ifconfig eth0 up',
        desc: 'Enable interface',
        explanation: 'Activates the eth0 network interface'
      },
      {
        cmd: 'sudo ifconfig eth0 down',
        desc: 'Disable interface',
        explanation: 'Deactivates the eth0 network interface'
      }
    ],
    flags: [
      {
        flag: 'up',
        desc: 'Activate interface',
        example: 'sudo ifconfig eth0 up'
      },
      {
        flag: 'down',
        desc: 'Deactivate interface',
        example: 'sudo ifconfig eth0 down'
      },
      {
        flag: 'netmask MASK',
        desc: 'Set subnet mask',
        example: 'sudo ifconfig eth0 netmask 255.255.255.0'
      },
      {
        flag: 'broadcast ADDR',
        desc: 'Set broadcast address',
        example: 'sudo ifconfig eth0 broadcast 192.168.1.255'
      }
    ],
    tags: ['network', 'interface', 'ip', 'configuration'],
    lastUpdated: '2024-11-15',
    popularity: 68,
    relatedCommands: ['ip', 'nmcli', 'netstat', 'route']
  },
  {
    id: 'ip',
    name: 'ip',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Show/manipulate routing, devices, policy routing and tunnels',
    usage: 'ip [OPTIONS] OBJECT COMMAND',
    examples: [
      {
        cmd: 'ip addr show',
        desc: 'Show all IP addresses',
        output: '2: eth0: <BROADCAST,MULTICAST,UP,LOWER_UP> mtu 1500\n    inet 192.168.1.100/24 brd 192.168.1.255',
        explanation: 'Displays IP addresses for all interfaces'
      },
      {
        cmd: 'ip link show',
        desc: 'Show network interfaces',
        explanation: 'Lists all network interfaces with their status'
      },
      {
        cmd: 'sudo ip addr add 192.168.1.50/24 dev eth0',
        desc: 'Add IP address to interface',
        explanation: 'Assigns additional IP address to eth0'
      },
      {
        cmd: 'ip route show',
        desc: 'Show routing table',
        output: 'default via 192.168.1.1 dev eth0\n192.168.1.0/24 dev eth0 proto kernel',
        explanation: 'Displays routing table entries'
      },
      {
        cmd: 'sudo ip link set eth0 up',
        desc: 'Bring interface up',
        explanation: 'Activates the eth0 network interface'
      }
    ],
    flags: [
      {
        flag: 'addr',
        desc: 'Manage protocol addresses',
        example: 'ip addr show'
      },
      {
        flag: 'link',
        desc: 'Manage network devices',
        example: 'ip link show'
      },
      {
        flag: 'route',
        desc: 'Manage routing table',
        example: 'ip route show'
      },
      {
        flag: '-s',
        desc: 'Show statistics',
        example: 'ip -s link'
      },
      {
        flag: '-4',
        desc: 'Show IPv4 only',
        example: 'ip -4 addr'
      },
      {
        flag: '-6',
        desc: 'Show IPv6 only',
        example: 'ip -6 addr'
      }
    ],
    tags: ['network', 'ip', 'routing', 'interface'],
    lastUpdated: '2024-11-15',
    popularity: 82,
    relatedCommands: ['ifconfig', 'route', 'nmcli', 'netstat']
  },
  {
    id: 'nslookup',
    name: 'nslookup',
    category: 'network',
    difficulty: 'beginner',
    description: 'Query DNS lookup name servers',
    usage: 'nslookup [OPTIONS] [HOST] [SERVER]',
    examples: [
      {
        cmd: 'nslookup google.com',
        desc: 'Lookup domain IP address',
        output: 'Server:  192.168.1.1\nAddress: 192.168.1.1#53\n\nName:    google.com\nAddress: 142.250.185.46',
        explanation: 'Queries DNS server for IP address of google.com'
      },
      {
        cmd: 'nslookup 8.8.8.8',
        desc: 'Reverse DNS lookup',
        output: 'Server:  192.168.1.1\nName:    dns.google',
        explanation: 'Finds hostname for given IP address'
      },
      {
        cmd: 'nslookup google.com 8.8.8.8',
        desc: 'Query specific DNS server',
        explanation: 'Uses Google DNS (8.8.8.8) to resolve google.com'
      },
      {
        cmd: 'nslookup -type=mx google.com',
        desc: 'Query MX records',
        explanation: 'Retrieves mail server records for domain'
      }
    ],
    flags: [
      {
        flag: '-type=TYPE',
        desc: 'Query specific record type (A, MX, NS, etc.)',
        example: 'nslookup -type=mx domain.com'
      },
      {
        flag: '-timeout=SEC',
        desc: 'Set query timeout',
        example: 'nslookup -timeout=5 domain.com'
      },
      {
        flag: '-port=NUM',
        desc: 'Specify DNS server port',
        example: 'nslookup -port=53 domain.com'
      }
    ],
    tags: ['dns', 'lookup', 'network', 'domain'],
    lastUpdated: '2024-11-15',
    popularity: 79,
    relatedCommands: ['dig', 'host', 'whois', 'ping']
  },
  {
    id: 'dig',
    name: 'dig',
    category: 'network',
    difficulty: 'intermediate',
    description: 'DNS lookup utility',
    usage: 'dig [OPTIONS] [@SERVER] NAME [TYPE]',
    examples: [
      {
        cmd: 'dig google.com',
        desc: 'Query DNS for domain',
        output: ';; ANSWER SECTION:\ngoogle.com.  299  IN  A  142.250.185.46',
        explanation: 'Performs detailed DNS query for google.com'
      },
      {
        cmd: 'dig google.com +short',
        desc: 'Show only IP address',
        output: '142.250.185.46',
        explanation: 'Returns concise output with just the IP'
      },
      {
        cmd: 'dig @8.8.8.8 google.com',
        desc: 'Query specific DNS server',
        explanation: 'Uses Google DNS server for lookup'
      },
      {
        cmd: 'dig google.com MX',
        desc: 'Query mail server records',
        explanation: 'Retrieves MX records for domain'
      },
      {
        cmd: 'dig -x 8.8.8.8',
        desc: 'Reverse DNS lookup',
        explanation: 'Finds hostname for IP address'
      }
    ],
    flags: [
      {
        flag: '+short',
        desc: 'Concise output',
        example: 'dig google.com +short'
      },
      {
        flag: '+trace',
        desc: 'Trace DNS resolution path',
        example: 'dig google.com +trace'
      },
      {
        flag: '-x IP',
        desc: 'Reverse lookup',
        example: 'dig -x 8.8.8.8'
      },
      {
        flag: '@SERVER',
        desc: 'Query specific DNS server',
        example: 'dig @8.8.8.8 google.com'
      },
      {
        flag: '+noall +answer',
        desc: 'Show only answer section',
        example: 'dig google.com +noall +answer'
      }
    ],
    tags: ['dns', 'lookup', 'query', 'network'],
    lastUpdated: '2024-11-15',
    popularity: 76,
    relatedCommands: ['nslookup', 'host', 'whois', 'ping']
  },
  {
    id: 'traceroute',
    name: 'traceroute',
    category: 'network',
    difficulty: 'intermediate',
    description: 'Print the route packets trace to network host',
    usage: 'traceroute [OPTIONS] HOST',
    examples: [
      {
        cmd: 'traceroute google.com',
        desc: 'Trace route to destination',
        output: '1  192.168.1.1  1.234 ms\n2  10.0.0.1  5.678 ms\n3  172.16.0.1  12.345 ms',
        explanation: 'Shows path packets take to reach google.com'
      },
      {
        cmd: 'traceroute -n google.com',
        desc: 'Do not resolve hostnames',
        explanation: 'Shows IP addresses only, faster execution'
      },
      {
        cmd: 'traceroute -m 15 google.com',
        desc: 'Set maximum hops',
        explanation: 'Limits trace to 15 hops instead of default 30'
      },
      {
        cmd: 'traceroute -q 1 google.com',
        desc: 'Send one probe per hop',
        explanation: 'Sends only 1 packet per hop instead of default 3'
      }
    ],
    flags: [
      {
        flag: '-n',
        desc: 'Do not resolve IP addresses to hostnames',
        example: 'traceroute -n google.com'
      },
      {
        flag: '-m NUM',
        desc: 'Set maximum number of hops',
        example: 'traceroute -m 20 host'
      },
      {
        flag: '-q NUM',
        desc: 'Set number of probes per hop',
        example: 'traceroute -q 2 host'
      },
      {
        flag: '-w SEC',
        desc: 'Set timeout for responses',
        example: 'traceroute -w 3 host'
      }
    ],
    tags: ['network', 'route', 'trace', 'diagnostic'],
    lastUpdated: '2024-11-15',
    popularity: 72,
    relatedCommands: ['ping', 'mtr', 'netstat', 'route']
  },
  {
    id: 'nmap',
    name: 'nmap',
    category: 'network',
    difficulty: 'advanced',
    description: 'Network exploration and security auditing',
    usage: 'nmap [OPTIONS] TARGET',
    examples: [
      {
        cmd: 'nmap 192.168.1.1',
        desc: 'Scan single host',
        output: 'PORT     STATE SERVICE\n22/tcp   open  ssh\n80/tcp   open  http\n443/tcp  open  https',
        explanation: 'Scans common ports on target host'
      },
      {
        cmd: 'nmap -p 1-1000 192.168.1.1',
        desc: 'Scan specific port range',
        explanation: 'Scans ports 1 through 1000'
      },
      {
        cmd: 'nmap -sV 192.168.1.1',
        desc: 'Detect service versions',
        explanation: 'Identifies services and their versions'
      },
      {
        cmd: 'nmap -O 192.168.1.1',
        desc: 'Detect operating system',
        explanation: 'Attempts to identify OS of target'
      },
      {
        cmd: 'nmap 192.168.1.0/24',
        desc: 'Scan entire subnet',
        explanation: 'Scans all hosts in subnet'
      }
    ],
    flags: [
      {
        flag: '-p PORTS',
        desc: 'Specify ports to scan',
        example: 'nmap -p 80,443 host'
      },
      {
        flag: '-sV',
        desc: 'Detect service/version info',
        example: 'nmap -sV host'
      },
      {
        flag: '-O',
        desc: 'Enable OS detection',
        example: 'nmap -O host'
      },
      {
        flag: '-A',
        desc: 'Aggressive scan (OS, version, script, traceroute)',
        example: 'nmap -A host'
      },
      {
        flag: '-sS',
        desc: 'TCP SYN scan (stealth)',
        example: 'sudo nmap -sS host'
      },
      {
        flag: '-Pn',
        desc: 'Skip host discovery',
        example: 'nmap -Pn host'
      }
    ],
    tags: ['network', 'scan', 'security', 'ports'],
    lastUpdated: '2024-11-15',
    popularity: 80,
    relatedCommands: ['netstat', 'ss', 'ncat', 'tcpdump']
  },
  {
    id: 'nc',
    name: 'nc',
    category: 'network',
    difficulty: 'advanced',
    description: 'Arbitrary TCP and UDP connections and listens (netcat)',
    usage: 'nc [OPTIONS] HOST PORT',
    examples: [
      {
        cmd: 'nc -l 8080',
        desc: 'Listen on port 8080',
        explanation: 'Creates server listening on port 8080'
      },
      {
        cmd: 'nc example.com 80',
        desc: 'Connect to host on port 80',
        explanation: 'Opens connection to web server'
      },
      {
        cmd: 'nc -zv google.com 80',
        desc: 'Check if port is open',
        output: 'Connection to google.com 80 port [tcp/http] succeeded!',
        explanation: 'Tests connectivity to port without sending data'
      },
      {
        cmd: 'nc -l 8080 > received_file',
        desc: 'Receive file over network',
        explanation: 'Listens on port 8080 and saves data to file'
      },
      {
        cmd: 'nc target.com 8080 < file.txt',
        desc: 'Send file over network',
        explanation: 'Sends file to listening netcat instance'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'Listen mode, for inbound connects',
        example: 'nc -l 8080'
      },
      {
        flag: '-v',
        desc: 'Verbose output',
        example: 'nc -v host port'
      },
      {
        flag: '-z',
        desc: 'Zero I/O mode (scanning)',
        example: 'nc -zv host 80'
      },
      {
        flag: '-u',
        desc: 'UDP mode',
        example: 'nc -u host port'
      },
      {
        flag: '-p PORT',
        desc: 'Specify source port',
        example: 'nc -p 12345 host port'
      }
    ],
    tags: ['network', 'netcat', 'tcp', 'udp'],
    lastUpdated: '2024-11-15',
    popularity: 73,
    relatedCommands: ['telnet', 'nmap', 'socat', 'curl']
  },
  {
    id: 'awk',
    name: 'awk',
    category: 'text',
    difficulty: 'advanced',
    description: 'Pattern scanning and text processing language',
    usage: 'awk [OPTIONS] PROGRAM [FILE...]',
    examples: [
      {
        cmd: 'awk \'{print $1}\' file.txt',
        desc: 'Print first column',
        output: 'john\nmary\nbob',
        explanation: 'Prints the first field (column) from each line'
      },
      {
        cmd: 'awk -F: \'{print $1}\' /etc/passwd',
        desc: 'Print usernames from passwd file',
        output: 'root\ndaemon\nbin',
        explanation: 'Uses colon as field separator to extract usernames'
      },
      {
        cmd: 'awk \'$3 > 100\' file.txt',
        desc: 'Print lines where 3rd field > 100',
        explanation: 'Shows only lines where the third column is greater than 100'
      },
      {
        cmd: 'awk \'{sum += $1} END {print sum}\' numbers.txt',
        desc: 'Sum all numbers in first column',
        explanation: 'Calculates total of all numbers in the first field'
      }
    ],
    flags: [
      {
        flag: '-F SEP',
        desc: 'Use SEP as field separator',
        example: 'awk -F: \'{print $1}\' file'
      },
      {
        flag: '-v VAR=VAL',
        desc: 'Assign VAL to variable VAR',
        example: 'awk -v name=john \'$1 == name\' file'
      },
      {
        flag: '-f FILE',
        desc: 'Read program from FILE',
        example: 'awk -f script.awk file.txt'
      }
    ],
    tags: ['text', 'processing', 'fields', 'programming'],
    lastUpdated: '2024-11-15',
    popularity: 79,
    relatedCommands: ['sed', 'cut', 'sort', 'grep']
  },
  {
    id: 'sed',
    name: 'sed',
    category: 'text',
    difficulty: 'advanced',
    description: 'Stream editor for filtering and transforming text',
    usage: 'sed [OPTIONS] COMMAND [FILE...]',
    examples: [
      {
        cmd: 'sed "s/old/new/g" file.txt',
        desc: 'Replace all occurrences',
        output: 'This is new text\nReplace old with new',
        explanation: 'Substitutes all instances of "old" with "new" in each line'
      },
      {
        cmd: 'sed -i "s/foo/bar/" file.txt',
        desc: 'Edit file in-place',
        explanation: 'Modifies the original file instead of printing to stdout'
      },
      {
        cmd: 'sed -n "5,10p" file.txt',
        desc: 'Print lines 5 to 10',
        explanation: 'Prints only lines 5 through 10, suppressing other output'
      },
      {
        cmd: 'sed "/pattern/d" file.txt',
        desc: 'Delete lines matching pattern',
        explanation: 'Removes all lines containing the specified pattern'
      }
    ],
    flags: [
      {
        flag: '-i',
        desc: 'Edit files in-place (make backup with -i.bak)',
        example: 'sed -i "s/old/new/g" file.txt'
      },
      {
        flag: '-e SCRIPT',
        desc: 'Add commands in SCRIPT to be executed',
        example: 'sed -e "s/a/b/" -e "s/c/d/" file'
      },
      {
        flag: '-n',
        desc: 'Suppress automatic printing of pattern space',
        example: 'sed -n "1,5p" file.txt'
      },
      {
        flag: '-r',
        desc: 'Use extended regular expressions',
        example: 'sed -r "s/[0-9]+/NUM/g" file.txt'
      }
    ],
    tags: ['text', 'substitute', 'edit', 'stream'],
    lastUpdated: '2024-11-15',
    popularity: 81,
    relatedCommands: ['awk', 'tr', 'cut', 'grep']
  },
  {
    id: 'cut',
    name: 'cut',
    category: 'text',
    difficulty: 'beginner',
    description: 'Extract columns from lines of files',
    usage: 'cut [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'cut -d: -f1 /etc/passwd',
        desc: 'Extract usernames from passwd file',
        output: 'root\ndaemon\nbin',
        explanation: 'Uses colon as delimiter and extracts first field'
      },
      {
        cmd: 'cut -c1-10 file.txt',
        desc: 'Extract characters 1-10 from each line',
        explanation: 'Shows only the first 10 characters of each line'
      },
      {
        cmd: 'cut -f2,4 -d"," data.csv',
        desc: 'Extract columns 2 and 4 from CSV',
        explanation: 'Gets specific columns from comma-separated values file'
      },
      {
        cmd: 'echo "one:two:three" | cut -d: -f2',
        desc: 'Extract second field',
        output: 'two',
        explanation: 'Extracts the middle field from colon-separated string'
      }
    ],
    flags: [
      {
        flag: '-d DELIM',
        desc: 'Use DELIM as field delimiter',
        example: 'cut -d: -f1 file'
      },
      {
        flag: '-f FIELDS',
        desc: 'Select only specified fields',
        example: 'cut -f1,3,5 file'
      },
      {
        flag: '-c CHARS',
        desc: 'Select only specified characters',
        example: 'cut -c1-10 file'
      },
      {
        flag: '--complement',
        desc: 'Select all except specified fields/characters',
        example: 'cut -d: --complement -f3 file'
      }
    ],
    tags: ['text', 'extract', 'columns', 'fields'],
    lastUpdated: '2024-11-15',
    popularity: 76,
    relatedCommands: ['awk', 'sort', 'uniq', 'paste']
  },
  {
    id: 'sort',
    name: 'sort',
    category: 'text',
    difficulty: 'intermediate',
    description: 'Sort lines of text files',
    usage: 'sort [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'sort file.txt',
        desc: 'Sort lines alphabetically',
        output: 'apple\nbanana\ncherry\ndate',
        explanation: 'Sorts all lines in alphabetical order'
      },
      {
        cmd: 'sort -r file.txt',
        desc: 'Sort in reverse order',
        explanation: 'Sorts in descending alphabetical order'
      },
      {
        cmd: 'sort -n numbers.txt',
        desc: 'Sort numerically',
        explanation: 'Sorts numbers by their numeric value, not alphabetically'
      },
      {
        cmd: 'sort -k2 -t: /etc/passwd',
        desc: 'Sort by second field using : delimiter',
        explanation: 'Sorts by the second column (UID) in passwd file'
      }
    ],
    flags: [
      {
        flag: '-r',
        desc: 'Reverse the result of comparisons',
        example: 'sort -r file.txt'
      },
      {
        flag: '-n',
        desc: 'Compare according to string numerical value',
        example: 'sort -n numbers.txt'
      },
      {
        flag: '-u',
        desc: 'Output only unique lines',
        example: 'sort -u file.txt'
      },
      {
        flag: '-t SEP',
        desc: 'Use SEP as field separator',
        example: 'sort -t: -k2 file'
      },
      {
        flag: '-k N',
        desc: 'Sort by field N',
        example: 'sort -k2 file.txt'
      },
      {
        flag: '-f',
        desc: 'Ignore case when sorting',
        example: 'sort -f file.txt'
      }
    ],
    tags: ['text', 'sort', 'order', 'alphabetical'],
    lastUpdated: '2024-11-15',
    popularity: 85,
    relatedCommands: ['uniq', 'cut', 'awk', 'comm']
  },
  {
    id: 'uniq',
    name: 'uniq',
    category: 'text',
    difficulty: 'intermediate',
    description: 'Report or omit repeated lines',
    usage: 'uniq [OPTIONS] [INPUT [OUTPUT]]',
    examples: [
      {
        cmd: 'uniq file.txt',
        desc: 'Remove adjacent duplicate lines',
        output: 'apple\nbanana\ncherry\napple',
        explanation: 'Removes consecutive duplicate lines (file should be sorted first)'
      },
      {
        cmd: 'sort file.txt | uniq -c',
        desc: 'Count occurrences of each line',
        output: '      2 apple\n      1 banana\n      1 cherry',
        explanation: 'Shows count of each unique line after sorting'
      },
      {
        cmd: 'uniq -d file.txt',
        desc: 'Only print duplicate lines',
        explanation: 'Shows only lines that appear more than once'
      },
      {
        cmd: 'uniq -u file.txt',
        desc: 'Only print unique lines',
        explanation: 'Shows only lines that appear exactly once'
      }
    ],
    flags: [
      {
        flag: '-c',
        desc: 'Prefix lines with number of occurrences',
        example: 'uniq -c file.txt'
      },
      {
        flag: '-d',
        desc: 'Only print duplicate lines',
        example: 'uniq -d file.txt'
      },
      {
        flag: '-u',
        desc: 'Only print unique lines',
        example: 'uniq -u file.txt'
      },
      {
        flag: '-i',
        desc: 'Ignore case when comparing',
        example: 'uniq -i file.txt'
      },
      {
        flag: '-f N',
        desc: 'Skip first N fields when comparing',
        example: 'uniq -f 1 file.txt'
      }
    ],
    tags: ['text', 'duplicate', 'unique', 'count'],
    lastUpdated: '2024-11-15',
    popularity: 73,
    relatedCommands: ['sort', 'comm', 'diff', 'awk']
  },
  {
    id: 'wc',
    name: 'wc',
    category: 'text',
    difficulty: 'beginner',
    description: 'Print newline, word, and byte counts for files',
    usage: 'wc [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'wc file.txt',
        desc: 'Count lines, words, and bytes',
        output: '     10      50     250 file.txt',
        explanation: 'Shows lines, words, and bytes in that order'
      },
      {
        cmd: 'wc -l file.txt',
        desc: 'Count only lines',
        output: '10 file.txt',
        explanation: 'Shows just the line count'
      },
      {
        cmd: 'wc -w file.txt',
        desc: 'Count only words',
        output: '50 file.txt',
        explanation: 'Shows just the word count'
      },
      {
        cmd: 'ls | wc -l',
        desc: 'Count number of files in directory',
        output: '15',
        explanation: 'Counts items in directory listing'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'Print the newline counts',
        example: 'wc -l file.txt'
      },
      {
        flag: '-w',
        desc: 'Print the word counts',
        example: 'wc -w file.txt'
      },
      {
        flag: '-c',
        desc: 'Print the byte counts',
        example: 'wc -c file.txt'
      },
      {
        flag: '-m',
        desc: 'Print the character counts',
        example: 'wc -m file.txt'
      },
      {
        flag: '-L',
        desc: 'Print length of longest line',
        example: 'wc -L file.txt'
      }
    ],
    tags: ['text', 'count', 'lines', 'words'],
    lastUpdated: '2024-11-15',
    popularity: 87,
    relatedCommands: ['cat', 'nl', 'head', 'tail']
  },
  {
    id: 'tr',
    name: 'tr',
    category: 'text',
    difficulty: 'intermediate',
    description: 'Translate or delete characters',
    usage: 'tr [OPTIONS] SET1 [SET2]',
    examples: [
      {
        cmd: 'echo "hello" | tr "a-z" "A-Z"',
        desc: 'Convert lowercase to uppercase',
        output: 'HELLO',
        explanation: 'Translates all lowercase letters to uppercase'
      },
      {
        cmd: 'echo "hello world" | tr " " "_"',
        desc: 'Replace spaces with underscores',
        output: 'hello_world',
        explanation: 'Substitutes every space character with underscore'
      },
      {
        cmd: 'echo "hello123" | tr -d "0-9"',
        desc: 'Delete all digits',
        output: 'hello',
        explanation: 'Removes all numeric characters from the text'
      },
      {
        cmd: 'cat file.txt | tr -s " "',
        desc: 'Squeeze multiple spaces into one',
        explanation: 'Replaces consecutive spaces with single space'
      }
    ],
    flags: [
      {
        flag: '-d SET',
        desc: 'Delete characters in SET',
        example: 'tr -d "0-9"'
      },
      {
        flag: '-s SET',
        desc: 'Squeeze multiple occurrences of characters in SET',
        example: 'tr -s " "'
      },
      {
        flag: '-c SET',
        desc: 'Use complement of SET',
        example: 'tr -cd "a-zA-Z"'
      }
    ],
    tags: ['text', 'translate', 'character', 'transform'],
    lastUpdated: '2024-11-15',
    popularity: 71,
    relatedCommands: ['sed', 'awk', 'cut', 'iconv']
  },
  // Compression Commands
  {
    id: 'gzip',
    name: 'gzip',
    category: 'compression',
    difficulty: 'beginner',
    description: 'Compress or expand files',
    usage: 'gzip [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'gzip file.txt',
        desc: 'Compress file',
        explanation: 'Creates file.txt.gz and removes original file'
      },
      {
        cmd: 'gzip -k file.txt',
        desc: 'Compress keeping original',
        explanation: 'Creates file.txt.gz and keeps file.txt'
      },
      {
        cmd: 'gzip -9 file.txt',
        desc: 'Maximum compression',
        explanation: 'Uses best compression ratio (slower)'
      },
      {
        cmd: 'gzip -r folder/',
        desc: 'Compress all files recursively',
        explanation: 'Compresses all files in folder and subfolders'
      },
      {
        cmd: 'gzip -d file.txt.gz',
        desc: 'Decompress file',
        explanation: 'Extracts file.txt from file.txt.gz'
      }
    ],
    flags: [
      {
        flag: '-k',
        desc: 'Keep original file',
        example: 'gzip -k file.txt'
      },
      {
        flag: '-d',
        desc: 'Decompress',
        example: 'gzip -d file.gz'
      },
      {
        flag: '-r',
        desc: 'Recursive operation',
        example: 'gzip -r folder/'
      },
      {
        flag: '-1 to -9',
        desc: 'Compression level (1=fast, 9=best)',
        example: 'gzip -9 file.txt'
      },
      {
        flag: '-v',
        desc: 'Verbose output',
        example: 'gzip -v file.txt'
      },
      {
        flag: '-l',
        desc: 'List compression info',
        example: 'gzip -l file.gz'
      }
    ],
    tags: ['compression', 'gzip', 'compress', 'archive'],
    lastUpdated: '2024-11-15',
    popularity: 84,
    relatedCommands: ['gunzip', 'tar', 'bzip2', 'zip']
  },
  {
    id: 'gunzip',
    name: 'gunzip',
    category: 'compression',
    difficulty: 'beginner',
    description: 'Decompress gzip files',
    usage: 'gunzip [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'gunzip file.txt.gz',
        desc: 'Decompress file',
        explanation: 'Extracts file.txt from file.txt.gz'
      },
      {
        cmd: 'gunzip -k file.txt.gz',
        desc: 'Decompress keeping compressed file',
        explanation: 'Extracts file.txt but keeps file.txt.gz'
      },
      {
        cmd: 'gunzip -r folder/',
        desc: 'Decompress all .gz files recursively',
        explanation: 'Extracts all gzip files in folder and subfolders'
      }
    ],
    flags: [
      {
        flag: '-k',
        desc: 'Keep compressed file',
        example: 'gunzip -k file.gz'
      },
      {
        flag: '-r',
        desc: 'Recursive operation',
        example: 'gunzip -r folder/'
      },
      {
        flag: '-c',
        desc: 'Write to stdout',
        example: 'gunzip -c file.gz > output'
      }
    ],
    tags: ['decompression', 'gzip', 'extract', 'archive'],
    lastUpdated: '2024-11-15',
    popularity: 81,
    relatedCommands: ['gzip', 'tar', 'bunzip2', 'unzip']
  },
  {
    id: 'bzip2',
    name: 'bzip2',
    category: 'compression',
    difficulty: 'beginner',
    description: 'Compress files using Burrows-Wheeler algorithm',
    usage: 'bzip2 [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'bzip2 file.txt',
        desc: 'Compress file',
        explanation: 'Creates file.txt.bz2 and removes original'
      },
      {
        cmd: 'bzip2 -k file.txt',
        desc: 'Compress keeping original',
        explanation: 'Creates file.txt.bz2 and keeps file.txt'
      },
      {
        cmd: 'bzip2 -9 file.txt',
        desc: 'Best compression',
        explanation: 'Uses maximum compression level'
      },
      {
        cmd: 'bzip2 -d file.txt.bz2',
        desc: 'Decompress file',
        explanation: 'Extracts file.txt from file.txt.bz2'
      }
    ],
    flags: [
      {
        flag: '-k',
        desc: 'Keep original file',
        example: 'bzip2 -k file.txt'
      },
      {
        flag: '-d',
        desc: 'Decompress',
        example: 'bzip2 -d file.bz2'
      },
      {
        flag: '-1 to -9',
        desc: 'Block size (compression level)',
        example: 'bzip2 -9 file.txt'
      },
      {
        flag: '-v',
        desc: 'Verbose mode',
        example: 'bzip2 -v file.txt'
      }
    ],
    tags: ['compression', 'bzip2', 'compress', 'archive'],
    lastUpdated: '2024-11-15',
    popularity: 76,
    relatedCommands: ['bunzip2', 'gzip', 'tar', 'xz']
  },
  {
    id: 'xz',
    name: 'xz',
    category: 'compression',
    difficulty: 'intermediate',
    description: 'Compress or decompress .xz files',
    usage: 'xz [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'xz file.txt',
        desc: 'Compress file',
        explanation: 'Creates file.txt.xz with high compression ratio'
      },
      {
        cmd: 'xz -k file.txt',
        desc: 'Compress keeping original',
        explanation: 'Creates file.txt.xz and keeps file.txt'
      },
      {
        cmd: 'xz -d file.txt.xz',
        desc: 'Decompress file',
        explanation: 'Extracts file.txt from file.txt.xz'
      },
      {
        cmd: 'xz -9 file.txt',
        desc: 'Maximum compression',
        explanation: 'Uses highest compression level (very slow)'
      },
      {
        cmd: 'xz -l file.txt.xz',
        desc: 'List compression info',
        explanation: 'Shows compression ratio and file info'
      }
    ],
    flags: [
      {
        flag: '-k',
        desc: 'Keep original file',
        example: 'xz -k file.txt'
      },
      {
        flag: '-d',
        desc: 'Decompress',
        example: 'xz -d file.xz'
      },
      {
        flag: '-0 to -9',
        desc: 'Compression level',
        example: 'xz -9 file.txt'
      },
      {
        flag: '-l',
        desc: 'List compression information',
        example: 'xz -l file.xz'
      },
      {
        flag: '-e',
        desc: 'Use extreme compression',
        example: 'xz -9e file.txt'
      }
    ],
    tags: ['compression', 'xz', 'compress', 'lzma'],
    lastUpdated: '2024-11-15',
    popularity: 72,
    relatedCommands: ['unxz', 'gzip', 'bzip2', 'tar']
  },
  {
    id: 'zip',
    name: 'zip',
    category: 'compression',
    difficulty: 'beginner',
    description: 'Package and compress files',
    usage: 'zip [OPTIONS] ZIPFILE FILES...',
    examples: [
      {
        cmd: 'zip archive.zip file1.txt file2.txt',
        desc: 'Create zip archive',
        explanation: 'Compresses files into archive.zip'
      },
      {
        cmd: 'zip -r archive.zip folder/',
        desc: 'Zip folder recursively',
        explanation: 'Includes all files and subdirectories'
      },
      {
        cmd: 'zip -9 archive.zip file.txt',
        desc: 'Maximum compression',
        explanation: 'Uses best compression ratio'
      },
      {
        cmd: 'zip -e secure.zip secret.txt',
        desc: 'Create encrypted zip',
        explanation: 'Prompts for password to encrypt archive'
      },
      {
        cmd: 'zip -u archive.zip newfile.txt',
        desc: 'Update existing archive',
        explanation: 'Adds new file or updates if newer'
      }
    ],
    flags: [
      {
        flag: '-r',
        desc: 'Recursive (include subdirectories)',
        example: 'zip -r archive.zip folder/'
      },
      {
        flag: '-e',
        desc: 'Encrypt with password',
        example: 'zip -e secure.zip files'
      },
      {
        flag: '-9',
        desc: 'Maximum compression',
        example: 'zip -9 archive.zip file'
      },
      {
        flag: '-u',
        desc: 'Update existing archive',
        example: 'zip -u archive.zip file'
      },
      {
        flag: '-d',
        desc: 'Delete files from archive',
        example: 'zip -d archive.zip file.txt'
      },
      {
        flag: '-q',
        desc: 'Quiet mode',
        example: 'zip -q archive.zip files'
      }
    ],
    tags: ['compression', 'zip', 'archive', 'compress'],
    lastUpdated: '2024-11-15',
    popularity: 89,
    relatedCommands: ['unzip', 'tar', 'gzip', '7z']
  },
  {
    id: '7z',
    name: '7z',
    category: 'compression',
    difficulty: 'intermediate',
    description: 'File archiver with high compression ratio',
    usage: '7z [COMMAND] [OPTIONS] ARCHIVE FILES...',
    examples: [
      {
        cmd: '7z a archive.7z file1.txt file2.txt',
        desc: 'Create 7z archive',
        explanation: 'Adds files to archive with high compression'
      },
      {
        cmd: '7z x archive.7z',
        desc: 'Extract archive',
        explanation: 'Extracts all files with full paths'
      },
      {
        cmd: '7z l archive.7z',
        desc: 'List archive contents',
        explanation: 'Shows files in archive without extracting'
      },
      {
        cmd: '7z a -p archive.7z secret.txt',
        desc: 'Create encrypted archive',
        explanation: 'Prompts for password to encrypt'
      },
      {
        cmd: '7z a -mx=9 archive.7z folder/',
        desc: 'Maximum compression',
        explanation: 'Uses ultra compression level'
      }
    ],
    flags: [
      {
        flag: 'a',
        desc: 'Add files to archive',
        example: '7z a archive.7z files'
      },
      {
        flag: 'x',
        desc: 'Extract with full paths',
        example: '7z x archive.7z'
      },
      {
        flag: 'e',
        desc: 'Extract without paths',
        example: '7z e archive.7z'
      },
      {
        flag: 'l',
        desc: 'List contents',
        example: '7z l archive.7z'
      },
      {
        flag: '-p',
        desc: 'Set password',
        example: '7z a -p archive.7z files'
      },
      {
        flag: '-mx=LEVEL',
        desc: 'Compression level (0-9)',
        example: '7z a -mx=9 archive.7z'
      }
    ],
    tags: ['compression', '7zip', 'archive', 'high-compression'],
    lastUpdated: '2024-11-15',
    popularity: 78,
    relatedCommands: ['zip', 'tar', 'rar', 'gzip']
  },
  // Package Management Commands
  {
    id: 'apt',
    name: 'apt',
    category: 'packages',
    difficulty: 'beginner',
    description: 'Package management tool for Debian/Ubuntu',
    usage: 'apt [OPTIONS] COMMAND',
    examples: [
      {
        cmd: 'sudo apt update',
        desc: 'Update package lists',
        explanation: 'Refreshes package index from repositories'
      },
      {
        cmd: 'sudo apt upgrade',
        desc: 'Upgrade all packages',
        explanation: 'Installs newer versions of all installed packages'
      },
      {
        cmd: 'sudo apt install nginx',
        desc: 'Install package',
        explanation: 'Installs nginx web server'
      },
      {
        cmd: 'sudo apt remove nginx',
        desc: 'Remove package',
        explanation: 'Uninstalls nginx but keeps configuration files'
      },
      {
        cmd: 'sudo apt purge nginx',
        desc: 'Remove package and config',
        explanation: 'Completely removes nginx including configuration'
      },
      {
        cmd: 'apt search nginx',
        desc: 'Search for packages',
        explanation: 'Finds packages matching "nginx"'
      }
    ],
    flags: [
      {
        flag: 'update',
        desc: 'Update package index',
        example: 'sudo apt update'
      },
      {
        flag: 'upgrade',
        desc: 'Upgrade installed packages',
        example: 'sudo apt upgrade'
      },
      {
        flag: 'install',
        desc: 'Install packages',
        example: 'sudo apt install nginx'
      },
      {
        flag: 'remove',
        desc: 'Remove packages',
        example: 'sudo apt remove nginx'
      },
      {
        flag: 'purge',
        desc: 'Remove packages with config',
        example: 'sudo apt purge nginx'
      },
      {
        flag: 'search',
        desc: 'Search for packages',
        example: 'apt search keyword'
      },
      {
        flag: 'show',
        desc: 'Show package details',
        example: 'apt show nginx'
      }
    ],
    tags: ['package', 'install', 'apt', 'debian'],
    lastUpdated: '2024-11-15',
    popularity: 92,
    relatedCommands: ['apt-get', 'dpkg', 'aptitude', 'snap']
  },
  {
    id: 'yum',
    name: 'yum',
    category: 'packages',
    difficulty: 'beginner',
    description: 'Package manager for RPM-based distributions',
    usage: 'yum [OPTIONS] COMMAND',
    examples: [
      {
        cmd: 'sudo yum update',
        desc: 'Update all packages',
        explanation: 'Updates package index and upgrades packages'
      },
      {
        cmd: 'sudo yum install httpd',
        desc: 'Install package',
        explanation: 'Installs Apache HTTP Server'
      },
      {
        cmd: 'sudo yum remove httpd',
        desc: 'Remove package',
        explanation: 'Uninstalls Apache HTTP Server'
      },
      {
        cmd: 'yum search nginx',
        desc: 'Search for packages',
        explanation: 'Finds packages matching "nginx"'
      },
      {
        cmd: 'yum list installed',
        desc: 'List installed packages',
        explanation: 'Shows all currently installed packages'
      }
    ],
    flags: [
      {
        flag: 'install',
        desc: 'Install packages',
        example: 'sudo yum install httpd'
      },
      {
        flag: 'update',
        desc: 'Update packages',
        example: 'sudo yum update'
      },
      {
        flag: 'remove',
        desc: 'Remove packages',
        example: 'sudo yum remove httpd'
      },
      {
        flag: 'search',
        desc: 'Search for packages',
        example: 'yum search keyword'
      },
      {
        flag: 'list',
        desc: 'List packages',
        example: 'yum list installed'
      },
      {
        flag: 'info',
        desc: 'Show package information',
        example: 'yum info httpd'
      }
    ],
    tags: ['package', 'yum', 'rpm', 'redhat'],
    lastUpdated: '2024-11-15',
    popularity: 82,
    relatedCommands: ['dnf', 'rpm', 'zypper', 'apt']
  },
  {
    id: 'dnf',
    name: 'dnf',
    category: 'packages',
    difficulty: 'beginner',
    description: 'Modern package manager for Fedora/RHEL',
    usage: 'dnf [OPTIONS] COMMAND',
    examples: [
      {
        cmd: 'sudo dnf update',
        desc: 'Update all packages',
        explanation: 'Updates package metadata and upgrades packages'
      },
      {
        cmd: 'sudo dnf install nginx',
        desc: 'Install package',
        explanation: 'Installs nginx web server'
      },
      {
        cmd: 'sudo dnf remove nginx',
        desc: 'Remove package',
        explanation: 'Uninstalls nginx'
      },
      {
        cmd: 'dnf search python',
        desc: 'Search for packages',
        explanation: 'Finds packages related to Python'
      },
      {
        cmd: 'dnf history',
        desc: 'View transaction history',
        explanation: 'Shows history of package operations'
      }
    ],
    flags: [
      {
        flag: 'install',
        desc: 'Install packages',
        example: 'sudo dnf install nginx'
      },
      {
        flag: 'update',
        desc: 'Update packages',
        example: 'sudo dnf update'
      },
      {
        flag: 'remove',
        desc: 'Remove packages',
        example: 'sudo dnf remove nginx'
      },
      {
        flag: 'search',
        desc: 'Search for packages',
        example: 'dnf search keyword'
      },
      {
        flag: 'info',
        desc: 'Show package details',
        example: 'dnf info nginx'
      },
      {
        flag: 'history',
        desc: 'View transaction history',
        example: 'dnf history'
      }
    ],
    tags: ['package', 'dnf', 'fedora', 'rpm'],
    lastUpdated: '2024-11-15',
    popularity: 79,
    relatedCommands: ['yum', 'rpm', 'zypper', 'apt']
  },
  {
    id: 'snap',
    name: 'snap',
    category: 'packages',
    difficulty: 'beginner',
    description: 'Universal Linux package manager',
    usage: 'snap [OPTIONS] COMMAND',
    examples: [
      {
        cmd: 'sudo snap install vscode --classic',
        desc: 'Install snap package',
        explanation: 'Installs VS Code using classic confinement'
      },
      {
        cmd: 'snap list',
        desc: 'List installed snaps',
        explanation: 'Shows all installed snap packages'
      },
      {
        cmd: 'sudo snap remove vscode',
        desc: 'Remove snap package',
        explanation: 'Uninstalls VS Code snap'
      },
      {
        cmd: 'snap find editor',
        desc: 'Search for snaps',
        explanation: 'Finds snaps matching "editor"'
      },
      {
        cmd: 'sudo snap refresh',
        desc: 'Update all snaps',
        explanation: 'Updates all installed snap packages'
      }
    ],
    flags: [
      {
        flag: 'install',
        desc: 'Install snap package',
        example: 'sudo snap install package'
      },
      {
        flag: 'remove',
        desc: 'Remove snap package',
        example: 'sudo snap remove package'
      },
      {
        flag: 'list',
        desc: 'List installed snaps',
        example: 'snap list'
      },
      {
        flag: 'find',
        desc: 'Search for snaps',
        example: 'snap find keyword'
      },
      {
        flag: 'refresh',
        desc: 'Update snaps',
        example: 'sudo snap refresh'
      },
      {
        flag: '--classic',
        desc: 'Use classic confinement',
        example: 'sudo snap install --classic package'
      }
    ],
    tags: ['package', 'snap', 'universal', 'install'],
    lastUpdated: '2024-11-15',
    popularity: 77,
    relatedCommands: ['apt', 'flatpak', 'appimage', 'dpkg']
  },
  {
    id: 'systemctl',
    name: 'systemctl',
    category: 'system',
    difficulty: 'intermediate',
    description: 'Control systemd services and units',
    usage: 'systemctl [OPTIONS] COMMAND [UNIT...]',
    examples: [
      {
        cmd: 'systemctl status nginx',
        desc: 'Check service status',
        output: '● nginx.service - A high performance web server\n   Loaded: loaded (/lib/systemd/system/nginx.service; enabled)\n   Active: active (running)',
        explanation: 'Shows detailed status information for nginx service'
      },
      {
        cmd: 'systemctl start apache2',
        desc: 'Start a service',
        explanation: 'Starts the Apache web server service'
      },
      {
        cmd: 'systemctl enable mysql',
        desc: 'Enable service at boot',
        explanation: 'Configures MySQL to start automatically on system boot'
      },
      {
        cmd: 'systemctl list-units --type=service',
        desc: 'List all services',
        explanation: 'Shows all loaded service units and their status'
      }
    ],
    flags: [
      {
        flag: 'start',
        desc: 'Start one or more units',
        example: 'systemctl start nginx'
      },
      {
        flag: 'stop',
        desc: 'Stop one or more units',
        example: 'systemctl stop nginx'
      },
      {
        flag: 'restart',
        desc: 'Restart one or more units',
        example: 'systemctl restart nginx'
      },
      {
        flag: 'reload',
        desc: 'Reload configuration of one or more units',
        example: 'systemctl reload nginx'
      },
      {
        flag: 'enable',
        desc: 'Enable units to start at boot',
        example: 'systemctl enable nginx'
      },
      {
        flag: 'disable',
        desc: 'Disable units from starting at boot',
        example: 'systemctl disable nginx'
      },
      {
        flag: 'status',
        desc: 'Show status of units',
        example: 'systemctl status nginx'
      }
    ],
    tags: ['systemd', 'service', 'daemon', 'init'],
    lastUpdated: '2024-11-15',
    popularity: 88,
    relatedCommands: ['service', 'journalctl', 'ps', 'top']
  },
  {
    id: 'journalctl',
    name: 'journalctl',
    category: 'system',
    difficulty: 'intermediate',
    description: 'Query and display systemd journal logs',
    usage: 'journalctl [OPTIONS]',
    examples: [
      {
        cmd: 'journalctl -u nginx',
        desc: 'Show logs for specific service',
        output: 'Nov 15 10:30:15 server nginx[1234]: Server started successfully',
        explanation: 'Displays all log entries for nginx service'
      },
      {
        cmd: 'journalctl -f',
        desc: 'Follow logs in real-time',
        explanation: 'Shows new log entries as they are written (like tail -f)'
      },
      {
        cmd: 'journalctl --since "2024-11-15 09:00:00"',
        desc: 'Show logs since specific time',
        explanation: 'Displays logs from specified date and time onwards'
      },
      {
        cmd: 'journalctl -p err',
        desc: 'Show only error messages',
        explanation: 'Filters to show only error-level log entries'
      }
    ],
    flags: [
      {
        flag: '-u UNIT',
        desc: 'Show logs for specific unit',
        example: 'journalctl -u nginx'
      },
      {
        flag: '-f',
        desc: 'Follow journal (show new entries)',
        example: 'journalctl -f'
      },
      {
        flag: '-n LINES',
        desc: 'Show most recent LINES entries',
        example: 'journalctl -n 50'
      },
      {
        flag: '--since TIME',
        desc: 'Show entries since TIME',
        example: 'journalctl --since "yesterday"'
      },
      {
        flag: '--until TIME',
        desc: 'Show entries until TIME',
        example: 'journalctl --until "1 hour ago"'
      },
      {
        flag: '-p PRIORITY',
        desc: 'Show entries with specified priority',
        example: 'journalctl -p err'
      }
    ],
    tags: ['logs', 'systemd', 'journal', 'debugging'],
    lastUpdated: '2024-11-15',
    popularity: 82,
    relatedCommands: ['systemctl', 'tail', 'less', 'grep']
  },
  {
    id: 'crontab',
    name: 'crontab',
    category: 'system',
    difficulty: 'intermediate',
    description: 'Manage user cron jobs',
    usage: 'crontab [OPTIONS] [FILE]',
    examples: [
      {
        cmd: 'crontab -l',
        desc: 'List current cron jobs',
        output: '0 2 * * * /home/user/backup.sh\n*/15 * * * * /usr/bin/check_disk.py',
        explanation: 'Shows all scheduled cron jobs for current user'
      },
      {
        cmd: 'crontab -e',
        desc: 'Edit cron jobs',
        explanation: 'Opens crontab in default editor for editing scheduled jobs'
      },
      {
        cmd: 'crontab -r',
        desc: 'Remove all cron jobs',
        explanation: 'Deletes the entire crontab for current user'
      },
      {
        cmd: 'echo "0 6 * * * /backup.sh" | crontab',
        desc: 'Set cron job from command',
        explanation: 'Replaces entire crontab with new job that runs backup daily at 6 AM'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'List current crontab',
        example: 'crontab -l'
      },
      {
        flag: '-e',
        desc: 'Edit crontab',
        example: 'crontab -e'
      },
      {
        flag: '-r',
        desc: 'Remove crontab',
        example: 'crontab -r'
      },
      {
        flag: '-u USER',
        desc: 'Operate on USER\'s crontab (root only)',
        example: 'crontab -u john -l'
      }
    ],
    tags: ['schedule', 'automation', 'cron', 'jobs'],
    lastUpdated: '2024-11-15',
    popularity: 79,
    relatedCommands: ['at', 'anacron', 'systemctl', 'watch']
  },
  {
    id: 'tar',
    name: 'tar',
    category: 'archive',
    difficulty: 'intermediate',
    description: 'Archive files and directories',
    usage: 'tar [OPTIONS] [ARCHIVE] [FILE...]',
    examples: [
      {
        cmd: 'tar -czf archive.tar.gz directory/',
        desc: 'Create compressed archive',
        explanation: 'Creates a gzipped tar archive of the directory'
      },
      {
        cmd: 'tar -xzf archive.tar.gz',
        desc: 'Extract compressed archive',
        explanation: 'Extracts all files from gzipped tar archive'
      },
      {
        cmd: 'tar -tzf archive.tar.gz',
        desc: 'List archive contents',
        output: 'directory/\ndirectory/file1.txt\ndirectory/file2.txt',
        explanation: 'Shows contents of tar archive without extracting'
      },
      {
        cmd: 'tar -czf backup.tar.gz --exclude="*.log" project/',
        desc: 'Create archive excluding files',
        explanation: 'Archives project directory but excludes all .log files'
      }
    ],
    flags: [
      {
        flag: '-c',
        desc: 'Create archive',
        example: 'tar -cf archive.tar files'
      },
      {
        flag: '-x',
        desc: 'Extract archive',
        example: 'tar -xf archive.tar'
      },
      {
        flag: '-t',
        desc: 'List archive contents',
        example: 'tar -tf archive.tar'
      },
      {
        flag: '-z',
        desc: 'Use gzip compression',
        example: 'tar -czf archive.tar.gz files'
      },
      {
        flag: '-j',
        desc: 'Use bzip2 compression',
        example: 'tar -cjf archive.tar.bz2 files'
      },
      {
        flag: '-f FILE',
        desc: 'Specify archive filename',
        example: 'tar -cf backup.tar files'
      },
      {
        flag: '-v',
        desc: 'Verbose output',
        example: 'tar -cvf archive.tar files'
      },
      {
        flag: '--exclude PATTERN',
        desc: 'Exclude files matching pattern',
        example: 'tar -czf archive.tar.gz --exclude="*.tmp" dir'
      }
    ],
    tags: ['archive', 'compress', 'backup', 'bundle'],
    lastUpdated: '2024-11-15',
    popularity: 90,
    relatedCommands: ['gzip', 'zip', 'unzip', 'compress']
  },
  {
    id: 'gzip',
    name: 'gzip',
    category: 'archive',
    difficulty: 'beginner',
    description: 'Compress or expand files',
    usage: 'gzip [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'gzip file.txt',
        desc: 'Compress file',
        explanation: 'Compresses file.txt to file.txt.gz and removes original'
      },
      {
        cmd: 'gzip -d file.txt.gz',
        desc: 'Decompress file',
        explanation: 'Decompresses file.txt.gz back to file.txt'
      },
      {
        cmd: 'gzip -k file.txt',
        desc: 'Compress keeping original',
        explanation: 'Creates file.txt.gz while keeping original file.txt'
      },
      {
        cmd: 'gzip -9 file.txt',
        desc: 'Maximum compression',
        explanation: 'Uses highest compression level (slower but smaller file)'
      }
    ],
    flags: [
      {
        flag: '-d',
        desc: 'Decompress',
        example: 'gzip -d file.gz'
      },
      {
        flag: '-k',
        desc: 'Keep original files',
        example: 'gzip -k file.txt'
      },
      {
        flag: '-1 to -9',
        desc: 'Compression level (1=fast, 9=best)',
        example: 'gzip -9 file.txt'
      },
      {
        flag: '-r',
        desc: 'Recursive (compress directory contents)',
        example: 'gzip -r directory/'
      },
      {
        flag: '-t',
        desc: 'Test compressed file integrity',
        example: 'gzip -t file.gz'
      },
      {
        flag: '-l',
        desc: 'List compression info',
        example: 'gzip -l file.gz'
      }
    ],
    tags: ['compress', 'decompress', 'gzip', 'archive'],
    lastUpdated: '2024-11-15',
    popularity: 83,
    relatedCommands: ['gunzip', 'tar', 'zip', 'bzip2']
  },
  {
    id: 'zip',
    name: 'zip',
    category: 'archive',
    difficulty: 'beginner',
    description: 'Create ZIP archives',
    usage: 'zip [OPTIONS] ZIPFILE [FILES...]',
    examples: [
      {
        cmd: 'zip archive.zip file1.txt file2.txt',
        desc: 'Create zip archive with files',
        explanation: 'Creates archive.zip containing the specified files'
      },
      {
        cmd: 'zip -r backup.zip directory/',
        desc: 'Zip directory recursively',
        explanation: 'Creates zip archive including all files and subdirectories'
      },
      {
        cmd: 'zip -x "*.log" -r project.zip project/',
        desc: 'Zip excluding pattern',
        explanation: 'Archives project directory but excludes .log files'
      },
      {
        cmd: 'zip -9 compressed.zip files/*',
        desc: 'Maximum compression',
        explanation: 'Creates zip with highest compression level'
      }
    ],
    flags: [
      {
        flag: '-r',
        desc: 'Recurse into directories',
        example: 'zip -r archive.zip directory/'
      },
      {
        flag: '-x PATTERN',
        desc: 'Exclude files matching pattern',
        example: 'zip -x "*.tmp" archive.zip files'
      },
      {
        flag: '-1 to -9',
        desc: 'Compression level (1=fast, 9=best)',
        example: 'zip -9 archive.zip files'
      },
      {
        flag: '-u',
        desc: 'Update existing archive',
        example: 'zip -u archive.zip newfile.txt'
      },
      {
        flag: '-d',
        desc: 'Delete entries from archive',
        example: 'zip -d archive.zip oldfile.txt'
      },
      {
        flag: '-q',
        desc: 'Quiet mode',
        example: 'zip -q archive.zip files'
      }
    ],
    tags: ['zip', 'archive', 'compress', 'bundle'],
    lastUpdated: '2024-11-15',
    popularity: 85,
    relatedCommands: ['unzip', 'tar', 'gzip', '7z']
  },
  {
    id: 'unzip',
    name: 'unzip',
    category: 'archive',
    difficulty: 'beginner',
    description: 'Extract ZIP archives',
    usage: 'unzip [OPTIONS] ZIPFILE [FILES...]',
    examples: [
      {
        cmd: 'unzip archive.zip',
        desc: 'Extract all files',
        output: 'Archive:  archive.zip\n  inflating: file1.txt\n  inflating: file2.txt',
        explanation: 'Extracts all files from archive to current directory'
      },
      {
        cmd: 'unzip archive.zip -d /tmp/',
        desc: 'Extract to specific directory',
        explanation: 'Extracts all files to /tmp/ directory'
      },
      {
        cmd: 'unzip -l archive.zip',
        desc: 'List archive contents',
        explanation: 'Shows files in archive without extracting'
      },
      {
        cmd: 'unzip archive.zip "*.txt"',
        desc: 'Extract only text files',
        explanation: 'Extracts only files matching the pattern'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'List files in archive',
        example: 'unzip -l archive.zip'
      },
      {
        flag: '-d DIR',
        desc: 'Extract to directory DIR',
        example: 'unzip archive.zip -d /tmp/'
      },
      {
        flag: '-o',
        desc: 'Overwrite files without prompting',
        example: 'unzip -o archive.zip'
      },
      {
        flag: '-n',
        desc: 'Never overwrite existing files',
        example: 'unzip -n archive.zip'
      },
      {
        flag: '-j',
        desc: 'Junk paths (extract to current directory)',
        example: 'unzip -j archive.zip'
      },
      {
        flag: '-q',
        desc: 'Quiet mode',
        example: 'unzip -q archive.zip'
      }
    ],
    tags: ['unzip', 'extract', 'decompress', 'archive'],
    lastUpdated: '2024-11-15',
    popularity: 87,
    relatedCommands: ['zip', 'tar', 'gunzip', '7z']
  },
  {
    id: 'df',
    name: 'df',
    category: 'system',
    difficulty: 'beginner',
    description: 'Display filesystem disk space usage',
    usage: 'df [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'df -h',
        desc: 'Show disk usage in human readable format',
        output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        20G  8.5G   11G  45% /',
        explanation: 'Displays disk usage with sizes in KB, MB, GB format'
      },
      {
        cmd: 'df -i',
        desc: 'Show inode usage',
        explanation: 'Displays information about inode usage on filesystems'
      },
      {
        cmd: 'df -T',
        desc: 'Show filesystem type',
        explanation: 'Includes filesystem type in the output (ext4, xfs, etc.)'
      },
      {
        cmd: 'df /home',
        desc: 'Show usage for specific filesystem',
        explanation: 'Shows disk usage only for the filesystem containing /home'
      }
    ],
    flags: [
      {
        flag: '-h',
        desc: 'Human readable format (K, M, G)',
        example: 'df -h'
      },
      {
        flag: '-i',
        desc: 'Show inode usage instead of block usage',
        example: 'df -i'
      },
      {
        flag: '-T',
        desc: 'Show filesystem type',
        example: 'df -T'
      },
      {
        flag: '-a',
        desc: 'Include pseudo, duplicate, inaccessible filesystems',
        example: 'df -a'
      },
      {
        flag: '-l',
        desc: 'Limit to local filesystems',
        example: 'df -l'
      }
    ],
    tags: ['disk', 'space', 'filesystem', 'usage'],
    lastUpdated: '2024-11-15',
    popularity: 89,
    relatedCommands: ['du', 'lsblk', 'mount', 'fdisk']
  },
  {
    id: 'du',
    name: 'du',
    category: 'system',
    difficulty: 'intermediate',
    description: 'Display directory space usage',
    usage: 'du [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'du -sh *',
        desc: 'Show size of each item in current directory',
        output: '150M    Documents\n2.3G    Downloads\n45K     file.txt',
        explanation: 'Displays human-readable sizes for all items in directory'
      },
      {
        cmd: 'du -sh /var/log',
        desc: 'Show total size of directory',
        explanation: 'Shows total disk usage of /var/log directory'
      },
      {
        cmd: 'du -ah | head -10',
        desc: 'Show largest files and directories',
        explanation: 'Lists all files with sizes, showing top 10 entries'
      },
      {
        cmd: 'du -d 2 .',
        desc: 'Limit depth to 2 levels',
        explanation: 'Shows directory sizes up to 2 levels deep'
      }
    ],
    flags: [
      {
        flag: '-h',
        desc: 'Human readable format',
        example: 'du -h directory'
      },
      {
        flag: '-s',
        desc: 'Display only total for each argument',
        example: 'du -s directory'
      },
      {
        flag: '-a',
        desc: 'Show sizes for all files, not just directories',
        example: 'du -a directory'
      },
      {
        flag: '-d N',
        desc: 'Maximum depth N levels',
        example: 'du -d 2 directory'
      },
      {
        flag: '-c',
        desc: 'Produce grand total',
        example: 'du -c directory1 directory2'
      },
      {
        flag: '--max-depth=N',
        desc: 'Same as -d N',
        example: 'du --max-depth=1 directory'
      }
    ],
    tags: ['disk', 'usage', 'directory', 'size'],
    lastUpdated: '2024-11-15',
    popularity: 86,
    relatedCommands: ['df', 'ls', 'ncdu', 'tree']
  },
  {
    id: 'free',
    name: 'free',
    category: 'system',
    difficulty: 'beginner',
    description: 'Display amount of free and used memory',
    usage: 'free [OPTIONS]',
    examples: [
      {
        cmd: 'free -h',
        desc: 'Show memory usage in human readable format',
        output: '              total        used        free      shared  buff/cache   available\nMem:           15Gi       2.1Gi       8.2Gi       234Mi       5.0Gi        12Gi',
        explanation: 'Displays memory usage in GB/MB format instead of bytes'
      },
      {
        cmd: 'free -m',
        desc: 'Show memory in megabytes',
        explanation: 'Shows all memory values in megabytes'
      },
      {
        cmd: 'free -s 2',
        desc: 'Update every 2 seconds',
        explanation: 'Continuously displays memory usage, updating every 2 seconds'
      },
      {
        cmd: 'free -t',
        desc: 'Show total line',
        explanation: 'Adds a line showing total memory (physical + swap)'
      }
    ],
    flags: [
      {
        flag: '-h',
        desc: 'Human readable format',
        example: 'free -h'
      },
      {
        flag: '-b',
        desc: 'Display in bytes',
        example: 'free -b'
      },
      {
        flag: '-k',
        desc: 'Display in kilobytes',
        example: 'free -k'
      },
      {
        flag: '-m',
        desc: 'Display in megabytes',
        example: 'free -m'
      },
      {
        flag: '-g',
        desc: 'Display in gigabytes',
        example: 'free -g'
      },
      {
        flag: '-t',
        desc: 'Show total line (physical + swap)',
        example: 'free -t'
      },
      {
        flag: '-s SECONDS',
        desc: 'Update every SECONDS',
        example: 'free -s 5'
      }
    ],
    tags: ['memory', 'ram', 'usage', 'system'],
    lastUpdated: '2024-11-15',
    popularity: 84,
    relatedCommands: ['top', 'htop', 'vmstat', 'ps']
  },
  {
    id: 'uptime',
    name: 'uptime',
    category: 'system',
    difficulty: 'beginner',
    description: 'Show how long the system has been running',
    usage: 'uptime [OPTIONS]',
    examples: [
      {
        cmd: 'uptime',
        desc: 'Show system uptime and load',
        output: ' 14:25:37 up  3:42,  2 users,  load average: 0.15, 0.18, 0.12',
        explanation: 'Shows current time, uptime, logged users, and load averages'
      },
      {
        cmd: 'uptime -p',
        desc: 'Show uptime in pretty format',
        output: 'up 3 hours, 42 minutes',
        explanation: 'Shows uptime in human-readable format'
      },
      {
        cmd: 'uptime -s',
        desc: 'Show system start time',
        output: '2024-11-15 10:43:22',
        explanation: 'Shows when the system was started'
      }
    ],
    flags: [
      {
        flag: '-p',
        desc: 'Show uptime in pretty format',
        example: 'uptime -p'
      },
      {
        flag: '-s',
        desc: 'Show system start time',
        example: 'uptime -s'
      }
    ],
    tags: ['uptime', 'load', 'system', 'boot'],
    lastUpdated: '2024-11-15',
    popularity: 78,
    relatedCommands: ['w', 'who', 'last', 'top']
  },
  {
    id: 'date',
    name: 'date',
    category: 'system',
    difficulty: 'beginner',
    description: 'Display or set the system date',
    usage: 'date [OPTIONS] [+FORMAT]',
    examples: [
      {
        cmd: 'date',
        desc: 'Show current date and time',
        output: 'Wed Nov 15 14:30:25 UTC 2024',
        explanation: 'Displays current system date and time'
      },
      {
        cmd: 'date +"%Y-%m-%d %H:%M:%S"',
        desc: 'Custom format',
        output: '2024-11-15 14:30:25',
        explanation: 'Shows date in specified format'
      },
      {
        cmd: 'date -d "tomorrow"',
        desc: 'Show tomorrow\'s date',
        output: 'Thu Nov 16 14:30:25 UTC 2024',
        explanation: 'Shows date for tomorrow at current time'
      },
      {
        cmd: 'date -d "2024-11-01" +%A',
        desc: 'Day of week for specific date',
        output: 'Friday',
        explanation: 'Shows what day of the week a specific date was'
      }
    ],
    flags: [
      {
        flag: '+FORMAT',
        desc: 'Format output according to FORMAT',
        example: 'date +"%Y-%m-%d"'
      },
      {
        flag: '-d STRING',
        desc: 'Display time described by STRING',
        example: 'date -d "next monday"'
      },
      {
        flag: '-u',
        desc: 'Display UTC time',
        example: 'date -u'
      },
      {
        flag: '-I',
        desc: 'Output ISO 8601 format',
        example: 'date -I'
      }
    ],
    tags: ['date', 'time', 'calendar', 'format'],
    lastUpdated: '2024-11-15',
    popularity: 81,
    relatedCommands: ['cal', 'timedatectl', 'hwclock', 'ntpdate']
  },
  {
    id: 'history',
    name: 'history',
    category: 'shell',
    difficulty: 'beginner',
    description: 'Display command history',
    usage: 'history [OPTIONS]',
    examples: [
      {
        cmd: 'history',
        desc: 'Show command history',
        output: '  501  ls -la\n  502  cd Documents\n  503  vim file.txt\n  504  history',
        explanation: 'Shows numbered list of previously executed commands'
      },
      {
        cmd: 'history 10',
        desc: 'Show last 10 commands',
        explanation: 'Displays only the most recent 10 commands from history'
      },
      {
        cmd: 'history -c',
        desc: 'Clear command history',
        explanation: 'Removes all entries from the command history'
      },
      {
        cmd: '!501',
        desc: 'Execute command by number',
        explanation: 'Re-runs the command with history number 501'
      }
    ],
    flags: [
      {
        flag: '-c',
        desc: 'Clear the history list',
        example: 'history -c'
      },
      {
        flag: '-d N',
        desc: 'Delete history entry at position N',
        example: 'history -d 10'
      },
      {
        flag: '-w',
        desc: 'Write history to history file',
        example: 'history -w'
      }
    ],
    tags: ['history', 'commands', 'shell', 'recall'],
    lastUpdated: '2024-11-15',
    popularity: 88,
    relatedCommands: ['fc', 'bash', 'zsh', 'source']
  },
  {
    id: 'alias',
    name: 'alias',
    category: 'shell',
    difficulty: 'intermediate',
    description: 'Create command aliases',
    usage: 'alias [NAME[=VALUE]]',
    examples: [
      {
        cmd: 'alias',
        desc: 'List all aliases',
        output: 'alias ll=\'ls -alF\'\nalias la=\'ls -A\'',
        explanation: 'Shows all currently defined aliases'
      },
      {
        cmd: 'alias ll="ls -la"',
        desc: 'Create alias for long listing',
        explanation: 'Creates a shortcut "ll" that runs "ls -la"'
      },
      {
        cmd: 'alias grep="grep --color=auto"',
        desc: 'Add color to grep',
        explanation: 'Makes grep always use colored output'
      },
      {
        cmd: 'unalias ll',
        desc: 'Remove alias',
        explanation: 'Removes the "ll" alias definition'
      }
    ],
    flags: [
      {
        flag: '-p',
        desc: 'Print all aliases in reusable format',
        example: 'alias -p'
      }
    ],
    tags: ['alias', 'shortcut', 'shell', 'command'],
    lastUpdated: '2024-11-15',
    popularity: 75,
    relatedCommands: ['unalias', 'function', 'which', 'type']
  },
  {
    id: 'export',
    name: 'export',
    category: 'shell',
    difficulty: 'intermediate',
    description: 'Set environment variables',
    usage: 'export [NAME[=VALUE]]',
    examples: [
      {
        cmd: 'export PATH="/usr/local/bin:$PATH"',
        desc: 'Add directory to PATH',
        explanation: 'Prepends /usr/local/bin to the PATH environment variable'
      },
      {
        cmd: 'export EDITOR=vim',
        desc: 'Set default editor',
        explanation: 'Sets vim as the default text editor for other programs'
      },
      {
        cmd: 'export -p',
        desc: 'List all exported variables',
        explanation: 'Shows all environment variables available to child processes'
      },
      {
        cmd: 'export -n VARIABLE',
        desc: 'Remove export attribute',
        explanation: 'Makes VARIABLE no longer available to child processes'
      }
    ],
    flags: [
      {
        flag: '-p',
        desc: 'List all exported variables',
        example: 'export -p'
      },
      {
        flag: '-n NAME',
        desc: 'Remove export attribute from NAME',
        example: 'export -n PATH'
      },
      {
        flag: '-f',
        desc: 'Export functions',
        example: 'export -f function_name'
      }
    ],
    tags: ['environment', 'variables', 'shell', 'export'],
    lastUpdated: '2024-11-15',
    popularity: 79,
    relatedCommands: ['env', 'set', 'unset', 'printenv']
  },
  {
    id: 'env',
    name: 'env',
    category: 'shell',
    difficulty: 'beginner',
    description: 'Display environment variables or run command with modified environment',
    usage: 'env [OPTIONS] [NAME=VALUE...] [COMMAND [ARGS...]]',
    examples: [
      {
        cmd: 'env',
        desc: 'Display all environment variables',
        output: 'HOME=/home/user\nPATH=/usr/bin:/bin\nSHELL=/bin/bash',
        explanation: 'Shows all environment variables and their values'
      },
      {
        cmd: 'env PATH="/custom/path" command',
        desc: 'Run command with modified PATH',
        explanation: 'Executes command with a different PATH environment'
      },
      {
        cmd: 'env -i bash',
        desc: 'Start clean environment',
        explanation: 'Starts bash with empty environment (no inherited variables)'
      },
      {
        cmd: 'env | grep PATH',
        desc: 'Show PATH variable',
        explanation: 'Filters environment output to show only PATH-related variables'
      }
    ],
    flags: [
      {
        flag: '-i',
        desc: 'Start with empty environment',
        example: 'env -i bash'
      },
      {
        flag: '-u NAME',
        desc: 'Remove NAME from environment',
        example: 'env -u HOME command'
      },
      {
        flag: '-0',
        desc: 'End output lines with null character',
        example: 'env -0'
      }
    ],
    tags: ['environment', 'variables', 'shell', 'execute'],
    lastUpdated: '2024-11-15',
    popularity: 77,
    relatedCommands: ['export', 'set', 'printenv', 'unset']
  },
  {
    id: 'echo',
    name: 'echo',
    category: 'shell',
    difficulty: 'beginner',
    description: 'Display line of text',
    usage: 'echo [OPTIONS] [STRING...]',
    examples: [
      {
        cmd: 'echo "Hello World"',
        desc: 'Print text',
        output: 'Hello World',
        explanation: 'Displays the text to standard output'
      },
      {
        cmd: 'echo $HOME',
        desc: 'Print environment variable',
        output: '/home/username',
        explanation: 'Shows the value of the HOME environment variable'
      },
      {
        cmd: 'echo -n "No newline"',
        desc: 'Print without newline',
        explanation: 'Outputs text without adding newline at the end'
      },
      {
        cmd: 'echo -e "Line1\\nLine2"',
        desc: 'Interpret escape sequences',
        output: 'Line1\nLine2',
        explanation: 'Processes escape sequences like \\n for newline'
      }
    ],
    flags: [
      {
        flag: '-n',
        desc: 'Do not output trailing newline',
        example: 'echo -n "text"'
      },
      {
        flag: '-e',
        desc: 'Enable interpretation of backslash escapes',
        example: 'echo -e "line1\\nline2"'
      },
      {
        flag: '-E',
        desc: 'Disable interpretation of backslash escapes (default)',
        example: 'echo -E "text\\n"'
      }
    ],
    tags: ['output', 'text', 'print', 'display'],
    lastUpdated: '2024-11-15',
    popularity: 95,
    relatedCommands: ['printf', 'cat', 'tee', 'write']
  },
  {
    id: 'printf',
    name: 'printf',
    category: 'shell',
    difficulty: 'intermediate',
    description: 'Format and print data',
    usage: 'printf FORMAT [ARGUMENTS...]',
    examples: [
      {
        cmd: 'printf "Hello %s\\n" "World"',
        desc: 'Format string with placeholder',
        output: 'Hello World',
        explanation: 'Uses %s placeholder to insert string argument'
      },
      {
        cmd: 'printf "%d + %d = %d\\n" 5 3 8',
        desc: 'Format numbers',
        output: '5 + 3 = 8',
        explanation: 'Uses %d placeholders for integer values'
      },
      {
        cmd: 'printf "%-10s %5d\\n" "Name" 123',
        desc: 'Left-align and right-align',
        output: 'Name           123',
        explanation: 'Left-aligns string in 10 chars, right-aligns number in 5 chars'
      },
      {
        cmd: 'printf "%.2f\\n" 3.14159',
        desc: 'Format floating point',
        output: '3.14',
        explanation: 'Shows floating point number with 2 decimal places'
      }
    ],
    flags: [
      {
        flag: '%s',
        desc: 'String format specifier',
        example: 'printf "%s\\n" "text"'
      },
      {
        flag: '%d',
        desc: 'Integer format specifier',
        example: 'printf "%d\\n" 42'
      },
      {
        flag: '%f',
        desc: 'Floating point format specifier',
        example: 'printf "%.2f\\n" 3.14'
      },
      {
        flag: '%x',
        desc: 'Hexadecimal format specifier',
        example: 'printf "%x\\n" 255'
      }
    ],
    tags: ['format', 'print', 'output', 'string'],
    lastUpdated: '2024-11-15',
    popularity: 72,
    relatedCommands: ['echo', 'awk', 'sprintf', 'format']
  },
  {
    id: 'man',
    name: 'man',
    category: 'system',
    difficulty: 'beginner',
    description: 'Display manual pages',
    usage: 'man [SECTION] PAGE',
    examples: [
      {
        cmd: 'man ls',
        desc: 'Show manual for ls command',
        explanation: 'Opens the manual page for the ls command with full documentation'
      },
      {
        cmd: 'man 5 passwd',
        desc: 'Show manual section 5 for passwd',
        explanation: 'Shows file format documentation for /etc/passwd'
      },
      {
        cmd: 'man -k network',
        desc: 'Search manual pages by keyword',
        explanation: 'Finds all manual pages containing "network" in description'
      },
      {
        cmd: 'man -f ls',
        desc: 'Show brief description',
        explanation: 'Shows one-line description of the ls command'
      }
    ],
    flags: [
      {
        flag: '-k KEYWORD',
        desc: 'Search manual pages for KEYWORD',
        example: 'man -k file'
      },
      {
        flag: '-f PAGE',
        desc: 'Show brief description of PAGE',
        example: 'man -f ls'
      },
      {
        flag: '-a',
        desc: 'Show all matching manual pages',
        example: 'man -a printf'
      },
      {
        flag: '-P PAGER',
        desc: 'Use PAGER to display pages',
        example: 'man -P less ls'
      }
    ],
    tags: ['manual', 'help', 'documentation', 'info'],
    lastUpdated: '2024-11-15',
    popularity: 93,
    relatedCommands: ['info', 'help', 'apropos', 'whatis']
  },
  {
    id: 'whoami',
    name: 'whoami',
    category: 'users',
    difficulty: 'beginner',
    description: 'Print effective user name',
    usage: 'whoami',
    examples: [
      {
        cmd: 'whoami',
        desc: 'Show current username',
        output: 'john',
        explanation: 'Displays the username of the current effective user'
      }
    ],
    flags: [],
    tags: ['user', 'identity', 'current', 'username'],
    lastUpdated: '2024-11-15',
    popularity: 83,
    relatedCommands: ['id', 'who', 'w', 'users']
  },
  {
    id: 'id',
    name: 'id',
    category: 'users',
    difficulty: 'beginner',
    description: 'Print user and group IDs',
    usage: 'id [OPTIONS] [USER]',
    examples: [
      {
        cmd: 'id',
        desc: 'Show current user and group IDs',
        output: 'uid=1000(john) gid=1000(john) groups=1000(john),27(sudo),44(video)',
        explanation: 'Shows user ID, group ID, and all groups for current user'
      },
      {
        cmd: 'id -u',
        desc: 'Show only user ID',
        output: '1000',
        explanation: 'Displays only the numeric user ID'
      },
      {
        cmd: 'id -g',
        desc: 'Show only group ID',
        output: '1000',
        explanation: 'Displays only the numeric group ID'
      },
      {
        cmd: 'id root',
        desc: 'Show IDs for specific user',
        explanation: 'Shows user and group information for the root user'
      }
    ],
    flags: [
      {
        flag: '-u',
        desc: 'Print only effective user ID',
        example: 'id -u'
      },
      {
        flag: '-g',
        desc: 'Print only effective group ID',
        example: 'id -g'
      },
      {
        flag: '-G',
        desc: 'Print all group IDs',
        example: 'id -G'
      },
      {
        flag: '-n',
        desc: 'Print names instead of numbers',
        example: 'id -un'
      }
    ],
    tags: ['user', 'group', 'id', 'permissions'],
    lastUpdated: '2024-11-15',
    popularity: 76,
    relatedCommands: ['whoami', 'groups', 'who', 'w']
  },
  {
    id: 'su',
    name: 'su',
    category: 'users',
    difficulty: 'intermediate',
    description: 'Switch user or become superuser',
    usage: 'su [OPTIONS] [USER]',
    examples: [
      {
        cmd: 'su',
        desc: 'Switch to root user',
        explanation: 'Switches to root user (prompts for root password)'
      },
      {
        cmd: 'su - john',
        desc: 'Switch to john with login shell',
        explanation: 'Switches to john user and loads full login environment'
      },
      {
        cmd: 'su -c "ls /root" root',
        desc: 'Execute single command as root',
        explanation: 'Runs one command as root then returns to original user'
      },
      {
        cmd: 'su -s /bin/bash john',
        desc: 'Switch user with specific shell',
        explanation: 'Switches to john user using bash shell'
      }
    ],
    flags: [
      {
        flag: '-',
        desc: 'Start login shell (load full environment)',
        example: 'su - john'
      },
      {
        flag: '-c COMMAND',
        desc: 'Execute COMMAND then exit',
        example: 'su -c "whoami" root'
      },
      {
        flag: '-s SHELL',
        desc: 'Use SHELL instead of default',
        example: 'su -s /bin/zsh john'
      },
      {
        flag: '-l',
        desc: 'Same as - (login shell)',
        example: 'su -l john'
      }
    ],
    tags: ['switch', 'user', 'sudo', 'root'],
    lastUpdated: '2024-11-15',
    popularity: 80,
    relatedCommands: ['sudo', 'whoami', 'id', 'login']
  },
  {
    id: 'sudo',
    name: 'sudo',
    category: 'users',
    difficulty: 'intermediate',
    description: 'Execute commands as another user',
    usage: 'sudo [OPTIONS] COMMAND',
    examples: [
      {
        cmd: 'sudo apt update',
        desc: 'Run command as root',
        explanation: 'Executes apt update with root privileges'
      },
      {
        cmd: 'sudo -u john cat /home/john/file.txt',
        desc: 'Run command as specific user',
        explanation: 'Executes command as john user instead of root'
      },
      {
        cmd: 'sudo -i',
        desc: 'Start interactive root shell',
        explanation: 'Opens a root shell with full root environment'
      },
      {
        cmd: 'sudo -l',
        desc: 'List allowed commands',
        explanation: 'Shows what commands current user is allowed to run with sudo'
      }
    ],
    flags: [
      {
        flag: '-u USER',
        desc: 'Run command as USER',
        example: 'sudo -u john command'
      },
      {
        flag: '-i',
        desc: 'Start login shell as target user',
        example: 'sudo -i'
      },
      {
        flag: '-s',
        desc: 'Start shell as target user',
        example: 'sudo -s'
      },
      {
        flag: '-l',
        desc: 'List user privileges',
        example: 'sudo -l'
      },
      {
        flag: '-k',
        desc: 'Invalidate cached credentials',
        example: 'sudo -k'
      },
      {
        flag: '-v',
        desc: 'Validate cached credentials',
        example: 'sudo -v'
      }
    ],
    tags: ['sudo', 'root', 'privilege', 'admin'],
    lastUpdated: '2024-11-15',
    popularity: 94,
    relatedCommands: ['su', 'whoami', 'id', 'visudo']
  },
  // Additional User Management Commands
  {
    id: 'useradd',
    name: 'useradd',
    category: 'users',
    difficulty: 'intermediate',
    description: 'Create a new user or update default user information',
    usage: 'useradd [OPTIONS] USERNAME',
    examples: [
      {
        cmd: 'sudo useradd john',
        desc: 'Create new user john',
        explanation: 'Creates user account with default settings'
      },
      {
        cmd: 'sudo useradd -m -s /bin/bash john',
        desc: 'Create user with home directory and bash shell',
        explanation: 'Creates user, makes home directory, sets bash as default shell'
      },
      {
        cmd: 'sudo useradd -G sudo,docker john',
        desc: 'Create user and add to groups',
        explanation: 'Creates user and adds them to sudo and docker groups'
      },
      {
        cmd: 'sudo useradd -e 2024-12-31 tempuser',
        desc: 'Create user with expiration date',
        explanation: 'Account will be disabled on specified date'
      }
    ],
    flags: [
      {
        flag: '-m',
        desc: 'Create home directory',
        example: 'sudo useradd -m john'
      },
      {
        flag: '-s SHELL',
        desc: 'Set login shell',
        example: 'sudo useradd -s /bin/bash john'
      },
      {
        flag: '-G GROUPS',
        desc: 'Add user to supplementary groups',
        example: 'sudo useradd -G sudo,wheel john'
      },
      {
        flag: '-d DIR',
        desc: 'Set home directory',
        example: 'sudo useradd -d /home/custom john'
      },
      {
        flag: '-e DATE',
        desc: 'Set account expiration date',
        example: 'sudo useradd -e 2024-12-31 john'
      },
      {
        flag: '-u UID',
        desc: 'Set user ID',
        example: 'sudo useradd -u 1500 john'
      }
    ],
    tags: ['user', 'create', 'account', 'add'],
    lastUpdated: '2024-11-15',
    popularity: 75,
    relatedCommands: ['usermod', 'userdel', 'passwd', 'groupadd']
  },
  {
    id: 'usermod',
    name: 'usermod',
    category: 'users',
    difficulty: 'intermediate',
    description: 'Modify a user account',
    usage: 'usermod [OPTIONS] USERNAME',
    examples: [
      {
        cmd: 'sudo usermod -aG docker john',
        desc: 'Add user to group',
        explanation: 'Adds john to docker group without removing from other groups'
      },
      {
        cmd: 'sudo usermod -s /bin/zsh john',
        desc: 'Change default shell',
        explanation: 'Changes john\'s login shell to zsh'
      },
      {
        cmd: 'sudo usermod -L john',
        desc: 'Lock user account',
        explanation: 'Disables password login for john'
      },
      {
        cmd: 'sudo usermod -U john',
        desc: 'Unlock user account',
        explanation: 'Re-enables password login for john'
      },
      {
        cmd: 'sudo usermod -l newname oldname',
        desc: 'Rename user',
        explanation: 'Changes username from oldname to newname'
      }
    ],
    flags: [
      {
        flag: '-aG GROUPS',
        desc: 'Add user to supplementary groups',
        example: 'sudo usermod -aG sudo john'
      },
      {
        flag: '-s SHELL',
        desc: 'Change login shell',
        example: 'sudo usermod -s /bin/bash john'
      },
      {
        flag: '-L',
        desc: 'Lock user account',
        example: 'sudo usermod -L john'
      },
      {
        flag: '-U',
        desc: 'Unlock user account',
        example: 'sudo usermod -U john'
      },
      {
        flag: '-l NAME',
        desc: 'Change login name',
        example: 'sudo usermod -l newname oldname'
      },
      {
        flag: '-d DIR',
        desc: 'Change home directory',
        example: 'sudo usermod -d /new/home john'
      }
    ],
    tags: ['user', 'modify', 'edit', 'change'],
    lastUpdated: '2024-11-15',
    popularity: 72,
    relatedCommands: ['useradd', 'userdel', 'passwd', 'chsh']
  },
  {
    id: 'userdel',
    name: 'userdel',
    category: 'users',
    difficulty: 'intermediate',
    description: 'Delete a user account and related files',
    usage: 'userdel [OPTIONS] USERNAME',
    examples: [
      {
        cmd: 'sudo userdel john',
        desc: 'Delete user account',
        explanation: 'Removes user john but keeps home directory'
      },
      {
        cmd: 'sudo userdel -r john',
        desc: 'Delete user and home directory',
        explanation: 'Removes user john and deletes home directory and mail spool'
      },
      {
        cmd: 'sudo userdel -f john',
        desc: 'Force delete user',
        explanation: 'Forces deletion even if user is logged in'
      }
    ],
    flags: [
      {
        flag: '-r',
        desc: 'Remove home directory and mail spool',
        example: 'sudo userdel -r john'
      },
      {
        flag: '-f',
        desc: 'Force removal even if user is logged in',
        example: 'sudo userdel -f john'
      },
      {
        flag: '-Z',
        desc: 'Remove SELinux user mapping',
        example: 'sudo userdel -Z john'
      }
    ],
    tags: ['user', 'delete', 'remove', 'account'],
    lastUpdated: '2024-11-15',
    popularity: 68,
    relatedCommands: ['useradd', 'usermod', 'groupdel', 'deluser']
  },
  {
    id: 'passwd',
    name: 'passwd',
    category: 'users',
    difficulty: 'beginner',
    description: 'Change user password',
    usage: 'passwd [OPTIONS] [USERNAME]',
    examples: [
      {
        cmd: 'passwd',
        desc: 'Change your own password',
        explanation: 'Prompts to change password for current user'
      },
      {
        cmd: 'sudo passwd john',
        desc: 'Change another user\'s password',
        explanation: 'Admin changes password for user john'
      },
      {
        cmd: 'sudo passwd -l john',
        desc: 'Lock user account',
        explanation: 'Disables password for john (account locked)'
      },
      {
        cmd: 'sudo passwd -u john',
        desc: 'Unlock user account',
        explanation: 'Re-enables password for john'
      },
      {
        cmd: 'sudo passwd -e john',
        desc: 'Expire password immediately',
        explanation: 'Forces john to change password on next login'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'Lock user account',
        example: 'sudo passwd -l john'
      },
      {
        flag: '-u',
        desc: 'Unlock user account',
        example: 'sudo passwd -u john'
      },
      {
        flag: '-d',
        desc: 'Delete password (passwordless login)',
        example: 'sudo passwd -d john'
      },
      {
        flag: '-e',
        desc: 'Expire password (force change on next login)',
        example: 'sudo passwd -e john'
      },
      {
        flag: '-S',
        desc: 'Display password status',
        example: 'sudo passwd -S john'
      }
    ],
    tags: ['password', 'security', 'user', 'change'],
    lastUpdated: '2024-11-15',
    popularity: 88,
    relatedCommands: ['chpasswd', 'usermod', 'chage', 'pwconv']
  },
  {
    id: 'groupadd',
    name: 'groupadd',
    category: 'users',
    difficulty: 'intermediate',
    description: 'Create a new group',
    usage: 'groupadd [OPTIONS] GROUP',
    examples: [
      {
        cmd: 'sudo groupadd developers',
        desc: 'Create new group',
        explanation: 'Creates a new group called developers'
      },
      {
        cmd: 'sudo groupadd -g 1500 developers',
        desc: 'Create group with specific GID',
        explanation: 'Creates group with group ID 1500'
      },
      {
        cmd: 'sudo groupadd -r system-group',
        desc: 'Create system group',
        explanation: 'Creates a system group with GID below 1000'
      }
    ],
    flags: [
      {
        flag: '-g GID',
        desc: 'Specify group ID',
        example: 'sudo groupadd -g 1500 developers'
      },
      {
        flag: '-r',
        desc: 'Create system group',
        example: 'sudo groupadd -r system-group'
      },
      {
        flag: '-f',
        desc: 'Force - exit successfully if group exists',
        example: 'sudo groupadd -f developers'
      }
    ],
    tags: ['group', 'create', 'add', 'permissions'],
    lastUpdated: '2024-11-15',
    popularity: 70,
    relatedCommands: ['groupmod', 'groupdel', 'useradd', 'usermod']
  },
  {
    id: 'groupdel',
    name: 'groupdel',
    category: 'users',
    difficulty: 'intermediate',
    description: 'Delete a group',
    usage: 'groupdel [OPTIONS] GROUP',
    examples: [
      {
        cmd: 'sudo groupdel developers',
        desc: 'Delete group',
        explanation: 'Removes the developers group'
      },
      {
        cmd: 'sudo groupdel testgroup',
        desc: 'Delete empty group',
        explanation: 'Removes group if no users have it as primary group'
      }
    ],
    flags: [
      {
        flag: '-f',
        desc: 'Force removal even if it\'s primary group',
        example: 'sudo groupdel -f oldgroup'
      }
    ],
    tags: ['group', 'delete', 'remove', 'permissions'],
    lastUpdated: '2024-11-15',
    popularity: 64,
    relatedCommands: ['groupadd', 'groupmod', 'userdel', 'delgroup']
  },
  {
    id: 'groups',
    name: 'groups',
    category: 'users',
    difficulty: 'beginner',
    description: 'Print group memberships for user',
    usage: 'groups [USERNAME...]',
    examples: [
      {
        cmd: 'groups',
        desc: 'Show groups for current user',
        output: 'john sudo docker wheel',
        explanation: 'Displays all groups the current user belongs to'
      },
      {
        cmd: 'groups john mary',
        desc: 'Show groups for multiple users',
        output: 'john : john sudo docker\nmary : mary users',
        explanation: 'Lists groups for specified users'
      }
    ],
    flags: [],
    tags: ['group', 'membership', 'user', 'permissions'],
    lastUpdated: '2024-11-15',
    popularity: 74,
    relatedCommands: ['id', 'getent', 'usermod', 'groupadd']
  },
  {
    id: 'who',
    name: 'who',
    category: 'users',
    difficulty: 'beginner',
    description: 'Show who is logged on',
    usage: 'who [OPTIONS] [FILE]',
    examples: [
      {
        cmd: 'who',
        desc: 'Show logged in users',
        output: 'john     tty1         2024-11-16 09:30\nmary     pts/0        2024-11-16 10:15',
        explanation: 'Displays currently logged in users with terminal and login time'
      },
      {
        cmd: 'who -a',
        desc: 'Show all information',
        explanation: 'Displays detailed information about logged in users'
      },
      {
        cmd: 'who -b',
        desc: 'Show last system boot time',
        output: 'system boot  2024-11-15 08:00',
        explanation: 'Shows when the system was last booted'
      },
      {
        cmd: 'who -q',
        desc: 'Quick list with count',
        output: 'john mary bob\n# users=3',
        explanation: 'Shows usernames and total count'
      }
    ],
    flags: [
      {
        flag: '-a',
        desc: 'Show all available information',
        example: 'who -a'
      },
      {
        flag: '-b',
        desc: 'Show time of last system boot',
        example: 'who -b'
      },
      {
        flag: '-q',
        desc: 'Quick list of usernames and count',
        example: 'who -q'
      },
      {
        flag: '-H',
        desc: 'Print column headings',
        example: 'who -H'
      }
    ],
    tags: ['users', 'logged', 'login', 'sessions'],
    lastUpdated: '2024-11-15',
    popularity: 69,
    relatedCommands: ['w', 'whoami', 'users', 'last']
  },
  {
    id: 'w',
    name: 'w',
    category: 'users',
    difficulty: 'beginner',
    description: 'Show who is logged on and what they are doing',
    usage: 'w [OPTIONS] [USER]',
    examples: [
      {
        cmd: 'w',
        desc: 'Show logged in users and their activity',
        output: 'USER     TTY      FROM             LOGIN@   IDLE   JCPU   PCPU WHAT\njohn     tty1     -                09:30    0.00s  0.50s  0.01s vim file.txt',
        explanation: 'Shows detailed information about logged in users and current processes'
      },
      {
        cmd: 'w -h',
        desc: 'Show without header',
        explanation: 'Displays user information without column headers'
      },
      {
        cmd: 'w john',
        desc: 'Show activity for specific user',
        explanation: 'Shows only information for user john'
      }
    ],
    flags: [
      {
        flag: '-h',
        desc: 'Do not print header',
        example: 'w -h'
      },
      {
        flag: '-s',
        desc: 'Short format',
        example: 'w -s'
      },
      {
        flag: '-f',
        desc: 'Toggle printing FROM field',
        example: 'w -f'
      }
    ],
    tags: ['users', 'logged', 'activity', 'processes'],
    lastUpdated: '2024-11-15',
    popularity: 71,
    relatedCommands: ['who', 'whoami', 'uptime', 'ps']
  },
  {
    id: 'last',
    name: 'last',
    category: 'users',
    difficulty: 'beginner',
    description: 'Show listing of last logged in users',
    usage: 'last [OPTIONS] [USERNAME...] [TTY...]',
    examples: [
      {
        cmd: 'last',
        desc: 'Show recent login history',
        output: 'john     pts/0    192.168.1.100    Sat Nov 16 09:30   still logged in\nreboot   system boot  5.15.0-generic   Fri Nov 15 08:00',
        explanation: 'Displays login history from /var/log/wtmp'
      },
      {
        cmd: 'last -10',
        desc: 'Show last 10 entries',
        explanation: 'Limits output to most recent 10 login records'
      },
      {
        cmd: 'last john',
        desc: 'Show login history for specific user',
        explanation: 'Shows all login records for user john'
      },
      {
        cmd: 'last reboot',
        desc: 'Show system reboot history',
        explanation: 'Displays all system boots and reboots'
      }
    ],
    flags: [
      {
        flag: '-n NUM',
        desc: 'Show NUM lines',
        example: 'last -n 20'
      },
      {
        flag: '-a',
        desc: 'Display hostname in last column',
        example: 'last -a'
      },
      {
        flag: '-d',
        desc: 'Translate IP to hostname',
        example: 'last -d'
      },
      {
        flag: '-F',
        desc: 'Print full login/logout times',
        example: 'last -F'
      }
    ],
    tags: ['login', 'history', 'users', 'audit'],
    lastUpdated: '2024-11-15',
    popularity: 67,
    relatedCommands: ['lastb', 'who', 'w', 'lastlog']
  },
  // Disk Management Commands
  {
    id: 'df',
    name: 'df',
    category: 'disk',
    difficulty: 'beginner',
    description: 'Report file system disk space usage',
    usage: 'df [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'df -h',
        desc: 'Show disk usage in human-readable format',
        output: 'Filesystem      Size  Used Avail Use% Mounted on\n/dev/sda1        50G   30G   18G  63% /\ntmpfs           4.0G     0  4.0G   0% /dev/shm',
        explanation: 'Displays disk space usage with sizes in GB, MB format'
      },
      {
        cmd: 'df -i',
        desc: 'Show inode usage',
        output: 'Filesystem     Inodes  IUsed  IFree IUse% Mounted on\n/dev/sda1     3276800 245678 3031122    8% /',
        explanation: 'Displays inode (file count) information instead of block usage'
      },
      {
        cmd: 'df -T',
        desc: 'Show filesystem type',
        explanation: 'Includes the filesystem type (ext4, xfs, ntfs, etc.) in output'
      },
      {
        cmd: 'df /home',
        desc: 'Show disk space for specific directory',
        explanation: 'Displays disk usage for the filesystem containing /home'
      }
    ],
    flags: [
      {
        flag: '-h',
        desc: 'Human-readable sizes (KB, MB, GB)',
        example: 'df -h'
      },
      {
        flag: '-H',
        desc: 'Human-readable using powers of 1000',
        example: 'df -H'
      },
      {
        flag: '-i',
        desc: 'Show inode information instead of block usage',
        example: 'df -i'
      },
      {
        flag: '-T',
        desc: 'Print filesystem type',
        example: 'df -T'
      },
      {
        flag: '-t TYPE',
        desc: 'Show only filesystems of type TYPE',
        example: 'df -t ext4'
      },
      {
        flag: '-x TYPE',
        desc: 'Exclude filesystems of type TYPE',
        example: 'df -x tmpfs'
      }
    ],
    tags: ['disk', 'space', 'filesystem', 'usage'],
    lastUpdated: '2024-11-15',
    popularity: 92,
    relatedCommands: ['du', 'lsblk', 'mount', 'fdisk']
  },
  {
    id: 'du',
    name: 'du',
    category: 'disk',
    difficulty: 'beginner',
    description: 'Estimate file and directory space usage',
    usage: 'du [OPTIONS] [FILE...]',
    examples: [
      {
        cmd: 'du -sh *',
        desc: 'Show size of each item in current directory',
        output: '512M    Documents\n1.2G    Downloads\n256K    Pictures',
        explanation: 'Displays human-readable size summary for each file/directory'
      },
      {
        cmd: 'du -h --max-depth=1',
        desc: 'Show size of immediate subdirectories',
        explanation: 'Limits depth to show only first level of directories'
      },
      {
        cmd: 'du -ah | sort -rh | head -20',
        desc: 'Find 20 largest files/directories',
        explanation: 'Shows all files, sorts by size, displays top 20'
      },
      {
        cmd: 'du -sch /var/log/*',
        desc: 'Show size of log files with total',
        explanation: 'Displays size of each log file plus grand total'
      }
    ],
    flags: [
      {
        flag: '-h',
        desc: 'Human-readable format',
        example: 'du -h'
      },
      {
        flag: '-s',
        desc: 'Display only total for each argument',
        example: 'du -sh dir'
      },
      {
        flag: '-a',
        desc: 'Include files, not just directories',
        example: 'du -ah'
      },
      {
        flag: '-c',
        desc: 'Produce grand total',
        example: 'du -ch'
      },
      {
        flag: '--max-depth=N',
        desc: 'Maximum directory depth',
        example: 'du -h --max-depth=2'
      },
      {
        flag: '--exclude=PATTERN',
        desc: 'Exclude files matching PATTERN',
        example: 'du -h --exclude="*.txt"'
      }
    ],
    tags: ['disk', 'size', 'directory', 'usage'],
    lastUpdated: '2024-11-15',
    popularity: 89,
    relatedCommands: ['df', 'ls', 'ncdu', 'find']
  },
  {
    id: 'fdisk',
    name: 'fdisk',
    category: 'disk',
    difficulty: 'advanced',
    description: 'Partition table manipulator for Linux',
    usage: 'fdisk [OPTIONS] DEVICE',
    examples: [
      {
        cmd: 'sudo fdisk -l',
        desc: 'List all partition tables',
        output: 'Disk /dev/sda: 500 GB\nDevice     Boot Start      End  Sectors Size Id Type\n/dev/sda1  *     2048 41945087 41943040  20G 83 Linux',
        explanation: 'Displays partition information for all disks'
      },
      {
        cmd: 'sudo fdisk /dev/sdb',
        desc: 'Interactive partition editor for /dev/sdb',
        explanation: 'Opens fdisk interface to create, delete, or modify partitions'
      },
      {
        cmd: 'sudo fdisk -l /dev/sda',
        desc: 'Show partitions on specific disk',
        explanation: 'Lists partition table for specified device only'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'List partition tables for devices',
        example: 'sudo fdisk -l'
      },
      {
        flag: '-s PARTITION',
        desc: 'Print size of partition in blocks',
        example: 'sudo fdisk -s /dev/sda1'
      },
      {
        flag: '-u',
        desc: 'Display sizes in sectors instead of cylinders',
        example: 'sudo fdisk -u /dev/sda'
      }
    ],
    tags: ['disk', 'partition', 'advanced', 'management'],
    lastUpdated: '2024-11-15',
    popularity: 71,
    relatedCommands: ['parted', 'gdisk', 'lsblk', 'mkfs']
  },
  {
    id: 'lsblk',
    name: 'lsblk',
    category: 'disk',
    difficulty: 'beginner',
    description: 'List information about block devices',
    usage: 'lsblk [OPTIONS] [DEVICE...]',
    examples: [
      {
        cmd: 'lsblk',
        desc: 'List all block devices',
        output: 'NAME   MAJ:MIN RM  SIZE RO TYPE MOUNTPOINT\nsda      8:0    0  500G  0 disk\n├─sda1   8:1    0   20G  0 part /\n└─sda2   8:2    0  480G  0 part /home',
        explanation: 'Shows tree structure of all storage devices and partitions'
      },
      {
        cmd: 'lsblk -f',
        desc: 'Show filesystem information',
        output: 'NAME FSTYPE LABEL     UUID                                 MOUNTPOINT\nsda1 ext4   root      d3e5f7a9-1234-5678-9abc-def012345678 /',
        explanation: 'Displays filesystem type, label, and UUID for each partition'
      },
      {
        cmd: 'lsblk -o NAME,SIZE,TYPE,MOUNTPOINT',
        desc: 'Show specific columns',
        explanation: 'Customizes output to display only specified columns'
      },
      {
        cmd: 'lsblk -p',
        desc: 'Print full device paths',
        explanation: 'Shows complete device paths like /dev/sda instead of just sda'
      }
    ],
    flags: [
      {
        flag: '-a',
        desc: 'Include empty devices',
        example: 'lsblk -a'
      },
      {
        flag: '-f',
        desc: 'Show filesystem information',
        example: 'lsblk -f'
      },
      {
        flag: '-p',
        desc: 'Print full device paths',
        example: 'lsblk -p'
      },
      {
        flag: '-o COLS',
        desc: 'Specify output columns',
        example: 'lsblk -o NAME,SIZE,TYPE'
      },
      {
        flag: '-d',
        desc: 'Do not print slave/holder devices',
        example: 'lsblk -d'
      }
    ],
    tags: ['disk', 'block', 'devices', 'partitions'],
    lastUpdated: '2024-11-15',
    popularity: 85,
    relatedCommands: ['fdisk', 'df', 'mount', 'blkid']
  },
  {
    id: 'mount',
    name: 'mount',
    category: 'disk',
    difficulty: 'intermediate',
    description: 'Mount a filesystem',
    usage: 'mount [OPTIONS] DEVICE DIRECTORY',
    examples: [
      {
        cmd: 'mount',
        desc: 'Display all mounted filesystems',
        output: '/dev/sda1 on / type ext4 (rw,relatime)\ntmpfs on /dev/shm type tmpfs (rw,nosuid,nodev)',
        explanation: 'Shows currently mounted filesystems with options'
      },
      {
        cmd: 'sudo mount /dev/sdb1 /mnt',
        desc: 'Mount partition to /mnt',
        explanation: 'Mounts the specified partition to mount point'
      },
      {
        cmd: 'sudo mount -t ntfs-3g /dev/sdb1 /mnt/windows',
        desc: 'Mount NTFS partition',
        explanation: 'Mounts Windows NTFS filesystem using ntfs-3g driver'
      },
      {
        cmd: 'sudo mount -o loop disk.iso /mnt/iso',
        desc: 'Mount ISO file as loop device',
        explanation: 'Mounts ISO image file to directory'
      }
    ],
    flags: [
      {
        flag: '-t TYPE',
        desc: 'Specify filesystem type',
        example: 'sudo mount -t ext4 /dev/sdb1 /mnt'
      },
      {
        flag: '-o OPTIONS',
        desc: 'Mount with specific options',
        example: 'sudo mount -o ro,noexec /dev/sdb1 /mnt'
      },
      {
        flag: '-a',
        desc: 'Mount all filesystems in /etc/fstab',
        example: 'sudo mount -a'
      },
      {
        flag: '-r',
        desc: 'Mount read-only',
        example: 'sudo mount -r /dev/sdb1 /mnt'
      },
      {
        flag: '--bind',
        desc: 'Bind mount a directory',
        example: 'sudo mount --bind /src /dest'
      }
    ],
    tags: ['disk', 'mount', 'filesystem', 'device'],
    lastUpdated: '2024-11-15',
    popularity: 83,
    relatedCommands: ['umount', 'findmnt', 'lsblk', 'df']
  },
  {
    id: 'umount',
    name: 'umount',
    category: 'disk',
    difficulty: 'intermediate',
    description: 'Unmount file systems',
    usage: 'umount [OPTIONS] DIRECTORY|DEVICE',
    examples: [
      {
        cmd: 'sudo umount /mnt',
        desc: 'Unmount filesystem at /mnt',
        explanation: 'Safely unmounts the filesystem from mount point'
      },
      {
        cmd: 'sudo umount /dev/sdb1',
        desc: 'Unmount by device name',
        explanation: 'Unmounts filesystem by specifying device instead of mount point'
      },
      {
        cmd: 'sudo umount -l /mnt',
        desc: 'Lazy unmount',
        explanation: 'Detaches filesystem from tree but waits for it to become idle'
      },
      {
        cmd: 'sudo umount -f /mnt/nfs',
        desc: 'Force unmount (NFS)',
        explanation: 'Forcefully unmounts, useful for unreachable NFS mounts'
      }
    ],
    flags: [
      {
        flag: '-f',
        desc: 'Force unmount',
        example: 'sudo umount -f /mnt'
      },
      {
        flag: '-l',
        desc: 'Lazy unmount - detach now, cleanup later',
        example: 'sudo umount -l /mnt'
      },
      {
        flag: '-r',
        desc: 'If unmount fails, try remounting read-only',
        example: 'sudo umount -r /mnt'
      },
      {
        flag: '-a',
        desc: 'Unmount all filesystems in /etc/mtab',
        example: 'sudo umount -a'
      }
    ],
    tags: ['disk', 'unmount', 'filesystem', 'device'],
    lastUpdated: '2024-11-15',
    popularity: 78,
    relatedCommands: ['mount', 'lsof', 'fuser', 'sync']
  },
  {
    id: 'mkfs',
    name: 'mkfs',
    category: 'disk',
    difficulty: 'advanced',
    description: 'Build a Linux filesystem on a device',
    usage: 'mkfs [OPTIONS] [-t TYPE] DEVICE',
    examples: [
      {
        cmd: 'sudo mkfs.ext4 /dev/sdb1',
        desc: 'Create ext4 filesystem',
        output: 'Creating filesystem with 26214400 4k blocks...\nAllocating group tables: done\nWriting superblocks: done',
        explanation: 'Formats partition with ext4 filesystem (DESTRUCTIVE!)'
      },
      {
        cmd: 'sudo mkfs -t vfat /dev/sdb1',
        desc: 'Create FAT32 filesystem',
        explanation: 'Creates FAT32 filesystem for USB drives'
      },
      {
        cmd: 'sudo mkfs.ext4 -L mydisk /dev/sdb1',
        desc: 'Create filesystem with label',
        explanation: 'Formats with ext4 and assigns label "mydisk"'
      },
      {
        cmd: 'sudo mkfs.xfs -f /dev/sdb1',
        desc: 'Create XFS filesystem',
        explanation: 'Creates XFS filesystem, -f forces overwrite'
      }
    ],
    flags: [
      {
        flag: '-t TYPE',
        desc: 'Specify filesystem type (ext4, xfs, vfat, etc.)',
        example: 'sudo mkfs -t ext4 /dev/sdb1'
      },
      {
        flag: '-L LABEL',
        desc: 'Set filesystem label',
        example: 'sudo mkfs.ext4 -L mydisk /dev/sdb1'
      },
      {
        flag: '-c',
        desc: 'Check device for bad blocks',
        example: 'sudo mkfs.ext4 -c /dev/sdb1'
      },
      {
        flag: '-V',
        desc: 'Verbose mode',
        example: 'sudo mkfs -V -t ext4 /dev/sdb1'
      }
    ],
    tags: ['disk', 'format', 'filesystem', 'create'],
    lastUpdated: '2024-11-15',
    popularity: 68,
    relatedCommands: ['fdisk', 'parted', 'mount', 'lsblk']
  },
  {
    id: 'fsck',
    name: 'fsck',
    category: 'disk',
    difficulty: 'advanced',
    description: 'Check and repair a Linux filesystem',
    usage: 'fsck [OPTIONS] DEVICE',
    examples: [
      {
        cmd: 'sudo fsck /dev/sdb1',
        desc: 'Check filesystem for errors',
        output: 'fsck from util-linux 2.34\ne2fsck 1.45.5 (07-Jan-2020)\nPass 1: Checking inodes...',
        explanation: 'Checks and repairs filesystem (device must be unmounted)'
      },
      {
        cmd: 'sudo fsck -y /dev/sdb1',
        desc: 'Auto-repair without prompting',
        explanation: 'Automatically fixes errors without asking for confirmation'
      },
      {
        cmd: 'sudo fsck -n /dev/sdb1',
        desc: 'Check without making changes',
        explanation: 'Dry run - shows errors but makes no repairs'
      },
      {
        cmd: 'sudo fsck -A',
        desc: 'Check all filesystems in /etc/fstab',
        explanation: 'Checks all filesystems listed in fstab'
      }
    ],
    flags: [
      {
        flag: '-y',
        desc: 'Assume yes to all questions',
        example: 'sudo fsck -y /dev/sdb1'
      },
      {
        flag: '-n',
        desc: 'Assume no (read-only check)',
        example: 'sudo fsck -n /dev/sdb1'
      },
      {
        flag: '-A',
        desc: 'Check all filesystems in /etc/fstab',
        example: 'sudo fsck -A'
      },
      {
        flag: '-C',
        desc: 'Show progress bar',
        example: 'sudo fsck -C /dev/sdb1'
      },
      {
        flag: '-f',
        desc: 'Force check even if filesystem seems clean',
        example: 'sudo fsck -f /dev/sdb1'
      }
    ],
    tags: ['disk', 'repair', 'check', 'filesystem'],
    lastUpdated: '2024-11-15',
    popularity: 65,
    relatedCommands: ['e2fsck', 'xfs_repair', 'mount', 'umount']
  },
  {
    id: 'blkid',
    name: 'blkid',
    category: 'disk',
    difficulty: 'intermediate',
    description: 'Locate/print block device attributes',
    usage: 'blkid [OPTIONS] [DEVICE...]',
    examples: [
      {
        cmd: 'sudo blkid',
        desc: 'List all block devices with UUIDs',
        output: '/dev/sda1: UUID="d3e5f7a9-1234-5678" TYPE="ext4" PARTUUID="12345678-01"\n/dev/sdb1: UUID="9876fedc-4321" TYPE="ntfs"',
        explanation: 'Shows UUID, filesystem type, and partition UUID for all devices'
      },
      {
        cmd: 'sudo blkid /dev/sda1',
        desc: 'Show info for specific device',
        explanation: 'Displays block device attributes for specified partition'
      },
      {
        cmd: 'sudo blkid -s UUID /dev/sda1',
        desc: 'Show only UUID',
        output: '/dev/sda1: UUID="d3e5f7a9-1234-5678-9abc-def012345678"',
        explanation: 'Displays only the UUID attribute'
      },
      {
        cmd: 'sudo blkid -o list',
        desc: 'User-friendly list format',
        explanation: 'Shows devices in easy-to-read table format'
      }
    ],
    flags: [
      {
        flag: '-s TAG',
        desc: 'Show only specified tag',
        example: 'sudo blkid -s UUID'
      },
      {
        flag: '-o FORMAT',
        desc: 'Output format (value, device, list, full)',
        example: 'sudo blkid -o list'
      },
      {
        flag: '-p',
        desc: 'Low-level probing mode',
        example: 'sudo blkid -p /dev/sda1'
      },
      {
        flag: '-c FILE',
        desc: 'Use alternate cache file',
        example: 'sudo blkid -c /tmp/cache'
      }
    ],
    tags: ['disk', 'uuid', 'block', 'device'],
    lastUpdated: '2024-11-15',
    popularity: 72,
    relatedCommands: ['lsblk', 'findmnt', 'udevadm', 'df']
  },
  {
    id: 'parted',
    name: 'parted',
    category: 'disk',
    difficulty: 'advanced',
    description: 'A partition manipulation program supporting GPT',
    usage: 'parted [OPTIONS] [DEVICE [COMMAND [PARAMETERS...]]]',
    examples: [
      {
        cmd: 'sudo parted -l',
        desc: 'List partition layout on all block devices',
        output: 'Model: ATA Samsung SSD (scsi)\nDisk /dev/sda: 500GB\nPartition Table: gpt',
        explanation: 'Shows partition tables for all disks including GPT partitions'
      },
      {
        cmd: 'sudo parted /dev/sdb print',
        desc: 'Show partition table for specific disk',
        explanation: 'Displays detailed partition information for /dev/sdb'
      },
      {
        cmd: 'sudo parted /dev/sdb mklabel gpt',
        desc: 'Create GPT partition table',
        explanation: 'Initializes disk with GPT partition table (DESTRUCTIVE!)'
      },
      {
        cmd: 'sudo parted /dev/sdb mkpart primary ext4 0% 100%',
        desc: 'Create partition using entire disk',
        explanation: 'Creates primary partition spanning whole disk'
      }
    ],
    flags: [
      {
        flag: '-l',
        desc: 'List partition layouts on all devices',
        example: 'sudo parted -l'
      },
      {
        flag: '-a TYPE',
        desc: 'Set alignment type (optimal, minimal, none)',
        example: 'sudo parted -a optimal /dev/sdb'
      },
      {
        flag: '-s',
        desc: 'Script mode - never prompt user',
        example: 'sudo parted -s /dev/sdb print'
      }
    ],
    tags: ['disk', 'partition', 'gpt', 'advanced'],
    lastUpdated: '2024-11-15',
    popularity: 66,
    relatedCommands: ['fdisk', 'gdisk', 'lsblk', 'mkfs']
  },
  {
    id: 'dd',
    name: 'dd',
    category: 'disk',
    difficulty: 'advanced',
    description: 'Convert and copy a file, create disk images',
    usage: 'dd [OPERANDS]',
    examples: [
      {
        cmd: 'sudo dd if=/dev/sda of=/dev/sdb bs=4M status=progress',
        desc: 'Clone entire disk',
        output: '10737418240 bytes (11 GB, 10 GiB) copied, 305 s, 35.2 MB/s',
        explanation: 'Creates exact copy of sda to sdb with progress indicator'
      },
      {
        cmd: 'sudo dd if=/dev/sda of=~/disk.img bs=4M',
        desc: 'Create disk image backup',
        explanation: 'Backs up entire disk to image file'
      },
      {
        cmd: 'sudo dd if=ubuntu.iso of=/dev/sdb bs=4M status=progress',
        desc: 'Create bootable USB from ISO',
        explanation: 'Writes ISO image to USB drive to create bootable media'
      },
      {
        cmd: 'dd if=/dev/zero of=~/testfile bs=1M count=100',
        desc: 'Create 100MB file of zeros',
        explanation: 'Generates file filled with null bytes for testing'
      },
      {
        cmd: 'sudo dd if=/dev/urandom of=/dev/sdb bs=4M status=progress',
        desc: 'Securely wipe disk with random data',
        explanation: 'Overwrites disk with random data for secure erasure'
      }
    ],
    flags: [
      {
        flag: 'if=FILE',
        desc: 'Input file or device',
        example: 'dd if=/dev/sda'
      },
      {
        flag: 'of=FILE',
        desc: 'Output file or device',
        example: 'dd of=backup.img'
      },
      {
        flag: 'bs=SIZE',
        desc: 'Read and write SIZE bytes at a time',
        example: 'dd bs=4M'
      },
      {
        flag: 'count=N',
        desc: 'Copy only N input blocks',
        example: 'dd count=100'
      },
      {
        flag: 'status=LEVEL',
        desc: 'Progress information (none, noxfer, progress)',
        example: 'dd status=progress'
      },
      {
        flag: 'conv=CONVS',
        desc: 'Convert file (noerror, sync, etc.)',
        example: 'dd conv=noerror,sync'
      }
    ],
    tags: ['disk', 'clone', 'backup', 'image'],
    lastUpdated: '2024-11-15',
    popularity: 73,
    relatedCommands: ['rsync', 'cp', 'pv', 'dcfldd']
  },
  {
    id: 'hdparm',
    name: 'hdparm',
    category: 'disk',
    difficulty: 'advanced',
    description: 'Get/set SATA/IDE device parameters',
    usage: 'hdparm [OPTIONS] DEVICE',
    examples: [
      {
        cmd: 'sudo hdparm -I /dev/sda',
        desc: 'Display detailed disk information',
        output: 'Model Number: Samsung SSD 860\nSerial Number: S3Z9NB0K123456\nFirmware Revision: RVT01B6Q',
        explanation: 'Shows comprehensive drive specifications and capabilities'
      },
      {
        cmd: 'sudo hdparm -tT /dev/sda',
        desc: 'Perform disk read speed test',
        output: 'Timing cached reads: 24532 MB in 2.00 seconds = 12279.96 MB/sec\nTiming buffered disk reads: 1536 MB in 3.00 seconds = 511.65 MB/sec',
        explanation: 'Benchmarks disk read performance'
      },
      {
        cmd: 'sudo hdparm -C /dev/sda',
        desc: 'Check drive power mode',
        output: 'drive state is: active/idle',
        explanation: 'Shows current power state of the drive'
      },
      {
        cmd: 'sudo hdparm -y /dev/sda',
        desc: 'Put drive into standby mode',
        explanation: 'Forces drive to enter low-power standby state'
      }
    ],
    flags: [
      {
        flag: '-I',
        desc: 'Display detailed device information',
        example: 'sudo hdparm -I /dev/sda'
      },
      {
        flag: '-tT',
        desc: 'Perform timing tests',
        example: 'sudo hdparm -tT /dev/sda'
      },
      {
        flag: '-C',
        desc: 'Check power mode status',
        example: 'sudo hdparm -C /dev/sda'
      },
      {
        flag: '-y',
        desc: 'Force standby mode',
        example: 'sudo hdparm -y /dev/sda'
      },
      {
        flag: '-S N',
        desc: 'Set standby timeout (N * 5 seconds)',
        example: 'sudo hdparm -S 120 /dev/sda'
      }
    ],
    tags: ['disk', 'sata', 'performance', 'benchmark'],
    lastUpdated: '2024-11-15',
    popularity: 58,
    relatedCommands: ['smartctl', 'dd', 'iostat', 'lsblk']
  },
  {
    id: 'smartctl',
    name: 'smartctl',
    category: 'disk',
    difficulty: 'advanced',
    description: 'Control and monitor storage using SMART',
    usage: 'smartctl [OPTIONS] DEVICE',
    examples: [
      {
        cmd: 'sudo smartctl -a /dev/sda',
        desc: 'Display all SMART information',
        output: 'Model Family: Samsung SSD\nDevice Model: Samsung SSD 860\nSMART overall-health self-assessment test result: PASSED',
        explanation: 'Shows comprehensive SMART data including health status'
      },
      {
        cmd: 'sudo smartctl -H /dev/sda',
        desc: 'Check overall disk health',
        output: 'SMART overall-health self-assessment test result: PASSED',
        explanation: 'Quick health check - PASSED means disk is healthy'
      },
      {
        cmd: 'sudo smartctl -t short /dev/sda',
        desc: 'Run short self-test',
        explanation: 'Initiates quick diagnostic test (takes ~2 minutes)'
      },
      {
        cmd: 'sudo smartctl -l selftest /dev/sda',
        desc: 'Display self-test results',
        explanation: 'Shows results of previously run diagnostic tests'
      }
    ],
    flags: [
      {
        flag: '-a',
        desc: 'Display all SMART information',
        example: 'sudo smartctl -a /dev/sda'
      },
      {
        flag: '-H',
        desc: 'Check overall health status',
        example: 'sudo smartctl -H /dev/sda'
      },
      {
        flag: '-i',
        desc: 'Show device information',
        example: 'sudo smartctl -i /dev/sda'
      },
      {
        flag: '-t TYPE',
        desc: 'Run self-test (short, long, conveyance)',
        example: 'sudo smartctl -t long /dev/sda'
      },
      {
        flag: '-l TYPE',
        desc: 'Print log (error, selftest, selective)',
        example: 'sudo smartctl -l error /dev/sda'
      }
    ],
    tags: ['disk', 'smart', 'health', 'monitoring'],
    lastUpdated: '2024-11-15',
    popularity: 62,
    relatedCommands: ['hdparm', 'badblocks', 'fsck', 'dmesg']
  },
  {
    id: 'iostat',
    name: 'iostat',
    category: 'disk',
    difficulty: 'intermediate',
    description: 'Report CPU and I/O statistics',
    usage: 'iostat [OPTIONS] [INTERVAL [COUNT]]',
    examples: [
      {
        cmd: 'iostat',
        desc: 'Display basic CPU and disk statistics',
        output: 'avg-cpu:  %user   %nice %system %iowait  %steal   %idle\n           12.50    0.00    3.20    2.10    0.00   82.20',
        explanation: 'Shows current CPU usage and disk I/O statistics'
      },
      {
        cmd: 'iostat -x 2 5',
        desc: 'Extended disk stats, 2 sec interval, 5 times',
        explanation: 'Shows detailed I/O stats updated every 2 seconds, 5 iterations'
      },
      {
        cmd: 'iostat -d -p sda',
        desc: 'Show statistics for specific disk',
        explanation: 'Displays I/O stats only for /dev/sda and its partitions'
      },
      {
        cmd: 'iostat -m',
        desc: 'Display statistics in MB/s',
        explanation: 'Shows throughput in megabytes per second'
      }
    ],
    flags: [
      {
        flag: '-c',
        desc: 'Display CPU utilization only',
        example: 'iostat -c'
      },
      {
        flag: '-d',
        desc: 'Display disk utilization only',
        example: 'iostat -d'
      },
      {
        flag: '-x',
        desc: 'Extended statistics',
        example: 'iostat -x'
      },
      {
        flag: '-p DEVICE',
        desc: 'Display statistics for device and partitions',
        example: 'iostat -p sda'
      },
      {
        flag: '-m',
        desc: 'Display statistics in megabytes per second',
        example: 'iostat -m'
      },
      {
        flag: '-h',
        desc: 'Human-readable format',
        example: 'iostat -h'
      }
    ],
    tags: ['disk', 'io', 'performance', 'monitoring'],
    lastUpdated: '2024-11-15',
    popularity: 70,
    relatedCommands: ['vmstat', 'iotop', 'top', 'sar']
  },
  {
    id: 'iotop',
    name: 'iotop',
    category: 'disk',
    difficulty: 'intermediate',
    description: 'Simple top-like I/O monitor',
    usage: 'iotop [OPTIONS]',
    examples: [
      {
        cmd: 'sudo iotop',
        desc: 'Monitor disk I/O by process',
        output: 'Total DISK READ:  10.52 M/s | Total DISK WRITE: 15.23 M/s\nTID  USER     DISK READ  DISK WRITE  COMMAND\n1234 mysql      5.23 M/s   10.11 M/s mysqld',
        explanation: 'Shows real-time disk I/O usage by each process'
      },
      {
        cmd: 'sudo iotop -o',
        desc: 'Show only processes with I/O activity',
        explanation: 'Filters to display only active I/O processes'
      },
      {
        cmd: 'sudo iotop -a',
        desc: 'Show accumulated I/O instead of bandwidth',
        explanation: 'Displays total I/O since iotop started'
      },
      {
        cmd: 'sudo iotop -p 1234',
        desc: 'Monitor specific process',
        explanation: 'Shows I/O only for process with PID 1234'
      }
    ],
    flags: [
      {
        flag: '-o',
        desc: 'Only show processes doing I/O',
        example: 'sudo iotop -o'
      },
      {
        flag: '-b',
        desc: 'Batch mode (non-interactive)',
        example: 'sudo iotop -b'
      },
      {
        flag: '-a',
        desc: 'Show accumulated I/O',
        example: 'sudo iotop -a'
      },
      {
        flag: '-p PID',
        desc: 'Monitor specific process(es)',
        example: 'sudo iotop -p 1234'
      },
      {
        flag: '-d SEC',
        desc: 'Set delay between iterations',
        example: 'sudo iotop -d 2'
      }
    ],
    tags: ['disk', 'io', 'monitor', 'process'],
    lastUpdated: '2024-11-15',
    popularity: 67,
    relatedCommands: ['top', 'htop', 'iostat', 'vmstat']
  }
];

export const tutorials: Tutorial[] = [
  {
    id: 'linux-basics',
    title: 'Linux Command Line Basics',
    description: 'Learn the fundamental Linux commands every user should know',
    difficulty: 'beginner',
    category: 'files',
    content: `# Linux Command Line Basics

Welcome to the world of Linux! This tutorial will teach you the essential commands that form the foundation of Linux system administration.

## What You'll Learn

- Navigate the file system
- Create and manage files and directories
- Understand file permissions
- Use basic text processing commands

## Getting Started

The command line (terminal) is your gateway to the full power of Linux. Let's start with the most basic navigation commands.

### 1. Where Am I? - pwd

The \`pwd\` command shows your current location in the file system:

\`\`\`bash
pwd
\`\`\`

This will display something like \`/home/username\`, which is your home directory.

### 2. What's Here? - ls

The \`ls\` command lists the contents of your current directory:

\`\`\`bash
ls
ls -la  # detailed listing with hidden files
\`\`\`

### 3. Going Places - cd

Use \`cd\` to change directories:

\`\`\`bash
cd /home/username/Documents  # absolute path
cd Documents                 # relative path
cd ..                       # go up one level
cd ~                        # go to home directory
\`\`\`

## Practice Exercise

1. Open your terminal
2. Use \`pwd\` to see where you are
3. Use \`ls\` to see what's in your current directory
4. Navigate to your Documents folder with \`cd Documents\`
5. List the contents with \`ls -la\`

Continue practicing these commands until they become second nature!`,
    estimatedTime: 30,
    prerequisites: [],
    commands: ['pwd', 'ls', 'cd'],
    tags: ['basics', 'navigation', 'beginner'],
    author: 'Linux Command Pro',
    lastUpdated: '2024-11-15',
    rating: 4.8,
    completions: 1250
  }
];

// Import quizzes from separate file
export const quizzes: Quiz[] = importedQuizzes;

// Calculate category counts
export const updateCategoryCounts = (commandList: Command[]): Category[] => {
  const counts: Record<string, number> = {};
  commandList.forEach(cmd => {
    counts[cmd.category] = (counts[cmd.category] || 0) + 1;
  });

  return categories.map(cat => ({
    ...cat,
    count: cat.id === 'all' ? commandList.length : (counts[cat.id] || 0)
  }));
};
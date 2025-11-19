import { Quiz, QuizQuestion } from '../types';

// Quiz Questions Database
export const quizQuestions: QuizQuestion[] = [
  // ==================== BEGINNER LEVEL QUESTIONS ====================
  
  // File Management - Beginner
  {
    id: 'q1',
    question: 'Which command is used to list all files including hidden files in a directory?',
    type: 'multiple-choice',
    options: ['ls -l', 'ls -a', 'ls -h', 'ls -k'],
    correctAnswer: 'ls -a',
    explanation: 'The -a flag with ls command shows all files including hidden files (files starting with a dot).',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'ls',
    points: 10
  },
  {
    id: 'q2',
    question: 'What command is used to change the current working directory?',
    type: 'multiple-choice',
    options: ['changed', 'chdr', 'dr', 'cd'],
    correctAnswer: 'cd',
    explanation: 'The cd (change directory) command is used to navigate between directories in the file system.',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'cd',
    points: 10
  },
  {
    id: 'q3',
    question: 'Which command is used to create a new directory?',
    type: 'multiple-choice',
    options: ['makedir', 'md', 'mkdir', 'createdir'],
    correctAnswer: 'mkdir',
    explanation: 'The mkdir (make directory) command creates a new directory in the specified location.',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'mkdir',
    points: 10
  },
  {
    id: 'q4',
    question: 'Which command is used to remove files?',
    type: 'multiple-choice',
    options: ['delete', 'rm', 'remove', 'erase'],
    correctAnswer: 'rm',
    explanation: 'The rm (remove) command is used to delete files and directories. Use with caution as it permanently deletes files.',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'rm',
    points: 10
  },
  {
    id: 'q5',
    question: 'Which command is used to display the contents of a file?',
    type: 'multiple-choice',
    options: ['show', 'display', 'cat', 'view'],
    correctAnswer: 'cat',
    explanation: 'The cat (concatenate) command displays the entire contents of a file to the terminal.',
    difficulty: 'beginner',
    category: 'text',
    commandId: 'cat',
    points: 10
  },
  {
    id: 'q6',
    question: 'Which command is used to copy files?',
    type: 'multiple-choice',
    options: ['copy', 'cp', 'cpy', 'duplicate'],
    correctAnswer: 'cp',
    explanation: 'The cp (copy) command creates a copy of files or directories.',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'cp',
    points: 10
  },
  {
    id: 'q7',
    question: 'Which command is used to move or rename files?',
    type: 'multiple-choice',
    options: ['move', 'mv', 'rename', 'rn'],
    correctAnswer: 'mv',
    explanation: 'The mv (move) command is used to move files to a different location or rename them.',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'mv',
    points: 10
  },
  {
    id: 'q8',
    question: 'Which symbol represents the user home directory?',
    type: 'multiple-choice',
    options: ['/', '.', '~', '..'],
    correctAnswer: '~',
    explanation: 'The tilde (~) symbol represents the current user\'s home directory (e.g., /home/username).',
    difficulty: 'beginner',
    category: 'files',
    points: 10
  },
  {
    id: 'q9',
    question: 'Which symbol represents the root directory?',
    type: 'multiple-choice',
    options: ['*', '$', '/', '#'],
    correctAnswer: '/',
    explanation: 'The forward slash (/) represents the root directory, the top-level directory in Linux file system.',
    difficulty: 'beginner',
    category: 'files',
    points: 10
  },
  {
    id: 'q10',
    question: 'Which command displays the current working directory?',
    type: 'multiple-choice',
    options: ['cwd', 'pwd', 'whereami', 'dir'],
    correctAnswer: 'pwd',
    explanation: 'The pwd (print working directory) command shows the full path of the current directory.',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'pwd',
    points: 10
  },

  // System Info - Beginner
  {
    id: 'q11',
    question: 'What is the core of the Linux operating system?',
    type: 'multiple-choice',
    options: ['Terminal', 'Kernel', 'Shell', 'Command'],
    correctAnswer: 'Kernel',
    explanation: 'The kernel is the core of Linux that manages hardware resources and provides essential services.',
    difficulty: 'beginner',
    category: 'system',
    points: 10
  },
  {
    id: 'q12',
    question: 'Which command is used to display the operating system name?',
    type: 'multiple-choice',
    options: ['wc', 'uname', 'countw', 'os'],
    correctAnswer: 'uname',
    explanation: 'The uname command displays system information including the operating system name.',
    difficulty: 'beginner',
    category: 'system',
    commandId: 'uname',
    points: 10
  },
  {
    id: 'q13',
    question: 'Which command shows disk space usage of filesystems?',
    type: 'multiple-choice',
    options: ['disk', 'space', 'df', 'du'],
    correctAnswer: 'df',
    explanation: 'The df (disk filesystem) command displays filesystem disk space usage.',
    difficulty: 'beginner',
    category: 'disk',
    commandId: 'df',
    points: 10
  },
  {
    id: 'q14',
    question: 'Which command shows directory space usage?',
    type: 'multiple-choice',
    options: ['du', 'disk', 'size', 'space'],
    correctAnswer: 'du',
    explanation: 'The du (disk usage) command displays space used by directories and files.',
    difficulty: 'beginner',
    category: 'disk',
    commandId: 'du',
    points: 10
  },
  {
    id: 'q15',
    question: 'What does OSS stand for?',
    type: 'multiple-choice',
    options: ['Original Source Software', 'Open System Software', 'Original System Server', 'Open Source Software'],
    correctAnswer: 'Open Source Software',
    explanation: 'OSS stands for Open Source Software, which is software with source code that anyone can inspect, modify, and enhance.',
    difficulty: 'beginner',
    category: 'system',
    points: 10
  },
  {
    id: 'q16',
    question: 'What does GNU stand for?',
    type: 'multiple-choice',
    options: ['Greek Needed Unix', 'General Unix', "GNU's Not Unix", 'General Noble Unix'],
    correctAnswer: "GNU's Not Unix",
    explanation: 'GNU is a recursive acronym for "GNU\'s Not Unix", a free software operating system.',
    difficulty: 'beginner',
    category: 'system',
    points: 10
  },
  {
    id: 'q17',
    question: 'Who founded the Linux Kernel?',
    type: 'multiple-choice',
    options: ['Richard Stallman', 'Linus Torvalds', 'Bill Gates', 'Ben Thomas'],
    correctAnswer: 'Linus Torvalds',
    explanation: 'Linus Torvalds created the Linux kernel in 1991 and continues to oversee its development.',
    difficulty: 'beginner',
    category: 'system',
    points: 10
  },

  // Text Processing - Beginner
  {
    id: 'q18',
    question: 'Which command counts the total number of lines, words, and characters in a file?',
    type: 'multiple-choice',
    options: ['wc', 'wcount', 'countw', 'count'],
    correctAnswer: 'wc',
    explanation: 'The wc (word count) command displays line, word, and character counts for files.',
    difficulty: 'beginner',
    category: 'text',
    commandId: 'wc',
    points: 10
  },
  {
    id: 'q19',
    question: 'Which command is used to sort lines in a file alphabetically?',
    type: 'multiple-choice',
    options: ['sh', 'sort -r', 'sort', 'st'],
    correctAnswer: 'sort',
    explanation: 'The sort command arranges lines of text files in alphabetical or numerical order.',
    difficulty: 'beginner',
    category: 'text',
    commandId: 'sort',
    points: 10
  },
  {
    id: 'q20',
    question: 'Which command is used to search for patterns in files?',
    type: 'multiple-choice',
    options: ['search', 'find', 'grep', 'locate'],
    correctAnswer: 'grep',
    explanation: 'The grep command searches for patterns in text using regular expressions.',
    difficulty: 'beginner',
    category: 'search',
    commandId: 'grep',
    points: 10
  },

  // Compression - Beginner
  {
    id: 'q21',
    question: 'Which command is used to compress files with gzip?',
    type: 'multiple-choice',
    options: ['compress', 'gzip', 'zip', 'pack'],
    correctAnswer: 'gzip',
    explanation: 'The gzip command compresses files using the GNU zip compression algorithm.',
    difficulty: 'beginner',
    category: 'compression',
    commandId: 'gzip',
    points: 10
  },
  {
    id: 'q22',
    question: 'Which command is used to create zip archives?',
    type: 'multiple-choice',
    options: ['archive', 'compress', 'zip', 'pack'],
    correctAnswer: 'zip',
    explanation: 'The zip command packages and compresses files into .zip archives.',
    difficulty: 'beginner',
    category: 'compression',
    commandId: 'zip',
    points: 10
  },
  {
    id: 'q23',
    question: 'Which command is used to extract zip archives?',
    type: 'multiple-choice',
    options: ['extract', 'unpack', 'unzip', 'decompress'],
    correctAnswer: 'unzip',
    explanation: 'The unzip command extracts files from zip archives.',
    difficulty: 'beginner',
    category: 'compression',
    commandId: 'unzip',
    points: 10
  },

  // User Management - Beginner
  {
    id: 'q24',
    question: 'Which command is used to change user password?',
    type: 'multiple-choice',
    options: ['password', 'pwd', 'passwd', 'chpwd'],
    correctAnswer: 'passwd',
    explanation: 'The passwd command changes user passwords in Linux.',
    difficulty: 'beginner',
    category: 'users',
    commandId: 'passwd',
    points: 10
  },
  {
    id: 'q25',
    question: 'Where are user passwords traditionally stored?',
    type: 'multiple-choice',
    options: ['/etc/passwd', '/root/password', '/etc/password', '/root/passwd'],
    correctAnswer: '/etc/passwd',
    explanation: 'User account information is stored in /etc/passwd, though passwords are now in /etc/shadow.',
    difficulty: 'beginner',
    category: 'users',
    points: 10
  },

  // ==================== INTERMEDIATE LEVEL QUESTIONS ====================

  // File Management - Intermediate
  {
    id: 'q26',
    question: 'Which command can be used to find files by name?',
    type: 'multiple-choice',
    options: ['search', 'find', 'locate', 'both find and locate'],
    correctAnswer: 'both find and locate',
    explanation: 'Both find and locate commands can search for files, but find searches in real-time while locate uses a database.',
    difficulty: 'intermediate',
    category: 'search',
    commandId: 'find',
    points: 20
  },
  {
    id: 'q27',
    question: 'What does the command "chmod 755 file.txt" do?',
    type: 'multiple-choice',
    options: [
      'Gives read, write, execute to owner; read, execute to group and others',
      'Gives full permissions to everyone',
      'Gives read-only to everyone',
      'Gives write permission only to owner'
    ],
    correctAnswer: 'Gives read, write, execute to owner; read, execute to group and others',
    explanation: '755 means rwxr-xr-x: owner has full permissions (7), group and others have read and execute (5).',
    difficulty: 'intermediate',
    category: 'permissions',
    commandId: 'chmod',
    points: 20
  },
  {
    id: 'q28',
    question: 'Which command is used to change file ownership?',
    type: 'multiple-choice',
    options: ['chmod', 'chown', 'chgrp', 'owner'],
    correctAnswer: 'chown',
    explanation: 'The chown (change owner) command changes the owner and group of files and directories.',
    difficulty: 'intermediate',
    category: 'permissions',
    commandId: 'chown',
    points: 20
  },
  {
    id: 'q29',
    question: 'What is the purpose of the tar command?',
    type: 'multiple-choice',
    options: [
      'To compress files',
      'To create archives',
      'To both archive and compress files',
      'To encrypt files'
    ],
    correctAnswer: 'To both archive and compress files',
    explanation: 'The tar command archives files, and with options like -z or -j, it can also compress them.',
    difficulty: 'intermediate',
    category: 'archive',
    commandId: 'tar',
    points: 20
  },
  {
    id: 'q30',
    question: 'Which option with ls command views file inode numbers?',
    type: 'multiple-choice',
    options: ['-l', '-i', '-o', '-a'],
    correctAnswer: '-i',
    explanation: 'The -i option with ls displays the inode number of each file.',
    difficulty: 'intermediate',
    category: 'files',
    commandId: 'ls',
    points: 20
  },

  // Process Management - Intermediate
  {
    id: 'q31',
    question: 'Which command is used to kill a process by name?',
    type: 'multiple-choice',
    options: ['kill', 'pkill', 'terminate', 'stop'],
    correctAnswer: 'pkill',
    explanation: 'The pkill command kills processes by name instead of PID, making it more convenient than kill.',
    difficulty: 'intermediate',
    category: 'processes',
    commandId: 'pkill',
    points: 20
  },
  {
    id: 'q32',
    question: 'Which command displays real-time system processes?',
    type: 'multiple-choice',
    options: ['ps', 'top', 'proc', 'tasks'],
    correctAnswer: 'top',
    explanation: 'The top command displays real-time, dynamic view of running processes and system resources.',
    difficulty: 'intermediate',
    category: 'processes',
    commandId: 'top',
    points: 20
  },
  {
    id: 'q33',
    question: 'What signal does "kill -9" send to a process?',
    type: 'multiple-choice',
    options: ['SIGTERM', 'SIGKILL', 'SIGHUP', 'SIGSTOP'],
    correctAnswer: 'SIGKILL',
    explanation: 'The -9 option sends SIGKILL, which forcefully terminates a process without cleanup.',
    difficulty: 'intermediate',
    category: 'processes',
    commandId: 'kill',
    points: 20
  },

  // Text Processing - Intermediate
  {
    id: 'q34',
    question: 'What does the sed command primarily do?',
    type: 'multiple-choice',
    options: [
      'Search for patterns',
      'Stream editing and text transformation',
      'Display file contents',
      'Compress files'
    ],
    correctAnswer: 'Stream editing and text transformation',
    explanation: 'sed (stream editor) is used for parsing and transforming text in files or streams.',
    difficulty: 'intermediate',
    category: 'text',
    commandId: 'sed',
    points: 20
  },
  {
    id: 'q35',
    question: 'Which command is used to display unique lines in a file?',
    type: 'multiple-choice',
    options: ['unique', 'uniq', 'distinct', 'diff'],
    correctAnswer: 'uniq',
    explanation: 'The uniq command filters out repeated lines in a file (requires sorted input).',
    difficulty: 'intermediate',
    category: 'text',
    commandId: 'uniq',
    points: 20
  },
  {
    id: 'q36',
    question: 'What does the awk command excel at?',
    type: 'multiple-choice',
    options: [
      'File compression',
      'Pattern scanning and text processing',
      'Network monitoring',
      'Disk management'
    ],
    correctAnswer: 'Pattern scanning and text processing',
    explanation: 'awk is a powerful text processing tool for pattern scanning, data extraction, and reporting.',
    difficulty: 'intermediate',
    category: 'text',
    commandId: 'awk',
    points: 20
  },

  // Network - Intermediate
  {
    id: 'q37',
    question: 'Which command tests network connectivity to a host?',
    type: 'multiple-choice',
    options: ['test', 'ping', 'connect', 'check'],
    correctAnswer: 'ping',
    explanation: 'The ping command sends ICMP echo requests to test network connectivity and measure latency.',
    difficulty: 'intermediate',
    category: 'network',
    commandId: 'ping',
    points: 20
  },
  {
    id: 'q38',
    question: 'Which command downloads files from the internet?',
    type: 'multiple-choice',
    options: ['download', 'get', 'wget', 'fetch'],
    correctAnswer: 'wget',
    explanation: 'The wget command downloads files from web servers using HTTP, HTTPS, or FTP protocols.',
    difficulty: 'intermediate',
    category: 'network',
    commandId: 'wget',
    points: 20
  },
  {
    id: 'q39',
    question: 'Which command shows network interface information?',
    type: 'multiple-choice',
    options: ['netinfo', 'ifconfig', 'netstat', 'network'],
    correctAnswer: 'ifconfig',
    explanation: 'The ifconfig command displays and configures network interface parameters.',
    difficulty: 'intermediate',
    category: 'network',
    commandId: 'ifconfig',
    points: 20
  },

  // System Info - Intermediate
  {
    id: 'q40',
    question: 'Which command displays memory usage?',
    type: 'multiple-choice',
    options: ['mem', 'memory', 'free', 'ram'],
    correctAnswer: 'free',
    explanation: 'The free command displays information about system memory usage, including RAM and swap.',
    difficulty: 'intermediate',
    category: 'system',
    commandId: 'free',
    points: 20
  },
  {
    id: 'q41',
    question: 'How many primary partitions can exist on one drive?',
    type: 'multiple-choice',
    options: ['1', '2', '16', '4'],
    correctAnswer: '4',
    explanation: 'A traditional MBR partition table supports up to 4 primary partitions on a single drive.',
    difficulty: 'intermediate',
    category: 'disk',
    points: 20
  },
  {
    id: 'q42',
    question: 'Which partition system ID type is used for swap partitions with fdisk?',
    type: 'multiple-choice',
    options: ['1', '82', '5', '83'],
    correctAnswer: '82',
    explanation: 'The partition system ID 82 is used for Linux swap partitions.',
    difficulty: 'intermediate',
    category: 'disk',
    points: 20
  },

  // Package Management - Intermediate
  {
    id: 'q43',
    question: 'What does RPM stand for?',
    type: 'multiple-choice',
    options: [
      'Recursive Package Manager',
      'Red Hat Package Manager',
      'Remote Package Manager',
      'Root Package Manager'
    ],
    correctAnswer: 'Red Hat Package Manager',
    explanation: 'RPM stands for Red Hat Package Manager, used in Red Hat-based distributions.',
    difficulty: 'intermediate',
    category: 'packages',
    points: 20
  },
  {
    id: 'q44',
    question: 'Which command is used to install packages on Debian-based systems?',
    type: 'multiple-choice',
    options: ['yum install', 'rpm -i', 'apt install', 'dnf install'],
    correctAnswer: 'apt install',
    explanation: 'The apt install command is used to install packages on Debian and Ubuntu systems.',
    difficulty: 'intermediate',
    category: 'packages',
    commandId: 'apt',
    points: 20
  },

  // Services - Intermediate
  {
    id: 'q45',
    question: 'Which command manages system services in modern Linux distributions?',
    type: 'multiple-choice',
    options: ['service', 'systemctl', 'init', 'daemon'],
    correctAnswer: 'systemctl',
    explanation: 'systemctl is the main command for managing systemd services in modern Linux distributions.',
    difficulty: 'intermediate',
    category: 'services',
    commandId: 'systemctl',
    points: 20
  },
  {
    id: 'q46',
    question: 'What is the default port for Apache HTTP server?',
    type: 'multiple-choice',
    options: ['8080', '443', '80', '3000'],
    correctAnswer: '80',
    explanation: 'Apache HTTP server listens on port 80 by default for HTTP connections.',
    difficulty: 'intermediate',
    category: 'network',
    points: 20
  },
  {
    id: 'q47',
    question: 'Where is the main Apache configuration file located?',
    type: 'multiple-choice',
    options: [
      '/etc/httpd/config.ini',
      '/etc/apache.conf',
      '/etc/httpd/conf/httpd.conf',
      '/etc/srm.conf'
    ],
    correctAnswer: '/etc/httpd/conf/httpd.conf',
    explanation: 'The main Apache configuration file is typically at /etc/httpd/conf/httpd.conf.',
    difficulty: 'intermediate',
    category: 'services',
    points: 20
  },

  // Shell Scripting - Intermediate
  {
    id: 'q48',
    question: 'Which character is used for command substitution in bash?',
    type: 'multiple-choice',
    options: ['$', '`', '#', '@'],
    correctAnswer: '`',
    explanation: 'Backticks (`) or $() are used for command substitution, executing a command and using its output.',
    difficulty: 'intermediate',
    category: 'shell',
    points: 20
  },
  {
    id: 'q49',
    question: 'What does the shebang "#!/bin/bash" indicate?',
    type: 'multiple-choice',
    options: [
      'A comment line',
      'The script interpreter',
      'Script author',
      'Script version'
    ],
    correctAnswer: 'The script interpreter',
    explanation: 'The shebang (#!) specifies which interpreter should execute the script.',
    difficulty: 'intermediate',
    category: 'shell',
    points: 20
  },
  {
    id: 'q50',
    question: 'Which file is executed when a bash login shell starts?',
    type: 'multiple-choice',
    options: ['.bashrc', '.bash_profile', '.bash_history', '.bash_logout'],
    correctAnswer: '.bash_profile',
    explanation: '.bash_profile is executed for login shells, while .bashrc is for interactive non-login shells.',
    difficulty: 'intermediate',
    category: 'shell',
    points: 20
  },

  // ==================== ADVANCED LEVEL QUESTIONS ====================

  // System Administration - Advanced
  {
    id: 'q51',
    question: 'What is the purpose of the /proc filesystem?',
    type: 'multiple-choice',
    options: [
      'Store process executables',
      'Provide interface to kernel data structures',
      'Store system logs',
      'Backup system files'
    ],
    correctAnswer: 'Provide interface to kernel data structures',
    explanation: '/proc is a virtual filesystem that provides an interface to kernel data structures and runtime information.',
    difficulty: 'advanced',
    category: 'system',
    points: 30
  },
  {
    id: 'q52',
    question: 'Which command can force all disk buffers to be written to disk?',
    type: 'multiple-choice',
    options: ['save', 'flush', 'edbuff', 'sync'],
    correctAnswer: 'sync',
    explanation: 'The sync command forces all pending disk writes to complete, ensuring data integrity.',
    difficulty: 'advanced',
    category: 'disk',
    commandId: 'sync',
    points: 30
  },
  {
    id: 'q53',
    question: 'What does the command "lsof" display?',
    type: 'multiple-choice',
    options: [
      'List of open files',
      'System logs',
      'File permissions',
      'Disk usage'
    ],
    correctAnswer: 'List of open files',
    explanation: 'lsof (list open files) shows all files opened by processes, including network connections.',
    difficulty: 'advanced',
    category: 'system',
    commandId: 'lsof',
    points: 30
  },

  // Networking - Advanced
  {
    id: 'q54',
    question: 'Which command is the modern replacement for netstat?',
    type: 'multiple-choice',
    options: ['ip', 'ss', 'ifconfig', 'route'],
    correctAnswer: 'ss',
    explanation: 'ss (socket statistics) is the modern, faster replacement for netstat for displaying network connections.',
    difficulty: 'advanced',
    category: 'network',
    commandId: 'ss',
    points: 30
  },
  {
    id: 'q55',
    question: 'What does the iptables command primarily manage?',
    type: 'multiple-choice',
    options: [
      'IP addresses',
      'Network interfaces',
      'Firewall rules',
      'Routing tables'
    ],
    correctAnswer: 'Firewall rules',
    explanation: 'iptables manages firewall rules for packet filtering and NAT in the Linux kernel.',
    difficulty: 'advanced',
    category: 'network',
    commandId: 'iptables',
    points: 30
  },
  {
    id: 'q56',
    question: 'Which command analyzes network traffic at the packet level?',
    type: 'multiple-choice',
    options: ['netstat', 'tcpdump', 'ping', 'traceroute'],
    correctAnswer: 'tcpdump',
    explanation: 'tcpdump captures and analyzes network packets, useful for network troubleshooting and security analysis.',
    difficulty: 'advanced',
    category: 'network',
    commandId: 'tcpdump',
    points: 30
  },
  {
    id: 'q57',
    question: 'What is the purpose of the "ip route" command?',
    type: 'multiple-choice',
    options: [
      'Display IP addresses',
      'Manage routing tables',
      'Test connectivity',
      'Monitor bandwidth'
    ],
    correctAnswer: 'Manage routing tables',
    explanation: 'The "ip route" command displays and modifies the kernel routing table.',
    difficulty: 'advanced',
    category: 'network',
    commandId: 'ip',
    points: 30
  },

  // Storage & Filesystem - Advanced
  {
    id: 'q58',
    question: 'Which command is used to create Linux filesystems?',
    type: 'multiple-choice',
    options: ['fsck', 'mkfs', 'fdisk', 'mount'],
    correctAnswer: 'mkfs',
    explanation: 'mkfs (make filesystem) creates a new filesystem on a partition or block device.',
    difficulty: 'advanced',
    category: 'disk',
    commandId: 'mkfs',
    points: 30
  },
  {
    id: 'q59',
    question: 'What is the purpose of the fsck command?',
    type: 'multiple-choice',
    options: [
      'Create filesystems',
      'Check and repair filesystems',
      'Mount filesystems',
      'Format partitions'
    ],
    correctAnswer: 'Check and repair filesystems',
    explanation: 'fsck (filesystem check) verifies and repairs filesystem consistency and integrity.',
    difficulty: 'advanced',
    category: 'disk',
    commandId: 'fsck',
    points: 30
  },
  {
    id: 'q60',
    question: 'Which file contains filesystem mount information at boot?',
    type: 'multiple-choice',
    options: ['/etc/fstab', '/etc/mtab', '/proc/mounts', '/etc/filesystems'],
    correctAnswer: '/etc/fstab',
    explanation: '/etc/fstab contains static information about filesystems to be mounted at boot time.',
    difficulty: 'advanced',
    category: 'disk',
    points: 30
  },

  // Security & Permissions - Advanced
  {
    id: 'q61',
    question: 'What does the "sudo" command allow?',
    type: 'multiple-choice',
    options: [
      'Switch user',
      'Execute commands as superuser',
      'Create new users',
      'Change passwords'
    ],
    correctAnswer: 'Execute commands as superuser',
    explanation: 'sudo allows permitted users to execute commands as root or another user with elevated privileges.',
    difficulty: 'advanced',
    category: 'users',
    commandId: 'sudo',
    points: 30
  },
  {
    id: 'q62',
    question: 'What is the purpose of SELinux?',
    type: 'multiple-choice',
    options: [
      'Disk encryption',
      'Mandatory access control',
      'Network firewall',
      'Package management'
    ],
    correctAnswer: 'Mandatory access control',
    explanation: 'SELinux (Security-Enhanced Linux) provides mandatory access control (MAC) for enhanced security.',
    difficulty: 'advanced',
    category: 'permissions',
    points: 30
  },
  {
    id: 'q63',
    question: 'What does the "chattr" command do?',
    type: 'multiple-choice',
    options: [
      'Change file attributes',
      'Change ownership',
      'Change permissions',
      'Change timestamps'
    ],
    correctAnswer: 'Change file attributes',
    explanation: 'chattr changes file attributes on Linux filesystems, like making files immutable.',
    difficulty: 'advanced',
    category: 'permissions',
    commandId: 'chattr',
    points: 30
  },

  // Process Management - Advanced
  {
    id: 'q64',
    question: 'What is the purpose of the "nice" command?',
    type: 'multiple-choice',
    options: [
      'Kill processes nicely',
      'Adjust process priority',
      'Display process information',
      'Manage process groups'
    ],
    correctAnswer: 'Adjust process priority',
    explanation: 'nice adjusts the scheduling priority of processes, affecting CPU time allocation.',
    difficulty: 'advanced',
    category: 'processes',
    commandId: 'nice',
    points: 30
  },
  {
    id: 'q65',
    question: 'What does the "strace" command do?',
    type: 'multiple-choice',
    options: [
      'Stack trace of errors',
      'System call trace',
      'String trace in files',
      'Storage trace'
    ],
    correctAnswer: 'System call trace',
    explanation: 'strace traces system calls and signals, useful for debugging and understanding program behavior.',
    difficulty: 'advanced',
    category: 'processes',
    commandId: 'strace',
    points: 30
  },
  {
    id: 'q66',
    question: 'What is a daemon in Linux?',
    type: 'multiple-choice',
    options: [
      'A virus',
      'A background service process',
      'A system error',
      'A file type'
    ],
    correctAnswer: 'A background service process',
    explanation: 'A daemon is a background process that runs continuously, providing system services.',
    difficulty: 'advanced',
    category: 'processes',
    points: 30
  },

  // Kernel & System - Advanced
  {
    id: 'q67',
    question: 'Which command displays or modifies kernel parameters at runtime?',
    type: 'multiple-choice',
    options: ['sysconfig', 'sysctl', 'kernelctl', 'modprobe'],
    correctAnswer: 'sysctl',
    explanation: 'sysctl reads and modifies kernel parameters at runtime via the /proc/sys interface.',
    difficulty: 'advanced',
    category: 'system',
    commandId: 'sysctl',
    points: 30
  },
  {
    id: 'q68',
    question: 'What is the purpose of the "modprobe" command?',
    type: 'multiple-choice',
    options: [
      'Modify process priorities',
      'Add or remove kernel modules',
      'Probe hardware',
      'Modify file permissions'
    ],
    correctAnswer: 'Add or remove kernel modules',
    explanation: 'modprobe adds or removes modules from the Linux kernel, handling dependencies automatically.',
    difficulty: 'advanced',
    category: 'system',
    commandId: 'modprobe',
    points: 30
  },
  {
    id: 'q69',
    question: 'What does "dmesg" display?',
    type: 'multiple-choice',
    options: [
      'Disk messages',
      'Kernel ring buffer messages',
      'System error messages',
      'Network messages'
    ],
    correctAnswer: 'Kernel ring buffer messages',
    explanation: 'dmesg displays kernel ring buffer messages, showing kernel and hardware information.',
    difficulty: 'advanced',
    category: 'system',
    commandId: 'dmesg',
    points: 30
  },

  // Shell Scripting - Advanced
  {
    id: 'q70',
    question: 'What is the exit status of a successfully executed command?',
    type: 'multiple-choice',
    options: ['1', '0', '-1', '255'],
    correctAnswer: '0',
    explanation: 'In Unix/Linux, an exit status of 0 indicates successful command execution.',
    difficulty: 'advanced',
    category: 'shell',
    points: 30
  },
  {
    id: 'q71',
    question: 'What does "$?" represent in bash?',
    type: 'multiple-choice',
    options: [
      'Current process ID',
      'Exit status of last command',
      'Number of arguments',
      'Current user'
    ],
    correctAnswer: 'Exit status of last command',
    explanation: '$? contains the exit status (return code) of the last executed command.',
    difficulty: 'advanced',
    category: 'shell',
    points: 30
  },
  {
    id: 'q72',
    question: 'What is the purpose of "set -e" in a bash script?',
    type: 'multiple-choice',
    options: [
      'Enable debugging',
      'Exit on error',
      'Enable verbose mode',
      'Export all variables'
    ],
    correctAnswer: 'Exit on error',
    explanation: 'set -e causes the script to exit immediately if any command returns a non-zero status.',
    difficulty: 'advanced',
    category: 'shell',
    points: 30
  },

  // Text Processing - Advanced
  {
    id: 'q73',
    question: 'Which vi editor command deletes a single character?',
    type: 'multiple-choice',
    options: ['a', 'x', 'y', 'z'],
    correctAnswer: 'x',
    explanation: 'In vi editor, the x command deletes the character under the cursor.',
    difficulty: 'advanced',
    category: 'text',
    points: 30
  },
  {
    id: 'q74',
    question: 'What does the sed command "sed \'/^$/d\' file" do?',
    type: 'multiple-choice',
    options: [
      'Delete all lines',
      'Delete blank lines',
      'Delete first line',
      'Delete last line'
    ],
    correctAnswer: 'Delete blank lines',
    explanation: 'This sed command matches lines that start and end with nothing (^$), i.e., blank lines, and deletes them.',
    difficulty: 'advanced',
    category: 'text',
    commandId: 'sed',
    points: 30
  },
  {
    id: 'q75',
    question: 'Which command displays the octal value of text?',
    type: 'multiple-choice',
    options: ['od', 'oct', 'octal', 'hex'],
    correctAnswer: 'od',
    explanation: 'The od (octal dump) command displays file contents in various formats including octal.',
    difficulty: 'advanced',
    category: 'text',
    commandId: 'od',
    points: 30
  },

  // DNS & Services - Advanced
  {
    id: 'q76',
    question: 'Which service translates domain names to IP addresses?',
    type: 'multiple-choice',
    options: ['NIS', 'DNS', 'SMB', 'NFS'],
    correctAnswer: 'DNS',
    explanation: 'DNS (Domain Name System) translates human-readable domain names to IP addresses.',
    difficulty: 'advanced',
    category: 'network',
    points: 30
  },
  {
    id: 'q77',
    question: 'Which server is used with the BIND package?',
    type: 'multiple-choice',
    options: ['apache', 'nginx', 'named', 'httpd'],
    correctAnswer: 'named',
    explanation: 'named (name daemon) is the DNS server component of the BIND (Berkeley Internet Name Domain) package.',
    difficulty: 'advanced',
    category: 'services',
    points: 30
  },
  {
    id: 'q78',
    question: 'What is NFS used for?',
    type: 'multiple-choice',
    options: [
      'Network File System - sharing files over network',
      'Network Firewall Service',
      'Network Forensic System',
      'Network Filtering Service'
    ],
    correctAnswer: 'Network File System - sharing files over network',
    explanation: 'NFS (Network File System) allows sharing files and directories across a network.',
    difficulty: 'advanced',
    category: 'network',
    points: 30
  },

  // Boot & Init - Advanced
  {
    id: 'q79',
    question: 'What does LILO stand for?',
    type: 'multiple-choice',
    options: [
      'Linux Leveraging Order',
      'Linux Loader',
      'Linux Low Order',
      'Linux Link Object'
    ],
    correctAnswer: 'Linux Loader',
    explanation: 'LILO stands for Linux Loader, a legacy bootloader (now largely replaced by GRUB).',
    difficulty: 'advanced',
    category: 'system',
    points: 30
  },
  {
    id: 'q80',
    question: 'Which directory contains system configuration files?',
    type: 'multiple-choice',
    options: ['/bin/', '/root/', '/etc/', '/dev/'],
    correctAnswer: '/etc/',
    explanation: 'The /etc directory contains system-wide configuration files in Linux.',
    difficulty: 'advanced',
    category: 'system',
    points: 30
  },

  // Additional Fill-in-the-Blank Questions
  {
    id: 'q81',
    question: 'To view the last 20 lines of a file, use the command: ____ -n 20 filename',
    type: 'fill-blank',
    correctAnswer: 'tail',
    explanation: 'The tail command with -n option displays the last N lines of a file.',
    difficulty: 'beginner',
    category: 'text',
    commandId: 'tail',
    points: 15
  },
  {
    id: 'q82',
    question: 'The command to view the first 10 lines of a file is: ____',
    type: 'fill-blank',
    correctAnswer: 'head',
    explanation: 'The head command displays the first lines of a file (10 by default).',
    difficulty: 'beginner',
    category: 'text',
    commandId: 'head',
    points: 15
  },
  {
    id: 'q83',
    question: 'To create an empty file, use the command: ____ filename',
    type: 'fill-blank',
    correctAnswer: 'touch',
    explanation: 'The touch command creates an empty file or updates the timestamp of an existing file.',
    difficulty: 'beginner',
    category: 'files',
    commandId: 'touch',
    points: 15
  },
  {
    id: 'q84',
    question: 'To find your current username, use the command: ____',
    type: 'fill-blank',
    correctAnswer: 'whoami',
    explanation: 'The whoami command displays the current logged-in username.',
    difficulty: 'beginner',
    category: 'users',
    commandId: 'whoami',
    points: 15
  },
  {
    id: 'q85',
    question: 'To compare two files line by line, use the command: ____',
    type: 'fill-blank',
    correctAnswer: 'diff',
    explanation: 'The diff command compares files line by line and shows the differences.',
    difficulty: 'intermediate',
    category: 'text',
    commandId: 'diff',
    points: 20
  }
];

// Predefined Quizzes
export const quizzes: Quiz[] = [
  {
    id: 'beginner-basics',
    title: 'Linux Basics Quiz',
    description: 'Test your knowledge of fundamental Linux commands and concepts. Perfect for beginners starting their Linux journey.',
    difficulty: 'beginner',
    category: 'all',
    questions: quizQuestions.filter(q => q.difficulty === 'beginner').slice(0, 15),
    timeLimit: 20,
    passingScore: 70
  },
  {
    id: 'beginner-files',
    title: 'File Management Fundamentals',
    description: 'Master the basics of file and directory operations in Linux.',
    difficulty: 'beginner',
    category: 'files',
    questions: quizQuestions.filter(q => q.difficulty === 'beginner' && q.category === 'files'),
    timeLimit: 15,
    passingScore: 70
  },
  {
    id: 'intermediate-advanced',
    title: 'Intermediate Linux Skills',
    description: 'Challenge yourself with intermediate-level Linux commands and system administration tasks.',
    difficulty: 'intermediate',
    category: 'all',
    questions: quizQuestions.filter(q => q.difficulty === 'intermediate').slice(0, 15),
    timeLimit: 25,
    passingScore: 75
  },
  {
    id: 'intermediate-processes',
    title: 'Process Management Deep Dive',
    description: 'Learn advanced process management techniques and commands.',
    difficulty: 'intermediate',
    category: 'processes',
    questions: quizQuestions.filter(q => q.difficulty === 'intermediate' && q.category === 'processes'),
    timeLimit: 15,
    passingScore: 75
  },
  {
    id: 'intermediate-network',
    title: 'Network Administration Essentials',
    description: 'Test your networking knowledge and command proficiency.',
    difficulty: 'intermediate',
    category: 'network',
    questions: quizQuestions.filter(q => q.difficulty === 'intermediate' && q.category === 'network'),
    timeLimit: 20,
    passingScore: 75
  },
  {
    id: 'advanced-master',
    title: 'Linux Expert Challenge',
    description: 'The ultimate test for experienced Linux users and system administrators.',
    difficulty: 'advanced',
    category: 'all',
    questions: quizQuestions.filter(q => q.difficulty === 'advanced').slice(0, 20),
    timeLimit: 35,
    passingScore: 80
  },
  {
    id: 'advanced-security',
    title: 'Security & Permissions Mastery',
    description: 'Advanced security concepts, permissions, and system hardening.',
    difficulty: 'advanced',
    category: 'permissions',
    questions: quizQuestions.filter(q => q.difficulty === 'advanced' && (q.category === 'permissions' || q.category === 'users')),
    timeLimit: 20,
    passingScore: 80
  },
  {
    id: 'advanced-system',
    title: 'System Administration Pro',
    description: 'Advanced system administration, kernel management, and troubleshooting.',
    difficulty: 'advanced',
    category: 'system',
    questions: quizQuestions.filter(q => q.difficulty === 'advanced' && q.category === 'system'),
    timeLimit: 25,
    passingScore: 80
  },
  {
    id: 'text-processing',
    title: 'Text Processing & Editing',
    description: 'Master text manipulation commands like sed, awk, grep, and vi.',
    difficulty: 'intermediate',
    category: 'text',
    questions: quizQuestions.filter(q => q.category === 'text'),
    timeLimit: 25,
    passingScore: 75
  },
  {
    id: 'comprehensive-test',
    title: 'Comprehensive Linux Assessment',
    description: 'A complete test covering beginner to advanced topics across all categories.',
    difficulty: 'intermediate',
    category: 'all',
    questions: [
      ...quizQuestions.filter(q => q.difficulty === 'beginner').slice(0, 10),
      ...quizQuestions.filter(q => q.difficulty === 'intermediate').slice(0, 10),
      ...quizQuestions.filter(q => q.difficulty === 'advanced').slice(0, 10)
    ],
    timeLimit: 45,
    passingScore: 75
  }
];

// Helper function to get quiz by ID
export function getQuizById(id: string): Quiz | undefined {
  return quizzes.find(quiz => quiz.id === id);
}

// Helper function to get quizzes by difficulty
export function getQuizzesByDifficulty(difficulty: 'beginner' | 'intermediate' | 'advanced'): Quiz[] {
  return quizzes.filter(quiz => quiz.difficulty === difficulty);
}

// Helper function to get quizzes by category
export function getQuizzesByCategory(category: string): Quiz[] {
  return quizzes.filter(quiz => quiz.category === category);
}

// Helper function to get random questions
export function getRandomQuestions(count: number, difficulty?: 'beginner' | 'intermediate' | 'advanced', category?: string): QuizQuestion[] {
  let filteredQuestions = [...quizQuestions];
  
  if (difficulty) {
    filteredQuestions = filteredQuestions.filter(q => q.difficulty === difficulty);
  }
  
  if (category && category !== 'all') {
    filteredQuestions = filteredQuestions.filter(q => q.category === category);
  }
  
  // Shuffle and return requested count
  const shuffled = filteredQuestions.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, Math.min(count, shuffled.length));
}

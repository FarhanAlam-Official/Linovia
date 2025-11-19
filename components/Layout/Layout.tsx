'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Terminal, GraduationCap, Trophy, FileText, Info,
  Github, Star, Settings, Menu, X 
} from 'lucide-react';

interface NavigationItem {
  path: string;
  label: string;
  icon: React.ComponentType<{ className?: string }>;
  description: string;
}

const navigationItems: NavigationItem[] = [
  {
    path: '/',
    label: 'Home',
    icon: Terminal,
    description: 'Dashboard and overview'
  },
  {
    path: '/commands',
    label: 'Commands',
    icon: Terminal,
    description: 'Browse all Linux commands'
  },
  {
    path: '/tutorials',
    label: 'Tutorials',
    icon: GraduationCap,
    description: 'Step-by-step learning guides'
  },
  {
    path: '/quiz',
    label: 'Quiz',
    icon: Trophy,
    description: 'Test your knowledge'
  },
  {
    path: '/cheatsheet',
    label: 'Cheat Sheet',
    icon: FileText,
    description: 'Quick reference guide'
  },
  {
    path: '/about',
    label: 'About',
    icon: Info,
    description: 'About this project'
  }
];

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const pathname = usePathname();

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const isActiveRoute = (path: string): boolean => {
    if (path === '/') {
      return pathname === path;
    }
    return pathname?.startsWith(path) || false;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
      {/* Navigation Header */}
      <header className="bg-black/40 backdrop-blur-md border-b border-purple-500/20 sticky top-0 z-50 shadow-2xl shadow-purple-500/10">
        <div className="max-w-7xl mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 group-hover:from-purple-500 group-hover:to-pink-500 transition-all shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50">
                <Terminal className="w-6 h-6 text-white" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold gradient-text">
                  Linovia
                </h1>
                <p className="text-xs text-purple-300 -mt-1 group-hover:text-purple-200 transition-colors">Master Linux Commands</p>
              </div>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-1">
              {navigationItems.map((item) => {
                const Icon = item.icon;
                const isActive = isActiveRoute(item.path);
                
                return (
                  <Link
                    key={item.path}
                    href={item.path}
                    className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all group relative ${
                      isActive
                        ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                        : 'text-purple-200 hover:text-white hover:bg-white/10'
                    }`}
                    title={item.description}
                  >
                    <Icon className="w-4 h-4" />
                    <span className="font-medium">{item.label}</span>
                    {isActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-pink-400 rounded-full" />
                    )}
                  </Link>
                );
              })}
            </nav>

            {/* Right side actions */}
            <div className="flex items-center gap-3">
              {/* GitHub Link */}
              <a
                href="https://github.com/linux-commands-pro"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-purple-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                title="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

              {/* Settings */}
              <button
                className="p-2 text-purple-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                title="Settings"
              >
                <Settings className="w-5 h-5" />
              </button>

              {/* Mobile menu button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-purple-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
              >
                {isMobileMenuOpen ? (
                  <X className="w-5 h-5" />
                ) : (
                  <Menu className="w-5 h-5" />
                )}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-purple-500/20">
              <nav className="flex flex-col gap-1">
                {navigationItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = isActiveRoute(item.path);
                  
                  return (
                    <Link
                      key={item.path}
                      href={item.path}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                        isActive
                          ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/50'
                          : 'text-purple-200 hover:text-white hover:bg-white/10'
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                      <div>
                        <div className="font-medium">{item.label}</div>
                        <div className="text-xs opacity-70">{item.description}</div>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          )}
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-black/40 backdrop-blur-md border-t border-purple-500/20 mt-12">
        <div className="max-w-7xl mx-auto px-4 py-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-purple-600 to-pink-600 shadow-lg shadow-purple-500/30">
                  <Terminal className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold gradient-text">Linovia</h3>
                  <p className="text-purple-300 text-sm">Master Linux Commands</p>
                </div>
              </div>
              <p className="text-purple-200 text-sm leading-relaxed mb-4">
                Comprehensive Linux command reference, tutorials, and interactive learning platform. 
                Master Ubuntu and Linux commands with detailed examples and practice exercises on Linovia.
              </p>
              <div className="flex items-center gap-4">
                <a
                  href="https://github.com/linux-commands-pro"
                  className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
                >
                  <Github className="w-4 h-4" />
                  <span className="text-sm">GitHub</span>
                </a>
                <a
                  href="#"
                  className="flex items-center gap-2 text-purple-300 hover:text-white transition-colors"
                >
                  <Star className="w-4 h-4" />
                  <span className="text-sm">Star this project</span>
                </a>
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block text-purple-300 hover:text-white text-sm transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors">
                  Documentation
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors">
                  API Reference
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors">
                  Community
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors">
                  Support
                </a>
              </div>
            </div>
          </div>

          <div className="border-t border-purple-500/20 pt-6 mt-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-purple-300 text-sm">
                © 2024 Linovia. Made with ❤️ by Farhan Alam for the Linux community.
              </p>
              <p className="text-purple-400 text-sm">
                Last updated: November 16, 2024
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
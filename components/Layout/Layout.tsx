'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { 
  Terminal, GraduationCap, Trophy, FileText, Info,
  Github, Star, Settings, Menu, X, Instagram, Facebook, Linkedin, Heart 
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
              <div className="relative flex items-center justify-center w-12 h-12 rounded-xl overflow-hidden bg-white/10 group-hover:bg-white/20 transition-all shadow-lg shadow-purple-500/30 group-hover:shadow-purple-500/50">
                <Image 
                  src="/logo.png" 
                  alt="Linovia Logo" 
                  width={48} 
                  height={48}
                  className="object-contain p-1"
                />
              </div>
              <div>
                <h1 className="text-lg sm:text-xl font-bold gradient-text">
                  Linovia
                </h1>
                <p className="text-[10px] sm:text-xs text-purple-300 -mt-1 group-hover:text-purple-200 transition-colors">Master Linux Commands</p>
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
                href="https://github.com/FarhanAlam-Official"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-purple-300 hover:text-white hover:bg-white/10 rounded-lg transition-all"
                title="View on GitHub"
              >
                <Github className="w-5 h-5" />
              </a>

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
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Brand Section */}
            <div className="md:col-span-2">
              <div className="flex items-center gap-3 mb-4">
                <div className="flex items-center justify-center w-14 h-14 rounded-xl overflow-hidden bg-white/10 shadow-lg shadow-purple-500/30">
                  <Image 
                    src="/logo.png" 
                    alt="Linovia Logo" 
                    width={56} 
                    height={56}
                    className="object-contain p-1"
                  />
                </div>
                <div>
                  <h3 className="text-2xl font-bold gradient-text">Linovia</h3>
                  <p className="text-purple-300 text-sm">Master Linux Commands</p>
                </div>
              </div>
              <p className="text-purple-200 text-sm leading-relaxed mb-6 max-w-md">
                Comprehensive Linux command reference, tutorials, and interactive learning platform. 
                Master Ubuntu and Linux commands with detailed examples and practice exercises.
              </p>
              
              {/* Social Media Section */}
              <div className="space-y-3">
                <h4 className="text-white font-semibold text-sm mb-3">Connect With Us</h4>
                <div className="flex flex-wrap gap-3">
                  <a
                    href="https://github.com/FarhanAlam-Official"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn social-btn-github"
                    title="Follow us on GitHub"
                  >
                    <Github className="w-5 h-5" />
                  </a>
                  <a
                    href="https://instagram.com/farhan.alam.01"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn social-btn-instagram"
                    title="Follow us on Instagram"
                  >
                    <Instagram className="w-5 h-5" />
                  </a>
                  <a
                    href="https://facebook.com/farhanalam930"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn social-btn-facebook"
                    title="Follow us on Facebook"
                  >
                    <Facebook className="w-5 h-5" />
                  </a>
                  <a
                    href="https://linkedin.com/in/farhan-alam-aa56b2309"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-btn social-btn-linkedin"
                    title="Connect on LinkedIn"
                  >
                    <Linkedin className="w-5 h-5" />
                  </a>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navigationItems.slice(0, 4).map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="block text-purple-300 hover:text-white text-sm transition-colors footer-link"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* Resources */}
            <div>
              <h4 className="text-white font-semibold mb-4">Resources</h4>
              <div className="space-y-2">
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors footer-link">
                  Documentation
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors footer-link">
                  API Reference
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors footer-link">
                  Community
                </a>
                <a href="#" className="block text-purple-300 hover:text-white text-sm transition-colors footer-link">
                  Support
                </a>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="border-t border-purple-500/20 pt-6">
            <div className="flex flex-col md:flex-row justify-between items-center gap-4">
              <div className="flex items-center gap-2 text-purple-300 text-sm">
                <span>© 2024 Linovia. All rights reserved.</span>
              </div>
              <div className="flex items-center gap-1 text-purple-300 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-pink-500 fill-pink-500 animate-pulse" />
                <span>by</span>
                <a
                  href="https://github.com/FarhanAlam-Official"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-purple-200 hover:text-white font-medium transition-colors footer-link"
                >
                  Farhan Alam
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
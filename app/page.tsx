'use client';

import Layout from '@/components/Layout/Layout'
import Link from 'next/link';
import { 
  Terminal, Book, GraduationCap, Trophy, Star, Search, Zap, Award, TrendingUp, Users,
  ArrowRight, Play, CheckCircle, Clock
} from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats = [
    { label: 'Commands', value: '200+', icon: Terminal },
    { label: 'Categories', value: '15', icon: Book },
    { label: 'Tutorials', value: '25+', icon: GraduationCap },
    { label: 'Users', value: '10K+', icon: Users }
  ];

  const features = [
    {
      icon: Search,
      title: 'Advanced Search',
      description: 'Find commands instantly with powerful search and filtering capabilities'
    },
    {
      icon: Book,
      title: 'Detailed Examples',
      description: 'Real-world examples with explanations and expected outputs'
    },
    {
      icon: Star,
      title: 'Favorites System',
      description: 'Save and organize your most-used commands for quick access'
    },
    {
      icon: Trophy,
      title: 'Interactive Quizzes',
      description: 'Test your knowledge and track your progress with engaging quizzes'
    }
  ];

  const popularCommands = [
    { name: 'ls', usage: 'ls -la', desc: 'List directory contents' },
    { name: 'grep', usage: 'grep "pattern" file', desc: 'Search text patterns' },
    { name: 'find', usage: 'find . -name "*.txt"', desc: 'Find files and directories' },
    { name: 'chmod', usage: 'chmod 755 file', desc: 'Change file permissions' }
  ];

  return (
    <Layout>
      <article className="min-h-screen">
        {/* Hero Section */}
        <section className="relative overflow-hidden" aria-label="Hero section">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            {[...Array(20)].map((_, i) => (
              <div 
                key={i}
                className="absolute rounded-full bg-purple-500/10"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  width: `${Math.random() * 100 + 20}px`,
                  height: `${Math.random() * 100 + 20}px`,
                  animation: `float ${Math.random() * 10 + 10}s infinite ease-in-out`,
                  animationDelay: `${Math.random() * 5}s`
                }}
              />
            ))}
          </div>
          
          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <div className={`text-center mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="flex items-center justify-center gap-4 mb-6 animate-float">
                <div className="relative">
                  <img 
                    src="/logo.png" 
                    alt="Linovia Logo - Linux Command Learning Platform" 
                    className="w-16 h-16 md:w-20 md:h-20 drop-shadow-2xl"
                    width="80"
                    height="80"
                  />
                  <div className="absolute -inset-2 bg-purple-500 rounded-full blur-xl opacity-30 animate-pulse"></div>
                </div>
                <h1 className="text-5xl md:text-7xl font-bold">
                  <span className="gradient-text animate-fade-in">
                    Linovia
                  </span>
                </h1>
              </div>
              <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed animate-slide-up delay-150">
                Master Linux commands with 200+ detailed command references, interactive tutorials, 
                and practice exercises. From beginner basics to advanced system administration - all free, forever.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center animate-slide-up delay-300">
                <Link
                  href="/commands"
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105 transform hover:-translate-y-1 duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    Browse Commands
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
                <Link
                  href="/tutorials"
                  className="px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all hover:scale-105 transform hover:-translate-y-1 duration-300 group"
                >
                  <span className="flex items-center gap-2">
                    Start Learning
                    <Play className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6" role="list" aria-label="Platform statistics">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className={`bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all transform hover:-translate-y-2 duration-300 shadow-lg hover:shadow-xl ${isVisible ? 'animate-fade-in' : ''}`}
                    style={{ animationDelay: `${index * 100}ms` }}
                    role="listitem"
                  >
                    <div className="flex justify-center mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-full group-hover:bg-purple-500/30 transition-colors">
                        <Icon className="w-8 h-8 text-purple-400" aria-hidden="true" />
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-white mb-1 text-center">{stat.value}</div>
                    <div className="text-purple-200 text-sm text-center">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20" aria-label="Key features">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">
                Why Choose Linovia?
              </h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Everything you need to become proficient with Linux commands in one comprehensive, free platform
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className={`bg-gradient-to-b from-slate-900/90 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:-translate-y-2 duration-300 group hover:shadow-2xl ${isVisible ? 'animate-fade-in' : ''}`}
                    style={{ animationDelay: `${index * 150 + 200}ms` }}
                  >
                    <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4 group-hover:bg-purple-500/30 transition-colors group-hover:rotate-6 duration-300">
                      <Icon className="w-6 h-6 text-purple-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                    <p className="text-purple-200">{feature.description}</p>
                    <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300 rounded-full"></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Popular Commands Section */}
        <section className="py-20" aria-label="Popular Linux commands">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex items-center justify-between mb-12">
              <div>
                <h2 className="text-4xl font-bold text-white mb-4">Most Popular Linux Commands</h2>
                <p className="text-xl text-purple-200">
                  Master the most frequently used Linux commands with real-world examples
                </p>
              </div>
              <Link
                href="/commands"
                className="hidden md:flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white rounded-lg transition-all"
              >
                View All
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {popularCommands.map((cmd, index) => (
                <div
                  key={index}
                  className={`bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all transform hover:-translate-y-1 duration-300 group hover:shadow-xl ${isVisible ? 'animate-fade-in' : ''}`}
                  style={{ animationDelay: `${index * 100 + 400}ms` }}
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold text-purple-400 font-mono mb-2 group-hover:text-pink-400 transition-colors">{cmd.name}</h3>
                      <p className="text-gray-300">{cmd.desc}</p>
                    </div>
                    <div className="p-2 bg-green-500/20 rounded-full group-hover:bg-green-500/30 transition-colors">
                      <TrendingUp className="w-5 h-5 text-green-400" />
                    </div>
                  </div>
                  <div className="bg-black/40 rounded-lg p-4 border border-cyan-500/20 group-hover:border-cyan-500/40 transition-colors">
                    <code className="text-cyan-400 font-mono group-hover:text-cyan-300 transition-colors">{cmd.usage}</code>
                  </div>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center text-sm text-purple-300">
                    <span>Click to see examples</span>
                    <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* SEO Content Section */}
        <section className="py-20 bg-gradient-to-b from-transparent to-purple-950/30" aria-label="About Linovia platform">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-white mb-6 text-center">
                Your Complete Linux Command Learning Platform
              </h2>
              <div className="prose prose-invert max-w-none space-y-4 text-purple-100">
                <p className="text-lg leading-relaxed">
                  <strong>Linovia</strong> is a comprehensive, free, and open-source platform designed to help developers, 
                  system administrators, and Linux enthusiasts master the Linux command line. Whether you&apos;re just starting 
                  your Linux journey or looking to expand your system administration skills, Linovia provides everything 
                  you need in one place.
                </p>
                <p className="text-lg leading-relaxed">
                  Our platform features over <strong>200 Linux commands</strong> with detailed explanations, real-world examples, 
                  usage flags, and practical tips. Each command is categorized by difficulty level and includes multiple examples 
                  showing exactly how to use it in different scenarios. From basic file operations with <code className="text-cyan-400 bg-black/40 px-2 py-1 rounded">ls</code> and <code className="text-cyan-400 bg-black/40 px-2 py-1 rounded">cd</code>, 
                  to advanced system administration with <code className="text-cyan-400 bg-black/40 px-2 py-1 rounded">systemctl</code> and <code className="text-cyan-400 bg-black/40 px-2 py-1 rounded">iptables</code>, we cover it all.
                </p>
                <p className="text-lg leading-relaxed">
                  Beyond just command references, Linovia offers <strong>interactive tutorials</strong> that guide you through 
                  complex topics step-by-step, <strong>practice quizzes</strong> to test your knowledge, and a 
                  <strong> quick-reference cheat sheet</strong> for daily use. Our search functionality supports both exact 
                  command matching and natural language queries, making it easy to find what you need quickly.
                </p>
                <div className="grid md:grid-cols-2 gap-6 mt-8">
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Perfect for Beginners</h3>
                    <p>Start with our beginner-friendly tutorials and gradually progress to more advanced topics. 
                    Clear explanations and practical examples make learning Linux accessible to everyone.</p>
                  </div>
                  <div className="bg-white/5 backdrop-blur-sm rounded-lg p-6 border border-purple-500/20">
                    <h3 className="text-xl font-semibold text-white mb-3">Advanced Topics Covered</h3>
                    <p>Experienced users will find comprehensive coverage of advanced topics including shell scripting, 
                    networking, security, and system administration best practices.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}
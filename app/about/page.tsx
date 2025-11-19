'use client';

import React from 'react';
import Layout from '@/components/Layout/Layout';
import { useAppContext } from '@/lib/context/AppContext';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { 
  Terminal, Code, Heart, Github, Star, Users, 
  Book, Award, Zap, Shield, Globe, Rocket 
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const { commands, categories, tutorials, isLoading } = useAppContext();

  if (isLoading) {
    return (
      <Layout>
        <div className="min-h-screen flex items-center justify-center">
          <LoadingSpinner size="lg" />
        </div>
      </Layout>
    );
  }

  const stats = [
    { label: 'Commands', value: commands.length, icon: Terminal, color: 'purple' },
    { label: 'Categories', value: categories.filter(c => c.id !== 'all').length, icon: Book, color: 'blue' },
    { label: 'Tutorials', value: tutorials.length, icon: Award, color: 'yellow' },
    { label: 'Users', value: '10K+', icon: Users, color: 'green' }
  ];

  const features = [
    {
      icon: Zap,
      title: 'Comprehensive Reference',
      description: 'Extensive collection of Linux commands with detailed examples and explanations'
    },
    {
      icon: Book,
      title: 'Interactive Tutorials',
      description: 'Step-by-step guides to master Linux commands from beginner to advanced'
    },
    {
      icon: Award,
      title: 'Practice Quizzes',
      description: 'Test your knowledge with interactive quizzes and track your progress'
    },
    {
      icon: Shield,
      title: 'Always Updated',
      description: 'Regularly updated with new commands, examples, and best practices'
    }
  ];

  const techStack = [
    { name: 'Next.js', description: 'React framework for production' },
    { name: 'TypeScript', description: 'Type-safe JavaScript' },
    { name: 'Tailwind CSS', description: 'Utility-first CSS framework' },
    { name: 'Fuse.js', description: 'Lightweight fuzzy-search library' },
    { name: 'React Markdown', description: 'Markdown rendering for tutorials' }
  ];

  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20" />
          <div className="relative max-w-7xl mx-auto px-4 py-20">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center p-4 bg-purple-500/20 rounded-full mb-6">
                <Terminal className="w-12 h-12 text-purple-400" />
              </div>
            <h1 className="text-6xl font-bold gradient-text mb-4">
                  About Linux
                <br />
                <span className="text-white text-4xl">Command Pro</span>
              </h1>
              <p className="text-xl md:text-2xl text-purple-200 mb-8 max-w-3xl mx-auto leading-relaxed">
                A comprehensive, open-source platform designed to make Linux command learning
                accessible, interactive, and enjoyable for everyone.
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20 hover:bg-white/20 transition-all text-center"
                  >
                    <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                    <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                    <div className="text-purple-200 text-sm">{stat.label}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Our Mission</h2>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                To democratize Linux command knowledge by providing a free, comprehensive,
                and interactive learning platform that helps users of all skill levels master
                the Linux command line.
              </p>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Key Features</h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Everything you need to become proficient with Linux commands
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={index}
                    className="bg-gradient-to-b from-slate-900/90 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:scale-105 group"
                  >
                    <div className="p-3 bg-purple-500/20 rounded-lg w-fit mb-4 group-hover:bg-purple-500/30 transition-colors">
                      <Icon className="w-6 h-6 text-purple-400" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-purple-200">{feature.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Technology Stack */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-white mb-4">Built With</h2>
              <p className="text-xl text-purple-200 max-w-2xl mx-auto">
                Modern technologies for the best user experience
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {techStack.map((tech, index) => (
                <div
                  key={index}
                  className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                >
                  <Code className="w-8 h-8 text-purple-400 mb-4" />
                  <h3 className="text-xl font-semibold text-white mb-2">{tech.name}</h3>
                  <p className="text-purple-200 text-sm">{tech.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contributing Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4">
            <div className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-8 border border-purple-500/20">
              <div className="text-center mb-8">
                <Rocket className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h2 className="text-3xl font-bold text-white mb-4">Open Source & Community Driven</h2>
                <p className="text-purple-200 text-lg">
                  This project is open source and welcomes contributions from the community.
                  Help us improve and expand the platform!
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="https://github.com/linux-commands-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all hover:scale-105"
                >
                  <Github className="w-5 h-5" />
                  <span>View on GitHub</span>
                </a>
                <a
                  href="https://github.com/linux-commands-pro"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-white/20 hover:bg-white/20 transition-all hover:scale-105"
                >
                  <Star className="w-5 h-5" />
                  <span>Star this Project</span>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Footer Info */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4">
            <div className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-300 mb-4">
                <Heart className="w-5 h-5 text-red-400 fill-current" />
                <span>Made with love for the Linux community</span>
              </div>
              <p className="text-purple-200 mb-4">
                © 2024 Linux Command Pro. All rights reserved.
              </p>
              <p className="text-purple-400 text-sm">
                Last updated: November 15, 2024
              </p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
}

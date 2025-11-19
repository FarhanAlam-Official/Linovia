'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Layout from '@/components/Layout/Layout';
import { useAppContext } from '@/lib/context/AppContext';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { 
  Terminal, Code, Heart, Github, Star, Users, 
  Book, Award, Zap, Shield, Globe, Rocket, FileText, 
  Sparkles, Trophy, Mail, Download 
} from 'lucide-react';
import Link from 'next/link';

export default function About() {
  const { commands, categories, tutorials, isLoading } = useAppContext();

  // Animation variants
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    },
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  // Define features for Linux command learning
  const features = [
    {
      icon: FileText,
      title: 'Comprehensive Reference',
      description: 'Extensive collection of 200+ Linux commands with detailed examples, flags, and real-world usage scenarios',
      color: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Book,
      title: 'Interactive Tutorials',
      description: 'Step-by-step guides and learning paths designed to take you from beginner to advanced Linux user',
      color: 'from-purple-500 to-pink-500',
    },
    {
      icon: Trophy,
      title: 'Practice Quizzes',
      description: 'Test your knowledge with interactive quizzes and track your progress as you master Linux commands',
      color: 'from-green-500 to-emerald-500',
    },
    {
      icon: Download,
      title: 'Quick Reference',
      description: 'Downloadable cheat sheets and quick reference guides for offline learning and rapid command lookup',
      color: 'from-orange-500 to-red-500',
    },
  ];

  // Core values of the platform
  const values = [
    {
      icon: Heart,
      title: 'Built with Care',
      description: 'Crafted for reliability and simplicity',
      color: 'from-red-500 to-pink-500',
    },
    {
      icon: Users,
      title: 'For Everyone',
      description: 'From beginners to power users',
      color: 'from-purple-500 to-indigo-500',
    },
    {
      icon: Zap,
      title: 'Always Fast',
      description: 'Quick search, instant results',
      color: 'from-yellow-500 to-orange-500',
    },
  ];

  // Technology stack
  const techStack = [
    { icon: Code, label: 'Next.js', color: 'from-gray-700 to-gray-900' },
    { icon: Rocket, label: 'React', color: 'from-blue-500 to-cyan-500' },
    { icon: Shield, label: 'TypeScript', color: 'from-blue-600 to-indigo-600' },
    { icon: Globe, label: 'Tailwind', color: 'from-cyan-500 to-blue-500' },
  ];

  const stats = [
    { label: 'Commands', value: commands.length, icon: Terminal, color: 'purple' },
    { label: 'Categories', value: categories.filter(c => c.id !== 'all').length, icon: Book, color: 'blue' },
    { label: 'Tutorials', value: tutorials.length, icon: Award, color: 'yellow' },
    { label: 'Users', value: '10K+', icon: Users, color: 'green' }
  ];

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
      <main className="pt-24 pb-16 relative overflow-hidden min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        {/* Enhanced Background Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
            }}
            className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.3, 0.5, 0.3],
              scale: [1, 1.05, 1],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 2,
            }}
            className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tl from-pink-600/20 to-purple-600/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              opacity: [0.2, 0.4, 0.2],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: 1,
            }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-br from-purple-600/10 to-pink-600/10 rounded-full blur-3xl"
          />
        </div>

        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
          {/* Hero Section with Logo */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerContainer}
            className="max-w-4xl mx-auto mb-24"
          >
            <motion.div
              variants={fadeInUp}
              className="flex flex-col items-center justify-center mb-12"
            >
              {/* Badge */}
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 rounded-full mb-6 backdrop-blur-sm shadow-lg"
              >
                <motion.div
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                >
                  <Sparkles className="w-4 h-4 text-purple-400" />
                </motion.div>
                <span className="text-sm font-semibold text-purple-300">Master Linux Commands</span>
              </motion.div>

              {/* Main title with animated logo */}
              <motion.h1
                variants={fadeInUp}
                className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8 text-center flex flex-wrap items-center justify-center gap-3 md:gap-4 lg:gap-6"
              >
                <span className="text-white">About </span>
                <span className="gradient-text flex items-center gap-3 md:gap-4 lg:gap-6">
                  Linovia
                  {/* Logo with Animation */}
                  <motion.div
                    whileHover={{ scale: 1.15, rotate: [0, -5, 5, -5, 0] }}
                    transition={{ type: 'spring', stiffness: 300 }}
                    className="relative"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-600/30 to-pink-600/30 rounded-full blur-xl opacity-50" />
                    <motion.div
                      animate={{
                        scale: [1, 1.05, 1],
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="relative"
                    >
                      <Image
                        src="/logo.png"
                        alt="Linovia Logo"
                        width={80}
                        height={80}
                        className="w-14 h-14 md:w-20 md:h-20 lg:w-24 lg:h-24 object-contain drop-shadow-2xl"
                        priority
                      />
                    </motion.div>
                  </motion.div>
                </span>
              </motion.h1>
            </motion.div>

            {/* Description */}
            <motion.div
              variants={fadeInUp}
              className="prose prose-invert max-w-none space-y-6"
            >
              <p className="text-lg md:text-xl text-purple-200 leading-relaxed text-center">
                Linovia was created to solve a real problem: mastering Linux commands is tedious and overwhelming.
                Whether you&apos;re a student learning the basics, a developer managing servers, or a system administrator,
                finding reliable command references and practice materials takes time away from what matters.
              </p>

              <p className="text-lg md:text-xl text-purple-200 leading-relaxed text-center">
                We built Linovia to be the fastest way to learn and reference Linux commands. Search commands,
                explore tutorials, test your knowledge with quizzes—all in one beautiful interface.
              </p>

              {/* Stats */}
              <motion.div
                variants={fadeInUp}
                className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12"
              >
                {stats.map((stat, index) => {
                  const Icon = stat.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ y: -4, scale: 1.02 }}
                      className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all text-center"
                    >
                      <Icon className="w-8 h-8 text-purple-400 mx-auto mb-4" />
                      <div className="text-3xl font-bold text-white mb-1">{stat.value}</div>
                      <div className="text-purple-200 text-sm">{stat.label}</div>
                    </motion.div>
                  );
                })}
              </motion.div>

              {/* Developer attribution */}
              <motion.div
                variants={fadeInUp}
                className="mt-8 p-6 rounded-2xl bg-gradient-to-r from-purple-600/10 via-pink-600/10 to-purple-600/10 border border-purple-500/20 backdrop-blur-sm"
              >
                <p className="text-center text-purple-200">
                  <span className="font-semibold text-white">Built with passion by Farhan Alam.</span> Version 1.0 • Built with Next.js & React
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Features Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Professional Linux <span className="gradient-text">Learning</span>
              </h2>
              <p className="text-xl md:text-2xl text-purple-200 max-w-3xl mx-auto leading-relaxed">
                Everything you need to master Linux commands, from basics to advanced usage
              </p>
            </motion.div>

            {/* Feature cards grid */}
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              {features.map((feature, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 25 }}
                  className="group relative p-8 rounded-2xl border border-purple-500/20 bg-gradient-to-br from-slate-900/90 to-purple-900/30 hover:border-purple-500/50 transition-all hover:shadow-2xl overflow-hidden"
                >
                  {/* Hover Gradient Effect */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10" />
                  
                  {/* Feature icon */}
                  <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-xl bg-gradient-to-br ${feature.color} mb-6 group-hover:scale-110 transition-transform shadow-lg`}>
                    <feature.icon className="w-8 h-8 text-white" />
                    <motion.div
                      animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0, 0.5] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="absolute inset-0 bg-gradient-to-br from-white/30 to-transparent rounded-xl blur-sm"
                    />
                  </div>
                  <h3 className="text-2xl font-bold mb-3 text-white group-hover:text-purple-300 transition-colors">{feature.title}</h3>
                  <p className="text-purple-200 leading-relaxed group-hover:text-purple-100 transition-colors">{feature.description}</p>
                  
                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-purple-600/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Values Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="grid md:grid-cols-3 gap-6 md:gap-8 py-12 border-y border-purple-500/20">
              {values.map((value, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ y: -4, scale: 1.02 }}
                  className="group text-center p-6 rounded-xl bg-gradient-to-br from-purple-600/5 to-pink-600/5 border border-purple-500/10 hover:border-purple-500/30 transition-all hover:shadow-xl"
                >
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-gradient-to-br ${value.color} mb-4 group-hover:scale-110 transition-transform shadow-lg`}>
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="font-bold text-xl mb-2 text-white group-hover:text-purple-300 transition-colors">{value.title}</h3>
                  <p className="text-purple-200 group-hover:text-purple-100 transition-colors">{value.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Tech Stack Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mb-24"
          >
            <motion.div variants={fadeInUp} className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">
                Built with Modern <span className="gradient-text">Technology</span>
              </h2>
              <p className="text-lg text-purple-200 max-w-2xl mx-auto">
                Powered by cutting-edge tools and frameworks for optimal performance
              </p>
            </motion.div>

            <motion.div variants={staggerContainer} className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {techStack.map((tech, idx) => (
                <motion.div
                  key={idx}
                  variants={fadeInUp}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="group flex flex-col items-center gap-3 p-6 rounded-xl bg-gradient-to-br from-slate-900/90 to-purple-900/30 border border-purple-500/20 hover:border-purple-500/50 transition-all hover:shadow-lg min-w-[120px]"
                >
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${tech.color} flex items-center justify-center group-hover:scale-110 transition-transform shadow-lg`}>
                    <tech.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-semibold text-sm text-white group-hover:text-purple-300 transition-colors">{tech.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Developer Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-24 pt-20 relative"
          >
            {/* Organic Background Elements */}
            <div className="absolute inset-0 -z-10 overflow-hidden">
              <motion.div
                animate={{
                  x: [0, 30, -20, 0],
                  y: [0, -20, 10, 0],
                  scale: [1, 1.1, 0.9, 1],
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
                className="absolute top-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/15 via-pink-600/10 to-transparent rounded-full blur-3xl"
              />
              <motion.div
                animate={{
                  x: [0, -25, 15, 0],
                  y: [0, 20, -15, 0],
                  scale: [1, 0.95, 1.05, 1],
                }}
                transition={{
                  duration: 25,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: 2,
                }}
                className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-gradient-to-tl from-pink-600/15 via-purple-600/10 to-transparent rounded-full blur-3xl"
              />
            </div>

            <motion.div
              variants={fadeInUp}
              className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8"
            >
              {/* Asymmetric Layout - Text Left, Image Right */}
              <div className="relative grid md:grid-cols-[1fr_auto] gap-8 md:gap-12 items-center">
                {/* Content Section - Left Side */}
                <motion.div
                  variants={fadeInUp}
                  className="relative text-center md:text-left space-y-8 order-2 md:order-1"
                >
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-600/10 to-pink-600/10 border border-purple-500/20 backdrop-blur-sm mb-4"
                  >
                    <Code className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-semibold text-purple-300">Full-Stack Developer</span>
                  </motion.div>

                  <div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 leading-tight text-white">
                      Meet the <span className="gradient-text">Developer</span>
                    </h2>
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: '100px' }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.8, delay: 0.3 }}
                      className="h-1.5 bg-gradient-to-r from-purple-600 via-pink-600 to-purple-600 rounded-full mb-6 md:mb-8"
                    />
                  </div>
                  
                  <p className="text-lg md:text-xl lg:text-2xl text-purple-200 leading-relaxed max-w-2xl">
                    Linovia was created by <span className="font-bold gradient-text">Farhan Alam</span>, a passionate
                    full-stack developer dedicated to building tools that solve real-world problems. With expertise in
                    modern web technologies and a keen interest in Linux systems, Farhan designed Linovia to make
                    Linux command learning simple, fast, and accessible to everyone.
                  </p>

                  <div className="flex flex-col sm:flex-row items-center justify-center md:justify-start gap-4 pt-6">
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="https://github.com/FarhanAlam-Official"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold shadow-xl hover:shadow-2xl transition-all relative overflow-hidden"
                      >
                        <span className="relative z-10 flex items-center gap-3">
                          <Github className="w-5 h-5" />
                          <span>Visit GitHub</span>
                        </span>
                        <motion.div
                          className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity"
                        />
                      </Link>
                    </motion.div>
                    <motion.div
                      whileHover={{ scale: 1.08, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <Link
                        href="mailto:thefarhanalam01@gmail.com"
                        className="group inline-flex items-center gap-3 px-8 py-4 rounded-xl border-2 border-purple-500/30 bg-slate-900/80 backdrop-blur-sm hover:border-purple-500/60 hover:bg-purple-600/5 text-purple-300 font-semibold shadow-lg hover:shadow-xl transition-all"
                      >
                        <Mail className="w-5 h-5" />
                        <span>Get in Touch</span>
                      </Link>
                    </motion.div>
                  </div>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                    className="relative pt-8"
                  >
                    <div className="absolute left-0 md:left-8 top-0 text-6xl md:text-7xl font-serif text-purple-400/20 leading-none">&ldquo;</div>
                    <p className="text-base md:text-lg text-purple-200 italic pl-8 md:pl-16 pt-4 border-l-2 border-purple-500/20">
                      Building tools that make life easier, one line of code at a time.
                    </p>
                  </motion.div>
                </motion.div>

                {/* Profile Picture - Floating Right */}
                <motion.div
                  variants={fadeInUp}
                  className="flex justify-center md:block order-1 md:order-2"
                >
                  <div className="relative inline-block">
                    {/* Irregular SVG Background Shape */}
                    <motion.div
                      animate={{
                        scale: [1, 1.1, 0.95, 1],
                        rotate: [0, 5, -5, 0],
                        x: [0, 10, -5, 0],
                        y: [0, -5, 10, 0],
                      }}
                      transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: 'easeInOut',
                      }}
                      className="absolute -inset-16 md:-inset-20 -z-10"
                    >
                      <svg
                        className="w-full h-full"
                        viewBox="0 0 400 400"
                        preserveAspectRatio="xMidYMid meet"
                      >
                        <defs>
                          <linearGradient id="profileGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.2" />
                            <stop offset="30%" stopColor="rgb(219, 39, 119)" stopOpacity="0.3" />
                            <stop offset="70%" stopColor="rgb(147, 51, 234)" stopOpacity="0.25" />
                            <stop offset="100%" stopColor="rgb(219, 39, 119)" stopOpacity="0.15" />
                          </linearGradient>
                          <filter id="blur">
                            <feGaussianBlur in="SourceGraphic" stdDeviation="15" />
                          </filter>
                          <radialGradient id="radialGradient" cx="50%" cy="50%">
                            <stop offset="0%" stopColor="rgb(147, 51, 234)" stopOpacity="0.4" />
                            <stop offset="100%" stopColor="rgb(219, 39, 119)" stopOpacity="0.1" />
                          </radialGradient>
                        </defs>
                        <path
                          d="M 100 80 Q 150 30 220 60 Q 280 40 320 100 Q 340 150 300 220 Q 250 280 180 260 Q 100 270 60 210 Q 40 160 70 110 Q 80 90 100 80 Z"
                          fill="url(#profileGradient)"
                          filter="url(#blur)"
                          style={{ transformOrigin: 'center' }}
                        />
                        <ellipse
                          cx="200"
                          cy="200"
                          rx="180"
                          ry="170"
                          fill="url(#radialGradient)"
                          filter="url(#blur)"
                          opacity="0.6"
                        />
                      </svg>
                    </motion.div>
                    
                    {/* Profile Picture Container */}
                    <motion.div
                      whileHover={{ scale: 1.08, rotate: [0, 2, -2, 0] }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="relative z-10 w-52 h-52 md:w-64 md:h-64 rounded-full"
                    >
                      {/* Outer Purple Glow Effect */}
                      <motion.div
                        animate={{
                          opacity: [0.6, 0.9, 0.6],
                          scale: [0.95, 1.1, 0.95],
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: 'easeInOut',
                        }}
                        className="absolute inset-0 rounded-full -z-20"
                        style={{
                          background: 'radial-gradient(circle at center, rgb(147, 51, 234, 0.7) 0%, rgb(147, 51, 234, 0.5) 30%, rgb(147, 51, 234, 0.3) 60%, transparent 80%)',
                          filter: 'blur(25px)',
                        }}
                      />
                      <motion.div
                        animate={{
                          opacity: [0.4, 0.7, 0.4],
                          scale: [1.05, 1.15, 1.05],
                        }}
                        transition={{
                          duration: 4,
                          repeat: Infinity,
                          ease: 'easeInOut',
                          delay: 1,
                        }}
                        className="absolute inset-0 rounded-full -z-20"
                        style={{
                          background: 'radial-gradient(circle at center, rgb(219, 39, 119, 0.6) 0%, rgb(219, 39, 119, 0.4) 40%, rgb(219, 39, 119, 0.2) 70%, transparent 85%)',
                          filter: 'blur(35px)',
                        }}
                      />
                      
                      {/* Main Container */}
                      <motion.div
                        className="relative w-full h-full rounded-full overflow-visible"
                        style={{
                          filter: 'drop-shadow(0 0 30px rgba(147, 51, 234, 0.6)) drop-shadow(0 0 60px rgba(147, 51, 234, 0.4)) drop-shadow(0 20px 60px rgba(147, 51, 234, 0.5))',
                        }}
                      >
                        <motion.div
                          animate={{
                            rotate: [0, 360],
                          }}
                          transition={{
                            duration: 20,
                            repeat: Infinity,
                            ease: 'linear',
                          }}
                          className="absolute inset-0 rounded-full p-[4px] overflow-hidden"
                          style={{
                            background: 'linear-gradient(45deg, rgb(147, 51, 234), rgb(219, 39, 119), rgb(147, 51, 234))',
                          }}
                        >
                          <div className="w-full h-full rounded-full bg-slate-950 overflow-hidden relative">
                            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/50 via-purple-600/40 to-pink-600/40 blur-2xl -z-10" />
                            <Image
                              src="/user.png"
                              alt="Farhan Alam"
                              width={256}
                              height={256}
                              className="w-full h-full object-cover relative z-10"
                            />
                          </div>
                        </motion.div>
                      </motion.div>
                      
                      {/* Floating particles */}
                      {[...Array(6)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            y: [0, -20 + i * 5, 0],
                            x: [0, 10 - i * 2, 0],
                            opacity: [0.4, 0.8, 0.4],
                            scale: [0.8, 1.2, 0.8],
                          }}
                          transition={{
                            duration: 3 + i * 0.5,
                            repeat: Infinity,
                            ease: 'easeInOut',
                            delay: i * 0.3,
                          }}
                          className="absolute rounded-full blur-sm"
                          style={{
                            width: `${8 + i * 2}px`,
                            height: `${8 + i * 2}px`,
                            background: i % 2 === 0 
                              ? 'linear-gradient(135deg, rgb(147, 51, 234), rgb(219, 39, 119))'
                              : 'linear-gradient(135deg, rgb(219, 39, 119), rgb(147, 51, 234))',
                            top: `${10 + i * 15}%`,
                            left: i % 2 === 0 ? `${5 + i * 10}%` : `${90 - i * 10}%`,
                          }}
                        />
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>

          {/* Open Source Section */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-24"
          >
            <motion.div
              variants={fadeInUp}
              className="max-w-4xl mx-auto px-4"
            >
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
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://github.com/FarhanAlam-Official/Linovia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold shadow-2xl shadow-purple-500/50 hover:shadow-purple-500/70 transition-all"
                    >
                      <Github className="w-5 h-5" />
                      <span>View on GitHub</span>
                    </Link>
                  </motion.div>
                  <motion.div
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Link
                      href="https://github.com/FarhanAlam-Official/Linovia"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white rounded-xl font-semibold border border-purple-500/20 hover:bg-white/20 transition-all"
                    >
                      <Star className="w-5 h-5" />
                      <span>Star this Project</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Footer Info */}
          <motion.div
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="mt-20"
          >
            <motion.div variants={fadeInUp} className="text-center">
              <div className="flex items-center justify-center gap-2 text-purple-300 mb-4">
                <Heart className="w-5 h-5 text-pink-500 fill-current" />
                <span>Made with love for the Linux community</span>
              </div>
              <p className="text-purple-200 mb-4">
                © 2024 Linovia. All rights reserved.
              </p>
              <p className="text-purple-400 text-sm">
                Last updated: November 19, 2024
              </p>
            </motion.div>
          </motion.div>
        </section>
      </main>
    </Layout>
  );
}

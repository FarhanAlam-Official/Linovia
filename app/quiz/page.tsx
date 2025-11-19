'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import Layout from '@/components/Layout/Layout';
import { useAppContext } from '@/lib/context/AppContext';
import { DifficultyBadge } from '@/components/DifficultyBadge/DifficultyBadge';
import { LoadingSpinner } from '@/components/LoadingSpinner/LoadingSpinner';
import { EmptyState } from '@/components/EmptyState/EmptyState';
import { Quiz, QuizQuestion, CategoryId, DifficultyLevel } from '@/lib/types';
import { quizzes } from '@/lib/data/quizzes';
import { 
  Trophy, Clock, CheckCircle, XCircle, ArrowRight, 
  RotateCcw, Filter, Award, TrendingUp 
} from 'lucide-react';

type QuizState = 'list' | 'taking' | 'results';

export default function QuizPage() {
  const { categories, isLoading, userPreferences, updatePreferences } = useAppContext();
  
  const [selectedCategory, setSelectedCategory] = useState<CategoryId>('all');
  const [selectedDifficulty, setSelectedDifficulty] = useState<DifficultyLevel | 'all'>('all');
  const [currentQuiz, setCurrentQuiz] = useState<Quiz | null>(null);
  const [quizState, setQuizState] = useState<QuizState>('list');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string | string[]>>({});
  const [timeRemaining, setTimeRemaining] = useState<number | null>(null);
  const [score, setScore] = useState<number | null>(null);
  const [startTime, setStartTime] = useState<number | null>(null);

  // Filter quizzes
  const filteredQuizzes = useMemo(() => {
    let results = quizzes;

    if (selectedCategory !== 'all') {
      results = results.filter(q => q.category === selectedCategory);
    }

    if (selectedDifficulty !== 'all') {
      results = results.filter(q => q.difficulty === selectedDifficulty);
    }

    return results;
  }, [selectedCategory, selectedDifficulty]);

  const handleSubmitQuiz = useCallback(() => {
    if (!currentQuiz) return;

    let correctCount = 0;
    let totalPoints = 0;
    let earnedPoints = 0;

    currentQuiz.questions.forEach((question) => {
      totalPoints += question.points;
      const userAnswer = answers[question.id];
      const correctAnswer = question.correctAnswer;

      let isCorrect = false;
      if (Array.isArray(correctAnswer)) {
        isCorrect = Array.isArray(userAnswer) && 
          correctAnswer.length === userAnswer.length &&
          correctAnswer.every(ans => userAnswer.includes(ans));
      } else {
        isCorrect = userAnswer === correctAnswer;
      }

      if (isCorrect) {
        correctCount++;
        earnedPoints += question.points;
      }
    });

    const percentage = (earnedPoints / totalPoints) * 100;
    setScore(percentage);
    setQuizState('results');

    // Save score
    const quizScores = userPreferences.quizScores || {};
    const bestScore = quizScores[currentQuiz.id] || 0;
    if (percentage > bestScore) {
      updatePreferences({
        quizScores: {
          ...quizScores,
          [currentQuiz.id]: percentage
        }
      });
    }
  }, [currentQuiz, answers, userPreferences, updatePreferences]);

  // Timer effect
  useEffect(() => {
    if (quizState === 'taking' && currentQuiz?.timeLimit && timeRemaining !== null) {
      const interval = setInterval(() => {
        setTimeRemaining((prev) => {
          if (prev === null || prev <= 1) {
            handleSubmitQuiz();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      return () => clearInterval(interval);
    }
  }, [quizState, currentQuiz, timeRemaining, handleSubmitQuiz]);

  const handleStartQuiz = (quiz: Quiz) => {
    setCurrentQuiz(quiz);
    setQuizState('taking');
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(null);
    setStartTime(Date.now());
    if (quiz.timeLimit) {
      setTimeRemaining(quiz.timeLimit * 60); // Convert minutes to seconds
    } else {
      setTimeRemaining(null);
    }
  };

  const handleAnswerChange = (questionId: string, answer: string | string[]) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuiz && currentQuestionIndex < currentQuiz.questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleRetryQuiz = () => {
    if (currentQuiz) {
      handleStartQuiz(currentQuiz);
    }
  };

  const handleBackToList = () => {
    setQuizState('list');
    setCurrentQuiz(null);
    setCurrentQuestionIndex(0);
    setAnswers({});
    setScore(null);
    setTimeRemaining(null);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
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

  // Quiz Taking View
  if (quizState === 'taking' && currentQuiz) {
    const currentQuestion = currentQuiz.questions[currentQuestionIndex];
    const progress = ((currentQuestionIndex + 1) / currentQuiz.questions.length) * 100;
    const userAnswer = answers[currentQuestion.id];

    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Header */}
            <div className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl font-bold text-white">{currentQuiz.title}</h2>
                {timeRemaining !== null && (
                  <div className="flex items-center gap-2 text-red-400">
                    <Clock className="w-5 h-5" />
                    <span className="font-mono font-bold">{formatTime(timeRemaining)}</span>
                  </div>
                )}
              </div>
              
              {/* Progress Bar */}
              <div className="w-full bg-black/40 rounded-full h-2 mb-2">
                <div
                  className="bg-gradient-to-r from-purple-600 to-pink-600 h-2 rounded-full transition-all"
                  style={{ width: `${progress}%` }}
                />
              </div>
              <p className="text-purple-300 text-sm">
                Question {currentQuestionIndex + 1} of {currentQuiz.questions.length}
              </p>
            </div>

            {/* Question */}
            <div className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-8 border border-purple-500/20 mb-6">
              <div className="flex items-start gap-3 mb-6">
                <DifficultyBadge difficulty={currentQuestion.difficulty} size="sm" />
                <span className="text-purple-300 text-sm">
                  {currentQuestion.points} points
                </span>
              </div>

              <h3 className="text-2xl font-bold text-white mb-6">
                {currentQuestion.question}
              </h3>

              {/* Multiple Choice */}
              {currentQuestion.type === 'multiple-choice' && currentQuestion.options && (
                <div className="space-y-3">
                  {currentQuestion.options.map((option, index) => (
                    <button
                      key={index}
                      onClick={() => handleAnswerChange(currentQuestion.id, option)}
                      className={`w-full text-left p-4 rounded-lg border transition-all ${
                        userAnswer === option
                          ? 'bg-purple-600/30 border-purple-500 text-white'
                          : 'bg-black/40 border-purple-500/20 text-purple-200 hover:border-purple-500/50'
                      }`}
                    >
                      <span className="font-medium">{option}</span>
                    </button>
                  ))}
                </div>
              )}

              {/* Fill in the Blank */}
              {currentQuestion.type === 'fill-blank' && (
                <div>
                  <input
                    type="text"
                    value={typeof userAnswer === 'string' ? userAnswer : ''}
                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                    placeholder="Enter your answer..."
                    className="w-full px-4 py-3 bg-black/40 border border-purple-500/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-500/50"
                  />
                </div>
              )}

              {/* Command Completion */}
              {currentQuestion.type === 'command-completion' && (
                <div>
                  <div className="bg-black/40 rounded-lg p-4 mb-4 border border-cyan-500/20">
                    <code className="text-cyan-400 font-mono text-lg">
                      {currentQuestion.question.split('___')[0]}
                      <span className="text-white bg-purple-600/30 px-2 py-1 rounded">
                        {typeof userAnswer === 'string' ? userAnswer : '___'}
                      </span>
                      {currentQuestion.question.split('___')[1]}
                    </code>
                  </div>
                  <input
                    type="text"
                    value={typeof userAnswer === 'string' ? userAnswer : ''}
                    onChange={(e) => handleAnswerChange(currentQuestion.id, e.target.value)}
                    placeholder="Complete the command..."
                    className="w-full px-4 py-3 bg-black/40 border border-purple-500/20 rounded-lg text-white placeholder-purple-300 focus:outline-none focus:border-purple-500/50 font-mono"
                  />
                </div>
              )}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between">
              <button
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold disabled:opacity-50 disabled:cursor-not-allowed hover:bg-white/20 transition-all"
              >
                Previous
              </button>

              {currentQuestionIndex === currentQuiz.questions.length - 1 ? (
                <button
                  onClick={handleSubmitQuiz}
                  className="px-6 py-3 bg-gradient-to-r from-green-600 to-emerald-600 text-white rounded-lg font-semibold hover:shadow-lg shadow-green-500/50 transition-all hover:scale-105"
                >
                  Submit Quiz
                </button>
              ) : (
                <button
                  onClick={handleNextQuestion}
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
                >
                  Next
                  <ArrowRight className="w-5 h-5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Results View
  if (quizState === 'results' && currentQuiz && score !== null) {
    const passed = score >= currentQuiz.passingScore;
    const bestScore = userPreferences.quizScores?.[currentQuiz.id] || 0;

    return (
      <Layout>
        <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {/* Results Header */}
            <div className={`bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-8 border border-purple-500/20 mb-6 text-center ${
              passed ? 'border-green-500/50' : 'border-red-500/50'
            }`}>
              <div className={`w-20 h-20 mx-auto mb-4 rounded-full flex items-center justify-center ${
                passed ? 'bg-green-500/20' : 'bg-red-500/20'
              }`}>
                {passed ? (
                  <CheckCircle className="w-12 h-12 text-green-400" />
                ) : (
                  <XCircle className="w-12 h-12 text-red-400" />
                )}
              </div>
              
              <h2 className="text-3xl font-bold text-white mb-2">Quiz Complete!</h2>
              <div className="text-6xl gradient-text font-bold mb-4">
                {score.toFixed(1)}%
              </div>
              <p className={`text-xl font-semibold mb-2 ${passed ? 'text-green-400' : 'text-red-400'}`}>
                {passed ? 'You Passed!' : `You need ${currentQuiz.passingScore}% to pass`}
              </p>
              {bestScore > score && (
                <p className="text-purple-300">
                  Your best score: {bestScore.toFixed(1)}%
                </p>
              )}
            </div>

            {/* Question Review */}
            <div className="space-y-4 mb-6">
              {currentQuiz.questions.map((question, index) => {
                const userAnswer = answers[question.id];
                const correctAnswer = question.correctAnswer;
                
                let isCorrect = false;
                if (Array.isArray(correctAnswer)) {
                  isCorrect = Array.isArray(userAnswer) && 
                    correctAnswer.length === userAnswer.length &&
                    correctAnswer.every(ans => userAnswer.includes(ans));
                } else {
                  isCorrect = userAnswer === correctAnswer;
                }

                return (
                  <div
                    key={question.id}
                    className={`bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-6 border ${
                      isCorrect ? 'border-green-500/50' : 'border-red-500/50'
                    }`}
                  >
                    <div className="flex items-start gap-3 mb-4">
                      {isCorrect ? (
                        <CheckCircle className="w-6 h-6 text-green-400 flex-shrink-0 mt-1" />
                      ) : (
                        <XCircle className="w-6 h-6 text-red-400 flex-shrink-0 mt-1" />
                      )}
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Question {index + 1}: {question.question}
                        </h3>
                        <div className="space-y-2">
                          <div>
                            <span className="text-purple-300">Your answer: </span>
                            <span className={`font-mono ${isCorrect ? 'text-green-400' : 'text-red-400'}`}>
                              {Array.isArray(userAnswer) ? userAnswer.join(', ') : userAnswer || 'No answer'}
                            </span>
                          </div>
                          {!isCorrect && (
                            <div>
                              <span className="text-purple-300">Correct answer: </span>
                              <span className="font-mono text-green-400">
                                {Array.isArray(correctAnswer) ? correctAnswer.join(', ') : correctAnswer}
                              </span>
                            </div>
                          )}
                          <p className="text-purple-200 text-sm mt-2 italic">
                            {question.explanation}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Actions */}
            <div className="flex items-center justify-center gap-4">
              <button
                onClick={handleBackToList}
                className="px-6 py-3 bg-white/10 backdrop-blur-sm text-white rounded-lg font-semibold hover:bg-white/20 transition-all"
              >
                Back to Quizzes
              </button>
              <button
                onClick={handleRetryQuiz}
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg shadow-purple-500/50 transition-all hover:scale-105 flex items-center gap-2"
              >
                <RotateCcw className="w-5 h-5" />
                Retry Quiz
              </button>
            </div>
          </div>
        </div>
      </Layout>
    );
  }

  // Quiz List View
  return (
    <Layout>
      <div className="min-h-screen bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950">
        <div className="max-w-7xl mx-auto px-4 py-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-4xl font-bold gradient-text mb-4">
              Linux Commands Quiz
            </h1>
            <p className="text-purple-300 text-lg">
              Test your Linux knowledge with interactive quizzes
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

          {/* Quizzes Grid */}
          {filteredQuizzes.length === 0 ? (
            <EmptyState
              icon={Trophy}
              title="No quizzes found"
              description="Try adjusting your filters to find quizzes."
            />
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredQuizzes.map((quiz) => {
                const bestScore = userPreferences.quizScores?.[quiz.id];
                
                return (
                  <div
                    key={quiz.id}
                    className="bg-gradient-to-r from-slate-900/90 to-purple-900/30 rounded-xl p-6 border border-purple-500/20 hover:border-purple-500/50 transition-all"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div className="p-3 bg-purple-500/20 rounded-lg">
                        <Trophy className="w-6 h-6 text-purple-400" />
                      </div>
                      <DifficultyBadge difficulty={quiz.difficulty} size="sm" />
                    </div>

                    <h3 className="text-xl font-bold text-white mb-2">{quiz.title}</h3>
                    <p className="text-purple-200 text-sm mb-4">{quiz.description}</p>

                    <div className="space-y-2 mb-4 text-sm text-purple-300">
                      <div className="flex items-center gap-2">
                        <Award className="w-4 h-4" />
                        <span>{quiz.questions.length} questions</span>
                      </div>
                      {quiz.timeLimit && (
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{quiz.timeLimit} minutes</span>
                        </div>
                      )}
                      <div className="flex items-center gap-2">
                        <TrendingUp className="w-4 h-4" />
                        <span>Passing score: {quiz.passingScore}%</span>
                      </div>
                      {bestScore !== undefined && (
                        <div className="flex items-center gap-2 text-yellow-400">
                          <Trophy className="w-4 h-4" />
                          <span>Best: {bestScore.toFixed(1)}%</span>
                        </div>
                      )}
                    </div>

                    <button
                      onClick={() => handleStartQuiz(quiz)}
                      className="w-full px-4 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-semibold hover:shadow-lg shadow-purple-500/50 transition-all hover:scale-105"
                    >
                      Start Quiz
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

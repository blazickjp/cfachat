import React from 'react';
import { Sparkles, Brain, MessageSquare, ArrowRight, Zap } from 'lucide-react';

const LandingPage = () => {
  return (
    <div className="min-h-screen bg-zinc-900 text-white">
      {/* Navigation */}
      <nav className="p-6">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-cyan-500 rounded flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold">
              <span className="text-cyan-400">CFA</span>
              <span className="text-white">Chat</span>
            </div>
          </div>
          <div className="space-x-6">
            <button className="px-4 py-2 text-gray-400 hover:text-cyan-400 transition-colors">About</button>
            <button className="px-4 py-2 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded hover:opacity-90 transition-opacity">
              Get Access
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center">
          <span className="text-cyan-400 font-medium text-lg mb-4 block">Not Your Regular Study Tool</span>
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-cyan-300 to-white bg-clip-text text-transparent">
            Crush the CFA® Exam
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto">
            Study smarter, not harder. AI-powered learning that adapts to your schedule 
            and helps you focus on what really matters.
          </p>
          <button className="group px-8 py-4 bg-gradient-to-r from-cyan-400 to-cyan-500 text-white rounded text-lg font-semibold hover:opacity-90 transition-all flex items-center mx-auto">
            Level Up Your Prep
            <Zap className="ml-2 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </main>

      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="p-6 bg-zinc-800/50 backdrop-blur rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 mb-6 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Brain className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">24/7 AI Tutor</h3>
            <p className="text-gray-400">
              Got questions at 3 AM? We've got answers. Your personal AI tutor never sleeps 
              and always has time for your questions.
            </p>
          </div>
          <div className="p-6 bg-zinc-800/50 backdrop-blur rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 mb-6 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <MessageSquare className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Smart Quizzes</h3>
            <p className="text-gray-400">
              Quick, focused practice sessions that adapt to your knowledge gaps. 
              No more wasting time on stuff you already know.
            </p>
          </div>
          <div className="p-6 bg-zinc-800/50 backdrop-blur rounded-xl border border-zinc-700/50 hover:border-cyan-500/50 transition-colors">
            <div className="w-12 h-12 mb-6 bg-cyan-500/20 rounded-lg flex items-center justify-center">
              <Sparkles className="w-6 h-6 text-cyan-400" />
            </div>
            <h3 className="text-xl font-semibold mb-4">Progress Analytics</h3>
            <p className="text-gray-400">
              Track your progress with data visualizations that actually make sense. 
              Know exactly where you stand and what to tackle next.
            </p>
          </div>
        </div>
      </section>

      {/* Social Proof with Frosted Glass Effect */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <div className="text-center p-8 bg-zinc-800/30 backdrop-blur rounded-xl border border-zinc-700/50">
          <p className="text-sm uppercase tracking-wider mb-4 text-gray-400">Trusted by professionals from</p>
          <div className="flex flex-wrap justify-center gap-x-12 gap-y-4">
            <span className="text-lg font-semibold text-white">Goldman Sachs</span>
            <span className="text-lg font-semibold text-white">JPMorgan</span>
            <span className="text-lg font-semibold text-white">BlackRock</span>
            <span className="text-lg font-semibold text-white">Morgan Stanley</span>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2024 CFAChat. Built for the next generation.
            </div>
            <div className="space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-cyan-400">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-cyan-400">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-cyan-400">Contact</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
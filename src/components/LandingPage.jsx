import React, { useState, useEffect } from 'react';
import { Sparkles, Brain, MessageSquare, Zap } from 'lucide-react';
import ParticleField from './ParticleField';

const LandingPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollOffset, setScrollOffset] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [gradientPosition, setGradientPosition] = useState({ x: 0, y: 0 });
  
  useEffect(() => {
    const handleScroll = () => {
      setScrollOffset(window.pageYOffset);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsVisible(true);
    
    const text = "Study smarter, not harder.";
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setGradientPosition({ x, y });
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black via-zinc-900 to-zinc-800 text-white overflow-hidden">
      <ParticleField />

      {/* Navigation */}
      <nav className="p-6 relative z-10">
        <div className="max-w-6xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-cyan-500 rounded flex items-center justify-center animate-pulse">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <div className="text-2xl font-bold">
              <span className="text-purple-400">CFA</span>
              <span className="text-white">Chat</span>
            </div>
          </div>
          <div className="space-x-6">
            <button className="px-4 py-2 text-gray-400 hover:text-purple-400 transition-colors">
              About
            </button>
            <button 
              className="relative px-4 py-2 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded group overflow-hidden"
              onMouseEnter={(e) => handleMouseMove(e)}
            >
              <span className="relative z-10">Get Access</span>
              <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity" />
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <main className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="text-center">
          <div className="h-8 mb-4"> {/* Height container for subtitle */}
            <span 
              className="text-purple-400 font-medium text-lg block transform transition-all duration-500"
              style={{
                opacity: isVisible ? 1 : 0,
                transform: `translateY(${isVisible ? 0 : '20px'})`
              }}
            >
              Not Your Regular Study Tool
            </span>
          </div>
          <div className="h-24 mb-6"> {/* Height container for main heading */}
            <h1 
              className="text-6xl font-bold bg-gradient-to-r from-purple-400 via-cyan-300 to-white bg-clip-text text-transparent"
              style={{ transform: `translateY(${scrollOffset * 0.2}px)` }}
            >
              Crush the CFA® Exam
            </h1>
          </div>
          <div className="h-7 mb-12"> {/* Height container for typewriter text */}
            <p className="text-xl text-gray-400 max-w-2xl mx-auto">
              {displayText}
            </p>
          </div>
          <button 
            className="group px-8 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white rounded text-lg font-semibold relative overflow-hidden"
            onMouseMove={handleMouseMove}
          >
            <span className="relative z-10 flex items-center">
              Level Up Your Prep
              <Zap className="ml-2 group-hover:translate-x-1 transition-transform" />
            </span>
            <div 
              className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity"
              style={{
                background: `radial-gradient(circle at ${gradientPosition.x}% ${gradientPosition.y}%, rgba(168,85,247,0.3) 0%, transparent 70%)`
              }}
            />
          </button>
        </div>
      </main>


      {/* Features Section */}
      <section className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[
            {
              icon: Brain,
              title: "24/7 AI Tutor",
              description: "Got questions at 3 AM? We've got answers. Your personal AI tutor never sleeps and always has time for your questions."
            },
            {
              icon: MessageSquare,
              title: "Smart Quizzes",
              description: "Quick, focused practice sessions that adapt to your knowledge gaps. No more wasting time on stuff you already know."
            },
            {
              icon: Sparkles,
              title: "Progress Analytics",
              description: "Track your progress with data visualizations that actually make sense. Know exactly where you stand and what to tackle next."
            }
          ].map((feature, index) => (
            <div 
              key={index}
              className="group p-6 bg-zinc-800/50 backdrop-blur rounded-xl border border-zinc-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:-translate-y-1"
              style={{
                transitionDelay: `${index * 100}ms`
              }}
            >
              <div className="w-12 h-12 mb-6 bg-purple-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform">
                <feature.icon className="w-6 h-6 text-purple-400" />
              </div>
              <h3 className="text-xl font-semibold mb-4">{feature.title}</h3>
              <p className="text-gray-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 mt-20 relative z-10">
        <div className="max-w-6xl mx-auto px-6 py-12">
          <div className="flex justify-between items-center">
            <div className="text-sm text-gray-500">
              © 2024 CFAChat. Built for the next generation.
            </div>
            <div className="space-x-6">
              <a href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Privacy</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Terms</a>
              <a href="#" className="text-sm text-gray-500 hover:text-purple-400 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in {
          animation: fade-in 0.6s ease-out;
        }
      `}</style>
    </div>
  );
};

export default LandingPage;
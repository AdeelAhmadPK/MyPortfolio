'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import { FaQuestionCircle } from 'react-icons/fa';;
export default function NotFound() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Calculate eye movement based on mouse position
  const calculateEyePosition = (eyeX: number, eyeY: number) => {
    const angle = Math.atan2(mousePosition.y - eyeY, mousePosition.x - eyeX);
    const distance = 8;
    return {
      x: Math.cos(angle) * distance,
      y: Math.sin(angle) * distance,
    };
  };

  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex flex-col items-center justify-center p-4 overflow-hidden relative">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-purple-500/20 rounded-full animate-float"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      {/* Glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-600/30 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-600/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-pink-600/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />

      {/* Main content */}
      <div className="relative z-10 text-center">
        {/* Animated 404 with eyes */}
        <div className="relative mb-8">
          <div className="flex items-center justify-center gap-4 md:gap-8">
            {/* First 4 */}
            <div className="relative">
              <span className="text-[120px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-400 drop-shadow-2xl select-none">
                4
              </span>
              <div className="absolute inset-0 text-[120px] md:text-[200px] font-black text-purple-500/20 blur-xl select-none">
                4
              </div>
            </div>

            {/* Animated 0 with eyes (looks like a robot/alien face) */}
            <div 
              className="relative cursor-pointer transform transition-transform hover:scale-110"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="relative">
                <span className="text-[120px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-400 drop-shadow-2xl select-none">
                  0
                </span>
                <div className="absolute inset-0 text-[120px] md:text-[200px] font-black text-purple-500/20 blur-xl select-none">
                  0
                </div>
                
                {/* Eyes container */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="flex gap-4 md:gap-6 -mt-4 md:-mt-8">
                    {/* Left eye */}
                    <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                      <div 
                        className="w-3 h-3 md:w-5 md:h-5 bg-slate-900 rounded-full transition-transform duration-100"
                        style={{
                          transform: `translate(${calculateEyePosition(0, 0).x / 2}px, ${calculateEyePosition(0, 0).y / 2}px)`,
                        }}
                      >
                        <div className="absolute top-0.5 left-0.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full" />
                      </div>
                      {isHovered && (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 to-transparent animate-pulse" />
                      )}
                    </div>
                    {/* Right eye */}
                    <div className="w-6 h-6 md:w-10 md:h-10 bg-white rounded-full flex items-center justify-center shadow-lg relative overflow-hidden">
                      <div 
                        className="w-3 h-3 md:w-5 md:h-5 bg-slate-900 rounded-full transition-transform duration-100"
                        style={{
                          transform: `translate(${calculateEyePosition(0, 0).x / 2}px, ${calculateEyePosition(0, 0).y / 2}px)`,
                        }}
                      >
                        <div className="absolute top-0.5 left-0.5 w-1 h-1 md:w-1.5 md:h-1.5 bg-white rounded-full" />
                      </div>
                      {isHovered && (
                        <div className="absolute inset-0 bg-gradient-to-br from-purple-400/50 to-transparent animate-pulse" />
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Second 4 */}
            <div className="relative">
              <span className="text-[120px] md:text-[200px] font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-purple-200 to-purple-400 drop-shadow-2xl select-none">
                4
              </span>
              <div className="absolute inset-0 text-[120px] md:text-[200px] font-black text-purple-500/20 blur-xl select-none">
                4
              </div>
            </div>
          </div>
        </div>

        {/* Glitch effect text */}
        <div className="relative mb-6">
          <h1 className="text-2xl md:text-4xl font-bold text-white mb-2 animate-glitch">
            Oops! Page Not Found
          </h1>
          <p className="text-lg md:text-xl text-purple-200/80 max-w-md mx-auto">
            The page you're looking for seems to have wandered off into the digital void.
          </p>
        </div>

        {/* Animated search icon */}
        <div className="relative mb-8">
          <svg 
            className="w-16 h-16 md:w-24 md:h-24 mx-auto text-purple-400 animate-bounce-slow"
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1.5} 
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" 
            />
            <path 
              className="animate-ping origin-center"
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={1} 
              d="M10 10m-3 0a3 3 0 106 0 3 3 0 00-6 0"
              opacity={0.3}
            />
          </svg>
        </div>

        {/* Action buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link
            href="/"
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl text-white font-semibold overflow-hidden transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105"
          >
            <span className="relative z-10 flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
              </svg>
              Back to Home
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-blue-700 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Link>

          <Link
            href="/services"
            className="group px-8 py-4 border-2 border-purple-400/50 rounded-xl text-purple-300 font-semibold transition-all duration-300 hover:border-purple-400 hover:bg-purple-400/10 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
              View Services
            </span>
          </Link>

          <Link
            href="/contact"
            className="group px-8 py-4 border-2 border-blue-400/50 rounded-xl text-blue-300 font-semibold transition-all duration-300 hover:border-blue-400 hover:bg-blue-400/10 hover:scale-105"
          >
            <span className="flex items-center gap-2">
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              Contact Me
            </span>
          </Link>
        </div>

        {/* Fun fact */}
        <div className="mt-12 p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 max-w-lg mx-auto">
          <p className="text-purple-200/60 text-sm">
            <span className="text-purple-400 font-semibold">Fun fact:</span> The HTTP 404 error was named after room 404 at CERN, where the World Wide Web was born. Or was it? 🤔
          </p>
        </div>

        {/* Floating elements */}
        <div className="absolute -top-20 -left-20 w-40 h-40 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute -bottom-20 -right-20 w-60 h-60 border border-blue-500/20 rounded-full animate-spin-slow" style={{ animationDirection: 'reverse' }} />
      </div>

      {/* Custom styles */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px) rotate(180deg);
            opacity: 0.8;
          }
        }
        .animate-float {
          animation: float 8s ease-in-out infinite;
        }
        @keyframes bounce-slow {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-10px);
          }
        }
        .animate-bounce-slow {
          animation: bounce-slow 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 20s linear infinite;
        }
        @keyframes glitch {
          0%, 100% {
            text-shadow: 2px 0 #ff00ff, -2px 0 #00ffff;
          }
          25% {
            text-shadow: -2px 0 #ff00ff, 2px 0 #00ffff;
          }
          50% {
            text-shadow: 2px 2px #ff00ff, -2px -2px #00ffff;
          }
          75% {
            text-shadow: -2px -2px #ff00ff, 2px 2px #00ffff;
          }
        }
        .animate-glitch {
          animation: glitch 2s ease-in-out infinite;
        }
      `}</style>
    </div>
    <Footer />
    </>
  );
}

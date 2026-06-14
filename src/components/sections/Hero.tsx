'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const Hero: React.FC = () => {
  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = portfolioSection.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section 
      id="home" 
      className="relative flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 pt-12 pb-0 sm:pt-14 sm:pb-0 lg:pt-16 lg:pb-0"
    >
      {/* Animated ambient background glow circles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.45, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          className="absolute top-10 -right-20 w-[550px] h-[550px] bg-purple-700/25 rounded-full"
          style={{ filter: 'blur(130px)' }}
        />
        <motion.div 
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.3, 0.2],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
          className="absolute bottom-10 -left-20 w-[500px] h-[500px] bg-blue-700/20 rounded-full"
          style={{ filter: 'blur(120px)' }}
        />
        <motion.div 
          animate={{
            scale: [1, 1.08, 1],
            opacity: [0.15, 0.25, 0.15],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 4
          }}
          className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-indigo-500/15 rounded-full"
          style={{ filter: 'blur(110px)' }}
        />
      </div>

      {/* Sweeping mesh/wave curves for premium visual style */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-[0.32] z-0">
        <svg className="absolute w-full h-[140%] top-[-20%] left-0" viewBox="0 0 1440 900" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient id="glow-grad-1" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#6366f1" stopOpacity="0.85" />
              <stop offset="45%" stopColor="#a855f7" stopOpacity="0.65" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0" />
            </linearGradient>
            <linearGradient id="glow-grad-2" x1="0%" y1="80%" x2="100%" y2="20%">
              <stop offset="0%" stopColor="#3b82f6" stopOpacity="0.85" />
              <stop offset="50%" stopColor="#818cf8" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#d946ef" stopOpacity="0" />
            </linearGradient>
          </defs>
          
          {/* Sweeping horizontal-ish waves */}
          {Array.from({ length: 16 }).map((_, i) => (
            <path
              key={`h-${i}`}
              d={`M -200 ${620 + i * 16} C ${280 + i * 22} ${530 - i * 12}, ${680 + i * 12} ${230 - i * 16}, 1600 ${280 - i * 22}`}
              stroke="url(#glow-grad-1)"
              strokeWidth="1.2"
              opacity={0.25 + i * 0.03}
            />
          ))}

          {/* Crossing waves for mesh structure */}
          {Array.from({ length: 12 }).map((_, i) => (
            <path
              key={`c-${i}`}
              d={`M -150 ${780 - i * 22} C ${380 - i * 12} ${730 - i * 22}, ${780 - i * 16} ${420 - i * 12}, 1600 ${570 - i * 16}`}
              stroke="url(#glow-grad-2)"
              strokeWidth="0.9"
              opacity={0.18 + i * 0.04}
            />
          ))}
        </svg>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.015] bg-grid-16 pointer-events-none"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Text Column - Set col-span to 5 to avoid wrapping header text */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-5 text-center lg:text-left flex flex-col items-center lg:items-start justify-center z-10 pt-12 sm:pt-14 lg:pt-0"
          >
            <h1 className="text-5xl sm:text-6xl lg:text-[76px] xl:text-[84px] font-medium text-white mb-3 tracking-tight leading-tight">
              Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400">Portfolio</span>
            </h1>
            
            <p className="text-lg sm:text-xl font-medium text-white mb-1.5 tracking-wide whitespace-nowrap">
              Ideas. Strategy. Design. Execution.
            </p>
            
            <p className="text-sm sm:text-base text-slate-300 mb-4.5 leading-relaxed max-w-sm mx-auto lg:mx-0">
              We turn pixels into powerful digital experiences.
            </p>
            
            <div>
              <Button 
                size="lg" 
                onClick={scrollToPortfolio}
                className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium shadow-lg hover:shadow-xl rounded-full px-8 py-3 border-0 transition-all duration-300"
              >
                Explore Our Work
              </Button>
            </div>
          </motion.div>

          {/* Right Image/Mockups Column - col-span-7 with negative margin to pull closer to text */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-7 flex justify-center lg:justify-end items-center lg:-ml-6 xl:-ml-10 lg:self-end"
          >
            <div className="relative w-full max-w-[760px] aspect-[1.5] lg:-mr-10 xl:-mr-14 translate-y-3 lg:translate-y-8">
              <Image
                src="/hero.png"
                alt="Pixel Pulses Showcases"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 58vw"
                className="object-contain drop-shadow-[0_20px_50px_rgba(99,102,241,0.25)]"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;

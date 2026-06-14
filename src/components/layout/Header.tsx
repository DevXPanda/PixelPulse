'use client';

import React, { useState, useEffect } from 'react';
import { motion as motionFramer, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

interface HeaderProps {
  onContactClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onContactClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', href: '#home' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' }
  ];

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    
    if (href === '#contact') {
      onContactClick();
      return;
    }

    const element = document.querySelector(href);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <motionFramer.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 dark:bg-slate-900/90 backdrop-blur-md shadow-lg border-b border-slate-200/50 dark:border-slate-800/50 py-1.5'
            : 'bg-transparent py-2.5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div 
              onClick={() => handleNavClick('#home')}
              className="flex items-center cursor-pointer"
            >
              <Image 
                src="/download.svg" 
                alt="Pixel Pulses Logo" 
                width={120}
                height={32}
                priority
                className={`w-auto h-8 sm:h-9 transition-all duration-300 ${
                  isScrolled && !isMobileMenuOpen ? 'brightness-90 invert-0 dark:invert' : 'brightness-100 invert dark:invert-0'
                }`}
              />
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item, index) => (
                <button
                  key={index}
                  onClick={() => handleNavClick(item.href)}
                  className={`text-sm font-medium transition-colors duration-200 ${
                    isScrolled
                      ? 'text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400'
                      : 'text-white/80 hover:text-white'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* Desktop CTA */}
            <div className="hidden md:flex items-center space-x-4">
              <Button
                variant={isScrolled ? 'primary' : 'outline'}
                size="sm"
                onClick={onContactClick}
                className={!isScrolled ? 'border-white text-white hover:bg-white hover:text-slate-900' : ''}
              >
                Get Started
              </Button>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`md:hidden p-2 rounded-lg transition-colors duration-200 ${
                isScrolled
                  ? 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-850'
                  : 'text-white hover:bg-white/10'
              }`}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motionFramer.header>

      {/* Mobile Menu Dropdown Card */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop */}
            <div 
              className="fixed inset-0 bg-slate-950/50 backdrop-blur-xs z-40 md:hidden animate-fade-in"
              onClick={() => setIsMobileMenuOpen(false)}
            />

            {/* Dropdown Panel Card */}
            <motionFramer.div
              initial={{ opacity: 0, scale: 0.95, y: -10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: -10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className={`fixed top-[68px] right-4 left-4 max-w-sm ml-auto backdrop-blur-xl shadow-2xl rounded-2xl p-5 flex flex-col z-50 md:hidden border transition-colors duration-300 ${
                isScrolled
                  ? 'bg-white/95 border-slate-200/80 text-slate-800 shadow-slate-200/30'
                  : 'bg-slate-950/98 border-slate-800/60 text-white shadow-black/40'
              }`}
            >
              {/* Navigation items */}
              <nav className="flex flex-col space-y-1 mb-4">
                {navItems.map((item, index) => (
                  <button
                    key={index}
                    onClick={() => handleNavClick(item.href)}
                    className={`block w-full text-left px-4 py-2.5 text-sm font-medium rounded-xl transition-all duration-200 flex items-center justify-between group ${
                      isScrolled
                        ? 'text-slate-650 hover:text-slate-900 hover:bg-slate-100/80'
                        : 'text-slate-300 hover:text-white hover:bg-slate-900/60'
                    }`}
                  >
                    <span>{item.label}</span>
                    <span className={`opacity-0 group-hover:opacity-100 transition-all duration-250 transform translate-x-[-4px] group-hover:translate-x-0 ${
                      isScrolled ? 'text-blue-600' : 'text-indigo-400'
                    }`}>
                      →
                    </span>
                  </button>
                ))}
              </nav>

              {/* CTA Button */}
              <div className={`border-t pt-4 ${isScrolled ? 'border-slate-100' : 'border-slate-800/60'}`}>
                <Button
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    onContactClick();
                  }}
                  className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-medium py-2.5 rounded-xl shadow-lg border-0 transition-all duration-200 text-sm"
                >
                  Get Started
                </Button>
              </div>
            </motionFramer.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;

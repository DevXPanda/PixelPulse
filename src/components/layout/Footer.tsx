'use client';

import React from 'react';
import Image from 'next/image';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';

interface FooterProps {
  onContactClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onContactClick }) => {
  return (
    <footer className="relative border-t border-purple-950/60 bg-[#070b15] text-slate-400 pt-16 pb-8">
      {/* Top purple accent line glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="flex flex-col">
            <div className="flex items-center mb-6">
              <Image 
                src="/download.svg" 
                alt="Pixel Pulses Logo" 
                width={150} 
                height={40} 
                className="w-auto h-9 brightness-100 dark:invert-0"
              />
            </div>
            <p className="text-sm leading-relaxed text-slate-400 mb-6">
              Your partner for digital growth. We combine cutting-edge technology with strategic marketing to deliver results that matter.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-9 h-9 bg-slate-900/60 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/40 transition-colors duration-200"
              >
                <Facebook className="w-4 h-4" />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-9 h-9 bg-slate-900/60 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/40 transition-colors duration-200"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center justify-center w-9 h-9 bg-slate-900/60 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 border border-slate-800/40 transition-colors duration-200"
              >
                <Linkedin className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-white font-medium text-base mb-6 tracking-wide">
              Quick Links
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors duration-200">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#about" className="hover:text-white transition-colors duration-200">
                  About
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors duration-200">
                  Process
                </a>
              </li>
              <li>
                <button 
                  onClick={onContactClick} 
                  className="text-left hover:text-white transition-colors duration-200 cursor-pointer"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 className="text-white font-medium text-base mb-6 tracking-wide">
              Services
            </h4>
            <ul className="space-y-3.5 text-sm">
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Performance Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Social Media Management
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  SEO Services
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  Website Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  MERN Stack Development
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors duration-200">
                  AI Solutions
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Get in Touch */}
          <div>
            <h4 className="text-white font-medium text-base mb-6 tracking-wide">
              Get in Touch
            </h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="mailto:pixelpulse340@gmail.com" className="hover:text-white transition-colors duration-200">
                  pixelpulse340@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <a href="tel:+919355096544" className="hover:text-white transition-colors duration-200">
                  +91-9355096544
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-4 h-4 text-slate-400 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.746.953 3.71 1.455 5.703 1.458h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <a href="https://wa.me/919355096544" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors duration-200">
                  WhatsApp: +91-9355096544
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400 flex-shrink-0" />
                <span>Remote - Worldwide</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Row */}
        <div className="border-t border-slate-900/60 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <div>
            &copy; 2026 Pixel Pulses. All rights reserved.
          </div>
          <div className="flex items-center gap-6 text-slate-500">
            <a href="#" className="hover:text-white transition-colors duration-200">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors duration-200">
              Cookie Policy
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

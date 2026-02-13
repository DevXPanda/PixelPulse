'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Briefcase, ChartBar, Code, X, Mail, Phone, User, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Hero = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [strategyFormData, setStrategyFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById('portfolio');
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleStrategyInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStrategyFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'strategy', data: strategyFormData }),
      });
      const result = await res.json();
      if (!res.ok || !result.success) throw new Error(result.error || 'Failed to send');
      setShowSuccess(true);
      setTimeout(() => {
        setShowContactForm(false);
        setShowSuccess(false);
      }, 3000);
      setStrategyFormData({ name: '', email: '', phone: '', projectDetails: '' });
    } catch {
      alert('Sorry, there was an error sending your request. Please try again or contact us directly at pixelpulse340@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <section className="relative min-h-[90vh] sm:min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 pt-24 sm:pt-28 md:pt-32 lg:pt-0">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-2000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse animation-delay-4000"></div>
      </div>

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-white/[0.02] bg-grid-16"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >

          {/* <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="inline-flex items-center px-4 py-2 mb-6 text-sm font-medium text-white bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <span className="w-2 h-2 bg-green-400 rounded-full mr-2 animate-pulse"></span>
            Available for Projects
          </motion.div> */}

          {/* Main headline */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight"
          >
            Grow Your Business with
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              High-Converting Ads, SEO & Powerful Websites
            </span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="text-lg sm:text-xl text-gray-300 mb-10 max-w-4xl mx-auto leading-relaxed"
          >
            Transform your online presence with data-driven digital marketing strategies
            and cutting-edge web development that drives real results and boosts your revenue.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <Button size="lg" className="group" onClick={() => setShowContactForm(true)}>
              Get Free Strategy Call
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button variant="outline" size="lg" className="border-white/20 text-white hover:bg-white/10" onClick={scrollToPortfolio}>
              View Our Works
              <Briefcase className="ml-2 h-5 w-5" />
            </Button>
          </motion.div>

          {/* Feature highlights */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
            className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
          >
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-3">
                <ChartBar className="h-6 w-6 text-blue-400" />
              </div>
              <span className="text-gray-300 text-sm">ROI-Focused Campaigns</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-purple-500/20 rounded-lg flex items-center justify-center mb-3">
                <Code className="h-6 w-6 text-purple-400" />
              </div>
              <span className="text-gray-300 text-sm">Custom Web Solutions</span>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-3">
                <Briefcase className="h-6 w-6 text-green-400" />
              </div>
              <span className="text-gray-300 text-sm">End-to-End Service</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      {/* <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-bounce"></div>
        </div>
      </motion.div> */}

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-2xl shadow-2xl max-w-sm sm:max-w-md w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Get Free Strategy Call</h3>
                    <p className="text-gray-600 mt-1">Let's discuss your project requirements</p>
                  </div>
                  <button
                    onClick={() => setShowContactForm(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleSubmit} className="p-6 space-y-5">
                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    <User className="h-4 w-4 inline mr-2 text-blue-600" />
                    Name <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={strategyFormData.name}
                    onChange={handleStrategyInputChange}
                    required
                    className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-gray-50 hover:bg-white"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    <Mail className="h-4 w-4 inline mr-2 text-blue-600" />
                    Email <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={strategyFormData.email}
                    onChange={handleStrategyInputChange}
                    required
                    className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-gray-50 hover:bg-white"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    <Phone className="h-4 w-4 inline mr-2 text-blue-600" />
                    Phone <span className='text-red-600'>*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={strategyFormData.phone}
                    onChange={handleStrategyInputChange}
                    required
                    className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-gray-50 hover:bg-white"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-800 mb-2">
                    <MessageSquare className="h-4 w-4 inline mr-2 text-blue-600" />
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    value={strategyFormData.projectDetails}
                    onChange={handleStrategyInputChange}
                    rows={4}
                    className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 text-gray-900 bg-gray-50 hover:bg-white resize-none"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex gap-3">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                        Sending...
                      </>
                    ) : (
                      'Submit Request'
                    )}
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    size="lg"
                    className="flex-1 border-gray-300 text-gray-700 hover:bg-gray-50 hover:border-gray-400 font-semibold transition-all duration-200"
                    onClick={() => setShowContactForm(false)}
                  >
                    Cancel
                  </Button>
                </div>

              </form>

              {/* Success Popup */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute top-4 right-4 bg-white rounded-lg shadow-lg p-4 border border-gray-200 max-w-sm pointer-events-none"
                >
                  <div className="flex items-center">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mr-3 flex-shrink-0">
                      <svg className="w-4 h-4 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">Message Sent! 🎉</h4>
                      <p className="text-xs text-gray-600">We'll get back to you within 24 hours.</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Hero;

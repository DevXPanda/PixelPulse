'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Phone, User, MessageSquare, Briefcase, DollarSign, X, Check } from 'lucide-react';
import { Button } from './Button';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'strategy' | 'inquiry';
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'strategy'
}) => {
  const [activeTab, setActiveTab] = useState<'strategy' | 'inquiry'>(defaultTab);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  // Strategy Form State
  const [strategyData, setStrategyData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

  // Inquiry Form State
  const [inquiryData, setInquiryData] = useState<{
    name: string;
    email: string;
    phone: string;
    businessType: string;
    serviceNeeded: string[];
    budgetRange: string;
    message: string;
  }>({
    name: '',
    email: '',
    phone: '',
    businessType: '',
    serviceNeeded: [],
    budgetRange: '',
    message: ''
  });

  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setActiveTab(defaultTab);
      // Reset forms
      setStrategyData({ name: '', email: '', phone: '', projectDetails: '' });
      setInquiryData({
        name: '',
        email: '',
        phone: '',
        businessType: '',
        serviceNeeded: [],
        budgetRange: '',
        message: ''
      });
      setShowSuccess(false);
    }
  }, [isOpen, defaultTab]);

  const businessTypes = [
    'E-commerce',
    'SaaS',
    'Local Business',
    'Professional Services',
    'Healthcare',
    'Real Estate',
    'Restaurant',
    'Other'
  ];

  const services = [
    'Performance Marketing',
    'Social Media Management',
    'SEO Services',
    'Website Development',
    'MERN Stack Development',
    'AI Solutions',
    'Full Digital Strategy',
    'Other'
  ];

  const budgetRanges = [
    '10k - 30k',
    '30k - 60k',
    '60k - 1.2L',
    '1.2L - 2.4L',
    '2.4L+',
    'Discuss in consultation'
  ];

  const handleStrategyChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStrategyData(prev => ({ ...prev, [name]: value }));
  };

  const handleInquiryChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setInquiryData(prev => ({ ...prev, [name]: value }));
  };

  const toggleService = (service: string) => {
    setInquiryData(prev => {
      const updated = prev.serviceNeeded.includes(service)
        ? prev.serviceNeeded.filter(s => s !== service)
        : [...prev.serviceNeeded, service];
      return { ...prev, serviceNeeded: updated };
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const payload = activeTab === 'strategy' 
        ? { type: 'strategy', data: strategyData }
        : { type: 'contact', data: inquiryData };

      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });

      const result = await res.json();
      if (!res.ok || !result.success) {
        throw new Error(result.error || 'Failed to send submission');
      }

      setShowSuccess(true);
      setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 2500);
    } catch (err) {
      const error = err as Error;
      alert(error.message || 'Sorry, there was an error sending your request. Please try again or email us directly at pixelpulse340@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
          {/* Backdrop click */}
          <div className="absolute inset-0" onClick={onClose} />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
            className="relative bg-white dark:bg-slate-900 rounded-3xl shadow-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto border border-slate-200 dark:border-slate-800 z-10"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-slate-500 hover:text-slate-800 dark:text-slate-400 dark:hover:text-white rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Success screen */}
            {showSuccess ? (
              <div className="p-8 text-center flex flex-col items-center justify-center min-h-[350px]">
                <div className="w-16 h-16 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
                  <Check className="w-8 h-8 text-green-600 dark:text-green-400" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                  Request Received! 🎉
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  Thank you for reaching out. We will get back to you within 24 hours.
                </p>
              </div>
            ) : (
              <div>
                {/* Header Tabs */}
                <div className="p-6 pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                    Let&apos;s Build Together
                  </h3>
                  <div className="flex bg-slate-100 dark:bg-slate-800 p-1 rounded-xl">
                    <button
                      onClick={() => setActiveTab('strategy')}
                      className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                        activeTab === 'strategy'
                          ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Strategy Call
                    </button>
                    <button
                      onClick={() => setActiveTab('inquiry')}
                      className={`flex-1 py-2 text-sm font-semibold rounded-lg transition-all ${
                        activeTab === 'inquiry'
                          ? 'bg-white dark:bg-slate-700 text-blue-600 dark:text-white shadow-sm'
                          : 'text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white'
                      }`}
                    >
                      Detailed Inquiry
                    </button>
                  </div>
                </div>

                {/* Forms content */}
                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                  {activeTab === 'strategy' ? (
                    /* STRATEGY FORM */
                    <>
                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          <User className="h-4 w-4 inline mr-2 text-blue-500" />
                          Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={strategyData.name}
                          onChange={handleStrategyChange}
                          required
                          placeholder="Your full name"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          <Mail className="h-4 w-4 inline mr-2 text-blue-500" />
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={strategyData.email}
                          onChange={handleStrategyChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          <Phone className="h-4 w-4 inline mr-2 text-blue-500" />
                          Phone Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          value={strategyData.phone}
                          onChange={handleStrategyChange}
                          required
                          placeholder="Your phone number"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          <MessageSquare className="h-4 w-4 inline mr-2 text-blue-500" />
                          Project Details & Goals
                        </label>
                        <textarea
                          name="projectDetails"
                          value={strategyData.projectDetails}
                          onChange={handleStrategyChange}
                          rows={4}
                          placeholder="Tell us briefly about your business goals and what you would like to achieve..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                        />
                      </div>
                    </>
                  ) : (
                    /* INQUIRY FORM */
                    <>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <input
                            type="text"
                            name="name"
                            value={inquiryData.name}
                            onChange={handleInquiryChange}
                            required
                            placeholder="Full name"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                            Phone
                          </label>
                          <input
                            type="tel"
                            name="phone"
                            value={inquiryData.phone}
                            onChange={handleInquiryChange}
                            placeholder="Phone number"
                            className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Email Address <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={inquiryData.email}
                          onChange={handleInquiryChange}
                          required
                          placeholder="your@email.com"
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          <Briefcase className="h-4 w-4 inline mr-2 text-blue-500" />
                          Business Type <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="businessType"
                          value={inquiryData.businessType}
                          onChange={handleInquiryChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        >
                          <option value="">Select business type</option>
                          {businessTypes.map(type => (
                            <option key={type} value={type}>{type}</option>
                          ))}
                        </select>
                      </div>

                      {/* Services Multi-Select */}
                      <div className="relative">
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Services Needed
                        </label>
                        <div
                          onClick={() => setIsServiceDropdownOpen(!isServiceDropdownOpen)}
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all cursor-pointer min-h-[44px]"
                        >
                          {inquiryData.serviceNeeded.length > 0 
                            ? inquiryData.serviceNeeded.join(', ') 
                            : 'Select services needed'}
                        </div>
                        {isServiceDropdownOpen && (
                          <div className="absolute left-0 mt-1 w-full max-h-48 overflow-y-auto border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-xl z-30 p-2 space-y-1">
                            {services.map(service => (
                              <div
                                key={service}
                                onClick={() => toggleService(service)}
                                className={`flex items-center px-3 py-1.5 rounded-lg cursor-pointer transition-colors ${
                                  inquiryData.serviceNeeded.includes(service)
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400'
                                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800'
                                }`}
                              >
                                <input
                                  type="checkbox"
                                  checked={inquiryData.serviceNeeded.includes(service)}
                                  readOnly
                                  className="mr-2.5 accent-blue-600"
                                />
                                <span className="text-sm font-medium">{service}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          <DollarSign className="h-4 w-4 inline mr-2 text-blue-500" />
                          Budget Range <span className="text-red-500">*</span>
                        </label>
                        <select
                          name="budgetRange"
                          value={inquiryData.budgetRange}
                          onChange={handleInquiryChange}
                          required
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all"
                        >
                          <option value="">Select budget range</option>
                          {budgetRanges.map(range => (
                            <option key={range} value={range}>{range}</option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300 mb-1">
                          Message / Brief Details
                        </label>
                        <textarea
                          name="message"
                          value={inquiryData.message}
                          onChange={handleInquiryChange}
                          rows={3}
                          placeholder="Tell us more about your requirements..."
                          className="w-full px-4 py-2.5 rounded-xl border border-slate-300 dark:border-slate-700 text-slate-900 dark:text-white bg-slate-50 dark:bg-slate-950 focus:ring-2 focus:ring-blue-500 outline-none transition-all resize-none"
                        />
                      </div>
                    </>
                  )}

                  <div className="pt-2 flex gap-3">
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                          Sending...
                        </>
                      ) : activeTab === 'strategy' ? (
                        'Request Call'
                      ) : (
                        'Send Inquiry'
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={onClose}
                      className="flex-1 border-slate-300 text-slate-700 dark:border-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800 font-semibold"
                    >
                      Cancel
                    </Button>
                  </div>
                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, 
  Phone, 
  MessageCircle, 
  Send,
  MapPin,
  Clock,
  X,
  User,
  MessageSquare
} from 'lucide-react';
import { Button } from '@/components/ui/Button';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    businessType: '',
    serviceNeeded: [] as string[],
    budgetRange: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showStrategyModal, setShowStrategyModal] = useState(false);
  const [strategyFormData, setStrategyFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectDetails: ''
  });

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
    '₹10,000 - ₹30,000',
    '₹30,000 - ₹60,000',
    '₹60,000 - ₹1,20,000',
    '₹1,20,000 - ₹2,40,000',
    '₹2,40,000+',
    'Discuss in consultation'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleServiceChange = (service: string) => {
    setFormData(prev => ({
      ...prev,
      serviceNeeded: prev.serviceNeeded.includes(service)
        ? prev.serviceNeeded.filter(s => s !== service)
        : [...prev.serviceNeeded, service]
    }));
  };

  const handleStrategyInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setStrategyFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleStrategySubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || 'template_admin_notification';
      const clientTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID || 'template_client_reply';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Prepare template parameters for strategy call
      const templateParams = {
        ...strategyFormData,
        submission_type: 'Strategy Call Request',
        submission_date: new Date().toLocaleString()
      };

      // Send email to admin
      await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);
      
      // Send confirmation email to client
      await emailjs.send(serviceId, clientTemplateId, templateParams, publicKey);

      setShowSuccess(true);
      setShowStrategyModal(false);
      
      // Auto-hide popup after 3 seconds
      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);
      
      // Reset strategy form
      setStrategyFormData({
        name: '',
        email: '',
        phone: '',
        projectDetails: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Sorry, there was an error sending your request. Please try again or contact us directly at pixelpulse340@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || 'your_service_id';
      const adminTemplateId = process.env.NEXT_PUBLIC_EMAILJS_ADMIN_TEMPLATE_ID || 'template_admin_notification';
      const clientTemplateId = process.env.NEXT_PUBLIC_EMAILJS_CLIENT_TEMPLATE_ID || 'template_client_reply';
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || 'your_public_key';

      // Prepare template parameters
      const templateParams = {
        ...formData,
        submission_date: new Date().toLocaleString()
      };

      // Send email to admin
      await emailjs.send(serviceId, adminTemplateId, templateParams, publicKey);

      await emailjs.send(serviceId, clientTemplateId, templateParams, publicKey);

      setShowSuccess(true);

      setTimeout(() => {
        setShowSuccess(false);
      }, 3000);

      // Reset form
      setFormData({
        name: '',
        email: '',
        businessType: '',
        serviceNeeded: [],
        budgetRange: '',
        message: ''
      });
    } catch (error) {
      console.error('EmailJS Error:', error);
      alert('Sorry, there was an error sending your message. Please try again or contact us directly at pixelpulse340@gmail.com');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Ready to scale your business online? Get in touch and let's explore how we can work together
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>
              <p className="text-gray-600 mb-8">
                We are here to help you grow your business. Whether you need a new website, marketing strategy, or complete digital transformation, let's talk about your goals.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <Mail className="h-5 w-5 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Email</div>
                  <div className="text-gray-600">pixelpulse340@gmail.com</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <Phone className="h-5 w-5 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Phone</div>
                  <div className="text-gray-600">+91-9355096544</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <MessageCircle className="h-5 w-5 text-green-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">WhatsApp</div>
                  <div className="text-gray-600">+91-9355096544</div>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors duration-200">
                <MapPin className="h-5 w-5 text-blue-600 mr-4" />
                <div>
                  <div className="font-medium text-gray-900">Location</div>
                  <div className="text-gray-600">Remote - Worldwide</div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-xl p-6 border border-blue-200">
              <div className="flex items-center mb-3">
                <Clock className="h-5 w-5 text-blue-600 mr-3" />
                <h4 className="font-semibold text-gray-900">Business Hours</h4>
              </div>
              <div className="text-gray-600 space-y-1">
                <div>Monday - Friday: 9:00 AM - 6:00 PM EST</div>
                <div>Saturday: 10:00 AM - 4:00 PM EST</div>
                <div>Sunday: Closed</div>
              </div>
            </div>

            {/* WhatsApp CTA */}
            {/* <Button className="w-full bg-green-500 hover:bg-green-600">
              <MessageCircle className="mr-2 h-5 w-5" />
              Chat on WhatsApp
            </Button> */}
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="relative bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Name <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      placeholder="Your full name"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email <span className='text-red-600'>*</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="businessType" className="block text-sm font-medium text-gray-700 mb-2">
                    Business Type <span className='text-red-600'>*</span>
                  </label>
                  <select
                    id="businessType"
                    name="businessType"
                    value={formData.businessType}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  >
                    <option value="">Select your business type</option>
                    {businessTypes.map(type => (
                      <option key={type} value={type}>{type}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed <span className='text-red-600'>*</span>
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {services.map(service => (
                      <label key={service} className="flex items-center space-x-2 bg-gray-50 p-3 rounded-lg border border-gray-300 hover:bg-gray-100 transition-colors">
                        <input
                          type="checkbox"
                          name="serviceNeeded"
                          value={service}
                          checked={formData.serviceNeeded.includes(service)}
                          onChange={() => handleServiceChange(service)}
                          className="h-4 w-4 border-gray-300 rounded accent-blue-600"
                        />
                        <span className="text-gray-900">{service}</span>
                      </label>
                    ))}
                  </div>
                </div>


                <div>
                  <label htmlFor="budgetRange" className="block text-sm font-medium text-gray-700 mb-2">
                    Budget Range <span className='text-red-600'>*</span>
                  </label>
                  <select
                    id="budgetRange"
                    name="budgetRange"
                    value={formData.budgetRange}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                  >
                    <option value="">Select your budget range</option>
                    {budgetRanges.map(range => (
                      <option key={range} value={range}>{range}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Project Details (Optional)
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 outline-none border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 text-gray-900 bg-white"
                    placeholder="Tell me more about your project..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-3"></div>
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-5 w-5" />
                      Send Message
                    </>
                  )}
                </Button>

                <p className="text-sm text-gray-500 text-center">
                  We will respond within 24 hours. Your information is kept confidential.
                </p>
              </form>

              {/* Success Popup */}
              {showSuccess && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9, y: 10 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: 10 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                  className="absolute inset-0 flex items-center justify-center bg-white/90 backdrop-blur-sm rounded-2xl p-8 pointer-events-none"
                >
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-6 h-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">
                      Message Sent 🎉
                    </h3>
                    <p className="text-gray-600 text-sm">
                      We will get back to you within 24 hours.
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Strategy Call Modal */}
      <AnimatePresence>
        {showStrategyModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowStrategyModal(false)}
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
                    onClick={() => setShowStrategyModal(false)}
                    className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Form Content */}
              <form onSubmit={handleStrategySubmit} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <User className="h-4 w-4 inline mr-2" />
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={strategyFormData.name}
                    onChange={handleStrategyInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Mail className="h-4 w-4 inline mr-2" />
                    Email *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={strategyFormData.email}
                    onChange={handleStrategyInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <Phone className="h-4 w-4 inline mr-2" />
                    Phone *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={strategyFormData.phone}
                    onChange={handleStrategyInputChange}
                    required
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    <MessageSquare className="h-4 w-4 inline mr-2" />
                    Project Details
                  </label>
                  <textarea
                    name="projectDetails"
                    value={strategyFormData.projectDetails}
                    onChange={handleStrategyInputChange}
                    rows={4}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-gray-900"
                    placeholder="Tell us about your project..."
                  />
                </div>

                <div className="flex gap-4 pt-4">
                  <Button
                    type="submit"
                    size="lg"
                    className="flex-1"
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
                    className="flex-1"
                    onClick={() => setShowStrategyModal(false)}
                  >
                    Cancel
                  </Button>
                </div>
              </form>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Contact;

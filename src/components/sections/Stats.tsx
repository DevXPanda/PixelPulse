'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Briefcase, 
  Target, 
  Globe, 
  Building,
  TrendingUp,
  X,
  Check,
  Star,
  Clock,
  Gift
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Stats = () => {
  const [counters, setCounters] = useState({
    projects: 0,
    campaigns: 0,
    websites: 0,
    industries: 0
  });
  const [showOffers, setShowOffers] = useState(false);

  const offers = [
    {
      title: "Starter Package",
      originalPrice: "₹8,999",
      offerPrice: "₹5,999",
      discount: "33% OFF",
      services: [
        "Basic Website Development",
        "SEO Setup",
        "Social Media Management (1 month)",
        "Basic Analytics Setup"
      ],
      validity: "Limited Time Offer",
      popular: false
    },
    {
      title: "Growth Package",
      originalPrice: "₹15,999",
      offerPrice: "₹10,999",
      discount: "33% OFF",
      services: [
        "Advanced Website Development",
        "Complete SEO Strategy",
        "Social Media Management (3 months)",
        "Google Ads Setup",
        "Performance Analytics"
      ],
      validity: "First 10 Clients Only",
      popular: true
    },
    {
      title: "Enterprise Package",
      originalPrice: "₹25,999",
      offerPrice: "₹17,999",
      discount: "30% OFF",
      services: [
        "Custom Web Application",
        "Advanced SEO & Content Strategy",
        "Social Media Management (6 months)",
        "PPC Campaign Management",
        "AI Chatbot Integration",
        "Advanced Analytics Dashboard"
      ],
      validity: "Special Launch Price",
      popular: false
    },
    {
      title: "Digital Marketing Bundle",
      originalPrice: "₹35,999",
      offerPrice: "₹23,999",
      discount: "33% OFF",
      services: [
        "Meta Ads Campaign",
        "Google Ads Campaign",
        "Email Marketing Setup",
        "Content Marketing Strategy",
        "Monthly Performance Reports"
      ],
      validity: "New Client Special",
      popular: false
    }
  ];

  const targetStats = {
    projects: 50,
    campaigns: 100,
    websites: 45,
    industries: 30
  };

  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 60;
    const stepDuration = duration / steps;

    const interval = setInterval(() => {
      setCounters(prev => {
        const newCounters = { ...prev };
        Object.keys(newCounters).forEach(key => {
          const target = targetStats[key as keyof typeof targetStats];
          const increment = target / steps;
          if (newCounters[key as keyof typeof newCounters] < target) {
            newCounters[key as keyof typeof newCounters] = Math.min(
              newCounters[key as keyof typeof newCounters] + increment,
              target
            );
          }
        });
        return newCounters;
      });
    }, stepDuration);

    return () => clearInterval(interval);
  }, []);

  const stats = [
    {
      icon: Briefcase,
      value: Math.round(counters.projects),
      label: "Projects Completed",
      suffix: "+",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Target,
      value: Math.round(counters.campaigns),
      label: "Campaigns Managed",
      suffix: "+",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Globe,
      value: Math.round(counters.websites),
      label: "Websites Built",
      suffix: "+",
      color: "from-green-500 to-green-600"
    },
    {
      icon: Building,
      value: Math.round(counters.industries),
      label: "Industries Served",
      suffix: "+",
      color: "from-orange-500 to-orange-600"
    }
  ];

  return (
    <section className="py-20 bg-white">
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
            Proven Track Record
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Numbers that speak for themselves - delivering consistent results across diverse industries
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="text-center group"
            >
              <div className="bg-gray-50 rounded-2xl p-8 hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-blue-200">
                {/* Icon */}
                <div className={`w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-300`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>

                {/* Counter */}
                <div className="text-4xl sm:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                  {stat.value}{stat.suffix}
                </div>

                {/* Label */}
                <div className="text-gray-600 font-medium">
                  {stat.label}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Additional Stats Row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-8 text-white"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "100%", label: "Client Satisfaction" },
              { value: "3.5x", label: "Average ROI" },
              { value: "24h", label: "Response Time" },
              { value: "12mo", label: "Avg. Partnership" }
            ].map((stat, index) => (
              <div key={index}>
                <div className="text-3xl font-bold mb-2">{stat.value}</div>
                <div className="text-blue-100 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* Growth Indicator */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <div className="inline-flex items-center px-6 py-3 bg-green-50 rounded-full border border-green-200 mb-6">
            <TrendingUp className="h-5 w-5 text-green-600 mr-3" />
            <span className="text-green-800 font-medium">
              Growing 40% year-over-year
            </span>
          </div>
          
          {/* See Offer Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            viewport={{ once: true }}
            className="mt-6"
          >
            <Button
              size="lg"
              onClick={() => setShowOffers(true)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <Gift className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
              See Special Offers
              <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full animate-pulse">
                HOT
              </span>
            </Button>
          </motion.div>
        </motion.div>
      </div>

      {/* Offers Modal */}
      <AnimatePresence>
        {showOffers && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
            onClick={() => setShowOffers(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl max-w-6xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-3xl z-10">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-3xl font-bold text-gray-900 mb-2">
                      🎉 Special Offers & Packages
                    </h3>
                    <p className="text-gray-600">
                      Limited time deals designed to accelerate your business growth
                    </p>
                  </div>
                  <button
                    onClick={() => setShowOffers(false)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
                  >
                    <X className="h-6 w-6 text-gray-500" />
                  </button>
                </div>
              </div>

              {/* Offers Grid */}
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {offers.map((offer, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className={`relative rounded-2xl border-2 ${
                        offer.popular
                          ? 'border-blue-500 bg-gradient-to-br from-blue-50 to-purple-50'
                          : 'border-gray-200 bg-white'
                      } p-6 hover:shadow-lg transition-all duration-300`}
                    >
                      {/* Popular Badge */}
                      {offer.popular && (
                        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold flex items-center">
                            <Star className="h-4 w-4 mr-1" />
                            MOST POPULAR
                          </div>
                        </div>
                      )}

                      {/* Offer Header */}
                      <div className="text-center mb-6">
                        <h4 className="text-2xl font-bold text-gray-900 mb-2">
                          {offer.title}
                        </h4>
                        <div className="flex items-center justify-center space-x-3 mb-2">
                          <span className="text-gray-400 line-through text-lg">
                            {offer.originalPrice}
                          </span>
                          <span className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600">
                            {offer.offerPrice}
                          </span>
                        </div>
                        <div className="inline-flex items-center px-3 py-1 bg-red-100 text-red-600 rounded-full text-sm font-semibold">
                          {offer.discount}
                        </div>
                      </div>

                      {/* Services List */}
                      <div className="space-y-3 mb-6">
                        {offer.services.map((service, serviceIndex) => (
                          <div key={serviceIndex} className="flex items-start">
                            <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                            <span className="text-gray-700">{service}</span>
                          </div>
                        ))}
                      </div>

                      {/* Validity */}
                      <div className="flex items-center justify-center mb-6 text-sm text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        {offer.validity}
                      </div>

                      {/* CTA Button */}
                      <Button
                        size="lg"
                        className={`w-full ${
                          offer.popular
                            ? 'bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700'
                            : 'bg-gray-900 hover:bg-gray-800'
                        } text-white`}
                      >
                        Get This Deal
                      </Button>
                    </motion.div>
                  ))}
                </div>

                {/* Footer Note */}
                <div className="mt-8 p-6 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl border border-blue-200">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-1">
                        🎯 Need a Custom Package?
                      </h4>
                      <p className="text-gray-600">
                        We can create a tailored solution based on your specific requirements
                      </p>
                    </div>
                    <Button variant="outline" size="lg">
                      Contact Us
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Stats;

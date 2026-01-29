'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  Cpu, 
  BarChart3, 
  MessageCircle, 
  Puzzle,
  Zap 
} from 'lucide-react';

const WhyChooseMe = () => {
  const reasons = [
    {
      icon: TrendingUp,
      title: "ROI-Focused Strategies",
      description: "Every decision is driven by data and focused on delivering measurable returns on your investment"
    },
    {
      icon: Cpu,
      title: "Tech + Marketing Expertise",
      description: "Unique combination of technical development skills and strategic marketing knowledge"
    },
    {
      icon: BarChart3,
      title: "Data-Driven Decisions",
      description: "Analytics and insights guide every campaign and development project for optimal results"
    },
    {
      icon: MessageCircle,
      title: "Fast Communication",
      description: "Quick response times and clear updates keep you informed throughout the project"
    },
    {
      icon: Puzzle,
      title: "End-to-End Solutions",
      description: "From strategy to execution and beyond, I handle all aspects of your digital presence"
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
            Why Choose Me
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            I bring a unique blend of technical expertise and marketing savvy to deliver results that matter
          </p>
          
          {/* Highlight Statement */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-50 to-purple-50 rounded-full border border-blue-200"
          >
            <Zap className="h-5 w-5 text-blue-600 mr-3" />
            <span className="text-gray-800 font-medium">
              I work at the intersection of technology and marketing
            </span>
          </motion.div>
        </motion.div>

        {/* Reasons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reasons.map((reason, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full p-8 rounded-2xl border border-gray-200 hover:border-blue-300 hover:shadow-lg transition-all duration-300 bg-white">
                {/* Icon */}
                <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-purple-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <reason.icon className="h-7 w-7 text-white" />
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                  {reason.title}
                </h3>

                {/* Description */}
                <p className="text-gray-600 leading-relaxed">
                  {reason.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: "100%", label: "Client Satisfaction" },
            { number: "3x", label: "Average ROI" },
            { number: "50+", label: "Projects Delivered" },
            { number: "24/7", label: "Support Available" }
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl sm:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm sm:text-base">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseMe;

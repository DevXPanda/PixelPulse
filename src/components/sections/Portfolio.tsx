'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, TrendingUp, Users, Calendar, ShoppingCart, BarChart3 } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const Portfolio = () => {
  const projects = [
    {
      title: "Real Estate Landing Page + Meta Ads",
      industry: "Real Estate",
      work: ["Landing Page Design", "Meta Ads Campaign", "Lead Generation Funnel"],
      result: "120+ leads in 30 days",
      resultIcon: Users,
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Gym Website + Local SEO",
      industry: "Fitness",
      work: ["Website Development", "Local SEO Optimization", "Google My Business"],
      result: "Increased walk-ins by 45%",
      resultIcon: TrendingUp,
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Doctor Appointment Website",
      industry: "Healthcare",
      work: ["Booking System", "Patient Portal", "Automated Reminders"],
      result: "Booking automation 24/7",
      resultIcon: Calendar,
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "E-commerce Store + Google Ads",
      industry: "Retail",
      work: ["Shopify Development", "Google Shopping Ads", "Conversion Optimization"],
      result: "Sales increased by 180%",
      resultIcon: ShoppingCart,
      color: "from-orange-500 to-red-500"
    },
    {
      title: "AI Chatbot Integration",
      industry: "SaaS",
      work: ["Custom Chatbot", "NLP Integration", "Support Automation"],
      result: "Reduced support workload 60%",
      resultIcon: TrendingUp,
      color: "from-indigo-500 to-purple-500"
    },
    {
      title: "MERN Admin Dashboard",
      industry: "Technology",
      work: ["React Dashboard", "Node.js API", "Real-time Analytics"],
      result: "Business analytics tracking",
      resultIcon: BarChart3,
      color: "from-gray-600 to-gray-800"
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
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
            Portfolio & Success Stories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses across various industries
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group flex"
            >
              <div className="h-[500px] w-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 flex flex-col">
                {/* Header with gradient */}
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>
                
                <div className="p-8 flex flex-col h-full">
                  {/* Industry Badge */}
                  <div className="inline-flex items-center px-3 py-1 bg-gray-100 rounded-full text-sm font-medium text-gray-600 mb-4">
                    {project.industry}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                    {project.title}
                  </h3>

                  {/* Work Done */}
                  <div className="mb-6 flex-grow">
                    <h4 className="text-sm font-semibold text-gray-700 mb-3">Work Done:</h4>
                    <div className="space-y-2">
                      {project.work.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center text-sm text-gray-600">
                          <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                          {item}
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Result */}
                  <div className={`p-4 rounded-xl bg-gradient-to-r ${project.color} bg-opacity-10 border border-gray-200 min-h-[80px] flex items-center`}>
                    <div className="flex items-center w-full">
                      <div className={`w-10 h-10 bg-gradient-to-r ${project.color} rounded-lg flex items-center justify-center mr-3 flex-shrink-0`}>
                        <project.resultIcon className="h-5 w-5 text-white" />
                      </div>
                      <div className="flex-grow">
                        <div className="text-sm font-medium text-gray-700">Result:</div>
                        <div className="text-lg font-bold text-gray-900">
                          {project.result}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* View Details Button */}
                  <Button variant="outline" size="sm" className="w-full mt-6 group/btn">
                    View Case Study
                    <ExternalLink className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to be our next success story?
          </h3>
          <p className="text-gray-600 mb-8">
            Let's discuss how we can achieve similar results for your business
          </p>
          <Button size="lg">
            Start Your Project
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;

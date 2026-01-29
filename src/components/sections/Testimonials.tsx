'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Star, Quote } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Johnson",
      position: "CEO, TechStart Inc.",
      content: "Working with Pixel Pulses transformed our online presence. Our conversion rates increased by 180% within just 3 months. The combination of technical expertise and marketing insight is unmatched.",
      rating: 5,
      industry: "Technology"
    },
    {
      name: "Michael Chen",
      position: "Founder, FitLife Gym",
      content: "The new website and local SEO strategy brought in 45% more walk-ins in the first month. The team understood our business needs and delivered results that exceeded expectations.",
      rating: 5,
      industry: "Fitness"
    },
    {
      name: "Emily Rodriguez",
      position: "Marketing Director, RealEstate Pro",
      content: "Our Meta Ads campaign generated 120+ qualified leads in just 30 days. The ROI-focused approach and continuous optimization made all the difference for our business.",
      rating: 5,
      industry: "Real Estate"
    },
    {
      name: "David Kim",
      position: "Owner, Local Restaurant Chain",
      content: "The custom booking system and AI chatbot reduced our administrative workload by 60%. Our customers love the convenience, and our staff can focus on what matters most.",
      rating: 5,
      industry: "Hospitality"
    },
    {
      name: "Lisa Thompson",
      position: "E-commerce Manager, Fashion Store",
      content: "Our Google Shopping campaigns and website optimization led to a 180% increase in online sales. The data-driven approach and attention to detail is impressive.",
      rating: 5,
      industry: "Retail"
    },
    {
      name: "James Wilson",
      position: "CTO, SaaS Startup",
      content: "The MERN dashboard and analytics system provided us with real-time insights that transformed our decision-making process. A true game-changer for our operations.",
      rating: 5,
      industry: "SaaS"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`h-5 w-5 ${
          i < rating ? 'text-yellow-400 fill-current' : 'text-gray-300'
        }`}
      />
    ));
  };

  return (
    <section className="py-20 bg-gray-50">
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
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hear what our clients have to say about their experience working with us
          </p>
        </motion.div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 relative">
                {/* Quote Icon */}
                <Quote className="absolute top-6 right-6 h-8 w-8 text-blue-100 group-hover:text-blue-200 transition-colors duration-300" />

                {/* Industry Badge */}
                <div className="inline-flex items-center px-3 py-1 bg-blue-50 rounded-full text-sm font-medium text-blue-600 mb-4">
                  {testimonial.industry}
                </div>

                {/* Rating */}
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>

                {/* Content */}
                <blockquote className="text-gray-700 mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900">
                      {testimonial.name}
                    </div>
                    <div className="text-sm text-gray-600">
                      {testimonial.position}
                    </div>
                  </div>
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
            Ready to join our success stories?
          </h3>
          <p className="text-gray-600 mb-8">
            Let's create your own success story with results-driven digital solutions
          </p>
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white inline-block">
            <div className="flex items-center justify-center space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold">50+</div>
                <div className="text-blue-100 text-sm">Happy Clients</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">4.9/5</div>
                <div className="text-blue-100 text-sm">Average Rating</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold">95%</div>
                <div className="text-blue-100 text-sm">Would Recommend</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;

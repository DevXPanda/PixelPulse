'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { Code, Target, Users, Award } from 'lucide-react';
import { Button } from '@/components/ui/Button';

const About = () => {
  const skills = [
    { icon: Code, label: "Full-Stack Development", level: 95 },
    { icon: Target, label: "Digital Marketing", level: 90 },
    { icon: Users, label: "Strategy & Planning", level: 85 },
    { icon: Award, label: "Project Management", level: 88 }
  ];

  const experience = [
    { number: "5+", label: "Years Experience" },
    { number: "50+", label: "Happy Clients" },
    { number: "100+", label: "Projects Delivered" },
    { number: "95%", label: "Success Rate" }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              About Us
            </h2>
            
            <div className="space-y-4 text-lg text-gray-600 mb-8">
              <p>
                We are full-stack developer and digital marketing specialist who builds systems that generate revenue, not just designs. Our unique combination of technical expertise and marketing savvy allows us to create comprehensive digital solutions that drive real business results.
              </p>
              <p>
                With over 5 years of experience in both web development and digital marketing, we helped businesses across various industries establish strong online presence, increase their customer base, and boost their revenue through data-driven strategies and cutting-edge technology.
              </p>
              <p>
                Our approach is simple: understand your business goals, create a tailored strategy, and execute with precision to deliver measurable results that matter to your bottom line.
              </p>
            </div>

            {/* Our Expertise */}
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-xl font-bold mb-4">Our Expertise</h3>
              <div className="grid grid-cols-2 gap-3 text-sm"> 
                <div>• Google Ads Certified</div>
                <div>• Meta Blueprint Certified</div>
                <div>• SEO Specialist</div>
                <div>• MERN Stack Developer</div>
                <div>• Website Developer</div>
                <div>• AI Integration Expert</div>
                <div>• Eco-Friendly Solutions</div>
                <div>• Cloud Solutions Architect</div>
              </div>
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Experience Stats */}
            <div className="grid grid-cols-2 gap-6">
              {experience.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 + index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6 text-center border border-blue-100"
                >
                  <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Approach Card */}
            <div className="bg-gray-50 rounded-2xl p-8 border border-gray-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Approach</h3>
              <div className="space-y-3">
                {[
                  "Strategic thinking before execution",
                  "Data-driven decision making",
                  "Focus on ROI and business impact",
                  "Continuous optimization and improvement",
                  "Transparent communication and collaboration",
                  "Client-centric solutions",
                  "Agile development methodology"
                ].map((approach, index) => (
                  <div key={index} className="flex items-start">
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 mr-3">
                      <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span className="text-gray-700">{approach}</span>
                  </div>
                ))}
              </div>
            </div>

          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;

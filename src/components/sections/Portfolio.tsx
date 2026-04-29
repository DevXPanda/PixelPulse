'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white">
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

        {/* Portfolio Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="relative w-full max-w-7xl mx-auto rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.1)] border border-gray-100 bg-white"
        >
          <img
            src="/WhatsApp Image 2026-04-26 at 8.11.22 PM.jpeg"
            alt="Portfolio Success Stories"
            className="w-full h-auto block"
          />
        </motion.div>


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

          <a href="#contact">
            <Button size="lg">
              Start Your Project
            </Button>
          </a>

        </motion.div>

      </div>
    </section>
  );
};

export default Portfolio;


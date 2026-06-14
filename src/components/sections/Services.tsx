'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Megaphone, 
  Monitor, 
  PenTool, 
  Search, 
  ShoppingCart, 
  BarChart3 
} from 'lucide-react';

interface ServicesProps {
  onContactClick: (serviceName?: string) => void;
}

const Services: React.FC<ServicesProps> = ({ onContactClick }) => {
  const services = [
    {
      icon: Megaphone,
      title: "Social Media Management",
    },
    {
      icon: Monitor,
      title: "Website Development",
    },
    {
      icon: PenTool,
      title: "Branding & Design",
    },
    {
      icon: Search,
      title: "SEO & Optimization",
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
    }
  ];

  return (
    <section id="services" className="pt-10 pb-20 bg-white scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl lg:text-5xl font-medium text-slate-900 mb-4 tracking-tight"
          >
            What We Do
          </motion.h2>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -6, scale: 1.02 }}
                onClick={() => onContactClick(service.title)}
                className="cursor-pointer group flex flex-col items-center text-center p-6 bg-white rounded-2xl border border-slate-100 hover:border-blue-500/35 hover:shadow-[0_15px_30px_rgba(59,130,246,0.08)] transition-all duration-300"
              >
                {/* Icon wrapper */}
                <div className="w-16 h-16 bg-blue-50/50 dark:bg-slate-800/20 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">
                  <IconComponent className="w-7 h-7 stroke-[1.75]" />
                </div>

                {/* Title */}
                <h3 className="text-sm sm:text-base font-medium text-slate-800 group-hover:text-blue-600 transition-colors duration-300 leading-snug">
                  {service.title}
                </h3>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Services;

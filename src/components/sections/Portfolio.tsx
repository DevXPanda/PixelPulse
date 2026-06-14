'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

interface PortfolioProps {
  onContactClick: (projectName?: string) => void;
}

const Portfolio: React.FC<PortfolioProps> = ({ onContactClick }) => {
  const caseStudies = [
    {
      title: "UrbanStyle Fashion",
      subtitle: "E-commerce Store Development",
      image: "/1.png",
      bullets: [
        "Shopify store setup",
        "Branding & product pages",
        "Payment gateway integration"
      ],
      stats: [
        { value: "120+", label: "Orders in 1st Month" },
        { value: "3X", label: "Increase in Traffic" }
      ]
    },
    {
      title: "FitLife Gym",
      subtitle: "Social Media Management",
      image: "/2.png",
      bullets: [
        "Daily posts & reels",
        "Engagement campaigns",
        "Community management"
      ],
      stats: [
        { value: "+8K", label: "Followers in 60 Days" },
        { value: "5X", label: "Engagement Increase" }
      ]
    },
    {
      title: "Sharma Electronics",
      subtitle: "Website Design & SEO",
      image: "/3.png",
      bullets: [
        "Responsive website design",
        "SEO optimization",
        "Lead generation forms"
      ],
      stats: [
        { value: "70%", label: "Increase in Inquiries" },
        { value: "45 Days", label: "Google Ranking" }
      ]
    },
    {
      title: "BrewBites Cafe",
      subtitle: "Branding & Logo Design",
      image: "/4.png",
      bullets: [
        "Logo, menu & packaging design",
        "Social media creatives",
        "Brand identity creation"
      ],
      stats: [
        { value: "Strong", label: "Brand Identity" },
        { value: "High", label: "Local Recognition" }
      ]
    },
    {
      title: "TechZone Gadgets",
      subtitle: "Digital Marketing Campaign",
      image: "/5.png",
      bullets: [
        "Facebook & Google Ads",
        "Targeted audience",
        "Conversion optimization"
      ],
      stats: [
        { value: "4X", label: "ROI on Ad Spend" },
        { value: "₹50K+", label: "Revenue in 30 Days" }
      ]
    }
  ];

  return (
    <section id="portfolio" className="py-24 bg-slate-50 scroll-mt-16">
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
            Our Case Studies
          </motion.h2>
          <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: 48 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="h-1 bg-blue-600 mx-auto rounded-full"
          />
        </div>

        {/* Case Studies Centered Flexbox Layout */}
        <div className="flex flex-wrap justify-center gap-8">
          {caseStudies.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -8 }}
              onClick={() => onContactClick(item.title)}
              className={`cursor-pointer bg-white rounded-3xl overflow-hidden border border-slate-200/60 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_40px_rgba(0,0,0,0.08)] transition-all duration-300 flex flex-col w-full md:w-[calc(50%-16px)] ${index < 3 ? 'lg:w-[calc(33.333%-22px)]' : 'lg:w-[calc(50%-16px)]'
                }`}
            >
              {/* Image banner */}
              <div className="relative w-full aspect-[16/9] overflow-hidden bg-slate-100">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 hover:scale-105"
                />
              </div>

              {/* Card body */}
              <div className="p-8 flex-grow flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-medium text-slate-900 mb-1 leading-snug">
                    {item.title}
                  </h3>
                  <div className="text-sm font-medium text-blue-600 mb-6">
                    {item.subtitle}
                  </div>

                  {/* Bullets */}
                  <ul className="space-y-2 mb-8">
                    {item.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start text-sm text-slate-600 leading-normal">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full mt-1.5 mr-2.5 flex-shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Stats block */}
                <div className="grid grid-cols-2 gap-4 border-t border-slate-100 pt-6">
                  {item.stats.map((stat, idx) => (
                    <div key={idx} className="text-left">
                      <div className="text-xl sm:text-2xl font-medium text-indigo-600 leading-tight">
                        {stat.value}
                      </div>
                      <div className="text-xs font-normal text-slate-500 mt-0.5 leading-snug">
                        {stat.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Portfolio;

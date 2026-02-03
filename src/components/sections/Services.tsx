'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Target, 
  Instagram, 
  Search, 
  Globe, 
  Cpu, 
  Bot,
  ArrowRight,
  X,
  Check,
  Clock,
  TrendingUp,
  LucideIcon
} from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface ServiceDetails {
  overview: string;
  deliverables: string[];
  timeline: string;
  pricing: string;
  process: string[];
}

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  features: string[];
  detailedInfo: ServiceDetails;
}

const Services = () => {
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  
  const services = [
    {
      icon: Target,
      title: "Performance Marketing",
      description: "Meta Ads & Google Ads focused on leads and ROI",
      features: ["Facebook & Instagram Ads", "Google Search & Display", "Conversion Optimization", "A/B Testing"],
      detailedInfo: {
        overview: "Comprehensive performance marketing services designed to maximize your return on investment through data-driven advertising campaigns.",
        deliverables: [
          "Custom ad campaign strategy",
          "Audience research & targeting",
          "Creative ad design & copywriting",
          "Landing page optimization",
          "Conversion tracking setup",
          "Weekly performance reports",
          "A/B testing & optimization",
          "Budget management & allocation"
        ],
        timeline: "2-4 weeks setup",
        pricing: "Starting from ₹1,20,000/month",
        process: [
          "Discovery & goal setting",
          "Audience & competitor analysis",
          "Campaign setup & launch",
          "Monitoring & optimization",
          "Reporting & scaling"
        ]
      }
    },
    {
      icon: Instagram,
      title: "Social Media Management",
      description: "Instagram, LinkedIn, YouTube, brand growth",
      features: ["Content Strategy", "Community Management", "Influencer Partnerships", "Brand Building"],
      detailedInfo: {
        overview: "Strategic social media management to build your brand presence and engage with your target audience across multiple platforms.",
        deliverables: [
          "Social media strategy development",
          "Content calendar creation",
          "Daily posting & scheduling",
          "Community engagement",
          "Hashtag research & optimization",
          "Analytics & performance tracking",
          "Influencer outreach",
          "Brand voice development"
        ],
        timeline: "1-2 weeks setup",
        pricing: "Starting from ₹65,000/month",
        process: [
          "Brand audit & goal setting",
          "Platform selection & strategy",
          "Content planning & creation",
          "Implementation & management",
          "Analysis & optimization"
        ]
      }
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "On-page, Off-page, Technical & Local SEO",
      features: ["Keyword Research", "Content Optimization", "Link Building", "Local SEO"],
      detailedInfo: {
        overview: "Complete SEO solutions to improve your search engine rankings and drive organic traffic to your website.",
        deliverables: [
          "Comprehensive SEO audit",
          "Keyword research & analysis",
          "On-page optimization",
          "Technical SEO fixes",
          "Content strategy & optimization",
          "Link building campaigns",
          "Local SEO optimization",
          "Monthly ranking reports"
        ],
        timeline: "3-6 months for results",
        pricing: "Starting from ₹96,000/month",
        process: [
          "Website audit & analysis",
          "Keyword research & strategy",
          "On-page & technical optimization",
          "Content creation & link building",
          "Monitoring & reporting"
        ]
      }
    },
    {
      icon: Globe,
      title: "Website Development",
      description: "Business websites, landing pages, WordPress",
      features: ["Responsive Design", "CMS Integration", "E-commerce Solutions", "Speed Optimization"],
      detailedInfo: {
        overview: "Professional website development services creating fast, responsive, and conversion-optimized websites.",
        deliverables: [
          "Custom website design",
          "Responsive mobile development",
          "CMS integration (WordPress/Custom)",
          "E-commerce functionality",
          "Performance optimization",
          "SEO-friendly structure",
          "Analytics integration",
          "Training & documentation"
        ],
        timeline: "4-8 weeks delivery",
        pricing: "Starting from ₹2,00,000",
        process: [
          "Requirements gathering",
          "Design & prototype",
          "Development & testing",
          "Deployment & launch",
          "Training & support"
        ]
      }
    },
    {
      icon: Cpu,
      title: "MERN Stack Development",
      description: "Custom dashboards, portals, web apps",
      features: ["React Applications", "Node.js APIs", "Database Design", "Real-time Features"],
      detailedInfo: {
        overview: "Custom MERN stack applications tailored to your business needs with modern, scalable architecture.",
        deliverables: [
          "Custom web application",
          "RESTful API development",
          "Database design & implementation",
          "Real-time features",
          "Authentication & security",
          "Admin dashboard",
          "API documentation",
          "Deployment & hosting setup"
        ],
        timeline: "6-12 weeks delivery",
        pricing: "Starting from ₹4,00,000",
        process: [
          "Requirement analysis",
          "System design & architecture",
          "Development & testing",
          "Deployment & integration",
          "Maintenance & support"
        ]
      }
    },
    {
      icon: Bot,
      title: "AI Solutions",
      description: "Chatbots, automation systems, AI tools",
      features: ["Custom Chatbots", "Process Automation", "AI Integration", "Data Analysis"],
      detailedInfo: {
        overview: "Cutting-edge AI solutions to automate processes, enhance customer experience, and leverage data insights.",
        deliverables: [
          "Custom chatbot development",
          "AI-powered automation",
          "Machine learning models",
          "Data analysis tools",
          "Natural language processing",
          "Predictive analytics",
          "AI integration with existing systems",
          "Performance monitoring"
        ],
        timeline: "4-10 weeks delivery",
        pricing: "Starting from ₹2,80,000",
        process: [
          "AI feasibility assessment",
          "Solution design & planning",
          "Development & training",
          "Integration & testing",
          "Deployment & optimization"
        ]
      }
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <p className="text-sm font-medium text-blue-600 mb-4 uppercase tracking-wide">
            Complete digital growth — from traffic to conversion
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Services We Offer
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive digital solutions designed to accelerate your business growth and maximize your online presence
          </p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="h-full bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 p-8 border border-gray-100 hover:border-blue-200 relative overflow-hidden flex flex-col">
                {/* Gradient overlay on hover */}
                <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                
                {/* Content */}
                <div className="relative z-10 flex flex-col h-full">
                  {/* Icon */}
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="h-8 w-8 text-white" />
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 flex-grow">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-3"></div>
                        {feature}
                      </li>
                    ))}
                  </ul>

                  {/* Learn more button */}
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="group/btn w-full min-h-[44px] flex items-center justify-center"
                    onClick={() => setSelectedService(service)}
                  >
                    <span className="flex items-center justify-center w-full">
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                    </span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Service Details Modal */}
        <AnimatePresence>
          {selectedService && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              onClick={() => setSelectedService(null)}
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.3 }}
                className="bg-white rounded-2xl shadow-2xl max-w-5xl w-full max-h-[90vh] overflow-y-auto mx-4 sm:mx-auto"
                onClick={(e) => e.stopPropagation()}
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-white border-b border-gray-200 p-6 rounded-t-2xl">
                  <div className="flex items-start justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center">
                        <selectedService.icon className="h-8 w-8 text-white" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-gray-900">{selectedService.title}</h3>
                        <p className="text-gray-600 mt-1">{selectedService.description}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => setSelectedService(null)}
                      className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                    >
                      <X className="h-5 w-5 text-gray-500" />
                    </button>
                  </div>
                </div>

                {/* Modal Content */}
                <div className="p-6 space-y-8">
                  {/* Overview */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">Overview</h4>
                    <p className="text-gray-600 leading-relaxed">{selectedService.detailedInfo.overview}</p>
                  </div>

                  {/* Deliverables */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">What You'll Get</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedService.detailedInfo.deliverables.map((deliverable, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Process */}
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-4">Our Process</h4>
                    <div className="space-y-3">
                      {selectedService.detailedInfo.process.map((step, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-sm font-medium text-blue-600">{index + 1}</span>
                          </div>
                          <span className="text-gray-600">{step}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Timeline & Pricing */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="bg-blue-50 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <Clock className="h-5 w-5 text-blue-600" />
                        <h5 className="font-semibold text-gray-900">Timeline</h5>
                      </div>
                      <p className="text-gray-600">{selectedService.detailedInfo.timeline}</p>
                    </div>
                    <div className="bg-green-50 rounded-xl p-4">
                      <div className="flex items-center space-x-3 mb-2">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <h5 className="font-semibold text-gray-900">Investment</h5>
                      </div>
                      <p className="text-gray-600">{selectedService.detailedInfo.pricing}</p>
                    </div>
                  </div>

                  {/* CTA */}
                  <div className="flex flex-col sm:flex-row gap-4 pt-4">
                    <Button 
                      size="lg" 
                      className="flex-1"
                      onClick={() => setSelectedService(null)}
                    >
                      Get Started
                    </Button>
                    <Button 
                      variant="outline" 
                      size="lg" 
                      className="flex-1"
                      onClick={() => setSelectedService(null)}
                    >
                      Schedule Consultation
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-black/10"></div>
            <div className="relative z-10">
              <h3 className="text-3xl font-bold mb-4">
                Ready to Transform Your Digital Presence?
              </h3>
              <p className="text-xl mb-8 text-blue-100">
                Let's discuss how we can create a customized strategy for your business
              </p>
              {/* <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 border-0">
                Schedule Free Consultation
              </Button> */}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;

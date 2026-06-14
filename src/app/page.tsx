'use client';

import React, { useState } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import Portfolio from '@/components/sections/Portfolio';
import { BrandsAndTools } from '@/components/sections/BrandsAndTools';
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton';
import { ContactModal } from '@/components/ui/ContactModal';

export default function Home() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalDefaultTab, setModalDefaultTab] = useState<'strategy' | 'inquiry'>('strategy');

  const handleOpenContactModal = (tab: 'strategy' | 'inquiry' = 'strategy') => {
    setModalDefaultTab(tab);
    setIsContactModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-blue-500 selection:text-white">
      {/* Header */}
      <Header onContactClick={() => handleOpenContactModal('strategy')} />
      
      {/* Main Sections */}
      <main>
        <Hero />
        <Services onContactClick={() => handleOpenContactModal('inquiry')} />
        <Portfolio onContactClick={() => handleOpenContactModal('inquiry')} />
        <BrandsAndTools />
      </main>

      {/* Footer & Popups */}
      <Footer onContactClick={() => handleOpenContactModal('strategy')} />
      <FloatingWhatsAppButton />
      
      {/* Contact Form Modal */}
      <ContactModal 
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultTab={modalDefaultTab}
      />
    </div>
  );
}

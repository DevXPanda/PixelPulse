import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Hero from '@/components/sections/Hero';
import Services from '@/components/sections/Services';
import WhyChooseMe from '@/components/sections/WhyChooseMe';
import Portfolio from '@/components/sections/Portfolio';
import About from '@/components/sections/About';
import Process from '@/components/sections/Process';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Contact from '@/components/sections/Contact';
import FinalCTA from '@/components/sections/FinalCTA';
import FloatingWhatsAppButton from '@/components/ui/FloatingWhatsAppButton';

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Services />
        <WhyChooseMe />
        <Portfolio />
        <About />
        <Process />
        <Stats />
        <Testimonials />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
      <FloatingWhatsAppButton />
    </div>
  );
}

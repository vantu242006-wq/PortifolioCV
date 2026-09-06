import { useState } from 'react';
import HeroSection from './components/sections/HeroSection';
import AboutSection from './components/sections/AboutSection';
import ServicesSection from './components/sections/ServicesSection';
import Footer from './components/Footer';
import ContactModal from './components/ui/ContactModal';

function App() {
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  const handleOpenContact = () => {
    setIsContactModalOpen(true);
  };

  const handleCloseContact = () => {
    setIsContactModalOpen(false);
  };

  return (
    <div
      className="w-full bg-[#0C0C0C] text-[#D7E2EA] relative min-h-screen"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. HERO SECTION */}
      <HeroSection onOpenContact={handleOpenContact} />

      {/* 2. ABOUT SECTION */}
      <AboutSection onOpenContact={handleOpenContact} />

      {/* 3. SERVICES SECTION */}
      <ServicesSection />

      {/* FOOTER & CONNECT */}
      <Footer onOpenContact={handleOpenContact} />

      {/* CONTACT MODAL */}
      <ContactModal
        isOpen={isContactModalOpen}
        onClose={handleCloseContact}
      />
    </div>
  );
}

export default App;

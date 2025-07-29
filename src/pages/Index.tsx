import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import CustomCursor from '@/components/CustomCursor';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Add cosmic cursor class to body
    document.body.classList.add('cosmic-cursor');
    
    return () => {
      document.body.classList.remove('cosmic-cursor');
    };
  }, []);

  return (
    <div className="min-h-screen bg-background relative">
      {/* Custom Cursor */}
      <CustomCursor />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Scroll to Top Button */}
      <ScrollToTop />
      
      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-cosmic-purple/5 via-background to-cosmic-cyan/5" />
      </div>
    </div>
  );
};

export default Index;

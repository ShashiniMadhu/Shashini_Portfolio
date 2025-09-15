import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Individual Project Detail Components
import TripTrackDetail from './pages/Triptrack';
import SkillMentorDetail from './pages/skillmentor';
import StructuraXDetail from './pages/StructuraX';
import UniHubDetail from './pages/Unihub';
import InterviewPrepDetail from './pages/Interviewprep';
import SpamClassifierDetail from './pages/Spamclassifier';

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetBottom = offsetTop + element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    if (activeSection !== 'home') {
      scrollToSection(activeSection);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      <div id="home">
        <HeroSection setActiveSection={setActiveSection} />
      </div>

      <div id="about">
        <AboutSection />
      </div>

      <div id="projects">
        <ProjectsSection />
      </div>

      <div id="skills">
        <SkillsSection />
      </div>

      <div id="contact">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

// Clean Project Layout Component (without header/footer for clean pages)
const CleanProjectLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Beautiful Cursor Trail Effect - matching HeroSection */}
      <div className="fixed w-2 h-2 bg-pink-400/30 rounded-full pointer-events-none z-50 blur-sm opacity-0"></div>

      {/* Enhanced animated background matching HeroSection */}
      <div className="absolute inset-0">
        {/* Primary gradient orb */}
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-pink-900/35 via-pink-800/25 to-pink-700/15 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Secondary accent */}
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-pink-950/30 via-pink-900/20 to-pink-800/10 rounded-full blur-3xl animate-pulse"></div>
        
        {/* Floating accent orbs */}
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-pink-600/20 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-pink-700/15 rounded-full blur-xl"></div>
        
        {/* Animated grid */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '90px 90px',
            animation: 'gridMove 40s linear infinite'
          }}
        />
      </div>

      {/* Sophisticated header with glassmorphism effect */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-all duration-400 transform hover:scale-105 hover:-translate-y-1 relative"
          >
            {/* Elegant glow effect for button */}
            <div className="absolute inset-0 bg-pink-500/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-400 blur-xl"></div>
            
            {/* Enhanced back arrow with animations */}
            <div className="relative p-2 rounded-xl border border-gray-700/50 group-hover:border-pink-500/50 bg-gray-900/50 group-hover:bg-pink-900/20 transition-all duration-400">
              <svg 
                className="w-5 h-5 transform group-hover:-translate-x-1 transition-transform duration-300" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            
            {/* Elegant typography matching HeroSection */}
            <span className="font-semibold text-lg tracking-wide relative">
              Back to Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 group-hover:w-full transition-all duration-700"></div>
            </span>
            
            {/* Subtle accent line */}
            <div className="w-0 h-8 bg-gradient-to-b from-transparent via-pink-500/60 to-transparent group-hover:w-0.5 transition-all duration-500"></div>
          </button>
        </div>
      </div>
             
      {/* Content with enhanced styling and padding */}
      <div className="pt-20 relative z-10">
        <div className="min-h-screen">
          {children}
        </div>
      </div>

      {/* Elegant bottom accent */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      {/* Enhanced CSS Animations matching HeroSection */}
      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 90px 90px; }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
      `}</style>
    </div>
  );
};

// Main App Component with Routes
const App = () => {
  return (
    <Routes>
      {/* Main portfolio page */}
      <Route path="/" element={<Portfolio />} />
      
      {/* Individual project routes with clean layout (no header/footer/dark styling) */}
      <Route path="/triptrack" element={
        <CleanProjectLayout>
          <TripTrackDetail />
        </CleanProjectLayout>
      } />
      
      <Route path="/skillmentor" element={
        <CleanProjectLayout>
          <SkillMentorDetail />
        </CleanProjectLayout>
      } />
      
      <Route path="/structurax" element={
        <CleanProjectLayout>
          <StructuraXDetail />
        </CleanProjectLayout>
      } />
      
      <Route path="/unihub" element={
        <CleanProjectLayout>
          <UniHubDetail />
        </CleanProjectLayout>
      } />
      
      <Route path="/interview-prep" element={
        <CleanProjectLayout>
          <InterviewPrepDetail />
        </CleanProjectLayout>
      } />
      
      <Route path="/spam-classifier" element={
        <CleanProjectLayout>
          <SpamClassifierDetail />
        </CleanProjectLayout>
      } />
      
      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
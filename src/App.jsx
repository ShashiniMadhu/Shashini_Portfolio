import React, { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import ProjectsSection from './components/ProjectsSection';
import SkillsSection from './components/SkillsSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';

// Individual Project Detail Components
import TripTrackDetail from './pages/Triptrack';
import SkillMentorDetail from './pages/Skillmentor';
import StructuraXDetail from './pages/StructuraX';
import UniHubDetail from './pages/Unihub';
import InterviewPrepDetail from './pages/Interviewprep';
import SpamClassifierDetail from './pages/Spamclassifier';

// Main Portfolio Component
const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // SINGLE scroll handler - detects which section is in view
  useEffect(() => {
    const handleScroll = () => {
      const sections = [
        { id: 'home', element: document.getElementById('home') },
        { id: 'about', element: document.getElementById('about-section') },
        { id: 'projects', element: document.getElementById('projects-section') },
        { id: 'skills', element: document.getElementById('skills-section') },
        { id: 'contact', element: document.getElementById('contact-section') }
      ];

      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section.element && scrollPosition >= section.element.offsetTop) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    // Add throttling to improve performance
    let timeoutId;
    const throttledHandleScroll = () => {
      if (timeoutId) return;
      timeoutId = setTimeout(() => {
        handleScroll();
        timeoutId = null;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', throttledHandleScroll);
    return () => {
      window.removeEventListener('scroll', throttledHandleScroll);
      if (timeoutId) clearTimeout(timeoutId);
    };
  }, []);

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* Sections with correct IDs matching Navigation */}
      <div id="home">
        <HeroSection setActiveSection={setActiveSection} />
      </div>

      <div id="about-section">
        <AboutSection />
      </div>

      <div id="projects-section">
        <ProjectsSection />
      </div>

      <div id="skills-section">
        <SkillsSection />
      </div>

      <div id="contact-section">
        <ContactSection />
      </div>

      <Footer />
    </div>
  );
};

// Clean Project Layout Component
const CleanProjectLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Enhanced animated background matching HeroSection */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-pink-900/35 via-pink-800/25 to-pink-700/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-pink-950/30 via-pink-900/20 to-pink-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-pink-600/20 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-pink-700/15 rounded-full blur-xl"></div>
        
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

      {/* Back button header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-all duration-400 transform hover:scale-105 hover:-translate-y-1 relative"
          >
            <div className="absolute inset-0 bg-pink-500/10 rounded-2xl scale-0 group-hover:scale-100 transition-transform duration-400 blur-xl"></div>
            
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
            
            <span className="font-semibold text-lg tracking-wide relative">
              Back to Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-pink-500 to-pink-400 group-hover:w-full transition-all duration-700"></div>
            </span>
            
            <div className="w-0 h-8 bg-gradient-to-b from-transparent via-pink-500/60 to-transparent group-hover:w-0.5 transition-all duration-500"></div>
          </button>
        </div>
      </div>
             
      <div className="pt-20 relative z-10">
        <div className="min-h-screen">
          {children}
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-500/30 to-transparent"></div>

      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 90px 90px; }
        }
      `}</style>
    </div>
  );
};

// Main App Component with Routes
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Portfolio />} />
      
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
      
      <Route path="*" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
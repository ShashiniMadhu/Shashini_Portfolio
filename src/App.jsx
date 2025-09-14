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
import SkillMentorDetail from './pages/Skillmentor';
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

// Project Layout Component (for consistent header/footer)
const ProjectLayout = ({ children }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  const handleBackToProjects = () => {
    navigate('/#projects');
  };

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation
        activeSection="projects"
        setActiveSection={() => {}}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
        onNavigate={handleBackToProjects}
      />
      {children}
      <Footer />
    </div>
  );
};

// Main App Component with Routes
const App = () => {
  return (
    <Routes>
      {/* Main portfolio page */}
      <Route path="/" element={<Portfolio />} />
      
      {/* Individual project routes */}
      <Route path="/triptrack" element={
        <ProjectLayout>
          <TripTrackDetail />
        </ProjectLayout>
      } />
      
      <Route path="/skillmentor" element={
        <ProjectLayout>
          <SkillMentorDetail />
        </ProjectLayout>
      } />
      
      <Route path="/structurax" element={
        <ProjectLayout>
          <StructuraXDetail />
        </ProjectLayout>
      } />
      
      <Route path="/unihub" element={
        <ProjectLayout>
          <UniHubDetail />
        </ProjectLayout>
      } />
      
      <Route path="/interview-prep" element={
        <ProjectLayout>
          <InterviewPrepDetail />
        </ProjectLayout>
      } />
      
      <Route path="/spam-classifier" element={
        <ProjectLayout>
          <SpamClassifierDetail />
        </ProjectLayout>
      } />
      
      {/* Catch all route - redirect to home */}
      <Route path="*" element={<Portfolio />} />
    </Routes>
  );
};

export default App;
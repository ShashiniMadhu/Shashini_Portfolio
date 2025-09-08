import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  const handleNavClick = (item) => {
    setActiveSection(item);
    
    // Map navigation items to section IDs
    const sectionMap = {
      'home': 'hero-section',
      'about': 'about-section', 
      'projects': 'projects-section',
      'skills': 'skills-section',
      'contact': 'contact-section'
    };
    
    // Scroll to the corresponding section
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Calculate offset for fixed navigation
      const navHeight = 80; // Approximate navigation height
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo with hover effect */}
          <div 
            className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors duration-300 cursor-pointer group"
            onClick={() => handleNavClick('home')}
          >
            <span className="relative">
              Portfolio
              <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-500 group-hover:w-full transition-all duration-300"></div>
            </span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`capitalize transition-all duration-300 relative group py-2 ${
                  activeSection === item 
                    ? 'text-pink-400 font-semibold' 
                    : 'text-gray-300 hover:text-pink-400'
                }`}
              >
                {item}
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-0 h-0.5 bg-pink-500 transition-all duration-300 ${
                  activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                }`}></div>
                
                {/* Hover background effect */}
                <div className="absolute inset-0 bg-pink-900/10 rounded-md scale-0 group-hover:scale-100 transition-transform duration-200 -z-10"></div>
              </button>
            ))}
          </div>

          {/* Mobile menu button with enhanced animation */}
          <button
            className="md:hidden text-gray-300 hover:text-pink-400 transition-all duration-300 p-2 hover:bg-pink-900/20 rounded-lg transform hover:scale-110"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="relative w-6 h-6">
              <Menu 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-0 rotate-180 scale-0' : 'opacity-100 rotate-0 scale-100'
                }`} 
              />
              <X 
                size={24} 
                className={`absolute inset-0 transition-all duration-300 ${
                  isMobileMenuOpen ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-180 scale-0'
                }`} 
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu with enhanced animations */}
        <div className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="mt-4 py-4 border-t border-gray-800/50 space-y-2">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => {
                  handleNavClick(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-3 px-4 capitalize transition-all duration-300 rounded-lg group relative overflow-hidden ${
                  activeSection === item 
                    ? 'text-pink-400 font-semibold bg-pink-900/20' 
                    : 'text-gray-300 hover:text-pink-400 hover:bg-pink-900/10'
                }`}
                style={{
                  transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms'
                }}
              >
                <div className="relative z-10 flex items-center justify-between">
                  {item}
                  <div className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    activeSection === item ? 'bg-pink-500' : 'bg-transparent group-hover:bg-pink-600'
                  }`}></div>
                </div>
                
                {/* Slide effect on hover */}
                <div className="absolute inset-0 bg-pink-800/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Subtle bottom glow effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-pink-800/30 to-transparent"></div>
    </nav>
  );
};

export default Navigation;
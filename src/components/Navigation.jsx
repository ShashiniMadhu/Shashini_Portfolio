import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  const handleNavClick = (item) => {
    console.log(`🔥 Clicked: ${item}`);
    
    // Close mobile menu first
    setIsMobileMenuOpen(false);
    
    if (item === 'home') {
  console.log('🏠 Scrolling to home (top)');
  
  // Method 1: Standard scroll to top
  window.scrollTo(0, 0);
  
  // Method 2: Force scroll to top with both document methods
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
  
  // Method 3: Use the home element directly
  const homeElement = document.getElementById('home');
  if (homeElement) {
    homeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
  
  setActiveSection('home');
  return;
}
    
    const sectionMap = {
      'about': 'about-section', 
      'projects': 'projects-section',
      'skills': 'skills-section',
      'contact': 'contact-section'
    };
    
    const sectionId = sectionMap[item];
    const element = document.getElementById(sectionId);
    
    if (element) {
      // Try multiple scrolling methods
      const rect = element.getBoundingClientRect();
      const scrollTop = window.pageYOffset + rect.top - 100;
      
      console.log(`✅ Attempting scroll to ${scrollTop}`);
      console.log(`Current scroll position: ${window.pageYOffset}`);
      
      // Method 1: Direct element scrolling
      element.scrollIntoView({ 
        behavior: 'smooth', 
        block: 'start',
        inline: 'nearest'
      });
      
      // Method 2: Manual offset adjustment after scrollIntoView
      setTimeout(() => {
        window.scrollBy(0, -100); // Adjust for navbar
      }, 100);
      
      setActiveSection(item);
    } else {
      console.error(`❌ Element with ID '${sectionId}' NOT FOUND`);
    }
  };

  return (
    <nav className="fixed top-0 w-full bg-black/95 backdrop-blur-md z-50 border-b border-gray-800/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div 
            className="text-2xl font-bold text-pink-400 hover:text-pink-300 transition-colors duration-300 cursor-pointer"
            onClick={() => handleNavClick('home')}
          >
            Shashini
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`capitalize transition-all duration-300 py-2 px-4 rounded relative group ${
                  activeSection === item 
                    ? 'text-pink-400 font-semibold bg-pink-900/20' 
                    : 'text-gray-300 hover:text-pink-400 hover:bg-pink-900/10'
                }`}
              >
                {item}
                {/* Active indicator */}
                <div className={`absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-pink-400 transition-all duration-300 ${
                  activeSection === item ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-300 hover:text-pink-400 p-2 transition-colors duration-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-800/50 animate-fade-in">
            {navItems.map((item, index) => (
              <button
                key={item}
                onClick={() => handleNavClick(item)}
                className={`block w-full text-left py-3 px-4 capitalize rounded transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-pink-400 font-semibold bg-pink-900/20' 
                    : 'text-gray-300 hover:text-pink-400 hover:bg-pink-900/10'
                }`}
                style={{
                  animationDelay: `${index * 50}ms`
                }}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>

      <style>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
import React from 'react';
import { Menu, X } from 'lucide-react';

const Navigation = ({ activeSection, setActiveSection, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = ['home', 'about', 'projects', 'skills', 'contact'];

  return (
    <nav className="fixed top-0 w-full bg-slate-900/95 backdrop-blur-md z-50 border-b border-slate-700/50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
            Portfolio
          </div>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => setActiveSection(item)}
                className={`capitalize transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-cyan-400 font-semibold' 
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          <button
            className="md:hidden text-slate-300 hover:text-cyan-400 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-slate-700/50">
            {navItems.map((item) => (
              <button
                key={item}
                onClick={() => {
                  setActiveSection(item);
                  setIsMobileMenuOpen(false);
                }}
                className={`block w-full text-left py-2 capitalize transition-all duration-300 ${
                  activeSection === item 
                    ? 'text-cyan-400 font-semibold' 
                    : 'text-slate-300 hover:text-cyan-400'
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';
import { Star } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-800/50 py-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-gray-400 mb-4 md:mb-0">
            © 2025 Alex Portfolio. All rights reserved.
          </div>
          <div className="flex items-center gap-2 text-gray-400">
            Made with <Star className="text-pink-400" size={16} fill="currentColor" /> by Alex
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
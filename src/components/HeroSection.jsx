import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = ({ setActiveSection }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Full Stack Developer',
    'UI/UX Designer', 
    'Problem Solver',
    'Tech Enthusiast'
  ];

  useEffect(() => {
    const currentText = roles[currentIndex];
    let i = 0;
    
    const timer = setInterval(() => {
      if (i <= currentText.length) {
        setText(currentText.slice(0, i));
        i++;
      } else {
        setTimeout(() => {
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        }, 2000);
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [currentIndex]);

  return (
    <section className="min-h-screen flex items-center relative overflow-hidden bg-black">
      {/* Dark pink accent in right corner */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-950/30 rounded-full blur-3xl"></div>
        <div className="absolute top-20 right-10 w-80 h-80 bg-pink-900/20 rounded-full blur-2xl"></div>
      </div>

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 opacity-2">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center min-h-screen">
          
          {/* Left Column - Content */}
          <div className="space-y-8 lg:pr-8">
            <div className="space-y-6">
              {/* Greeting */}
              <div className="flex items-center space-x-3 mb-4 group">
                <div className="w-12 h-0.5 bg-pink-700 group-hover:bg-pink-600 transition-colors duration-300"></div>
                <span className="text-pink-400 font-medium tracking-wide">HELLO THERE</span>
              </div>

              {/* Main heading */}
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white">I'm </span>
                <span className="text-pink-400 hover:text-pink-300 transition-colors duration-300 cursor-default">
                  Alex
                </span>
              </h1>

              {/* Animated role */}
              <div className="h-16 flex items-center">
                <span className="text-2xl lg:text-4xl text-gray-300 font-light">
                  {text}
                  <span className="animate-pulse text-pink-500">|</span>
                </span>
              </div>

              {/* Description */}
              <p className="text-lg lg:text-xl text-gray-400 leading-relaxed max-w-lg">
                I create exceptional digital experiences through innovative design and robust development. 
                Transforming ideas into powerful, user-focused solutions.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => setActiveSection('projects')}
                className="group px-8 py-4 bg-pink-700 text-white rounded-lg font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-900/50 flex items-center justify-center space-x-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <span className="relative z-10">View My Work</span>
                <ArrowRight className="group-hover:translate-x-1 transition-transform duration-300 relative z-10" size={18} />
              </button>
              
              <button
                onClick={() => setActiveSection('contact')}
                className="px-8 py-4 border-2 border-pink-700 text-pink-400 rounded-lg font-semibold hover:bg-pink-950/40 hover:border-pink-600 hover:text-pink-300 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-pink-900/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>

            {/* Social proof or stats with hover effects */}
            <div className="flex space-x-8 pt-8">
              <div className="text-center group cursor-default">
                <div className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">50+</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Projects</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">3+</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Years</div>
              </div>
              <div className="text-center group cursor-default">
                <div className="text-2xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300">99%</div>
                <div className="text-sm text-gray-500 group-hover:text-gray-400 transition-colors duration-300">Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Right Column - Image Space */}
          <div className="relative lg:flex justify-center items-center hidden">
            <div className="relative group">
              {/* Interactive decorative elements */}
              <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-pink-800 rounded-lg group-hover:border-pink-700 transition-all duration-300 group-hover:scale-105"></div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-pink-950/30 rounded-lg blur-sm group-hover:bg-pink-900/40 transition-all duration-300"></div>
              
              {/* Image placeholder with interactive styling */}
              <div className="w-80 h-96 bg-black border border-gray-800 group-hover:border-pink-900 rounded-2xl flex items-center justify-center relative overflow-hidden shadow-2xl transition-all duration-300 group-hover:shadow-pink-950/30">
                {/* Placeholder content */}
                <div className="text-center space-y-4 opacity-30 group-hover:opacity-50 transition-opacity duration-300">
                  <div className="w-24 h-24 bg-pink-800 rounded-full mx-auto group-hover:bg-pink-700 transition-colors duration-300"></div>
                  <div className="text-gray-600 text-sm">Your Professional Photo</div>
                </div>
                
                {/* Subtle overlay effect */}
                <div className="absolute inset-0 bg-black/10"></div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="text-gray-600 hover:text-pink-500 transition-colors cursor-pointer transform hover:scale-110 duration-300" size={32} />
        </div>
      </div>

      {/* Enhanced floating elements with varied animations */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-pink-800 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-10 w-1 h-1 bg-pink-900 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-pink-700 rounded-full animate-ping opacity-75" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-900 rounded-full animate-pulse opacity-60" style={{animationDelay: '3s'}}></div>
    </section>
  );
};

export default HeroSection;
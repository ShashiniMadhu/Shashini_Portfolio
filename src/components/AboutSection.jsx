import React, { useState, useEffect } from 'react';
import { Code, Palette, Zap, Award, Coffee, Heart } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('about-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: '50+', label: 'Projects Completed', icon: Award },
    { number: '3+', label: 'Years Experience', icon: Coffee },
    { number: '100%', label: 'Client Satisfaction', icon: Heart },
    { number: '24/7', label: 'Support Available', icon: Zap }
  ];

  const skills = [
    { icon: Code, label: 'Clean Code', color: 'text-pink-600', bgColor: 'bg-pink-100', description: 'Writing maintainable and scalable code' },
    { icon: Palette, label: 'UI/UX Design', color: 'text-rose-600', bgColor: 'bg-rose-100', description: 'Creating beautiful user experiences' },
    { icon: Zap, label: 'Performance', color: 'text-pink-700', bgColor: 'bg-pink-50', description: 'Optimizing for speed and efficiency' }
  ];

  return (
    <section id="about-section" className="py-20 bg-white relative overflow-hidden">
      {/* Light pink accent elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-rose-100/40 rounded-full blur-2xl translate-x-1/3 translate-y-1/3"></div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 opacity-3">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(219,39,119,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>


      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-pink-500"></div>
            <span className="text-pink-600 font-medium tracking-wide text-sm uppercase">Get To Know Me</span>
            <div className="w-12 h-0.5 bg-pink-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            About{' '}
            <span className="text-pink-600 relative inline-block">
              Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-pink-200 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Crafting digital experiences with passion, precision, and a touch of creativity
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="group">
                <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code. 
                  My journey in web development started with curiosity and has evolved into a professional pursuit of creating 
                  exceptional digital experiences.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll find me 
                  exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
                </p>
              </div>
            </div>
          </div>

          {/* Professional Photo Section Only */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-72 h-80 bg-pink-50 rounded-3xl border-2 border-pink-200 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-2 border-pink-300 rounded-lg group-hover:border-pink-400 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-pink-200/50 rounded-lg blur-sm group-hover:bg-pink-300/50 transition-colors duration-300"></div>
                
                {/* Main content */}
                <div className="text-center space-y-4 z-10 relative group-hover:scale-105 transition-transform duration-300">
                  <div className="w-20 h-20 bg-pink-200 rounded-full mx-auto group-hover:bg-pink-300 transition-colors duration-300 flex items-center justify-center">
                    <div className="w-14 h-14 bg-pink-400 rounded-full"></div>
                  </div>
                  <div className="text-pink-600 font-medium text-sm">Your Professional Photo</div>
                </div>
                
                {/* Floating particles */}
                <div className="absolute top-8 right-8 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                <div className="absolute bottom-8 left-8 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
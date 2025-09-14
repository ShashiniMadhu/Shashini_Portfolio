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
    { number: '15+', label: 'Projects Completed', icon: Award },
    { number: '2+', label: 'Years Experience', icon: Coffee },
    { number: '3.33', label: 'CGPA', icon: Heart },
    { number: '24/7', label: 'Learning Mode', icon: Zap }
  ];

  const skills = [
    { icon: Code, label: 'Full-Stack Dev', color: 'text-pink-600', bgColor: 'bg-pink-100', description: 'React, Spring Boot, MERN Stack' },
    { icon: Palette, label: 'AI/ML', color: 'text-rose-600', bgColor: 'bg-rose-100', description: 'Python, Machine Learning, Gemini API' },
    { icon: Zap, label: 'Leadership', color: 'text-pink-700', bgColor: 'bg-pink-50', description: 'Team collaboration and project management' }
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
            Computer Science Student | Software Developer | AI/ML Enthusiast
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Content Section */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="group">
                <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  I'm Shashini Madushika, a dedicated Computer Science undergraduate at the University of Colombo School of Computing 
                  with strong expertise in algorithms and full-stack software development. I'm passionate about Machine Learning and 
                  Artificial Intelligence with hands-on experience in developing innovative solutions.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  I specialize in Java Spring Boot, React, and modern web technologies including Python, JavaScript, and database systems. 
                  With proven leadership abilities in collaborative development environments, I've successfully guided teams and delivered 
                  high-quality projects like StructuraX and UniHub. Currently working as a Backend Developer at Athenyx Systems.
                </p>
              </div>
              
              <div className="group">
                <p className="text-lg text-gray-700 leading-relaxed hover:text-gray-900 transition-colors duration-300">
                  When I'm not coding, you'll find me competing in sports like Kabaddi and Volleyball, contributing to hackathons. 
                </p>
              </div>
            </div>
          </div>

          {/* Professional Photo Section */}
          <div className="flex justify-center lg:justify-end">
            <div className="relative group">
              <div className="w-72 h-80 bg-pink-50 rounded-3xl border-2 border-pink-200 flex items-center justify-center relative overflow-hidden shadow-lg group-hover:shadow-2xl transition-all duration-500">
                {/* Decorative elements */}
                <div className="absolute top-4 left-4 w-12 h-12 border-2 border-pink-300 rounded-lg group-hover:border-pink-400 transition-colors duration-300"></div>
                <div className="absolute bottom-4 right-4 w-16 h-16 bg-pink-200/50 rounded-lg blur-sm group-hover:bg-pink-300/50 transition-colors duration-300"></div>
                
                {/* Your Photo */}
                <img 
                  src="src/assets/shashini.jpg" 
                  alt="Shashini Madushika" 
                  className="w-64 h-72 object-cover rounded-2xl z-10 relative group-hover:scale-105 transition-transform duration-300 shadow-md"
                />
                
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
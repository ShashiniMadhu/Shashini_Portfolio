import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Zap, Server, Globe, Brain, Briefcase } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Animate skills progressively
          setTimeout(() => {
            skillCategories.forEach((category, categoryIndex) => {
              category.skills.forEach((skill, skillIndex) => {
                setTimeout(() => {
                  setAnimatedSkills(prev => new Set([...prev, `${categoryIndex}-${skillIndex}`]));
                }, (categoryIndex * 200) + (skillIndex * 100));
              });
            });
          }, 500);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects (matching About section)
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('skills-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = document.getElementById('skills-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const skillCategories = [
    {
      title: 'Programming Languages',
      icon: Code,
      color: 'pink',
      gradient: 'from-pink-500 to-rose-600',
      skills: [
        { name: 'Java', level: 95 },
        { name: 'JavaScript (ES6+)', level: 88 },
        { name: 'C/C++', level: 85 },
        { name: 'PHP', level: 80 },
        { name: 'Scala', level: 75 }
      ]
    },
    {
      title: 'Web Technologies',
      icon: Globe,
      color: 'rose',
      gradient: 'from-rose-500 to-pink-600',
      skills: [
        { name: 'React', level: 92 },
        { name: 'HTML5/CSS3', level: 90 },
        { name: 'Bootstrap', level: 85 },
        { name: 'Tailwind CSS', level: 88 },
        { name: 'Material UI', level: 85 },
        { name: 'RESTful APIs', level: 90 }
      ]
    },
    {
      title: 'Frameworks & Tools',
      icon: Server,
      color: 'purple',
      gradient: 'from-purple-500 to-pink-600',
      skills: [
        { name: 'Spring Boot', level: 95 },
        { name: 'JPA/Hibernate', level: 88 },
        { name: 'Git/GitHub', level: 92 },
        { name: 'Linux', level: 82 },
        { name: 'Postman', level: 85 },
      ]
    },
    {
      title: 'Database & Cloud',
      icon: Database,
      color: 'indigo',
      gradient: 'from-indigo-500 to-purple-600',
      skills: [
        { name: 'MySQL', level: 90 },
        { name: 'PostgreSQL', level: 85 },
        { name: 'MongoDB', level: 80 },
        { name: 'Supabase', level: 82 },
        { name: 'Render', level: 78 },
        { name: 'Vercel', level: 85 }
      ]
    },
    {
      title: 'Development Tools',
      icon: Briefcase,
      color: 'emerald',
      gradient: 'from-emerald-500 to-teal-600',
      skills: [
        { name: 'VS Code', level: 95 },
        { name: 'IntelliJ IDEA', level: 90 },
        { name: 'PyCharm', level: 85 },
        { name: 'RStudio', level: 80 },
        { name: 'Octave', level: 75 },
        { name: 'Clerk Auth', level: 82 }
      ]
    }
  ];

  const getColorClasses = (color) => {
    const colorMap = {
      pink: {
        bg: 'bg-pink-50/70',
        hoverBg: 'hover:bg-pink-100/80',
        border: 'border-pink-200/60',
        hoverBorder: 'hover:border-pink-300/70',
        text: 'text-pink-600',
        progress: 'bg-gradient-to-r from-pink-500 to-pink-600',
        progressBg: 'bg-pink-100/50',
        icon: 'text-pink-500',
        iconBg: 'bg-pink-100/60',
        shadow: 'shadow-lg shadow-pink-100/50',
        hoverShadow: 'hover:shadow-xl hover:shadow-pink-200/60'
      },
      rose: {
        bg: 'bg-rose-50/70',
        hoverBg: 'hover:bg-rose-100/80',
        border: 'border-rose-200/60',
        hoverBorder: 'hover:border-rose-300/70',
        text: 'text-rose-600',
        progress: 'bg-gradient-to-r from-rose-500 to-rose-600',
        progressBg: 'bg-rose-100/50',
        icon: 'text-rose-500',
        iconBg: 'bg-rose-100/60',
        shadow: 'shadow-lg shadow-rose-100/50',
        hoverShadow: 'hover:shadow-xl hover:shadow-rose-200/60'
      },
      purple: {
        bg: 'bg-purple-50/70',
        hoverBg: 'hover:bg-purple-100/80',
        border: 'border-purple-200/60',
        hoverBorder: 'hover:border-purple-300/70',
        text: 'text-purple-600',
        progress: 'bg-gradient-to-r from-purple-500 to-purple-600',
        progressBg: 'bg-purple-100/50',
        icon: 'text-purple-500',
        iconBg: 'bg-purple-100/60',
        shadow: 'shadow-lg shadow-purple-100/50',
        hoverShadow: 'hover:shadow-xl hover:shadow-purple-200/60'
      },
      indigo: {
        bg: 'bg-indigo-50/70',
        hoverBg: 'hover:bg-indigo-100/80',
        border: 'border-indigo-200/60',
        hoverBorder: 'hover:border-indigo-300/70',
        text: 'text-indigo-600',
        progress: 'bg-gradient-to-r from-indigo-500 to-indigo-600',
        progressBg: 'bg-indigo-100/50',
        icon: 'text-indigo-500',
        iconBg: 'bg-indigo-100/60',
        shadow: 'shadow-lg shadow-indigo-100/50',
        hoverShadow: 'hover:shadow-xl hover:shadow-indigo-200/60'
      },
      emerald: {
        bg: 'bg-emerald-50/70',
        hoverBg: 'hover:bg-emerald-100/80',
        border: 'border-emerald-200/60',
        hoverBorder: 'hover:border-emerald-300/70',
        text: 'text-emerald-600',
        progress: 'bg-gradient-to-r from-emerald-500 to-emerald-600',
        progressBg: 'bg-emerald-100/50',
        icon: 'text-emerald-500',
        iconBg: 'bg-emerald-100/60',
        shadow: 'shadow-lg shadow-emerald-100/50',
        hoverShadow: 'hover:shadow-xl hover:shadow-emerald-200/60'
      }
    };
    return colorMap[color];
  };

  return (
    <section id="skills-section" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Enhanced background elements with mouse interaction (matching About section) */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-100/60 via-pink-200/40 to-rose-100/60 rounded-full blur-3xl transition-all duration-700"
        style={{
          transform: `translate(-50%, -50%) translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(${1 + mousePosition.x * 0.001})`
        }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 bg-gradient-to-tl from-rose-100/50 via-pink-100/40 to-pink-200/50 rounded-full blur-2xl transition-all duration-500"
        style={{
          transform: `translate(33%, 33%) translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px) scale(${1 + mousePosition.y * 0.0008})`
        }}
      />
      
      {/* Interactive grid pattern (matching About section) */}
      <div 
        className="absolute inset-0 opacity-[0.08] transition-opacity duration-300"
        style={{
          backgroundImage: 'linear-gradient(rgba(219,39,119,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header (matching About section style) */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-pink-600 animate-shimmer"></div>
            <span className="text-pink-600 font-semibold tracking-wider text-sm uppercase relative">
              Technical Expertise
              <div className="absolute -bottom-1 left-0 w-full h-px bg-pink-300 animate-pulse"></div>
            </span>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-transparent via-pink-500 to-pink-600 animate-shimmer"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
            My{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 relative inline-block animate-gradient-text">
              Skills
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-300 to-rose-200 rounded-full animate-slide-in"></div>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-pink-500 animate-expand-width"></div>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Technologies and tools I use to build innovative software solutions and AI-powered applications
          </p>
        </div>

        {/* Skills Grid with enhanced responsiveness */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={categoryIndex}
                className={`${colors.bg} ${colors.hoverBg} ${colors.border} ${colors.hoverBorder} ${colors.shadow} ${colors.hoverShadow} rounded-2xl lg:rounded-3xl p-6 lg:p-8 border backdrop-blur-sm transition-all duration-700 transform hover:scale-[1.02] hover:-translate-y-2 group cursor-default relative overflow-hidden ${
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  animationDelay: `${categoryIndex * 200}ms`,
                  transitionDelay: `${categoryIndex * 100}ms`
                }}
              >
                {/* Interactive highlight effects */}
                <div 
                  className="absolute inset-0 bg-gradient-to-br from-pink-400/5 via-transparent to-rose-400/5 rounded-2xl lg:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.08) 0%, transparent 50%)`
                  }}
                />

                {/* Category Header */}
                <div className="flex items-center justify-center mb-6 lg:mb-8">
                  <div className={`${colors.iconBg} p-3 lg:p-4 rounded-xl transition-all duration-500 group-hover:scale-110 group-hover:rotate-3 relative overflow-hidden`}>
                    <IconComponent className={`${colors.icon} w-6 h-6 lg:w-8 lg:h-8 transition-all duration-300 relative z-10`} />
                    {/* Icon background animation */}
                    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
                
                <h3 className={`text-lg lg:text-xl font-bold ${colors.text} mb-6 lg:mb-8 text-center transition-all duration-300 group-hover:scale-105`}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-4 lg:space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    const isAnimated = animatedSkills.has(skillKey);
                    
                    return (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-2 lg:mb-3">
                          <span className="text-gray-800 font-semibold text-sm lg:text-base group-hover/skill:text-gray-900 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className={`${colors.text} font-bold text-xs lg:text-sm transition-all duration-300 group-hover/skill:scale-110`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Enhanced Progress Bar */}
                        <div className={`w-full ${colors.progressBg} rounded-full h-2 lg:h-2.5 overflow-hidden shadow-inner backdrop-blur-sm`}>
                          <div
                            className={`${colors.progress} h-2 lg:h-2.5 rounded-full transition-all duration-1000 ease-out relative overflow-hidden shadow-sm`}
                            style={{ 
                              width: isAnimated ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          >
                            {/* Enhanced shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent transform -skew-x-12 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000"></div>
                            {/* Glow effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-pulse"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Enhanced hover indicator */}
                <div className={`mt-6 lg:mt-8 pt-4 lg:pt-6 border-t ${colors.border} opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center space-x-2 ${colors.text} text-sm font-medium`}>
                      <Zap className="w-4 h-4 animate-pulse" />
                      <span>Proficient</span>
                    </div>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-3 right-3 w-2 h-2 bg-pink-400/40 rounded-full animate-pulse-gentle opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-3 left-3 w-1.5 h-1.5 bg-rose-400/40 rounded-full animate-pulse-gentle opacity-0 group-hover:opacity-100 transition-opacity duration-500" style={{animationDelay: '1s'}}></div>
              </div>
            );
          })}
        </div>        
      </div>

      {/* Floating decorative elements (matching About section) */}
      <div className="absolute top-1/4 right-16 w-2 h-2 bg-pink-400/60 rounded-full animate-pulse-gentle opacity-60"></div>
      <div className="absolute top-3/4 left-16 w-1.5 h-1.5 bg-rose-400/60 rounded-full animate-pulse-gentle opacity-50" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse-gentle opacity-40" style={{animationDelay: '2s'}}></div>

      <style jsx>{`
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-text {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes slide-in {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        
        @keyframes expand-width {
          0% { width: 0%; }
          100% { width: 100%; }
        }
        
        @keyframes pulse-gentle {
          0%, 100% { opacity: 0.6; transform: scale(1); }
          50% { opacity: 1; transform: scale(1.1); }
        }
        
        .animate-shimmer {
          background-size: 200% 200%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-gradient-text {
          background-size: 200% 200%;
          animation: gradient-text 4s ease-in-out infinite;
        }
        
        .animate-slide-in {
          animation: slide-in 1s ease-out 0.5s forwards;
          transform: translateX(-100%);
        }
        
        .animate-expand-width {
          animation: expand-width 1.5s ease-out 1s forwards;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-shimmer {
            animation-duration: 2.5s;
          }
          
          .animate-gradient-text {
            animation-duration: 3s;
          }
          
          .animate-pulse-gentle {
            animation-duration: 2.5s;
          }
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
import React, { useState, useEffect } from 'react';
import { Code, Database, Palette, Zap, Server, Globe, Brain, Briefcase } from 'lucide-react';

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCategory, setHoveredCategory] = useState(null);
  const [animatedSkills, setAnimatedSkills] = useState(new Set());

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
      { threshold: 0.2 }
    );

    const section = document.getElementById('skills-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
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

  const getColorClasses = (color, variant = 'default') => {
    const colorMap = {
      pink: {
        bg: 'bg-pink-50',
        hoverBg: 'hover:bg-pink-100',
        border: 'border-pink-200',
        hoverBorder: 'hover:border-pink-300',
        text: 'text-pink-600',
        progress: 'bg-pink-500',
        progressBg: 'bg-pink-100',
        icon: 'text-pink-500',
        iconBg: 'bg-pink-100',
        shadow: 'shadow-pink-100',
        hoverShadow: 'hover:shadow-pink-200'
      },
      rose: {
        bg: 'bg-rose-50',
        hoverBg: 'hover:bg-rose-100',
        border: 'border-rose-200',
        hoverBorder: 'hover:border-rose-300',
        text: 'text-rose-600',
        progress: 'bg-rose-500',
        progressBg: 'bg-rose-100',
        icon: 'text-rose-500',
        iconBg: 'bg-rose-100',
        shadow: 'shadow-rose-100',
        hoverShadow: 'hover:shadow-rose-200'
      },
      purple: {
        bg: 'bg-purple-50',
        hoverBg: 'hover:bg-purple-100',
        border: 'border-purple-200',
        hoverBorder: 'hover:border-purple-300',
        text: 'text-purple-600',
        progress: 'bg-purple-500',
        progressBg: 'bg-purple-100',
        icon: 'text-purple-500',
        iconBg: 'bg-purple-100',
        shadow: 'shadow-purple-100',
        hoverShadow: 'hover:shadow-purple-200'
      },
      indigo: {
        bg: 'bg-indigo-50',
        hoverBg: 'hover:bg-indigo-100',
        border: 'border-indigo-200',
        hoverBorder: 'hover:border-indigo-300',
        text: 'text-indigo-600',
        progress: 'bg-indigo-500',
        progressBg: 'bg-indigo-100',
        icon: 'text-indigo-500',
        iconBg: 'bg-indigo-100',
        shadow: 'shadow-indigo-100',
        hoverShadow: 'hover:shadow-indigo-200'
      },
      violet: {
        bg: 'bg-violet-50',
        hoverBg: 'hover:bg-violet-100',
        border: 'border-violet-200',
        hoverBorder: 'hover:border-violet-300',
        text: 'text-violet-600',
        progress: 'bg-violet-500',
        progressBg: 'bg-violet-100',
        icon: 'text-violet-500',
        iconBg: 'bg-violet-100',
        shadow: 'shadow-violet-100',
        hoverShadow: 'hover:shadow-violet-200'
      },
      emerald: {
        bg: 'bg-emerald-50',
        hoverBg: 'hover:bg-emerald-100',
        border: 'border-emerald-200',
        hoverBorder: 'hover:border-emerald-300',
        text: 'text-emerald-600',
        progress: 'bg-emerald-500',
        progressBg: 'bg-emerald-100',
        icon: 'text-emerald-500',
        iconBg: 'bg-emerald-100',
        shadow: 'shadow-emerald-100',
        hoverShadow: 'hover:shadow-emerald-200'
      }
    };
    return colorMap[color];
  };

  return (
    <section id="skills-section" className="py-20 bg-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-rose-100/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
      
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
            <span className="text-pink-600 font-medium tracking-wide text-sm uppercase">Technical Expertise</span>
            <div className="w-12 h-0.5 bg-pink-500"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            My{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-pink-600 to-rose-600 bg-clip-text text-transparent">
                Skills
              </span>
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-pink-200 rounded-full"></div>
            </span>
          </h2>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to build innovative software solutions and AI-powered applications
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const colors = getColorClasses(category.color);
            const IconComponent = category.icon;
            
            return (
              <div
                key={categoryIndex}
                className={`${colors.bg} ${colors.hoverBg} ${colors.border} ${colors.hoverBorder} ${colors.shadow} ${colors.hoverShadow} rounded-2xl p-8 border-2 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 group cursor-default`}
                onMouseEnter={() => setHoveredCategory(categoryIndex)}
                onMouseLeave={() => setHoveredCategory(null)}
                style={{
                  animationDelay: `${categoryIndex * 200}ms`
                }}
              >
                {/* Category Header */}
                <div className="flex items-center justify-center mb-8">
                  <div className={`${colors.iconBg} p-4 rounded-xl transition-all duration-300 group-hover:scale-110`}>
                    <IconComponent className={`${colors.icon} w-8 h-8 transition-transform duration-300`} />
                  </div>
                </div>
                
                <h3 className={`text-xl font-bold ${colors.text} mb-8 text-center transition-colors duration-300`}>
                  {category.title}
                </h3>

                {/* Skills List */}
                <div className="space-y-6">
                  {category.skills.map((skill, skillIndex) => {
                    const skillKey = `${categoryIndex}-${skillIndex}`;
                    const isAnimated = animatedSkills.has(skillKey);
                    
                    return (
                      <div key={skillIndex} className="group/skill">
                        <div className="flex justify-between items-center mb-3">
                          <span className="text-gray-800 font-semibold text-sm group-hover/skill:text-gray-900 transition-colors duration-300">
                            {skill.name}
                          </span>
                          <span className={`${colors.text} font-bold text-xs transition-all duration-300 group-hover/skill:scale-110`}>
                            {skill.level}%
                          </span>
                        </div>
                        
                        {/* Progress Bar */}
                        <div className={`w-full ${colors.progressBg} rounded-full h-2.5 overflow-hidden shadow-inner`}>
                          <div
                            className={`${colors.progress} h-2.5 rounded-full transition-all duration-1000 ease-out relative overflow-hidden`}
                            style={{ 
                              width: isAnimated ? `${skill.level}%` : '0%',
                              transitionDelay: `${categoryIndex * 200 + skillIndex * 100}ms`
                            }}
                          >
                            {/* Shimmer effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover/skill:translate-x-full transition-transform duration-1000"></div>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Hover indicator */}
                <div className={`mt-8 pt-6 border-t ${colors.border} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}>
                  <div className="text-center">
                    <div className={`inline-flex items-center space-x-2 ${colors.text} text-sm font-medium`}>
                      <Zap className="w-4 h-4" />
                      <span>Proficient</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>        
      </div>

      {/* Floating decorative elements */}
      <div className="absolute top-1/4 right-16 w-2 h-2 bg-pink-400 rounded-full animate-pulse opacity-60"></div>
      <div className="absolute top-3/4 left-16 w-1.5 h-1.5 bg-rose-400 rounded-full animate-pulse opacity-50" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse opacity-40" style={{animationDelay: '2s'}}></div>

      <style jsx>{`
        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
};

export default SkillsSection;
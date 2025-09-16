import React, { useState, useEffect } from 'react';
import { Code, Palette, Zap, Award, Coffee, Heart, MapPin, Calendar, GraduationCap, Briefcase } from 'lucide-react';

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredStat, setHoveredStat] = useState(null);
  const [hoveredSkill, setHoveredSkill] = useState(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

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

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('about-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = document.getElementById('about-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const stats = [
    { number: '15+', label: 'Projects Completed', icon: Award, color: 'pink' },
    { number: '2+', label: 'Years Experience', icon: Coffee, color: 'rose' },
    { number: '3.33', label: 'CGPA', icon: GraduationCap, color: 'pink' },
    { number: '24/7', label: 'Learning Mode', icon: Zap, color: 'rose' }
  ];

  const skills = [
    { 
      icon: Code, 
      label: 'Full-Stack Development', 
      color: 'pink',
      description: 'React, Spring Boot, MERN Stack',
      percentage: 90
    },
    { 
      icon: Palette, 
      label: 'AI/ML Engineering', 
      color: 'rose',
      description: 'Python, Machine Learning, Gemini API',
      percentage: 85
    },
    { 
      icon: Zap, 
      label: 'Team Leadership', 
      color: 'pink',
      description: 'Project Management & Collaboration',
      percentage: 88
    }
  ];

  const personalInfo = [
    { icon: MapPin, label: 'Location', value: 'Negombo, Sri Lanka' },
    { icon: Calendar, label: 'Age', value: '22 Years' },
    { icon: GraduationCap, label: 'Education', value: 'University of Colombo' },
    { icon: Briefcase, label: 'Current Role', value: 'Backend Developer' }
  ];

  return (
    <section id="about-section" className="py-16 md:py-20 bg-white relative overflow-hidden">
      {/* Enhanced background elements with mouse interaction */}
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
      
      {/* Interactive grid pattern */}
      <div 
        className="absolute inset-0 opacity-[0.08] transition-opacity duration-300"
        style={{
          backgroundImage: 'linear-gradient(rgba(219,39,119,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-pink-600 animate-shimmer"></div>
            <span className="text-pink-600 font-semibold tracking-wider text-sm uppercase relative">
              Get To Know Me
              <div className="absolute -bottom-1 left-0 w-full h-px bg-pink-300 animate-pulse"></div>
            </span>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-transparent via-pink-500 to-pink-600 animate-shimmer"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 relative">
            About{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-600 via-pink-500 to-rose-600 relative inline-block animate-gradient-text">
              Me
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-200 via-pink-300 to-rose-200 rounded-full animate-slide-in"></div>
              <div className="absolute -bottom-1 left-0 w-0 h-px bg-pink-500 animate-expand-width"></div>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed font-light">
            Computer Science Student • Software Developer • AI/ML Enthusiast
          </p>
        </div>

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 xl:gap-16">
          {/* Main Content - Left Side */}
          <div className="lg:col-span-7 space-y-8">
            
            {/* Story Section */}
            <div className={`space-y-6 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
              <div className="prose prose-lg max-w-none">
                <div className="group cursor-default">
                  <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300 hover:transform hover:scale-[1.01] mb-6">
                    I'm <span className="font-semibold text-pink-600">Shashini Madushika</span>, a dedicated Computer Science undergraduate at the 
                    <span className="font-medium text-gray-800"> University of Colombo School of Computing</span> with strong expertise in algorithms and 
                    full-stack software development. I'm passionate about Machine Learning and Artificial Intelligence with hands-on experience in 
                    developing innovative solutions.
                  </p>
                </div>
                
                <div className="group cursor-default">
                  <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300 hover:transform hover:scale-[1.01] mb-6">
                    I specialize in <span className="font-medium text-pink-600">Java Spring Boot, React</span>, and modern web technologies including 
                    Python, JavaScript, and database systems. With proven leadership abilities in collaborative development environments, I've successfully 
                    guided teams and delivered high-quality projects like <span className="font-medium text-gray-800">StructuraX and SkillMentor</span>. 
                    Currently working as a <span className="font-semibold text-rose-600">Backend Developer at Athenyx Systems</span>.
                  </p>
                </div>
                
                <div className="group cursor-default">
                  <p className="text-lg text-gray-700 leading-relaxed group-hover:text-gray-900 transition-all duration-300 hover:transform hover:scale-[1.01]">
                    When I'm not coding, you'll find me competing in sports like <span className="font-medium text-pink-600">Kabaddi and Cricket</span>, 
                    contributing to hackathons, and exploring the latest tech innovations.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Enhanced Photo Section - Right Side */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <div className={`relative transition-all duration-1000 delay-800 ${isVisible ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'}`}>
              
              {/* Main photo container with enhanced mobile responsiveness */}
              <div className="relative group">
                <div className="w-64 h-80 sm:w-72 sm:h-80 md:w-80 md:h-96 lg:w-72 lg:h-80 xl:w-80 xl:h-96 bg-gradient-to-br from-white via-pink-50/50 to-rose-50/50 rounded-3xl border border-pink-200/60 flex items-center justify-center relative overflow-hidden shadow-xl group-hover:shadow-2xl transition-all duration-700 backdrop-blur-sm">
                  
                  {/* Enhanced decorative elements with animations */}
                  <div className="absolute top-4 left-4 w-8 h-8 md:w-12 md:h-12 border-2 border-pink-300/60 rounded-lg group-hover:border-pink-400 group-hover:rotate-12 transition-all duration-500 animate-float"></div>
                  <div className="absolute bottom-4 right-4 w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-pink-200/50 to-rose-200/50 rounded-lg blur-sm group-hover:blur-none transition-all duration-500 animate-float-delay"></div>
                  
                  {/* Floating accent circles */}
                  <div className="absolute top-8 right-6 w-3 h-3 bg-pink-400/60 rounded-full animate-pulse-gentle"></div>
                  <div className="absolute bottom-12 left-6 w-2 h-2 bg-rose-400/60 rounded-full animate-pulse-gentle" style={{animationDelay: '1s'}}></div>
                  
                  {/* Professional Photo */}
                  <div className="relative z-10 group-hover:scale-105 transition-all duration-500">
                    <img 
                      src="src/assets/shashini.jpg" 
                      alt="Shashini Madushika - Professional Portrait" 
                      className="w-56 h-72 sm:w-64 sm:h-72 md:w-72 md:h-88 lg:w-64 lg:h-72 xl:w-72 xl:h-88 object-cover object-center rounded-2xl shadow-lg ring-2 ring-white/50 group-hover:ring-pink-200/50 transition-all duration-500"
                    />
                    
                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-pink-900/10 via-transparent to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  </div>
                  
                  {/* Interactive highlight effects */}
                  <div 
                    className="absolute inset-0 bg-gradient-to-br from-pink-400/5 via-transparent to-rose-400/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                    style={{
                      background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.08) 0%, transparent 50%)`
                    }}
                  />
                </div>

                {/* Floating stats around photo */}
                <div className="absolute -top-4 -left-4 hidden lg:block">
                  <div className="bg-white/90 backdrop-blur-sm border border-pink-200/60 rounded-xl px-4 py-2 shadow-lg animate-float-gentle">
                    <div className="flex items-center space-x-2">
                      <Award className="w-4 h-4 text-pink-600" />
                      <span className="text-sm font-semibold text-gray-900">10+ Projects</span>
                    </div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -right-4 hidden lg:block">
                  
                </div>
              </div>
            </div>
          </div>
        </div>        
      </div>

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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-8px) rotate(5deg); }
        }
        
        @keyframes float-delay {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(-3deg); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
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
        
        .animate-float {
          animation: float 4s ease-in-out infinite;
        }
        
        .animate-float-delay {
          animation: float-delay 4s ease-in-out infinite 1s;
        }
        
        .animate-float-gentle {
          animation: float-gentle 3s ease-in-out infinite;
        }
        
        .animate-pulse-gentle {
          animation: pulse-gentle 3s ease-in-out infinite;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-float {
            animation-duration: 3s;
          }
          
          .animate-float-delay {
            animation-duration: 3s;
          }
          
          .animate-float-gentle {
            animation-duration: 2.5s;
          }
        }
      `}</style>
    </section>
  );
};

export default AboutSection;
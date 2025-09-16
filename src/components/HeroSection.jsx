import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';

const HeroSection = ({ setActiveSection }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [cursorTrail, setCursorTrail] = useState([]);

  const roles = [
    'Computer Science Student',
    'Aspiring Software Engineer', 
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Innovation Seeker'
  ];

  // Enhanced typing animation
  useEffect(() => {
    const currentText = roles[currentIndex];
    let i = 0;
    setText('');
    
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
    }, 80);

    return () => clearInterval(timer);
  }, [currentIndex]);

useEffect(() => {
  let trailIdCounter = 0; // Move this outside the event handler

  const handleMouseMove = (e) => {
    const newPosition = {
      x: (e.clientX / window.innerWidth) * 100,
      y: (e.clientY / window.innerHeight) * 100,
      clientX: e.clientX,
      clientY: e.clientY
    };
    
    setMousePosition(newPosition);
    
    // Create cursor trail with truly unique IDs
    setCursorTrail(prev => {
      trailIdCounter += 1; // Increment counter for each new trail point
      const uniqueId = `trail-${Date.now()}-${trailIdCounter}-${Math.random().toString(36).substr(2, 9)}`;
      
      const newTrail = [...prev, { 
        x: e.clientX, 
        y: e.clientY, 
        id: uniqueId, // Now guaranteed unique
        opacity: 1,
        timestamp: Date.now()
      }].slice(-8);
      
      return newTrail;
    });
  };

  window.addEventListener('mousemove', handleMouseMove);
  
  // Clean up trail with improved logic
  const trailCleanup = setInterval(() => {
    setCursorTrail(prev => 
      prev.filter(point => 
        Date.now() - point.timestamp < 1000
      )
    );
  }, 50);
  
  return () => {
    window.removeEventListener('mousemove', handleMouseMove);
    clearInterval(trailCleanup);
  };
}, []);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = '/Shashini_CV.pdf';
    link.download = 'Shashini_CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
      <section id="home" className="min-h-screen flex items-end relative overflow-hidden bg-black pt-16 sm:pt-20 lg:pt-0">      {cursorTrail.map((point, index) => (
        <div
          key={point.id}
          className="fixed w-2 h-2 bg-pink-400/30 rounded-full pointer-events-none z-50 blur-sm"
          style={{
            left: point.x - 4,
            top: point.y - 4,
            opacity: (index + 1) / cursorTrail.length * 0.6,
            transform: `scale(${(index + 1) / cursorTrail.length})`,
            animation: `fadeTrail 1s ease-out forwards`
          }}
        />
      ))}

      {/* Enhanced animated background with mouse interaction */}
      <div className="absolute inset-0">
        {/* Primary gradient orb with enhanced mouse following */}
        <div 
          className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-pink-900/35 via-pink-800/25 to-pink-700/15 rounded-full blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * 0.08}px, ${mousePosition.y * 0.08}px) rotate(${mousePosition.x * 0.2}deg) scale(${1 + mousePosition.x * 0.002})`,
            transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
          }}
        />
        
        {/* Secondary accent with counter-rotation */}
        <div 
          className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-pink-950/30 via-pink-900/20 to-pink-800/10 rounded-full blur-3xl animate-pulse-slow"
          style={{
            transform: `translate(${mousePosition.x * -0.06}px, ${mousePosition.y * -0.06}px) rotate(${mousePosition.x * -0.15}deg) scale(${1 + mousePosition.y * 0.0015})`,
            transition: 'transform 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
            animationDelay: '1s'
          }}
        />
        
        {/* Floating accent orbs */}
        <div 
          className="absolute top-1/4 left-1/3 w-32 h-32 bg-pink-600/20 rounded-full blur-2xl animate-float-gentle"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px) rotate(${mousePosition.x * 0.1}deg)`,
            transition: 'transform 0.8s ease-out'
          }}
        />
        
        <div 
          className="absolute top-2/3 right-1/4 w-24 h-24 bg-pink-700/15 rounded-full blur-xl animate-float-gentle"
          style={{
            transform: `translate(${mousePosition.x * -0.04}px, ${mousePosition.y * -0.04}px) rotate(${mousePosition.y * -0.1}deg)`,
            transition: 'transform 1s ease-out',
            animationDelay: '2s'
          }}
        />
        
        {/* Enhanced animated grid with mouse interaction */}
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '90px 90px',
            animation: 'gridDrift 40s linear infinite',
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) rotate(${mousePosition.x * 0.01}deg)`
          }}
        />
      </div>

      <div className="container mx-auto px-6 lg:px-12 relative z-10 pb-0">
        {/* Mobile: Flex column layout, Desktop: Grid layout */}
        <div className="flex flex-col lg:grid lg:grid-cols-2 gap-8 lg:gap-16 items-end lg:min-h-screen">          
          
          {/* Left Column - Content (Order 1 on mobile, Order 1 on desktop) */}
          <div className={`space-y-6 lg:space-y-8 lg:pr-12 pb-12 lg:pb-16 transform transition-all duration-1200 order-1 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}> 

            {/* Greeting line with enhanced mouse interaction */}
            <div className="flex items-center space-x-4 group cursor-default">
              <div 
                className="w-16 h-0.5 bg-gradient-to-r from-pink-600 to-pink-400 group-hover:w-24 transition-all duration-700 animate-shimmer"
                style={{
                  transform: `scaleX(${1 + mousePosition.x * 0.003})`,
                  transition: 'transform 0.3s ease-out'
                }}
              />
              <span className="text-pink-400 font-medium tracking-[0.2em] text-sm uppercase group-hover:tracking-[0.25em] transition-all duration-500 relative animate-text-glow">
                Hello There
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-pink-400 group-hover:w-full transition-all duration-700"></div>
              </span>
            </div>

            {/* Main heading with sophisticated typography and animations */}
            <div className="space-y-4">
              <h1 className="text-4xl sm:text-5xl lg:text-7xl xl:text-8xl font-bold leading-[0.9]">
                <span className="text-white block animate-fade-in-up">I'm </span>
                <span 
                  className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-pink-500 hover:from-pink-300 hover:via-pink-200 hover:to-pink-400 transition-all duration-700 cursor-default relative group block animate-gradient-x"
                  style={{
                    transform: `perspective(1000px) rotateY(${mousePosition.x * 0.02}deg) rotateX(${mousePosition.y * 0.01}deg)`,
                    transition: 'transform 0.3s ease-out'
                  }}
                >
                  Shashini
                  <div className="absolute -bottom-4 left-0 w-0 h-2 bg-gradient-to-r from-pink-500/80 to-pink-300/80 group-hover:w-full transition-all duration-1000 ease-out rounded-full blur-sm animate-pulse-glow"></div>
                </span>
              </h1>

              {/* Dynamic role text with enhanced animations */}
              <div className="h-20 flex items-center">
                <span 
                  className="text-2xl lg:text-4xl xl:text-5xl font-light text-gray-300 relative animate-text-reveal"
                  style={{
                    transform: `translateX(${mousePosition.x * 0.01}px)`,
                    transition: 'transform 0.4s ease-out'
                  }}
                >
                  {text}
                  <span className="animate-cursor-blink text-pink-400 ml-2 font-thin">|</span>
                  <div className="absolute -bottom-3 left-0 w-full h-0.5 bg-gradient-to-r from-pink-500/60 via-pink-400/40 to-transparent animate-shimmer"></div>
                </span>
              </div>
            </div>

            {/* Description with elegant styling and mouse interaction */}
            <div 
              className="relative group cursor-default max-w-2xl animate-fade-in-up"
              style={{
                transform: `translateY(${mousePosition.y * 0.01}px)`,
                transition: 'transform 0.5s ease-out'
              }}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-400 leading-relaxed font-light group-hover:text-gray-300 transition-colors duration-500">
                Crafting exceptional digital experiences through innovative design and robust development. 
                <span className="text-pink-300/80 animate-text-glow"> Transforming visionary ideas into powerful, user-focused solutions.</span>
              </p>
              <div className="absolute bottom-0 left-0 w-0 h-px bg-gradient-to-r from-pink-500 via-pink-400 to-transparent group-hover:w-full transition-all duration-1500 ease-out"></div>
            </div>

            {/* Premium action buttons with enhanced animations */}
            <div className="flex flex-col sm:flex-row gap-6 pt-8 animate-fade-in-up">
              <button
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white rounded-2xl font-semibold text-base transform hover:scale-110 hover:-translate-y-2 transition-all duration-400 shadow-2xl hover:shadow-pink-900/60 flex items-center justify-center space-x-3 overflow-hidden"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * 0.005}deg) rotateX(${mousePosition.y * 0.003}deg) scale(${1 + mousePosition.x * 0.0005})`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/15 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <Download className="w-5 h-5 relative z-10 group-hover:animate-bounce-gentle" />
                <span className="relative z-10">Download Resume</span>
              </button>

              <button
                onClick={() => setActiveSection('contact')}
                className="group px-8 py-4 border-2 border-pink-600/60 hover:border-pink-500 text-pink-300 hover:text-white rounded-2xl font-semibold text-base transform hover:scale-110 hover:-translate-y-2 transition-all duration-400 backdrop-blur-sm relative overflow-hidden animate-border-glow"
                style={{
                  transform: `perspective(1000px) rotateY(${mousePosition.x * -0.005}deg) rotateX(${mousePosition.y * -0.003}deg)`,
                  transition: 'transform 0.3s ease-out'
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-pink-700/20 transform scale-0 group-hover:scale-100 transition-transform duration-400 origin-center rounded-2xl"></div>
                <Mail className="w-5 h-5 inline-block mr-3 group-hover:rotate-12 transition-transform duration-300 relative z-10" />
                <span className="relative z-10">Let's Connect</span>
              </button>
            </div>

            {/* Social links with enhanced animations */}
            <div className="flex space-x-10 pt-12 animate-fade-in-up">
              {[
                { icon: Github, href: "https://github.com/ShashiniMadhu", label: "GitHub" },
                { icon: Linkedin, href: "https://www.linkedin.com/in/shashini-madushika-965b01319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app", label: "LinkedIn" },
                { icon: Mail, href: "mailto:shashinimadushika413@gmail.com", label: "Email" }
              ].map(({ icon: Icon, href, label }, index) => (
                <a 
                  key={label}
                  href={href} 
                  className="group relative text-gray-500 hover:text-pink-400 transform hover:scale-125 hover:-translate-y-3 transition-all duration-400 animate-float-gentle"
                  style={{
                    animationDelay: `${index * 0.5}s`,
                    transform: `translateY(${Math.sin((mousePosition.x + index * 30) * 0.01) * 2}px) rotateZ(${mousePosition.x * 0.01}deg)`
                  }}
                >
                  <div className="absolute inset-0 bg-pink-500/20 rounded-full scale-0 group-hover:scale-150 transition-transform duration-400 blur-xl animate-pulse-glow"></div>
                  <Icon size={32} className="relative z-10" />
                  <span className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">{label}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Right Column - Image (Order 2 on mobile = below content, Order 2 on desktop = right side) */}
          <div className="relative flex justify-center items-center lg:items-end order-2 h-auto lg:h-full py-8 lg:py-0">
            
            {/* Main image container with responsive sizing */}
            <div className="relative group flex items-center lg:items-end justify-center h-full w-full">
              
              {/* Image with proper responsive sizing: smaller on mobile, full size on desktop */}
              <div 
                className="relative overflow-hidden rounded-t-3xl bg-black shadow-2xl group-hover:shadow-black/80 transition-all duration-700 animate-fade-in-scale"
                style={{
                  transform: `perspective(1200px) rotateY(${mousePosition.x * 0.008}deg) rotateX(${mousePosition.y * 0.005}deg) translateZ(${mousePosition.x * 0.1}px)`,
                  transition: 'transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94)'
                }}
              >
                
                {/* RESPONSIVE IMAGE: Small on mobile (below content), Full size on desktop */}
                <img 
                  src="/portfolio.png" 
                  alt="Shashini - Professional Portfolio"
                  className="
                    w-full 
                    h-auto 
                    object-contain 
                    object-bottom
                    bg-black
                    rounded-t-3xl
                    filter group-hover:brightness-110 group-hover:contrast-105
                    transition-all duration-700 ease-out
                    relative z-10
                    block
                    animate-image-glow
                    max-w-[280px] max-h-[350px] 
                    sm:max-w-[320px] sm:max-h-[400px] 
                    md:max-w-[360px] md:max-h-[450px]
                    lg:max-w-[35rem] lg:max-h-[calc(100vh-2rem)] lg:min-h-[80vh]
                    xl:max-w-[40rem] 
                    2xl:max-w-[45rem]
                    mx-auto
                  "
                />
                
                {/* Subtle professional border with animation */}
                <div className="absolute inset-0 rounded-t-3xl border border-transparent group-hover:border-gray-700/30 transition-all duration-500 animate-border-pulse"></div>
                
                {/* Elegant glow effect with mouse interaction */}
                <div 
                  className="absolute inset-0 rounded-t-3xl bg-gradient-to-t from-gray-900/0 via-transparent to-gray-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.05) 0%, transparent 50%)`
                  }}
                ></div>
              </div>

              {/* Enhanced floating accent elements with mouse tracking */}
              <div 
                className="absolute -top-4 lg:-top-8 -right-4 lg:-right-8 w-3 h-3 lg:w-4 lg:h-4 bg-pink-600/60 rounded-full opacity-0 group-hover:opacity-70 transition-all duration-700 animate-orbit"
                style={{
                  transform: `translate(${mousePosition.x * 0.05 + Math.sin(Date.now() * 0.002) * 10}px, ${mousePosition.y * 0.05 + Math.cos(Date.now() * 0.002) * 10}px)`
                }}
              />
              
              <div 
                className="absolute top-1/3 -left-3 lg:-left-6 w-2 h-2 lg:w-3 lg:h-3 bg-pink-700/50 rounded-full opacity-0 group-hover:opacity-50 transition-all duration-700 animate-orbit"
                style={{
                  transform: `translate(${mousePosition.x * -0.03 + Math.cos(Date.now() * 0.0015) * 8}px, ${mousePosition.y * -0.03 + Math.sin(Date.now() * 0.0015) * 8}px)`,
                  animationDelay: '1s'
                }}
              />

              {/* Professional highlight effects - responsive */}
              <div 
                className="absolute top-1/4 -right-6 lg:-right-12 w-12 lg:w-24 h-0.5 bg-gradient-to-r from-transparent via-pink-500/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1000 animate-shimmer"
                style={{
                  transform: `translateX(${mousePosition.x * 0.08}px) rotate(45deg) scaleX(${1 + mousePosition.x * 0.002})`
                }}
              />
              
              <div 
                className="absolute top-1/2 -left-4 lg:-left-8 w-8 lg:w-16 h-0.5 bg-gradient-to-l from-transparent via-pink-600/30 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-1200 animate-shimmer"
                style={{
                  transform: `translateX(${mousePosition.x * -0.06}px) rotate(-45deg)`,
                  animationDelay: '0.5s'
                }}
              />
            </div>

            {/* Enhanced background accent elements - responsive */}
            <div 
              className="absolute -z-10 bottom-0 left-1/2 transform -translate-x-1/2 
                         w-[100%] h-[50%] 
                         lg:w-[120%] lg:h-[80%] 
                         bg-gradient-to-t from-gray-900/20 via-transparent to-gray-900/10 rounded-t-full blur-3xl animate-pulse-slow"
              style={{
                transform: `translateX(-50%) scale(${1 + mousePosition.x * 0.003}) rotate(${mousePosition.x * 0.08}deg) translateY(${mousePosition.y * 0.02}px)`
              }}
            />
          </div>
        </div>

        {/* Enhanced scroll indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce-gentle cursor-pointer group"
          style={{
            transform: `translateX(-50%) translateY(${Math.sin(mousePosition.x * 0.05) * 3}px)`
          }}
        >
          <div className="relative">
            <ChevronDown 
              className="text-gray-600 group-hover:text-pink-400 transition-all duration-400 transform group-hover:scale-125 animate-pulse-glow" 
              size={40} 
            />
            <div className="absolute inset-0 bg-pink-400/30 rounded-full scale-0 group-hover:scale-150 transition-transform duration-500 blur-xl"></div>
            <div className="absolute -inset-4 border border-pink-500/20 rounded-full scale-0 group-hover:scale-100 group-hover:animate-ping transition-all duration-400"></div>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx>{`
        @keyframes gridDrift {
          0% { background-position: 0 0; }
          100% { background-position: 90px 90px; }
        }
        
        @keyframes fadeTrail {
          0% { opacity: 0.6; transform: scale(1); }
          100% { opacity: 0; transform: scale(0.3); }
        }
        
        @keyframes shimmer {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes text-glow {
          0%, 100% { text-shadow: 0 0 5px rgba(219, 39, 119, 0.2); }
          50% { text-shadow: 0 0 15px rgba(219, 39, 119, 0.4); }
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(219, 39, 119, 0.2); }
          50% { box-shadow: 0 0 15px rgba(219, 39, 119, 0.4); }
        }
        
        @keyframes float-gentle {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(2deg); }
        }
        
        @keyframes bounce-gentle {
          0%, 20%, 50%, 80%, 100% { transform: translateY(0); }
          40% { transform: translateY(-10px); }
          60% { transform: translateY(-5px); }
        }
        
        @keyframes orbit {
          0% { transform: rotate(0deg) translateX(20px) rotate(0deg); }
          100% { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
        }
        
        @keyframes cursor-blink {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0; }
        }
        
        @keyframes fade-in-up {
          0% { opacity: 0; transform: translateY(30px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-scale {
          0% { opacity: 0; transform: scale(0.9); }
          100% { opacity: 1; transform: scale(1); }
        }
        
        @keyframes pulse-slow {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(1.05); }
        }
        
        @keyframes border-glow {
          0%, 100% { border-color: rgba(219, 39, 119, 0.6); }
          50% { border-color: rgba(219, 39, 119, 0.8); }
        }
        
        @keyframes border-pulse {
          0%, 100% { border-color: transparent; }
          50% { border-color: rgba(156, 163, 175, 0.3); }
        }
        
        @keyframes image-glow {
          0%, 100% { filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.5)); }
          50% { filter: drop-shadow(0 0 20px rgba(0, 0, 0, 0.8)) drop-shadow(0 0 5px rgba(219, 39, 119, 0.1)); }
        }
        
        @keyframes text-reveal {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-shimmer {
          background: linear-gradient(90deg, currentColor 0%, rgba(219, 39, 119, 0.8) 50%, currentColor 100%);
          background-size: 200% 100%;
          animation: shimmer 3s ease-in-out infinite;
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 6s ease infinite;
        }
        
        .animate-text-glow {
          animation: text-glow 4s ease-in-out infinite;
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }
        
        .animate-float-gentle {
          animation: float-gentle 6s ease-in-out infinite;
        }
        
        .animate-bounce-gentle {
          animation: bounce-gentle 2s ease-in-out infinite;
        }
        
        .animate-orbit {
          animation: orbit 12s linear infinite;
        }
        
        .animate-cursor-blink {
          animation: cursor-blink 1s infinite;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .animate-fade-in-scale {
          animation: fade-in-scale 1s ease-out forwards;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 4s ease-in-out infinite;
        }
        
        .animate-border-glow {
          animation: border-glow 2s ease-in-out infinite;
        }
        
        .animate-border-pulse {
          animation: border-pulse 2s ease-in-out infinite;
        }
        
        .animate-image-glow {
          animation: image-glow 5s ease-in-out infinite;
        }
        
        .animate-text-reveal {
          animation: text-reveal 0.6s ease-out forwards;
        }
        
        /* Enhanced Responsive adjustments */
        @media (max-width: 1024px) {
          .animate-float-gentle {
            animation-duration: 4s;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroSection;
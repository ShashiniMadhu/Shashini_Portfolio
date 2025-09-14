import React, { useState, useEffect } from 'react';
import { ChevronDown, ArrowRight } from 'lucide-react';

const HeroSection = ({ setActiveSection }) => {
  const [text, setText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const roles = [
    'Computer Science Student',
    'Aspiring Software Engineer', 
    'Full Stack Developer',
    'AI/ML Enthusiast',
    'Innovation Seeker'
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
                  Shashini
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
                onClick={() => {
                  // Create a temporary link element to trigger download
                  const link = document.createElement('a');
                  link.href = '/Shashini_CV.pdf'; // Replace with your actual CV path
                  link.download = 'Shashini_CV.pdf';
                  document.body.appendChild(link);
                  link.click();
                  document.body.removeChild(link);
                }}
                className="group px-8 py-4 bg-pink-700 text-white rounded-lg font-semibold hover:bg-pink-600 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-900/50 flex items-center justify-center space-x-2 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-pink-600 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                <svg className="w-5 h-5 relative z-10 group-hover:animate-bounce" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M14,2H6A2,2 0 0,0 4,4V20A2,2 0 0,0 6,22H18A2,2 0 0,0 20,20V8L14,2M18,20H6V4H13V9H18V20Z"/>
                  <path d="M12,11L16,15H13V19H11V15H8L12,11Z"/>
                </svg>
                <span className="relative z-10">Download CV</span>
              </button>
              
              <button
                onClick={() => setActiveSection('contact')}
                className="px-8 py-4 border-2 border-pink-700 text-pink-400 rounded-lg font-semibold hover:bg-pink-950/40 hover:border-pink-600 hover:text-pink-300 transform hover:scale-105 transition-all duration-300 backdrop-blur-sm relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-pink-900/10 transform scale-0 group-hover:scale-100 transition-transform duration-300 origin-center"></div>
                <svg className="w-5 h-5 inline-block mr-2 group-hover:rotate-12 transition-transform duration-300 relative z-10" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20,8L12,13L4,8V6L12,11L20,6M20,4H4C2.89,4 2,4.89 2,6V18A2,2 0 0,0 4,20H20A2,2 0 0,0 22,18V6C22,4.89 21.1,4 20,4Z"/>
                </svg>
                <span className="relative z-10">Get In Touch</span>
              </button>
            </div>

            <div className="flex space-x-8 pt-8">
            </div>
          </div>

          {/* Right Column - Professional Image */}
          <div className="relative flex justify-center items-end order-first lg:order-last h-full">
            <div className="relative group">
              {/* Interactive decorative elements */}
              <div className="absolute -bottom-8 -right-8 w-28 h-28 md:w-44 md:h-44 lg:w-52 lg:h-52 xl:w-56 xl:h-56 bg-pink-950/30 rounded-lg blur-sm group-hover:bg-pink-900/40 transition-all duration-300"></div>
              
              {/* Large Professional Image anchored to bottom */}
              <img 
                src="src/assets/portfolio.png" 
                alt="Professional Portfolio Photo"
                className="
                  w-96 sm:w-[28rem] md:w-[36rem] lg:w-[42rem] xl:w-[48rem] 2xl:w-[56rem]
                  h-auto max-h-full
                  object-contain object-bottom
                  rounded-2xl shadow-2xl 
                  group-hover:shadow-pink-950/30 
                  transition-all duration-300
                  group-hover:scale-[1.02] transform
                  filter group-hover:brightness-110
                "
                style={{
                  maxHeight: 'calc(100vh - 8rem)'
                }}
              />
              
              {/* Floating accent elements */}
              <div className="absolute top-1/4 -right-6 w-5 h-5 bg-pink-700 rounded-full animate-pulse opacity-60"></div>
              <div className="absolute bottom-1/4 -left-6 w-4 h-4 bg-pink-800 rounded-full animate-pulse opacity-40" style={{animationDelay: '1s'}}></div>
              <div className="absolute top-1/3 -right-12 w-3 h-3 bg-pink-600 rounded-full animate-ping opacity-50" style={{animationDelay: '2s'}}></div>
              <div className="absolute top-1/2 -left-10 w-2 h-2 bg-pink-500 rounded-full animate-pulse opacity-30" style={{animationDelay: '3s'}}></div>
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
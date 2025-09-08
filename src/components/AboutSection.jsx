import React from 'react';
import { Code, Palette, Zap } from 'lucide-react';

const AboutSection = () => {
  const stats = [
    { number: '50+', label: 'Projects Completed' },
    { number: '3+', label: 'Years Experience' },
    { number: '100%', label: 'Client Satisfaction' },
    { number: '24/7', label: 'Support Available' }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            About <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a passionate full-stack developer with a keen eye for design and a love for clean, efficient code. 
              My journey in web development started with curiosity and has evolved into a professional pursuit of creating 
              exceptional digital experiences.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll find me 
              exploring new technologies, contributing to open-source projects, or mentoring aspiring developers.
            </p>
            
            <div className="flex flex-wrap gap-4 mt-8">
              <div className="flex items-center gap-2 text-cyan-400">
                <Code size={20} />
                <span>Clean Code</span>
              </div>
              <div className="flex items-center gap-2 text-purple-400">
                <Palette size={20} />
                <span>UI/UX Design</span>
              </div>
              <div className="flex items-center gap-2 text-pink-400">
                <Zap size={20} />
                <span>Performance</span>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="bg-slate-900/50 p-6 rounded-xl border border-slate-700/50 text-center hover:border-cyan-500/50 transition-all duration-300">
                <div className="text-3xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
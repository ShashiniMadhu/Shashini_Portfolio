import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Github, ExternalLink, Code, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);
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

    const section = document.getElementById('projects-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('projects-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = document.getElementById('projects-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const projects = [
    {
      id: 1,
      title: 'TripTrack',
      description: 'TripTrack — a full digital platform for highway bus travel in Sri Lanka, built to enable real-time booking, secure payments, QR tickets, and smarter travel management.',
      image: 'triptrack1.jpeg',
      tech: ['HTML', 'CSS', 'JavaScript', 'PHP','MySQL'],
      category: 'fullstack',
      github: 'https://github.com/PasandiRanga/TripTrack.git',
      live: 'https://drive.google.com/file/d/17lgkeL96AFm2_oUskU-g4s1_LsneTdPf/view?usp=sharing',
      route: '/triptrack', // Changed from 'details' to 'route'
      status: 'completed'
    },
    {
      id: 2,
      title: 'SkillMentor',
      description: 'SkillMentor-A smart classroom management system where students can schedule classrooms.',
      image: 'skillmentor1.png',
      tech: ['React', 'Java Sprinboot', 'Tailwind CSS', 'MySQL','PostgreSQL','Render','Vercel','Superbase'],
      category: 'fullstack',
      github: 'https://github.com/ShashiniMadhu/Skill-Mentor.git',
      live: 'https://drive.google.com/file/d/14MEj4qZOO26dWORV5nu2GrrP3u76BG99/view?usp=drive_link',
      route: '/skillmentor',
      status: 'completed'
    },
    {
      id: 3,
      title: 'StructuraX',
      description: 'StructuraX is a construction management system built with enabling real-time project tracking, multi-role user management, responsive interfaces.',
      image: 'structurax1.png',
      tech: ['React', 'TailwindCSS', 'Java Springboot', 'MySQL'],
      category: 'fullstack',
      github: 'https://github.com/DilshaniNK/StructureX-Frontend.git',
      live: 'https://drive.google.com/file/d/1-V0wL884xuuW2MHJ7c9_jtNj4h_ByO2o/view?usp=sharing',
      route: '/structurax',
      status: 'ongoing'
    },
    {
      id: 4,
      title: 'UniHUB',
      description: 'UniHub is a lecturer–student communication platform built with featuring query management, appointment scheduling, AI-powered paper discussions, and student productivity tools.',
      image: '/unihub1.png',
      tech: ['React', 'TailwindCSS', 'Java Springboot', 'MySQL','alwaysdata','geminai ai'],
      category: 'fullstack',
      github: 'https://github.com/Peshala84/uni-hub.git',
      live: 'https://drive.google.com/file/d/1SQ_mc_1ell6q1zyU23qjv6-ekvcpPllW/view?usp=drive_link',
      route: '/unihub',
      status: 'ongoing'
    },
    {
      id: 5,
      title: 'AI-Powered Interview Preparation App',
      description: 'An AI-powered interview preparation platform built with the MERN stack and Gemini API for intelligent Q&A generation and a seamless user experience.',
      image: 'interviewprep1.png',
      tech: ['MERN Stack'],
      category: 'fullstack',
      github: 'https://github.com/ShashiniMadhu/INTERVIEWPREPAI.git',
      live: '#',
      route: '/interview-prep',
      status: 'ongoing'
    },
    {
      id: 6,
      title: 'Email/SMS Spam Classifier',
      description: 'An ML-powered spam classifier built with featuring a Streamlit interface and cloud deployment on Render for real-time, accessible spam detection.',
      image: 'ml1.png',
      tech: ['Python', 'NLTK', 'Scikit-learn','render'],
      category: 'fullstack',
      github: 'https://github.com/ShashiniMadhu/Spam_Classifier.git',
      live: 'https://drive.google.com/file/d/1LDIMvpSNdkf2K4wZ_qbbQgeG30E-dnBl/view?usp=drive_link',
      route: '/spam-classifier',
      status: 'completed'
    }
  ];

  const filters = [
    { id: 'all', label: 'All Projects' },
    { id: 'frontend', label: 'Frontend' },
    { id: 'fullstack', label: 'Full Stack' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section id="projects-section" className="py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Enhanced background elements with mouse interaction */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-pink-950/25 via-pink-900/20 to-pink-800/15 rounded-full blur-3xl transition-all duration-700"
          style={{
            transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px) scale(${1 + mousePosition.x * 0.001})`
          }}
        />
        <div 
          className="absolute bottom-20 right-0 w-80 h-80 bg-gradient-to-tl from-pink-900/20 via-pink-800/15 to-pink-700/10 rounded-full blur-2xl transition-all duration-500"
          style={{
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px) scale(${1 + mousePosition.y * 0.0008})`
          }}
        />
      </div>

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
            <span className="text-pink-400 font-semibold tracking-wider text-sm uppercase relative">
              My Work
              <div className="absolute -bottom-1 left-0 w-full h-px bg-pink-300 animate-pulse"></div>
            </span>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-transparent via-pink-500 to-pink-600 animate-shimmer"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative">
            Featured{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-rose-400 relative inline-block animate-gradient-text">
              Projects
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-200/20 via-pink-300/30 to-rose-200/20 rounded-full animate-slide-in"></div>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Here are some of my recent projects that showcase my skills, creativity, and passion for building exceptional digital experiences
          </p>
        </div>

        {/* Enhanced Interactive Filter Tabs */}
        <div className={`flex justify-center mb-12 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="bg-gray-900/70 backdrop-blur-sm rounded-2xl p-1.5 border border-gray-800/60 shadow-xl">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 relative overflow-hidden ${
                  filter === filterItem.id
                    ? 'text-white bg-gradient-to-r from-pink-600 to-pink-700 shadow-lg transform scale-105'
                    : 'text-gray-400 hover:text-pink-300 hover:bg-gray-800/50'
                }`}
              >
                {filterItem.label}
                {filter === filterItem.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-pink-600/20 to-pink-700/20 rounded-xl animate-pulse-glow"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Enhanced Projects Grid */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-900/70 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800/60 hover:border-pink-500/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/25 cursor-default ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Enhanced Status Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border transition-all duration-300 ${
                  project.status === 'completed' 
                    ? 'bg-green-600/90 text-green-100 border-green-500/30 shadow-lg shadow-green-900/20' 
                    : 'bg-pink-600/90 text-pink-100 border-pink-500/30 shadow-lg shadow-pink-900/20'
                }`}>
                  {project.status === 'completed' ? '✓ Completed' : '⚡ Ongoing'}
                </div>
              </div>

              {/* Enhanced Project Image */}
              <div className="relative overflow-hidden h-48 bg-gray-800/50">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Enhanced Overlay with Action Buttons */}
                <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-black/30 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/btn p-4 bg-gray-800/90 backdrop-blur-sm rounded-full text-white hover:text-pink-300 hover:bg-pink-600/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    title="View Source Code"
                  >
                    <Github size={20} />
                  </a>
                  <Link
                    to={project.route}
                    className="group/btn p-4 bg-gray-800/90 backdrop-blur-sm rounded-full text-white hover:text-pink-300 hover:bg-pink-600/20 transition-all duration-300 transform hover:scale-110 shadow-lg"
                    title="View Project Details"
                  >
                    <ExternalLink size={20} />
                  </Link>
                </div>

                <div className="absolute top-4 right-4 z-20">
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition-all duration-300 transform hover:scale-125"
                    title="View Live Demo"
                  >
                    <Eye size={20} />
                  </a>
                </div>
              </div>
              
              {/* Enhanced Project Content */}
              <div className="p-6">
                {/* Title */}
                <div className="mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-300 transition-colors duration-300 line-clamp-1">
                    {project.title}
                  </h3>
                </div>

                {/* Description */}
                <p className="text-gray-400 group-hover:text-gray-300 mb-4 leading-relaxed text-sm line-clamp-3 transition-colors duration-300">
                  {project.description}
                </p>

                {/* Enhanced Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.slice(0, 4).map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/80 text-pink-300 text-xs rounded-full border border-gray-700/60 hover:border-pink-500/50 hover:bg-pink-900/20 transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 4 && (
                    <span className="px-3 py-1 bg-gray-700/50 text-gray-400 text-xs rounded-full border border-gray-600/50 cursor-default">
                      +{project.tech.length - 4} more
                    </span>
                  )}
                </div>

                {/* Enhanced Action Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800/60">
                  <div className="flex items-center gap-2 text-gray-500 text-sm">
                    <Code size={16} className="text-pink-400" />
                    <span className="capitalize font-medium">{project.category}</span>
                  </div>
                  <div className="flex gap-3">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 text-gray-400 hover:text-pink-300 hover:bg-pink-900/20 rounded-lg transition-all duration-300 group/link"
                      title="View Source"
                    >
                      <Github size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                    </a>
                    <Link
                      to={project.route}
                      className="p-2 text-gray-400 hover:text-pink-300 hover:bg-pink-900/20 rounded-lg transition-all duration-300 group/link"
                      title="Project Details"
                    >
                      <ExternalLink size={16} className="group-hover/link:scale-110 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>

              {/* Enhanced Hover Glow Effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.05) 0%, transparent 50%)`
                }}
              />
            </div>
          ))}
        </div>

        {/* Enhanced Call to Action */}
        <div className={`text-center mt-12 md:mt-16 transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <a
            href="https://github.com/ShashiniMadhu"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center space-x-3 px-8 py-4 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white rounded-xl font-semibold transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 shadow-xl hover:shadow-pink-600/30 relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-pink-800 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500"></div>
            <Github className="group-hover:rotate-12 transition-transform duration-300 relative z-10" size={20} />
            <span className="relative z-10">View All Projects on GitHub</span>
          </a>
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
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(219, 39, 119, 0.2); }
          50% { box-shadow: 0 0 15px rgba(219, 39, 119, 0.4); }
        }

        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(40px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
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
        
        .animate-pulse-glow {
          animation: pulse-glow 3s ease-in-out infinite;
        }

        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }

        .line-clamp-1 {
          display: -webkit-box;
          -webkit-line-clamp: 1;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .animate-shimmer {
            animation-duration: 2s;
          }
          
          .animate-gradient-text {
            animation-duration: 3s;
          }
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
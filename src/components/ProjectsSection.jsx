import React, { useState, useEffect } from 'react';
import { Github, ExternalLink, Code, Star, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const [hoveredProject, setHoveredProject] = useState(null);
  const [filter, setFilter] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

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
      status: 'ongoing'
    },
    {
      id: 4,
      title: 'UniHUB',
      description: 'UniHub is a lecturer–student communication platform built with featuring query management, appointment scheduling, AI-powered paper discussions, and student productivity tools.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tech: ['React', 'TailwindCSS', 'Java Springboot', 'MySQL','alwaysdata','geminai ai'],
      category: 'fullstack',
      github: 'https://github.com/Peshala84/uni-hub.git',
      live: 'https://drive.google.com/file/d/1-V0wL884xuuW2MHJ7c9_jtNj4h_ByO2o/view?usp=sharing',
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
    <section id="projects-section" className="py-20 bg-black relative overflow-hidden">
      {/* Dark pink accent elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-0 w-96 h-96 bg-pink-950/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-0 w-80 h-80 bg-pink-900/15 rounded-full blur-2xl"></div>
      </div>

      {/* Subtle grid pattern */}
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
            <div className="w-12 h-0.5 bg-pink-600"></div>
            <span className="text-pink-400 font-medium tracking-wide text-sm uppercase">My Work</span>
            <div className="w-12 h-0.5 bg-pink-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Featured{' '}
            <span className="text-pink-400">Projects</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Here are some of my recent projects that showcase my skills, creativity, and passion for building exceptional digital experiences
          </p>
        </div>

        {/* Interactive Filter Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-900/50 backdrop-blur-sm rounded-full p-1 border border-gray-800">
            {filters.map((filterItem) => (
              <button
                key={filterItem.id}
                onClick={() => setFilter(filterItem.id)}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 relative ${
                  filter === filterItem.id
                    ? 'text-white bg-pink-600 shadow-lg'
                    : 'text-gray-400 hover:text-pink-400 hover:bg-gray-800/50'
                }`}
              >
                {filterItem.label}
                {filter === filterItem.id && (
                  <div className="absolute inset-0 bg-pink-600 rounded-full -z-10"></div>
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group relative bg-gray-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-600/50 transition-all duration-500 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink-900/20 cursor-pointer ${
                isVisible ? 'animate-fade-in-up' : 'opacity-0'
              }`}
              style={{ 
                animationDelay: `${index * 150}ms`,
                animationFillMode: 'forwards'
              }}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              {/* Status Badge */}
              <div className="absolute top-4 left-4 z-20">
                <div className={`px-3 py-1 rounded-full text-xs font-semibold ${
                  project.status === 'completed' 
                    ? 'bg-green-600/90 text-green-100' 
                    : 'bg-pink-600/90 text-pink-100'
                }`}>
                  {project.status === 'completed' ? 'Completed' : 'Ongoing'}
                </div>
              </div>

              {/* Project Image */}
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Overlay with Action Buttons */}
                <div className={`absolute inset-0 bg-black/80 flex items-center justify-center gap-4 transition-all duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.github}
                    className="group/btn p-4 bg-gray-800/90 backdrop-blur-sm rounded-full text-white hover:text-pink-400 hover:bg-pink-600/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="group/btn p-4 bg-gray-800/90 backdrop-blur-sm rounded-full text-white hover:text-pink-400 hover:bg-pink-600/20 transition-all duration-300 transform hover:scale-110"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>

                {/* Floating Action Button */}
                <div className="absolute top-4 right-4">
                  <button className="p-2 bg-pink-600/90 backdrop-blur-sm rounded-full text-white hover:bg-pink-700 transition-all duration-300 transform hover:scale-110">
                    <a
                      href={project.live}
                      className="group/btn p-4 bg-gray-800/90 backdrop-blur-sm rounded-full text-white hover:text-pink-400 hover:bg-pink-600/20 transition-all duration-300 transform hover:scale-110"
                    >
                      <Eye size={16} />
                    </a>
                  </button>
                </div>
              </div>
              
              {/* Project Content */}
              <div className="p-6">
                {/* Title and Stats */}
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-xl font-bold text-white group-hover:text-pink-400 transition-colors duration-300">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-gray-400">
                    <Star size={16} className="fill-current text-pink-500" />
                    <span className="text-sm">{project.stars}</span>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-400 mb-4 leading-relaxed text-sm">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-800/70 text-pink-300 text-xs rounded-full border border-gray-700 hover:border-pink-600/50 hover:bg-pink-900/20 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Bar */}
                <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                  <div className="flex items-center gap-4 text-gray-500 text-sm">
                    <Code size={16} />
                    <span>{project.category}</span>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="p-2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
                    >
                      <Github size={16} />
                    </a>
                    <a
                      href={project.live}
                      className="p-2 text-gray-400 hover:text-pink-400 transition-colors duration-300"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-pink-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <button className="group px-8 py-4 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transform hover:scale-105 transition-all duration-300 shadow-xl hover:shadow-pink-600/30 flex items-center space-x-2 mx-auto relative overflow-hidden">
            <div className="absolute inset-0 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
            <Github className="group-hover:rotate-12 transition-transform duration-300 relative z-10" size={20} />
            <span className="relative z-10">View All Projects on GitHub</span>
          </button>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-pink-700 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-10 w-1.5 h-1.5 bg-pink-800 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1 h-1 bg-pink-600 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>

      <style jsx>{`
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
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out;
        }
      `}</style>
    </section>
  );
};

export default ProjectsSection;
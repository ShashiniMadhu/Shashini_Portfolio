import React from 'react';
import { Code, Palette, Zap , Github , ExternalLink} from 'lucide-react';
import { useState } from 'react';

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with React, Node.js, and Stripe integration.',
      image: 'https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=500&h=300&fit=crop',
      tech: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      github: '#',
      live: '#'
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team features.',
      image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop',
      tech: ['React', 'Firebase', 'Tailwind CSS', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with forecasts, maps, and location-based recommendations.',
      image: 'https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop',
      tech: ['React', 'OpenWeather API', 'Chart.js', 'Geolocation'],
      github: '#',
      live: '#'
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website with modern animations and smooth scrolling.',
      image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=500&h=300&fit=crop',
      tech: ['React', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
      github: '#',
      live: '#'
    },
    {
      id: 5,
      title: 'Social Media App',
      description: 'A social media platform with posts, comments, real-time chat, and user profiles.',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=500&h=300&fit=crop',
      tech: ['React', 'Express', 'PostgreSQL', 'Socket.io'],
      github: '#',
      live: '#'
    },
    {
      id: 6,
      title: 'Cryptocurrency Tracker',
      description: 'A real-time cryptocurrency tracker with charts, news, and portfolio management.',
      image: 'https://images.unsplash.com/photo-1518544866-3c6b77c4e1c5?w=500&h=300&fit=crop',
      tech: ['React', 'CoinGecko API', 'Chart.js', 'Local Storage'],
      github: '#',
      live: '#'
    }
  ];

  const [hoveredProject, setHoveredProject] = useState(null);

  return (
    <section className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            My <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-400 to-purple-500 mx-auto mb-6"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and passion for development
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-slate-800/50 rounded-xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 group"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className={`absolute inset-0 bg-slate-900/80 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                  hoveredProject === project.id ? 'opacity-100' : 'opacity-0'
                }`}>
                  <a
                    href={project.github}
                    className="p-3 bg-slate-800/90 rounded-full text-white hover:text-cyan-400 transition-colors"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.live}
                    className="p-3 bg-slate-800/90 rounded-full text-white hover:text-cyan-400 transition-colors"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-slate-700/50 text-cyan-400 text-sm rounded-full border border-slate-600/50"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
import React, { useState } from 'react';
import { ExternalLink, Github, Play, Download, User, Calendar, BookOpen, Shield, Database, Globe, Code, Users, CheckCircle, Clock } from 'lucide-react';

export default function SkillMentor() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    '/skillmentor1.png',
    '/skillmentor2.png', 
    '/skillmentor3.png',
    '/skillmentor4.png',
    '/skillmentor5.png',
    '/skillmentor6.png',
    '/skillmentor7.png',
    '/skillmentor8.png',
    '/skillmentor9.png'
  ];

  const technologies = [
    { name: 'Java Spring Boot', color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'Hibernate', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'React', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'Tailwind CSS', color: 'text-cyan-400', bg: 'bg-cyan-400/10' },
    { name: 'MySQL', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'PostgreSQL', color: 'text-indigo-400', bg: 'bg-indigo-400/10' },
    { name: 'Supabase', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { name: 'Render', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { name: 'Vercel', color: 'text-gray-300', bg: 'bg-gray-400/10' }
  ];

  const features = [
    {
      icon: BookOpen,
      title: 'Class Management',
      description: 'Admin creates and manages tutoring classes for different subjects'
    },
    {
      icon: Users,
      title: 'Mentor Assignment',
      description: 'Flexible mentor assignment system supporting multiple classes per mentor'
    },
    {
      icon: Calendar,
      title: 'Session Booking',
      description: 'Students can book sessions with preferred date and time selection'
    },
    {
      icon: Shield,
      title: 'Clerk Authentication',
      description: 'Secure student authentication using Clerk integration'
    },
    {
      icon: Database,
      title: 'Payment Verification',
      description: 'Bank slip upload system for payment confirmation'
    },
    {
      icon: CheckCircle,
      title: 'Status Tracking',
      description: 'Complete booking lifecycle management from pending to completed'
    }
  ];

  const systemRoles = [
    {
      role: 'Admin',
      color: 'text-red-400',
      bg: 'bg-red-900/20',
      border: 'border-red-800/30',
      responsibilities: [
        'Creates tutoring classes for different subjects',
        'Creates and manages mentor profiles',
        'Assigns mentors to multiple classes',
        'Reviews and approves student booking requests',
        'Verifies payment slips uploaded by students',
        'Marks sessions as completed after delivery',
        'Monitors overall platform operations'
      ]
    },
    {
      role: 'Student',
      color: 'text-blue-400',
      bg: 'bg-blue-900/20',
      border: 'border-blue-800/30',
      responsibilities: [
        'Authenticates via Clerk login system',
        'Browses available classes with mentor details',
        'Books sessions with preferred date and time',
        'Uploads bank transfer slips as payment proof',
        'Views booking history and status updates',
        'Accesses personal dashboard for session tracking'
      ]
    }
  ];

  const bookingStatuses = [
    {
      status: 'PENDING',
      color: 'text-yellow-400',
      bg: 'bg-yellow-900/20',
      description: 'Initial status when student submits booking request'
    },
    {
      status: 'ACCEPTED',
      color: 'text-green-400',
      bg: 'bg-green-900/20',
      description: 'Admin approves booking after payment verification'
    },
    {
      status: 'COMPLETED',
      color: 'text-blue-400',
      bg: 'bg-blue-900/20',
      description: 'Session delivered and marked complete by admin'
    }
  ];

  const entities = [
    {
      name: 'Classroom',
      description: 'Represents tutoring subjects (e.g., A/L Physics, A/L Chemistry)',
      fields: ['Class ID', 'Subject Name', 'Description', 'Created Date']
    },
    {
      name: 'Mentor',
      description: 'Tutor profiles created by admin and assigned to classes',
      fields: ['Mentor ID', 'Name', 'Expertise', 'Assigned Classes']
    },
    {
      name: 'Session',
      description: 'Booking requests with scheduling and payment information',
      fields: ['Session ID', 'Date', 'Time', 'Status', 'Payment Slip', 'Student', 'Class', 'Mentor']
    },
    {
      name: 'Student',
      description: 'Authenticated users who can book and manage sessions',
      fields: ['Student ID', 'Clerk ID', 'Name', 'Email', 'Booking History']
    }
  ];

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % projectImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + projectImages.length) % projectImages.length);
  };

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-purple-900/35 via-purple-800/25 to-purple-700/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-purple-950/30 via-purple-900/20 to-purple-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-purple-600/20 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-purple-700/15 rounded-full blur-xl"></div>
        <div 
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.12) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.12) 1px, transparent 1px)
            `,
            backgroundSize: '90px 90px',
            animation: 'gridMove 40s linear infinite'
          }}
        />
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-black/70 backdrop-blur-xl border-b border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-purple-400 transition-all duration-400"
          >
            <div className="relative p-2 rounded-xl border border-gray-700/50 group-hover:border-purple-500/50 bg-gray-900/50 group-hover:bg-purple-900/20 transition-all duration-400">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </div>
            <span className="font-semibold text-lg tracking-wide">Back to Portfolio</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="pt-20 relative z-10">
        <div className="max-w-7xl mx-auto px-4 py-12">
          
          {/* Hero Section */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-900/20 px-4 py-2 rounded-full border border-purple-800/30 mb-6">
              <User className="w-4 h-4 text-purple-400" />
              <span className="text-purple-300 text-sm font-medium">Solo Project · Spring Boot Bootcamp</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-purple-400 via-purple-300 to-purple-500 bg-clip-text text-transparent mb-6">
              SkillMentor
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Peer Tutoring Platform - MVP Version
            </p>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              A comprehensive 1-on-1 tutoring marketplace built with Spring Boot backend, featuring session booking, 
              payment verification, and administrative management for educational institutions.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://drive.google.com/file/d/14MEj4qZOO26dWORV5nu2GrrP3u76BG99/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Demo Video</span>
              </a>
              
              <a 
                href="https://github.com/ShashiniMadhu/Skill-Mentor.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-purple-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
              </a>
              
              <a 
                href="https://skill-mentor-k7gx.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-purple-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Database className="w-5 h-5" />
                <span>Live Backend</span>
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>
              
              <a 
                href="https://skillmentoe.vercel.app/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-purple-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Globe className="w-5 h-5" />
                <span>Live Demo</span>
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-2">
              {technologies.map((tech, index) => (
                <div key={index} className={`${tech.bg} ${tech.color} px-3 py-1.5 rounded-full border border-current border-opacity-20 font-medium text-sm`}>
                  {tech.name}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-900/50 p-2 rounded-2xl border border-gray-800/50 backdrop-blur-sm">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'gallery', label: 'Gallery' },
              { id: 'features', label: 'Features' },
              { id: 'roles', label: 'System Roles' },
              { id: 'architecture', label: 'Architecture' },
              { id: 'technical', label: 'Technical Details' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-purple-600 text-white shadow-lg shadow-purple-600/25'
                    : 'text-gray-400 hover:text-purple-400 hover:bg-gray-800/50'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="min-h-[600px]">
            
            {/* Overview Tab */}
            {activeTab === 'overview' && (
              <div className="space-y-12">
                <div className="grid md:grid-cols-2 gap-12">
                  <div className="space-y-8">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-purple-400 mb-6">Project Overview</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        SkillMentor is an MVP tutoring platform built as part of the Spring Boot Backend Engineering program. 
                        It's designed to facilitate 1-on-1 tutoring sessions between students and assigned mentors through 
                        a streamlined booking system.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        The platform features admin-controlled class and mentor setup, student-side session booking, 
                        and payment verification through bank slip uploads. Built with modern technologies and deployed 
                        on cloud platforms for real-world accessibility.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-purple-400 mb-6">Key Learning Objectives</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">REST API development with Spring Boot</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">Entity relationships with Hibernate ORM</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">Session management and state transitions</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">User authentication and authorization</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-purple-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">Full-stack deployment and integration</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Gallery Tab */}
            {activeTab === 'gallery' && (
              <div className="space-y-8">
                <div className="text-center">
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">Project Gallery</h3>
                  <p className="text-gray-400 text-lg">Screenshots and interface designs from the SkillMentor platform</p>
                </div>
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <div className="relative rounded-xl overflow-hidden bg-gray-800 min-h-[400px] max-h-[600px]">
                    <img
                      src={projectImages[currentImageIndex]}
                      alt={`SkillMentor Screenshot ${currentImageIndex + 1}`}
                      className="w-full h-full object-contain bg-gray-800"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextSibling.style.display = 'flex';
                      }}
                    />
                    <div className="absolute inset-0 bg-gray-700 hidden items-center justify-center text-gray-400">
                      <div className="text-center">
                        <Code className="w-16 h-16 mx-auto mb-4 opacity-50" />
                        <p>Screenshot {currentImageIndex + 1}</p>
                      </div>
                    </div>
                  </div>
                  
                  {/* Navigation Arrows */}
                  <button
                    onClick={prevImage}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                  </button>
                  
                  <button
                    onClick={nextImage}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 p-3 rounded-full transition-all duration-300"
                  >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </button>
                  
                  {/* Dots Indicator */}
                  <div className="flex justify-center space-x-2 mt-6">
                    {projectImages.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentImageIndex(index)}
                        className={`w-3 h-3 rounded-full transition-all duration-300 ${
                          index === currentImageIndex ? 'bg-purple-400' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">Core Features</h3>
                  <p className="text-gray-400 text-lg">Essential functionality for tutoring platform management</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300 group">
                      <div className="mb-4">
                        <feature.icon className="w-12 h-12 text-purple-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Roles Tab */}
            {activeTab === 'roles' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">System Roles & Responsibilities</h3>
                  <p className="text-gray-400 text-lg">Detailed breakdown of user roles and their capabilities</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {systemRoles.map((roleData, index) => (
                    <div key={index} className={`${roleData.bg} backdrop-blur-sm border ${roleData.border} rounded-2xl p-8`}>
                      <h4 className={`text-2xl font-bold ${roleData.color} mb-6 flex items-center`}>
                        <span className={`w-3 h-3 ${roleData.color.replace('text-', 'bg-')} rounded-full mr-3`}></span>
                        {roleData.role}
                      </h4>
                      <div className="space-y-3">
                        {roleData.responsibilities.map((responsibility, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <div className={`w-2 h-2 ${roleData.color.replace('text-', 'bg-')} rounded-full mt-2 flex-shrink-0`}></div>
                            <p className="text-gray-300 text-sm">{responsibility}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Architecture Tab */}
            {activeTab === 'architecture' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">System Architecture</h3>
                  <p className="text-gray-400 text-lg">Core entities and system design</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {entities.map((entity, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-purple-500/30 transition-all duration-300">
                      <h4 className="text-xl font-bold text-purple-400 mb-4">{entity.name}</h4>
                      <p className="text-gray-300 mb-4 text-sm">{entity.description}</p>
                      <div className="space-y-2">
                        <h5 className="font-semibold text-gray-200 text-sm">Key Fields:</h5>
                        <div className="flex flex-wrap gap-2">
                          {entity.fields.map((field, idx) => (
                            <span key={idx} className="bg-gray-800/50 px-2 py-1 rounded text-xs text-gray-400 border border-gray-700/50">
                              {field}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-purple-400 mb-6">System Constraints & Assumptions</h4>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <h5 className="font-semibold text-white mb-4">MVP Constraints:</h5>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• No mentor login interface</li>
                        <li>• Admin operates via API calls only</li>
                        <li>• Manual payment processing</li>
                        <li>• No real-time notifications</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="font-semibold text-white mb-4">Key Assumptions:</h5>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• One mentor can teach multiple classes</li>
                        <li>• Each booking links to one class/mentor</li>
                        <li>• Payment handled via bank transfer</li>
                        <li>• Admin coordinates all operations</li>
                        <li>• Students use Clerk authentication</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Technical Tab */}
            {activeTab === 'technical' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-purple-400 mb-4">Technical Implementation</h3>
                  <p className="text-gray-400 text-lg">Full-stack architecture and deployment details</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-purple-400 mb-6">Backend Stack</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-green-900/20 rounded-lg border border-green-800/30">
                        <span className="font-semibold text-green-400">Framework</span>
                        <span className="text-gray-300">Java Spring Boot</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/30">
                        <span className="font-semibold text-yellow-400">ORM</span>
                        <span className="text-gray-300">Hibernate</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-orange-900/20 rounded-lg border border-orange-800/30">
                        <span className="font-semibold text-orange-400">Database (Dev)</span>
                        <span className="text-gray-300">MySQL</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-indigo-900/20 rounded-lg border border-indigo-800/30">
                        <span className="font-semibold text-indigo-400">Database (Prod)</span>
                        <span className="text-gray-300">PostgreSQL</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
                        <span className="font-semibold text-purple-400">Deployment</span>
                        <span className="text-gray-300">Render</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-purple-400 mb-6">Frontend Stack</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
                        <span className="font-semibold text-blue-400">Framework</span>
                        <span className="text-gray-300">React</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-cyan-900/20 rounded-lg border border-cyan-800/30">
                        <span className="font-semibold text-cyan-400">Styling</span>
                        <span className="text-gray-300">Tailwind CSS</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-emerald-900/20 rounded-lg border border-emerald-800/30">
                        <span className="font-semibold text-emerald-400">Authentication</span>
                        <span className="text-gray-300">Clerk</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-emerald-900/20 rounded-lg border border-emerald-800/30">
                        <span className="font-semibold text-emerald-400">Database Service</span>
                        <span className="text-gray-300">Supabase</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-gray-700/20 rounded-lg border border-gray-600/30">
                        <span className="font-semibold text-gray-300">Deployment</span>
                        <span className="text-gray-300">Vercel</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-purple-400 mb-6">Deployment Architecture</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                      <Database className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-white mb-2">Backend API</h5>
                      <p className="text-gray-400 text-sm mb-2">Spring Boot Application</p>
                      <p className="text-purple-400 text-sm">Deployed on Render</p>
                    </div>
                    <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                      <Globe className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-white mb-2">Frontend UI</h5>
                      <p className="text-gray-400 text-sm mb-2">React Application</p>
                      <p className="text-blue-400 text-sm">Deployed on Vercel</p>
                    </div>
                    <div className="text-center p-6 bg-gray-800/50 rounded-xl border border-gray-700/50">
                      <Database className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-white mb-2">Database</h5>
                      <p className="text-gray-400 text-sm mb-2">PostgreSQL Database</p>
                      <p className="text-emerald-400 text-sm">Hosted on Supabase</p>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-purple-400 mb-6">Project Links & Resources</h4>
                  <p className="text-gray-300 mb-6">
                    Access the live application, source code, and documentation for this Spring Boot tutoring platform.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="https://skill-mentor-k7gx.onrender.com" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      <Database className="w-5 h-5" />
                      <span>Backend API</span>
                      <ExternalLink className="w-4 h-4 opacity-60" />
                    </a>
                    <a 
                      href="https://skillmentoe.vercel.app/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 bg-blue-600 hover:bg-blue-500 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                    >
                      <Globe className="w-5 h-5" />
                      <span>Live Demo</span>
                      <ExternalLink className="w-4 h-4 opacity-60" />
                    </a>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="fixed bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500/30 to-transparent"></div>

      {/* CSS Animations */}
      <style jsx>{`
        @keyframes gridMove {
          0% { background-position: 0 0; }
          100% { background-position: 90px 90px; }
        }
      `}</style>
    </div>
  );
}
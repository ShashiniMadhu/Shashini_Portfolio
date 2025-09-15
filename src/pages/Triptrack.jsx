import React, { useState } from 'react';
import { ExternalLink, Github, Play, Download, Users, Calendar, Code, Database, Globe, Smartphone, Shield, Bell } from 'lucide-react';

export default function Triptrack() {
  const [activeTab, setActiveTab] = useState('overview');
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const projectImages = [
    '/triptrack1.jpeg',
    '/triptrack2.jpeg', 
    '/triptrack3.jpeg',
    '/triptrack4.jpeg',
    '/triptrack5.jpeg',
    '/triptrack6.jpeg',
    '/triptrack7.jpeg',
    '/triptrack8.jpeg'
  ];

  const technologies = [
    { name: 'HTML5', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'CSS3', color: 'text-blue-400', bg: 'bg-blue-400/10' },
    { name: 'PHP', color: 'text-purple-400', bg: 'bg-purple-400/10' },
    { name: 'MySQL', color: 'text-blue-300', bg: 'bg-blue-300/10' }
  ];

  const features = [
    {
      icon: Globe,
      title: 'Real-time Booking',
      description: 'Web-based reservation system with immediate confirmation'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'SMS and email alerts for schedule changes and delays'
    },
    {
      icon: Users,
      title: 'Role-based Access',
      description: 'Different interfaces for passengers, drivers, owners, and admins'
    },
    {
      icon: Database,
      title: 'Fleet Management',
      description: 'Centralized system for managing buses, routes, and schedules'
    },
    {
      icon: Shield,
      title: 'Secure Payments',
      description: 'Multiple payment methods with secure transaction processing'
    },
    {
      icon: Smartphone,
      title: 'User-friendly Interface',
      description: 'Intuitive design accessible to all user types'
    }
  ];

  const challenges = [
    'Manual and inefficient booking processes',
    'Unreliable and outdated schedule information',
    'Lack of real-time updates and alerts',
    'Communication gaps between passengers and operators',
    'No digital tools for route comparison',
    'Inefficient fleet and schedule management'
  ];

  const solutions = [
    'Automated online booking with real-time availability',
    'Centralized database with accurate, up-to-date information',
    'Instant notifications via SMS and email',
    'Integrated communication channels',
    'Advanced route comparison and cost analysis tools',
    'Digital fleet management dashboard'
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
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-teal-900/35 via-teal-800/25 to-teal-700/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-teal-950/30 via-teal-900/20 to-teal-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-teal-600/20 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-teal-700/15 rounded-full blur-xl"></div>
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
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-teal-400 transition-all duration-400"
            style={{ color: 'rgb(156 163 175)', '--tw-text-opacity': '1' }}
            onMouseEnter={(e) => e.target.style.color = '#00897b'}
            onMouseLeave={(e) => e.target.style.color = 'rgb(156 163 175)'}
          >
            <div 
              className="relative p-2 rounded-xl border border-gray-700/50 group-hover:border-teal-500/50 bg-gray-900/50 group-hover:bg-teal-900/20 transition-all duration-400"
              style={{ borderColor: 'rgba(55, 65, 81, 0.5)' }}
              onMouseEnter={(e) => {
                e.target.style.borderColor = '#00897b80';
                e.target.style.backgroundColor = 'rgba(17, 94, 89, 0.2)';
              }}
              onMouseLeave={(e) => {
                e.target.style.borderColor = 'rgba(55, 65, 81, 0.5)';
                e.target.style.backgroundColor = 'rgba(17, 24, 39, 0.5)';
              }}
            >
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
            <div 
              className="inline-flex items-center space-x-2 bg-teal-900/20 px-4 py-2 rounded-full border border-teal-800/30 mb-6"
              style={{ backgroundColor: 'rgba(17, 94, 89, 0.2)', borderColor: 'rgba(21, 94, 89, 0.3)' }}
            >
              <Calendar className="w-4 h-4" style={{ color: '#00897b' }} />
              <span className="text-sm font-medium" style={{ color: '#4fb3ad' }}>Second Year Group Project</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{ 
              background: 'linear-gradient(135deg, #4fb3ad, #00897b, #26a69a)', 
              backgroundClip: 'text', 
              WebkitBackgroundClip: 'text', 
              color: 'transparent' 
            }}>
              TripTrack
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Highway Bus Management and Booking System
            </p>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              A comprehensive solution revolutionizing long-distance bus transportation in Sri Lanka through 
              automated booking, real-time updates, and centralized management.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://drive.google.com/file/d/17lgkeL96AFm2_oUskU-g4s1_LsneTdPf/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
                style={{ 
                  background: 'linear-gradient(135deg, #00897b, #26a69a)',
                  color: 'white'
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #26a69a, #4fb3ad)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = 'linear-gradient(135deg, #00897b, #26a69a)';
                }}
              >
                <Play className="w-5 h-5" />
                <span>Demo Video</span>
              </a>
              
              <a 
                href="https://github.com/PasandiRanga/TripTrack.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                style={{ borderColor: 'rgb(75, 85, 99)' }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#00897b80';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgb(75, 85, 99)';
                }}
              >
                <Github className="w-5 h-5" />
                <span>GitHub Repository</span>
              </a>
              
              <a 
                href="/triptrack_report.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                style={{ borderColor: 'rgb(75, 85, 99)' }}
                onMouseEnter={(e) => {
                  e.target.style.borderColor = '#00897b80';
                }}
                onMouseLeave={(e) => {
                  e.target.style.borderColor = 'rgb(75, 85, 99)';
                }}
              >
                <Download className="w-5 h-5" />
                <span>Project Report</span>
                <ExternalLink className="w-4 h-4 opacity-60" />
              </a>
            </div>

            {/* Tech Stack */}
            <div className="flex flex-wrap justify-center gap-3">
              {technologies.map((tech, index) => (
                <div key={index} className={`${tech.bg} ${tech.color} px-4 py-2 rounded-full border border-current border-opacity-20 font-medium`}>
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
              { id: 'challenges', label: 'Problem & Solution' },
              { id: 'technical', label: 'Technical Details' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'shadow-lg'  // <- Remove text-white from here
                    : 'text-gray-400 hover:bg-gray-800/50'
                }`}
                style={activeTab === tab.id ? { 
                  backgroundColor: '#00897b',
                  boxShadow: '0 10px 25px -5px rgba(0, 137, 123, 0.25)',
                  color: 'white'  // <- Add this line for white text
                } : {}}
                onMouseEnter={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.color = '#00897b';
                  }
                }}
                onMouseLeave={(e) => {
                  if (activeTab !== tab.id) {
                    e.target.style.color = 'rgb(156 163 175)';
                  }
                }}
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
                      <h3 className="text-2xl font-bold mb-6" style={{ color: '#00897b' }}>Project Overview</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        TripTrack addresses the inefficiencies in Sri Lanka's long-distance bus booking system. 
                        The current manual process relies on phone calls and office visits, leading to errors, 
                        unavailable seats, and poor communication.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        Our solution provides a centralized, automated platform with real-time updates, 
                        accurate schedules, and streamlined booking processes for all stakeholders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold mb-6" style={{ color: '#00897b' }}>Project Goals</h3>
                      <div className="space-y-4">
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00897b' }}></div>
                          <p className="text-gray-300">Provide easy web-based booking with real-time confirmation</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00897b' }}></div>
                          <p className="text-gray-300">Enable centralized fleet and schedule management</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00897b' }}></div>
                          <p className="text-gray-300">Implement role-based access for different user types</p>
                        </div>
                        <div className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#00897b' }}></div>
                          <p className="text-gray-300">Ensure security and privacy with encrypted transactions</p>
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
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#00897b' }}>Project Gallery</h3>
                  <p className="text-gray-400 text-lg">Screenshots and interface designs from the TripTrack system</p>
                </div>
                
                <div className="relative bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <div className="relative rounded-xl overflow-hidden bg-gray-800 min-h-[400px] max-h-[600px]">
                    <img
                      src={projectImages[currentImageIndex]}
                      alt={`TripTrack Screenshot ${currentImageIndex + 1}`}
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
                          index === currentImageIndex ? 'hover:bg-gray-500' : 'bg-gray-600 hover:bg-gray-500'
                        }`}
                        style={index === currentImageIndex ? { backgroundColor: '#00897b' } : {}}
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
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#00897b' }}>Key Features</h3>
                  <p className="text-gray-400 text-lg">Comprehensive functionality designed for all stakeholders</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div 
                      key={index} 
                      className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 transition-all duration-300 group hover:scale-105"
                      style={{ borderColor: 'rgba(31, 41, 55, 0.5)' }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = '#00897b50';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'rgba(31, 41, 55, 0.5)';
                      }}
                    >
                      <div className="mb-4">
                        <feature.icon 
                          className="w-12 h-12 group-hover:scale-110 transition-transform duration-300" 
                          style={{ color: '#00897b' }}
                        />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Challenges Tab */}
            {activeTab === 'challenges' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#00897b' }}>Problem & Solution</h3>
                  <p className="text-gray-400 text-lg">Addressing real-world challenges in bus transportation</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-red-400 mb-6 flex items-center">
                      <span className="w-3 h-3 bg-red-400 rounded-full mr-3"></span>
                      Current Challenges
                    </h4>
                    <div className="space-y-4">
                      {challenges.map((challenge, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div 
                    className="backdrop-blur-sm border rounded-2xl p-8"
                    style={{ 
                      backgroundColor: 'rgba(17, 94, 89, 0.2)', 
                      borderColor: 'rgba(21, 94, 89, 0.3)' 
                    }}
                  >
                    <h4 className="text-2xl font-bold mb-6 flex items-center" style={{ color: '#26a69a' }}>
                      <span className="w-3 h-3 rounded-full mr-3" style={{ backgroundColor: '#26a69a' }}></span>
                      Our Solutions
                    </h4>
                    <div className="space-y-4">
                      {solutions.map((solution, index) => (
                        <div key={index} className="flex items-start space-x-3">
                          <div className="w-2 h-2 rounded-full mt-2 flex-shrink-0" style={{ backgroundColor: '#26a69a' }}></div>
                          <p className="text-gray-300">{solution}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Technical Tab */}
            {activeTab === 'technical' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold mb-4" style={{ color: '#00897b' }}>Technical Implementation</h3>
                  <p className="text-gray-400 text-lg">Architecture, technologies, and development approach</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-6" style={{ color: '#00897b' }}>Technology Stack</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-orange-900/20 rounded-lg border border-orange-800/30">
                        <span className="font-semibold text-orange-400">Frontend</span>
                        <span className="text-gray-300">HTML5, CSS3</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-purple-900/20 rounded-lg border border-purple-800/30">
                        <span className="font-semibold text-purple-400">Backend</span>
                        <span className="text-gray-300">PHP</span>
                      </div>
                      <div className="flex items-center justify-between p-4 bg-blue-900/20 rounded-lg border border-blue-800/30">
                        <span className="font-semibold text-blue-400">Database</span>
                        <span className="text-gray-300">MySQL</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold mb-6" style={{ color: '#00897b' }}>User Roles</h4>
                    <div className="space-y-4">
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h5 className="font-semibold text-white mb-2">Passengers</h5>
                        <p className="text-gray-400 text-sm">Booking tickets, managing travel plans, viewing schedules</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h5 className="font-semibold text-white mb-2">Conductors/Drivers</h5>
                        <p className="text-gray-400 text-sm">Ticket verification, schedule management</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h5 className="font-semibold text-white mb-2">Bus Owners</h5>
                        <p className="text-gray-400 text-sm">Fleet management, performance tracking</p>
                      </div>
                      <div className="p-4 bg-gray-800/50 rounded-lg border border-gray-700/50">
                        <h5 className="font-semibold text-white mb-2">System Admins</h5>
                        <p className="text-gray-400 text-sm">Overall system management, user account control</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold mb-6" style={{ color: '#00897b' }}>Project Resources</h4>
                  <p className="text-gray-300 mb-6">
                    The complete project documentation includes feasibility studies, UML diagrams, test cases, 
                    and implementation details. All technical specifications and design decisions are thoroughly documented.
                  </p>
                  <div className="flex flex-wrap gap-4">
                    <a 
                      href="/triptrack_report.pdf" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
                      style={{ 
                        backgroundColor: '#00897b',
                        color: 'white'
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.backgroundColor = '#26a69a';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.backgroundColor = '#00897b';
                      }}
                    >
                      <Download className="w-5 h-5" />
                      <span>Download Full Report</span>
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
      <div 
        className="fixed bottom-0 left-0 right-0 h-px"
        style={{ 
          background: 'linear-gradient(90deg, transparent, rgba(0, 137, 123, 0.3), transparent)' 
        }}
      ></div>

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
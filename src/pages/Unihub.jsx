import React, { useState } from 'react';
import { ExternalLink, Github, Play, Download, MessageSquare, Calendar, Users, Shield, Database, Globe, Code, CheckCircle, Clock, FileText, Bell, Star } from 'lucide-react';

export default function UniHUB() {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: 'React.js', color: 'text-emerald-400', bg: 'bg-emerald-400/10' },
    { name: 'Spring Boot', color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'MySQL', color: 'text-teal-400', bg: 'bg-teal-400/10' },
    { name: 'Tailwind CSS', color: 'text-emerald-300', bg: 'bg-emerald-300/10' },
    { name: 'WebSocket', color: 'text-green-300', bg: 'bg-green-300/10' },
    { name: 'RESTful APIs', color: 'text-teal-300', bg: 'bg-teal-300/10' }
  ];

  const features = [
    {
      icon: MessageSquare,
      title: 'Query Ticketing System',
      description: 'Categorized query submission with priority-based responses and status tracking'
    },
    {
      icon: Calendar,
      title: 'Appointment Scheduling',
      description: 'Built-in calendar system for student-lecturer meeting coordination'
    },
    {
      icon: Bell,
      title: 'Smart Notifications',
      description: 'Urgency-based notification system to prevent overload while ensuring critical communications'
    },
    {
      icon: Users,
      title: 'Broadcast Announcements',
      description: 'Targeted messaging system with priority tagging and rich content support'
    },
    {
      icon: Star,
      title: 'Feedback System',
      description: 'Emoji-based satisfaction ratings for continuous improvement insights'
    },
    {
      icon: Globe,
      title: 'Dynamic Channels',
      description: 'Auto-created channels for subjects, assignments, and collaborative learning'
    }
  ];

  const problems = [
    {
      title: 'Email Limitations',
      description: 'Poor structure, delayed responses, fragmented conversations, lack of prioritization'
    },
    {
      title: 'LMS Deficiencies',
      description: 'Focus on content delivery over communication, clunky messaging systems'
    },
    {
      title: 'Communication Fragmentation',
      description: 'Multiple platforms creating confusion and missed communications'
    },
    {
      title: 'Student Barriers',
      description: 'Accessibility issues, communication anxiety, time-sensitive problems'
    },
    {
      title: 'Lecturer Challenges',
      description: 'Volume management, repetitive queries, context loss, work-life balance'
    }
  ];

  const implementation = [
    {
      status: 'implemented',
      title: 'Query Categorization & Ticketing',
      description: 'Students submit categorized queries that become trackable tickets with priority levels'
    },
    {
      status: 'implemented',
      title: 'Appointment Scheduling',
      description: 'Visual calendar with time slot booking system for student-lecturer meetings'
    },
    {
      status: 'implemented',
      title: 'Smart Notification System',
      description: 'Urgency-based alerts with customizable preferences to prevent notification overload'
    },
    {
      status: 'implemented',
      title: 'Broadcast Announcements',
      description: 'Priority-tagged messaging system with rich content and selective targeting'
    },
    {
      status: 'implemented',
      title: 'Feedback System',
      description: 'Emoji-based satisfaction ratings providing insights into response effectiveness'
    },
    {
      status: 'pending',
      title: 'Peer Learning Integration',
      description: 'Student-to-student query responses within the ticketing system for collaborative learning'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-emerald-900/30 via-green-800/20 to-teal-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-green-950/25 via-emerald-900/15 to-teal-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-emerald-600/15 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-green-700/10 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-all duration-400"
          >
            <div className="relative p-2 rounded-xl border border-gray-600/50 group-hover:border-emerald-500/50 bg-gray-800/50 group-hover:bg-emerald-900/20 transition-all duration-400">
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
            <div className="inline-flex items-center space-x-2 bg-emerald-900/20 px-4 py-2 rounded-full border border-emerald-800/30 mb-6">
              <MessageSquare className="w-4 h-4 text-emerald-400" />
              <span className="text-emerald-300 text-sm font-medium">Communication Platform · Full Stack Project</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-emerald-400 via-green-300 to-teal-400 bg-clip-text text-transparent mb-6">
              UniHUB
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              University Communication Platform for Students & Lecturers
            </p>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              A revolutionary digital solution that transforms academic communication by integrating multiple channels, 
              administrative tools, and collaborative features into a unified, user-friendly interface.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://drive.google.com/file/d/1SQ_mc_1ell6q1zyU23qjv6-ekvcpPllW/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-emerald-600 to-green-500 hover:from-emerald-500 hover:to-green-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5" />
                <span>Demo Video</span>
              </a>
              
              <a 
                href="https://github.com/Peshala84/uni-hub.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-emerald-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>Frontend Repo</span>
              </a>
              
              <a 
                href="https://github.com/ShashiniMadhu/UniHUB-Backend.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-emerald-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Code className="w-5 h-5" />
                <span>Backend Repo</span>
              </a>
              
              <a 
                href="/unihub_report.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-emerald-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Download className="w-5 h-5" />
                <span>Project Report</span>
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
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-800/50 p-2 rounded-2xl border border-gray-700/50 backdrop-blur-sm">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'problem', label: 'Problem Analysis' },
              { id: 'features', label: 'Features' },
              { id: 'implementation', label: 'Implementation' },
              { id: 'technical', label: 'Technical Stack' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-emerald-600 text-white shadow-lg shadow-emerald-600/25'
                    : 'text-gray-400 hover:text-emerald-400 hover:bg-gray-700/50'
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
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-6">Project Vision</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      UniHUB represents a revolutionary approach to academic communication, designed to transform 
                      how students and lecturers interact in higher education environments.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our platform serves as a unified communication hub that integrates multiple communication 
                      channels, administrative tools, and collaborative features into a single, user-friendly interface.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-emerald-400 mb-6">Core Principles</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-emerald-300">User-Centric Design:</span> Intuitive navigation with minimal learning curves</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-emerald-300">Scalable Integration:</span> Seamless integration with existing university systems</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-emerald-300">Intelligent Automation:</span> Smart features reducing manual work</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-emerald-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-emerald-300">Data-Driven Improvement:</span> Built-in analytics for continuous optimization</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-emerald-900/20 border border-emerald-800/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-emerald-400 mb-6 text-center">Platform Impact</h3>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <h4 className="text-lg font-bold text-emerald-300 mb-2">Reduce</h4>
                      <p className="text-gray-300 text-sm">Administrative overhead and communication barriers</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-300 mb-2">Increase</h4>
                      <p className="text-gray-300 text-sm">Student satisfaction and engagement levels</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-300 mb-2">Improve</h4>
                      <p className="text-gray-300 text-sm">Lecturer efficiency and response quality</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-emerald-300 mb-2">Enhance</h4>
                      <p className="text-gray-300 text-sm">Overall academic outcomes and success</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Problem Tab */}
            {activeTab === 'problem' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-emerald-400 mb-4">Current Communication Challenges</h3>
                  <p className="text-gray-400 text-lg">Critical gaps in academic communication systems</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {problems.map((problem, index) => (
                    <div key={index} className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-red-400 mb-3">{problem.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-red-400 mb-6">Student Challenges</h4>
                    <div className="space-y-3">
                      {[
                        'Accessibility barriers for diverse backgrounds',
                        'Communication anxiety with formal channels',
                        'Time-sensitive issues without timely responses',
                        'Limited peer-to-peer learning opportunities'
                      ].map((challenge, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-xl font-bold text-red-400 mb-6">Lecturer Challenges</h4>
                    <div className="space-y-3">
                      {[
                        'Overwhelming query volumes with increasing ratios',
                        'Repetitive questions across different channels',
                        'Context loss requiring additional communication',
                        'Work-life balance affected by constant notifications'
                      ].map((challenge, idx) => (
                        <div key={idx} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-red-400 rounded-full mt-2 flex-shrink-0"></div>
                          <p className="text-gray-300 text-sm">{challenge}</p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-emerald-400 mb-4">Core Features</h3>
                  <p className="text-gray-400 text-lg">Comprehensive communication and management capabilities</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-emerald-500/30 transition-all duration-300 group">
                      <div className="mb-4">
                        <feature.icon className="w-12 h-12 text-emerald-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed text-sm">{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Implementation Tab */}
            {activeTab === 'implementation' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-emerald-400 mb-4">Development Progress</h3>
                  <p className="text-gray-400 text-lg">Current implementation status and future roadmap</p>
                </div>
                
                <div className="space-y-6">
                  {implementation.map((item, index) => (
                    <div key={index} className={`backdrop-blur-sm border rounded-2xl p-6 ${
                      item.status === 'implemented' 
                        ? 'bg-emerald-900/20 border-emerald-800/30' 
                        : 'bg-yellow-900/20 border-yellow-800/30'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {item.status === 'implemented' ? (
                            <CheckCircle className="w-6 h-6 text-emerald-400" />
                          ) : (
                            <Clock className="w-6 h-6 text-yellow-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className={`text-lg font-bold ${
                              item.status === 'implemented' ? 'text-emerald-400' : 'text-yellow-400'
                            }`}>
                              {item.title}
                            </h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === 'implemented' 
                                ? 'bg-emerald-400/20 text-emerald-300' 
                                : 'bg-yellow-400/20 text-yellow-300'
                            }`}>
                              {item.status === 'implemented' ? 'Completed' : 'Pending'}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{item.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Technical Tab */}
            {activeTab === 'technical' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-emerald-400 mb-4">Technical Architecture</h3>
                  <p className="text-gray-400 text-lg">Modern three-tier architecture for scalability and performance</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-emerald-400 mb-6">Frontend Layer</h4>
                    <div className="space-y-4">
                      <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
                        <h5 className="font-semibold text-blue-400 mb-2">React.js Framework</h5>
                        <p className="text-gray-300 text-sm">Industry standard with virtual DOM, component reusability, and rich ecosystem support</p>
                      </div>
                      <div className="bg-emerald-900/20 rounded-lg p-4 border border-emerald-800/30">
                        <h5 className="font-semibold text-emerald-400 mb-2">Tailwind CSS</h5>
                        <p className="text-gray-300 text-sm">Utility-first approach for rapid development with consistent design and responsive utilities</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-emerald-400 mb-6">Backend Layer</h4>
                    <div className="space-y-4">
                      <div className="bg-green-900/20 rounded-lg p-4 border border-green-800/30">
                        <h5 className="font-semibold text-green-400 mb-2">Spring Boot</h5>
                        <p className="text-gray-300 text-sm">RESTful APIs with real-time capabilities, built-in security, and dependency injection</p>
                      </div>
                      <div className="bg-teal-900/20 rounded-lg p-4 border border-teal-800/30">
                        <h5 className="font-semibold text-teal-400 mb-2">MySQL Database</h5>
                        <p className="text-gray-300 text-sm">Optimized performance with ACID properties, complex queries, and scalable data storage</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-emerald-400 mb-8 text-center">Architecture Benefits</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-emerald-300 mb-2">Security</h5>
                      <p className="text-gray-400 text-sm">Built-in security features with role-based access control</p>
                    </div>
                    <div className="text-center">
                      <Database className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-emerald-300 mb-2">Scalability</h5>
                      <p className="text-gray-400 text-sm">Designed to scale from small colleges to large institutions</p>
                    </div>
                    <div className="text-center">
                      <Globe className="w-12 h-12 text-emerald-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-emerald-300 mb-2">Performance</h5>
                      <p className="text-gray-400 text-sm">Optimized for high performance and smooth user experience</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
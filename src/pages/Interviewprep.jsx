import React, { useState } from 'react';
import { ExternalLink, Github, Brain, Users, Database, Code, CheckCircle, Clock, FileText, MessageSquare, Star, Shield, Zap, Target } from 'lucide-react';

export default function InterviewPrepAI() {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: 'MongoDB', color: 'text-[#1fd655]', bg: 'bg-[#1fd655]/10' },
    { name: 'Express.js', color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'React.js', color: 'text-[#1fd655]', bg: 'bg-[#1fd655]/10' },
    { name: 'Node.js', color: 'text-green-300', bg: 'bg-green-300/10' },
    { name: 'Gemini AI', color: 'text-[#1fd655]', bg: 'bg-[#1fd655]/10' },
    { name: 'JWT Auth', color: 'text-green-400', bg: 'bg-green-400/10' },
    { name: 'Tailwind CSS', color: 'text-[#1fd655]', bg: 'bg-[#1fd655]/10' }
  ];

  const features = [
    {
      icon: Shield,
      title: 'User Authentication',
      description: 'Secure register and login system with JWT-based authentication for personalized sessions'
    },
    {
      icon: Target,
      title: 'Role-Based Sessions',
      description: 'Generate customized interview questions based on specific job roles and experience levels'
    },
    {
      icon: Brain,
      title: 'AI-Powered Q&A',
      description: 'High-quality technical questions and answers automatically generated using Gemini API'
    },
    {
      icon: FileText,
      title: 'Accordion Learning UI',
      description: 'Clean, expandable interface for viewing questions and answers in an organized study flow'
    },
    {
      icon: Zap,
      title: 'Dynamic AI Explanations',
      description: 'On-demand concept breakdowns and detailed explanations powered by AI'
    },
    {
      icon: Star,
      title: 'Question Pinning',
      description: 'Pin important questions for quick access and focused review sessions'
    },
    {
      icon: Database,
      title: 'MongoDB Storage',
      description: 'Save and manage interview sessions and questions for future review and practice'
    },
    {
      icon: MessageSquare,
      title: 'Responsive UI',
      description: 'Modern, clean interface built with Tailwind CSS for smooth user experience'
    }
  ];

  const problems = [
    {
      title: 'Generic Interview Prep',
      description: 'Most platforms offer one-size-fits-all questions without role-specific customization'
    },
    {
      title: 'Static Content',
      description: 'Traditional resources lack dynamic, AI-powered explanations and personalized learning'
    },
    {
      title: 'Poor Organization',
      description: 'Difficulty in organizing and tracking important questions for focused study sessions'
    },
    {
      title: 'Limited Explanations',
      description: 'Lack of detailed concept breakdowns and contextual explanations for complex topics'
    }
  ];

  const implementation = [
    {
      status: 'implemented',
      title: 'Authentication System',
      description: 'JWT-based user registration and login with secure session management'
    },
    {
      status: 'implemented',
      title: 'AI Question Generation',
      description: 'Integration with Gemini API for generating role-specific interview questions and answers'
    },
    {
      status: 'implemented',
      title: 'Accordion UI',
      description: 'Interactive expandable interface for clean Q&A presentation and study flow'
    },
    {
      status: 'implemented',
      title: 'MongoDB Integration',
      description: 'Database setup for storing user sessions, questions, and learning progress'
    },
    {
      status: 'pending',
      title: 'Question Pinning System',
      description: 'Feature to mark and organize important questions for quick access'
    },
    {
      status: 'pending',
      title: 'Dynamic AI Explanations',
      description: 'On-demand concept breakdowns and detailed explanations for complex topics'
    },
    {
      status: 'pending',
      title: 'Advanced Analytics',
      description: 'Progress tracking and performance analytics for interview preparation'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-[#1fd655]/30 via-green-800/20 to-emerald-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-green-950/25 via-[#1fd655]/15 to-emerald-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-[#1fd655]/15 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-green-700/10 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-[#1fd655] transition-all duration-400"
          >
            <div className="relative p-2 rounded-xl border border-gray-600/50 group-hover:border-[#1fd655]/50 bg-gray-800/50 group-hover:bg-[#1fd655]/20 transition-all duration-400">
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
            <div className="inline-flex items-center space-x-2 bg-[#1fd655]/20 px-4 py-2 rounded-full border border-[#1fd655]/30 mb-6">
              <Brain className="w-4 h-4 text-[#1fd655]" />
              <span className="text-[#1fd655] text-sm font-medium">AI-Powered · MERN Stack · Ongoing Project</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-[#1fd655] via-green-300 to-emerald-400 bg-clip-text text-transparent mb-6">
              Interview Prep AI
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Smart AI-Powered Interview Preparation App
            </p>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              A comprehensive MERN stack application that leverages Gemini AI to generate personalized interview questions 
              and answers based on job roles and experience levels, featuring an intuitive learning interface.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://github.com/ShashiniMadhu/INTERVIEWPREPAI.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-[#1fd655] to-green-500 hover:from-green-500 hover:to-[#1fd655] px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>View Repository</span>
              </a>
              
              <div className="group flex items-center space-x-2 bg-gray-800 border border-gray-600 px-6 py-3 rounded-xl font-semibold opacity-60 cursor-not-allowed">
                <Code className="w-5 h-5" />
                <span>Live Demo (Coming Soon)</span>
              </div>
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
              { id: 'problem', label: 'Problem Statement' },
              { id: 'features', label: 'Features' },
              { id: 'implementation', label: 'Development Status' },
              { id: 'technical', label: 'Technical Stack' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-[#1fd655] text-black shadow-lg shadow-[#1fd655]/25'
                    : 'text-gray-400 hover:text-[#1fd655] hover:bg-gray-700/50'
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
                    <h3 className="text-2xl font-bold text-[#1fd655] mb-6">Project Vision</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Interview Prep AI revolutionizes interview preparation by combining the power of artificial 
                      intelligence with modern web technologies to create personalized learning experiences.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Our platform generates role-specific interview questions and provides intelligent explanations, 
                      helping candidates prepare effectively for their dream jobs.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-[#1fd655] mb-6">Key Innovations</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1fd655] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-[#1fd655]">AI Integration:</span> Gemini API for intelligent question generation</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1fd655] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-[#1fd655]">Personalization:</span> Role and experience-based customization</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1fd655] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-[#1fd655]">User Experience:</span> Intuitive accordion-based learning interface</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-[#1fd655] rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-[#1fd655]">Data Persistence:</span> MongoDB for session and progress tracking</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1fd655]/20 border border-[#1fd655]/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-[#1fd655] mb-6 text-center">Platform Goals</h3>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <h4 className="text-lg font-bold text-[#1fd655] mb-2">Personalize</h4>
                      <p className="text-gray-300 text-sm">Tailored questions based on specific job roles and experience</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1fd655] mb-2">Educate</h4>
                      <p className="text-gray-300 text-sm">AI-powered explanations for complex technical concepts</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1fd655] mb-2">Organize</h4>
                      <p className="text-gray-300 text-sm">Smart organization and pinning of important questions</p>
                    </div>
                    <div>
                      <h4 className="text-lg font-bold text-[#1fd655] mb-2">Track</h4>
                      <p className="text-gray-300 text-sm">Progress monitoring and performance analytics</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Problem Tab */}
            {activeTab === 'problem' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-[#1fd655] mb-4">Interview Preparation Challenges</h3>
                  <p className="text-gray-400 text-lg">Current gaps in interview preparation tools and methods</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {problems.map((problem, index) => (
                    <div key={index} className="bg-red-900/20 backdrop-blur-sm border border-red-800/30 rounded-2xl p-6">
                      <h4 className="text-lg font-bold text-red-400 mb-3">{problem.title}</h4>
                      <p className="text-gray-300 text-sm leading-relaxed">{problem.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-[#1fd655] mb-6 text-center">Our Solution</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-lg font-semibold text-[#1fd655] mb-4">Smart Personalization</h5>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Role-specific question generation</li>
                        <li>• Experience-level customization</li>
                        <li>• AI-powered content adaptation</li>
                        <li>• Dynamic difficulty adjustment</li>
                      </ul>
                    </div>
                    <div>
                      <h5 className="text-lg font-semibold text-[#1fd655] mb-4">Enhanced Learning</h5>
                      <ul className="space-y-2 text-gray-300 text-sm">
                        <li>• Interactive accordion interface</li>
                        <li>• On-demand AI explanations</li>
                        <li>• Question pinning system</li>
                        <li>• Progress tracking capabilities</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-[#1fd655] mb-4">Core Features</h3>
                  <p className="text-gray-400 text-lg">Comprehensive AI-powered interview preparation capabilities</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-[#1fd655]/30 transition-all duration-300 group">
                      <div className="mb-4">
                        <feature.icon className="w-10 h-10 text-[#1fd655] group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="text-lg font-bold text-white mb-3">{feature.title}</h4>
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
                  <h3 className="text-3xl font-bold text-[#1fd655] mb-4">Development Progress</h3>
                  <p className="text-gray-400 text-lg">Current implementation status and upcoming features</p>
                </div>
                
                <div className="space-y-6">
                  {implementation.map((item, index) => (
                    <div key={index} className={`backdrop-blur-sm border rounded-2xl p-6 ${
                      item.status === 'implemented' 
                        ? 'bg-[#1fd655]/20 border-[#1fd655]/30' 
                        : 'bg-yellow-900/20 border-yellow-800/30'
                    }`}>
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          {item.status === 'implemented' ? (
                            <CheckCircle className="w-6 h-6 text-[#1fd655]" />
                          ) : (
                            <Clock className="w-6 h-6 text-yellow-400" />
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className={`text-lg font-bold ${
                              item.status === 'implemented' ? 'text-[#1fd655]' : 'text-yellow-400'
                            }`}>
                              {item.title}
                            </h4>
                            <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                              item.status === 'implemented' 
                                ? 'bg-[#1fd655]/20 text-[#1fd655]' 
                                : 'bg-yellow-400/20 text-yellow-300'
                            }`}>
                              {item.status === 'implemented' ? 'Completed' : 'In Progress'}
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
                  <h3 className="text-3xl font-bold text-[#1fd655] mb-4">Technical Architecture</h3>
                  <p className="text-gray-400 text-lg">MERN stack with AI integration for scalable interview preparation</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-[#1fd655] mb-6">Frontend Technologies</h4>
                    <div className="space-y-4">
                      <div className="bg-blue-900/20 rounded-lg p-4 border border-blue-800/30">
                        <h5 className="font-semibold text-blue-400 mb-2">React.js</h5>
                        <p className="text-gray-300 text-sm">Component-based UI with state management for dynamic interview sessions</p>
                      </div>
                      <div className="bg-[#1fd655]/20 rounded-lg p-4 border border-[#1fd655]/30">
                        <h5 className="font-semibold text-[#1fd655] mb-2">Tailwind CSS</h5>
                        <p className="text-gray-300 text-sm">Modern responsive design with clean accordion-based learning interface</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-[#1fd655] mb-6">Backend & AI</h4>
                    <div className="space-y-4">
                      <div className="bg-green-900/20 rounded-lg p-4 border border-green-800/30">
                        <h5 className="font-semibold text-green-400 mb-2">Node.js & Express.js</h5>
                        <p className="text-gray-300 text-sm">RESTful APIs with JWT authentication and session management</p>
                      </div>
                      <div className="bg-[#1fd655]/20 rounded-lg p-4 border border-[#1fd655]/30">
                        <h5 className="font-semibold text-[#1fd655] mb-2">MongoDB & Gemini AI</h5>
                        <p className="text-gray-300 text-sm">Document storage for user data with AI-powered question generation</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-[#1fd655] mb-8 text-center">Architecture Benefits</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-[#1fd655] mx-auto mb-4" />
                      <h5 className="font-semibold text-[#1fd655] mb-2">Secure Authentication</h5>
                      <p className="text-gray-400 text-sm">JWT-based security with protected user sessions and data</p>
                    </div>
                    <div className="text-center">
                      <Brain className="w-12 h-12 text-[#1fd655] mx-auto mb-4" />
                      <h5 className="font-semibold text-[#1fd655] mb-2">AI Intelligence</h5>
                      <p className="text-gray-400 text-sm">Smart question generation and explanations powered by Gemini AI</p>
                    </div>
                    <div className="text-center">
                      <Database className="w-12 h-12 text-[#1fd655] mx-auto mb-4" />
                      <h5 className="font-semibold text-[#1fd655] mb-2">Scalable Storage</h5>
                      <p className="text-gray-400 text-sm">MongoDB for flexible data storage and efficient query performance</p>
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
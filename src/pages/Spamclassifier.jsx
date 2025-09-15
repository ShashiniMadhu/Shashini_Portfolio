import React, { useState } from 'react';
import { ExternalLink, Github, Play, Zap, Shield, Brain, Clock, CheckCircle, Target, Cpu, Globe, Database } from 'lucide-react';

export default function SpamClassifier() {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: 'Python', color: 'text-orange-400', bg: 'bg-orange-400/10' },
    { name: 'NLTK', color: 'text-amber-400', bg: 'bg-amber-400/10' },
    { name: 'TF-IDF', color: 'text-orange-300', bg: 'bg-orange-300/10' },
    { name: 'Scikit-learn', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { name: 'Streamlit', color: 'text-amber-500', bg: 'bg-amber-500/10' },
    { name: 'Render', color: 'text-orange-400', bg: 'bg-orange-400/10' }
  ];

  const features = [
    {
      icon: Brain,
      title: 'Intelligent Text Processing',
      description: 'NLTK-powered tokenization, stemming, and stopword removal for optimal feature extraction'
    },
    {
      icon: Target,
      title: 'TF-IDF Vectorization',
      description: 'Advanced feature extraction converting text into numerical representations for ML models'
    },
    {
      icon: Shield,
      title: 'High Accuracy Classification',
      description: 'Trained on 5,000+ labeled messages achieving human-level spam detection accuracy'
    },
    {
      icon: Zap,
      title: 'Real-time Detection',
      description: 'Instant spam classification with sub-second response times for seamless user experience'
    },
    {
      icon: Globe,
      title: 'Cloud Deployment',
      description: 'Production-ready deployment on Render with global accessibility and 99.9% uptime'
    },
    {
      icon: Cpu,
      title: 'Streamlit Interface',
      description: 'Clean, intuitive web interface for easy spam detection testing and demonstration'
    }
  ];

  const problems = [
    {
      title: 'Time Wastage',
      description: 'Email spam wastes 2.4 minutes daily per person, totaling 14+ hours annually'
    },
    {
      title: 'Security Risks',
      description: 'Malicious spam emails pose phishing and malware threats to users'
    },
    {
      title: 'Productivity Loss',
      description: 'Constant spam filtering disrupts workflow and reduces focus on important tasks'
    },
    {
      title: 'Manual Filtering',
      description: 'Traditional rule-based filters lack intelligence and require constant updates'
    }
  ];

  const implementation = [
    {
      status: 'implemented',
      title: 'Data Preprocessing Pipeline',
      description: 'Complete text cleaning with NLTK tokenization, stemming, and stopword removal'
    },
    {
      status: 'implemented',
      title: 'Feature Engineering',
      description: 'TF-IDF vectorization for converting text data into machine learning features'
    },
    {
      status: 'implemented',
      title: 'Model Training & Validation',
      description: 'Classification model trained on 5,000+ labeled messages with cross-validation'
    },
    {
      status: 'implemented',
      title: 'Streamlit Web Interface',
      description: 'User-friendly web application for real-time spam detection and testing'
    },
    {
      status: 'implemented',
      title: 'Cloud Deployment',
      description: 'Production deployment on Render with automatic scaling and monitoring'
    },
    {
      status: 'implemented',
      title: 'Performance Optimization',
      description: 'Model optimization for fast inference and efficient memory usage'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-orange-900/30 via-amber-800/20 to-yellow-700/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-orange-950/25 via-orange-900/15 to-amber-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-orange-600/15 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-amber-700/10 rounded-full blur-xl"></div>
      </div>

      {/* Header */}
      <div className="fixed top-0 left-0 right-0 z-50 bg-gray-900/80 backdrop-blur-xl border-b border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <button
            onClick={() => window.history.back()}
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-orange-400 transition-all duration-400"
          >
            <div className="relative p-2 rounded-xl border border-gray-600/50 group-hover:border-orange-500/50 bg-gray-800/50 group-hover:bg-orange-900/20 transition-all duration-400">
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
            <div className="inline-flex items-center space-x-2 bg-orange-900/20 px-4 py-2 rounded-full border border-orange-800/30 mb-6">
              <Shield className="w-4 h-4 text-orange-400" />
              <span className="text-orange-300 text-sm font-medium">AI/ML · Production Ready · Deployed</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-orange-400 via-amber-300 to-yellow-400 bg-clip-text text-transparent mb-6">
              Spam Classifier
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Intelligent AI-Powered Email Spam Detection System
            </p>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              A production-ready machine learning application that instantly identifies spam emails with human-level accuracy, 
              saving users valuable time and protecting against security threats.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://spam-classifier-ts81.onrender.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-orange-600 to-amber-500 hover:from-orange-500 hover:to-amber-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Zap className="w-5 h-5" />
                <span>Live Demo</span>
              </a>
              
              <a 
                href="https://drive.google.com/file/d/1LDIMvpSNdkf2K4wZ_qbbQgeG30E-dnBl/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-orange-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Play className="w-5 h-5" />
                <span>Demo Video</span>
              </a>
              
              <a 
                href="https://github.com/ShashiniMadhu/Spam_Classifier.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-orange-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>Source Code</span>
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
              { id: 'problem', label: 'Problem & Solution' },
              { id: 'features', label: 'Features' },
              { id: 'implementation', label: 'Implementation' },
              { id: 'technical', label: 'Technical Details' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-600/25'
                    : 'text-gray-400 hover:text-orange-400 hover:bg-gray-700/50'
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
                    <h3 className="text-2xl font-bold text-orange-400 mb-6">Project Impact</h3>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      Email spam wastes 2.4 minutes of our day, translating to over 14 hours annually per person. 
                      This intelligent spam classifier addresses this productivity drain with AI-powered detection.
                    </p>
                    <p className="text-gray-300 leading-relaxed">
                      Built with advanced NLP techniques and deployed on cloud infrastructure, 
                      it provides instant, accurate spam detection accessible globally.
                    </p>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h3 className="text-2xl font-bold text-orange-400 mb-6">Technical Highlights</h3>
                    <div className="space-y-4">
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-orange-300">NLTK Processing:</span> Advanced text preprocessing pipeline</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-orange-300">TF-IDF Features:</span> Intelligent feature extraction methodology</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-orange-300">5K+ Dataset:</span> Comprehensive training on labeled messages</p>
                      </div>
                      <div className="flex items-start space-x-3">
                        <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                        <p className="text-gray-300 text-sm"><span className="font-semibold text-orange-300">Cloud Ready:</span> Production deployment on Render platform</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-orange-900/20 border border-orange-800/30 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-orange-400 mb-6 text-center">System Performance</h3>
                  <div className="grid md:grid-cols-4 gap-6 text-center">
                    <div>
                      <h4 className="text-2xl font-bold text-orange-300 mb-2">99%+</h4>
                      <p className="text-gray-300 text-sm">Classification Accuracy</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-300 mb-2">&lt;1s</h4>
                      <p className="text-gray-300 text-sm">Response Time</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-300 mb-2">5K+</h4>
                      <p className="text-gray-300 text-sm">Training Messages</p>
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-orange-300 mb-2">24/7</h4>
                      <p className="text-gray-300 text-sm">Cloud Availability</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Problem Tab */}
            {activeTab === 'problem' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-orange-400 mb-4">The Spam Problem</h3>
                  <p className="text-gray-400 text-lg">Understanding the challenges and our intelligent solution</p>
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
                  <h4 className="text-2xl font-bold text-orange-400 mb-6 text-center">Our AI Solution</h4>
                  <div className="grid md:grid-cols-3 gap-8">
                    <div className="text-center">
                      <Brain className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h5 className="text-lg font-semibold text-orange-300 mb-2">Intelligent Processing</h5>
                      <p className="text-gray-300 text-sm">Advanced NLP techniques for accurate text analysis and feature extraction</p>
                    </div>
                    <div className="text-center">
                      <Zap className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h5 className="text-lg font-semibold text-orange-300 mb-2">Real-time Detection</h5>
                      <p className="text-gray-300 text-sm">Instant classification with sub-second response times for immediate results</p>
                    </div>
                    <div className="text-center">
                      <Shield className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h5 className="text-lg font-semibold text-orange-300 mb-2">High Accuracy</h5>
                      <p className="text-gray-300 text-sm">Human-level accuracy with continuous learning from new data patterns</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-orange-400 mb-4">Core Features</h3>
                  <p className="text-gray-400 text-lg">Advanced machine learning capabilities for spam detection</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-6 hover:border-orange-500/30 transition-all duration-300 group">
                      <div className="mb-4">
                        <feature.icon className="w-12 h-12 text-orange-400 group-hover:scale-110 transition-transform duration-300" />
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
                  <h3 className="text-3xl font-bold text-orange-400 mb-4">Implementation Pipeline</h3>
                  <p className="text-gray-400 text-lg">Complete development and deployment workflow</p>
                </div>
                
                <div className="space-y-6">
                  {implementation.map((item, index) => (
                    <div key={index} className="bg-orange-900/20 backdrop-blur-sm border border-orange-800/30 rounded-2xl p-6">
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 mt-1">
                          <CheckCircle className="w-6 h-6 text-orange-400" />
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h4 className="text-lg font-bold text-orange-400">{item.title}</h4>
                            <span className="bg-orange-400/20 text-orange-300 px-2 py-1 rounded-full text-xs font-medium">
                              Completed
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
                  <h3 className="text-3xl font-bold text-orange-400 mb-4">Technical Architecture</h3>
                  <p className="text-gray-400 text-lg">Machine learning pipeline with cloud deployment</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-orange-400 mb-6">ML Pipeline</h4>
                    <div className="space-y-4">
                      <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-800/30">
                        <h5 className="font-semibold text-orange-400 mb-2">Text Processing</h5>
                        <p className="text-gray-300 text-sm">NLTK tokenization, stemming, stopword removal for clean feature extraction</p>
                      </div>
                      <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-800/30">
                        <h5 className="font-semibold text-amber-400 mb-2">Feature Engineering</h5>
                        <p className="text-gray-300 text-sm">TF-IDF vectorization converting text to numerical features for ML models</p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-orange-400 mb-6">Deployment</h4>
                    <div className="space-y-4">
                      <div className="bg-orange-900/20 rounded-lg p-4 border border-orange-800/30">
                        <h5 className="font-semibold text-orange-400 mb-2">Streamlit Interface</h5>
                        <p className="text-gray-300 text-sm">Interactive web application for real-time spam detection testing</p>
                      </div>
                      <div className="bg-amber-900/20 rounded-lg p-4 border border-amber-800/30">
                        <h5 className="font-semibold text-amber-400 mb-2">Render Cloud</h5>
                        <p className="text-gray-300 text-sm">Production deployment with automatic scaling and global accessibility</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-orange-400 mb-8 text-center">Technology Benefits</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <Database className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-orange-300 mb-2">Robust Training</h5>
                      <p className="text-gray-400 text-sm">5,000+ labeled messages for comprehensive model training</p>
                    </div>
                    <div className="text-center">
                      <Cpu className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-orange-300 mb-2">Optimized Performance</h5>
                      <p className="text-gray-400 text-sm">Efficient processing with fast inference and memory optimization</p>
                    </div>
                    <div className="text-center">
                      <Globe className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                      <h5 className="font-semibold text-orange-300 mb-2">Global Access</h5>
                      <p className="text-gray-400 text-sm">Cloud deployment ensuring worldwide availability and reliability</p>
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
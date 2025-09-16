import React, { useState } from 'react';
import { ExternalLink, Github, Play, Download, Building, Calendar, Users, Shield, Database, Globe, Code, CheckCircle, Clock, FileText, DollarSign, MessageSquare, Truck } from 'lucide-react';

export default function StructuraX() {
  const [activeTab, setActiveTab] = useState('overview');

  const technologies = [
    { name: 'React.js', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'Spring Boot', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'MySQL', color: 'text-yellow-300', bg: 'bg-yellow-300/10' },
    { name: 'Flutter', color: 'text-yellow-500', bg: 'bg-yellow-500/10' },
    { name: 'RESTful APIs', color: 'text-yellow-400', bg: 'bg-yellow-400/10' },
    { name: 'Hibernate', color: 'text-yellow-300', bg: 'bg-yellow-300/10' }
  ];

  const features = [
    {
      icon: Building,
      title: 'Project Management',
      description: 'Centralized platform for managing multiple construction projects simultaneously'
    },
    {
      icon: Users,
      title: 'Role-Based Access',
      description: '12 different user types with specialized functionalities and permissions'
    },
    {
      icon: FileText,
      title: 'Document Management',
      description: 'Blueprint versioning, contract storage, and secure file sharing'
    },
    {
      icon: DollarSign,
      title: 'Financial Tracking',
      description: 'Budget planning, cost tracking, and payment management'
    },
    {
      icon: MessageSquare,
      title: 'Communication Hub',
      description: 'Real-time messaging between all project stakeholders'
    },
    {
      icon: Truck,
      title: 'Procurement System',
      description: 'Material requests, supplier quotations, and inventory management'
    }
  ];

  const userRoles = [
    {
      role: 'Quantity Survey Officer',
      color: 'text-blue-400',
      bg: 'bg-blue-900/20',
      border: 'border-blue-800/30',
      responsibilities: [
        'Review design drawings and create BOQ',
        'Estimate project value and create work breakdown',
        'Manage material lists and update costings',
        'Create site visit logs and reports',
        'View project progress and financial status',
        'Approve material requests and quotations'
      ]
    },
    {
      role: 'Senior QS Officer',
      color: 'text-purple-400',
      bg: 'bg-purple-900/20',
      border: 'border-purple-800/30',
      responsibilities: [
        'All QS Officer functions',
        'Assign QS officers to projects',
        'Create customer logins',
        'Confirm and edit estimated values'
      ]
    },
    {
      role: 'Project Manager',
      color: 'text-green-400',
      bg: 'bg-green-900/20',
      border: 'border-green-800/30',
      responsibilities: [
        'View project progress and financial status',
        'Monitor material amounts and requests',
        'Create site visit logs',
        'Chat with project owners',
        'Review daily supervisor updates'
      ]
    },
    {
      role: 'Site Supervisor',
      color: 'text-yellow-400',
      bg: 'bg-yellow-900/20',
      border: 'border-yellow-800/30',
      responsibilities: [
        'View project plans and drawings',
        'Update daily work progress',
        'Request materials and tools',
        'Manage site inventory',
        'Upload site photos and videos'
      ]
    },
    {
      role: 'Project Owner',
      color: 'text-orange-400',
      bg: 'bg-orange-900/20',
      border: 'border-orange-800/30',
      responsibilities: [
        'View project progress and contracts',
        'Track payments and materials used',
        'Request site visits',
        'Submit payment confirmations',
        'Chat with project team'
      ]
    },
    {
      role: 'Supplier',
      color: 'text-indigo-400',
      bg: 'bg-indigo-900/20',
      border: 'border-indigo-800/30',
      responsibilities: [
        'Maintain product catalogue',
        'View and respond to quotations',
        'Confirm delivery status',
        'Track payment history',
        'Submit payment invoices'
      ]
    },
    {
      role: 'Legal Officer',
      color: 'text-pink-400',
      bg: 'bg-pink-900/20',
      border: 'border-pink-800/30',
      responsibilities: [
        'Submit contract documents',
        'Add legal document processes',
        'Change process status',
        'Manage legal compliance'
      ]
    },
    {
      role: 'Director',
      color: 'text-red-400',
      bg: 'bg-red-900/20',
      border: 'border-red-800/30',
      responsibilities: [
        'View all projects and assign staff',
        'Change project status',
        'Review system reports',
        'Monitor resource inventories',
        'Update site visit logs'
      ]
    },
    {
      role: 'Architecture',
      color: 'text-cyan-400',
      bg: 'bg-cyan-900/20',
      border: 'border-cyan-800/30',
      responsibilities: [
        'Upload project plans and drawings',
        'Chat with Senior QS officer',
        'Review design specifications',
        'Provide technical guidance'
      ]
    },
    {
      role: 'Finance Department',
      color: 'text-teal-400',
      bg: 'bg-teal-900/20',
      border: 'border-teal-800/30',
      responsibilities: [
        'Create payment plans',
        'Add cash payment reports',
        'Approve confirmed payments',
        'View payment history',
        'Enter labor charges'
      ]
    }
  ];

  const systemModules = [
    {
      module: 'Work Management',
      description: 'Work breakdown structure, task management, and milestone tracking',
      features: ['BOQ Creation', 'Progress Tracking', 'Milestone Planning', 'Task Assignment']
    },
    {
      module: 'Financial System',
      description: 'Budget planning, cost tracking, and payment management',
      features: ['Budget Planning', 'Payment Tracking', 'Cost Analysis', 'Financial Reports']
    },
    {
      module: 'Procurement',
      description: 'Material requests, supplier management, and quotation handling',
      features: ['Material Requests', 'Supplier Quotations', 'Inventory Management', 'Purchase Orders']
    },
    {
      module: 'Communication',
      description: 'Chat system, notifications, and stakeholder coordination',
      features: ['Real-time Chat', 'Notifications', 'File Sharing', 'Status Updates']
    }
  ];

  const projectObjectives = [
    'Create centralized platform for multiple construction projects',
    'Implement role-based access control for 12 user types',
    'Develop automated workflow systems for approvals',
    'Establish real-time communication channels',
    'Integrate financial tracking and budget management',
    'Provide comprehensive reporting and analytics',
    'Ensure compliance tracking and document management',
    'Create mobile-responsive interfaces for site personnel'
  ];

  return (
    <div className="min-h-screen bg-black text-gray-100 relative overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-[45rem] h-[45rem] bg-gradient-to-br from-yellow-900/35 via-yellow-800/25 to-yellow-700/15 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-[38rem] h-[38rem] bg-gradient-to-tr from-yellow-950/30 via-yellow-900/20 to-yellow-800/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-1/4 left-1/3 w-32 h-32 bg-yellow-600/20 rounded-full blur-2xl"></div>
        <div className="absolute top-2/3 right-1/4 w-24 h-24 bg-yellow-700/15 rounded-full blur-xl"></div>
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
            className="group inline-flex items-center space-x-3 text-gray-400 hover:text-yellow-400 transition-all duration-400"
          >
            <div className="relative p-2 rounded-xl border border-gray-700/50 group-hover:border-yellow-500/50 bg-gray-900/50 group-hover:bg-yellow-900/20 transition-all duration-400">
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
            <div className="inline-flex items-center space-x-2 bg-yellow-900/20 px-4 py-2 rounded-full border border-yellow-800/30 mb-6">
              <Building className="w-4 h-4 text-yellow-400" />
              <span className="text-yellow-300 text-sm font-medium">Third Year Group Project</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent mb-6">
              StructuraX
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-4xl mx-auto leading-relaxed">
              Smart Construction Project Management System
            </p>
            
            <p className="text-gray-400 text-lg max-w-3xl mx-auto mb-12">
              A comprehensive web-based construction management platform that facilitates effective coordination, 
              monitoring, and decision-making among all stakeholders from design to completion.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              <a 
                href="https://drive.google.com/file/d/1-V0wL884xuuW2MHJ7c9_jtNj4h_ByO2o/view?usp=drive_link" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gradient-to-r from-yellow-600 to-yellow-500 hover:from-yellow-500 hover:to-yellow-400 px-6 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 text-black"
              >
                <Play className="w-5 h-5" />
                <span>Demo Video</span>
              </a>
              
              <a 
                href="https://github.com/DilshaniNK/StructureX-Frontend.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Github className="w-5 h-5" />
                <span>Frontend Repo</span>
              </a>
              
              <a 
                href="https://github.com/ShashiniMadhu/StructuraX-Backend.git" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
              >
                <Code className="w-5 h-5" />
                <span>Backend Repo</span>
              </a>
              
              <a 
                href="/structurax_report.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 border border-gray-600 hover:border-yellow-500/50 px-6 py-3 rounded-xl font-semibold transition-all duration-300"
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
          <div className="flex flex-wrap justify-center gap-2 mb-12 bg-gray-900/50 p-2 rounded-2xl border border-gray-800/50 backdrop-blur-sm">
            {[
              { id: 'overview', label: 'Overview' },
              { id: 'features', label: 'Features' },
              { id: 'roles', label: 'User Roles' },
              { id: 'modules', label: 'System Modules' },
              { id: 'technical', label: 'Technical Details' }
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2.5 rounded-xl font-semibold transition-all duration-300 text-sm ${
                  activeTab === tab.id
                    ? 'bg-yellow-600 text-black shadow-lg shadow-yellow-600/25'
                    : 'text-gray-400 hover:text-yellow-400 hover:bg-gray-800/50'
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
                      <h3 className="text-2xl font-bold text-yellow-400 mb-6">Project Goal</h3>
                      <p className="text-gray-300 leading-relaxed mb-6">
                        To develop a centralized, web-based construction site management system that facilitates 
                        effective coordination, monitoring, and decision-making among all stakeholders involved 
                        in a construction project—from design to completion.
                      </p>
                      <p className="text-gray-300 leading-relaxed">
                        The system addresses critical inefficiencies in construction projects caused by manual 
                        communication, isolated tools, and lack of real-time visibility across stakeholders.
                      </p>
                    </div>
                  </div>
                  
                  <div className="space-y-8">
                    <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                      <h3 className="text-2xl font-bold text-yellow-400 mb-6">Key Objectives</h3>
                      <div className="space-y-3">
                        {projectObjectives.map((objective, index) => (
                          <div key={index} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-yellow-400 rounded-full mt-2 flex-shrink-0"></div>
                            <p className="text-gray-300 text-sm">{objective}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h3 className="text-2xl font-bold text-yellow-400 mb-6">Problem Statement</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Construction projects typically involve multiple stakeholders such as architects, engineers, site supervisors, 
                    managers, and property owners. Currently, many construction sites rely heavily on manual communication 
                    (phone calls, emails, paper-based approvals) and isolated tools (Excel sheets, CAD files, messaging apps) 
                    that do not integrate well.
                  </p>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    This causes inefficiencies like delays, miscommunication, lack of transparency, and cost overruns. 
                    Moreover, real-time updates from the site are often not visible to stakeholders such as owners or 
                    financial managers, creating information gaps.
                  </p>
                  <div className="bg-yellow-900/20 border border-yellow-800/30 rounded-xl p-6">
                    <h4 className="text-lg font-bold text-yellow-300 mb-3">Solution Approach</h4>
                    <p className="text-gray-300">
                      StructuraX creates a centralized platform where all construction-related processes—from design 
                      approvals to daily progress tracking—can be managed in one integrated environment with role-specific 
                      access and automation.
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Features Tab */}
            {activeTab === 'features' && (
              <div className="space-y-8">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">Core Features</h3>
                  <p className="text-gray-400 text-lg">Comprehensive construction management capabilities</p>
                </div>
                
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {features.map((feature, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-6 hover:border-yellow-500/30 transition-all duration-300 group">
                      <div className="mb-4">
                        <feature.icon className="w-12 h-12 text-yellow-400 group-hover:scale-110 transition-transform duration-300" />
                      </div>
                      <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                      <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-8 text-center">Main System Functionalities</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="space-y-3">
                      <h5 className="font-semibold text-yellow-300">Project Management</h5>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Work breakdown structure management</li>
                        <li>• Task management and scheduling</li>
                        <li>• Calendar and milestone planning</li>
                        <li>• Progress tracking and reporting</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-semibold text-yellow-300">Financial Management</h5>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Budget planning and approval</li>
                        <li>• Cost tracking and analysis</li>
                        <li>• Payment management system</li>
                        <li>• Financial reporting dashboards</li>
                      </ul>
                    </div>
                    <div className="space-y-3">
                      <h5 className="font-semibold text-yellow-300">Operations</h5>
                      <ul className="space-y-2 text-gray-400 text-sm">
                        <li>• Daily progress tracking</li>
                        <li>• Worker and subcontractor coordination</li>
                        <li>• Document and contract management</li>
                        <li>• Legal compliance documentation</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Roles Tab */}
            {activeTab === 'roles' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">User Roles & Responsibilities</h3>
                  <p className="text-gray-400 text-lg">12 specialized user types with role-based access control</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-8">
                  {userRoles.map((roleData, index) => (
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

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-6">Additional System Roles</h4>
                  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <h5 className="font-semibold text-yellow-300 mb-2">Architect</h5>
                      <p className="text-gray-400 text-sm">Upload project plans and drawings, communicate with Senior QS officers</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <h5 className="font-semibold text-yellow-300 mb-2">Property Owner</h5>
                      <p className="text-gray-400 text-sm">View progress, track payments, request site visits, chat with team</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <h5 className="font-semibold text-yellow-300 mb-2">Supplier</h5>
                      <p className="text-gray-400 text-sm">Maintain product catalog, respond to quotations, track payments</p>
                    </div>
                    <div className="bg-gray-800/50 rounded-xl p-4 border border-gray-700/50">
                      <h5 className="font-semibold text-yellow-300 mb-2">Legal Officer</h5>
                      <p className="text-gray-400 text-sm">Submit contracts, manage legal processes, update status</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Modules Tab */}
            {activeTab === 'modules' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">System Modules</h3>
                  <p className="text-gray-400 text-lg">Integrated modules for comprehensive construction management</p>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {systemModules.map((module, index) => (
                    <div key={index} className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8 hover:border-yellow-500/30 transition-all duration-300">
                      <h4 className="text-2xl font-bold text-yellow-400 mb-4">{module.module}</h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">{module.description}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {module.features.map((feature, idx) => (
                          <div key={idx} className="bg-yellow-900/20 px-3 py-2 rounded-lg border border-yellow-800/30">
                            <span className="text-yellow-300 text-sm font-medium">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                  <h4 className="text-2xl font-bold text-yellow-400 mb-8">Project Scope</h4>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h5 className="text-xl font-bold text-yellow-300 mb-6">What's Included</h5>
                      <div className="space-y-3">
                        {[
                          'Role-based dashboards for 10+ user types',
                          'Blueprint upload, versioning, and approval workflows',
                          'Financial planning, approval, and cost tracking',
                          'Daily progress reporting and labor tracking',
                          'Material request handling and procurement interface',
                          'Chat and messaging system for communication',
                          'Legal contract and document storage',
                          'Alerts, notifications, and scheduling tools',
                          'Admin module for user and permission management'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <CheckCircle className="w-5 h-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-300 text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div>
                      <h5 className="text-xl font-bold text-red-400 mb-6">Future Enhancements</h5>
                      <div className="space-y-3">
                        {[
                          'Real-time GPS tracking and drone integration',
                          'Integration with external financial software',
                          'AI-based decision making and predictive analytics',
                          'Full-fledged HR payroll systems',
                          'Advanced reporting and business intelligence',
                          'IoT device integration for site monitoring'
                        ].map((item, idx) => (
                          <div key={idx} className="flex items-start space-x-3">
                            <Clock className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" />
                            <p className="text-gray-300 text-sm">{item}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Technical Tab */}
            {activeTab === 'technical' && (
              <div className="space-y-12">
                <div className="text-center mb-12">
                  <h3 className="text-3xl font-bold text-yellow-400 mb-4">Technical Architecture</h3>
                  <p className="text-gray-400 text-lg">Modern, scalable technology stack for enterprise construction management</p>
                </div>
                
                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-6">Frontend Stack</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/30">
                        <span className="font-semibold text-yellow-400">Framework</span>
                        <span className="text-gray-300">React.js</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          React is chosen for building interactive user interfaces with reusable components, efficient state management, 
                          and dynamic rendering using virtual DOM. Strong community support and compatibility with RESTful APIs.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
                    <h4 className="text-2xl font-bold text-yellow-400 mb-6">Backend Stack</h4>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between p-4 bg-yellow-900/20 rounded-lg border border-yellow-800/30">
                        <span className="font-semibold text-yellow-400">Framework</span>
                        <span className="text-gray-300">Spring Boot</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          Spring Boot provides a robust, scalable backend with built-in security, dependency injection, and RESTful API support.    
                          Integrates well with relational databases and supports microservices architecture.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                  <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800/50 rounded-2xl p-8">
  <h4 className="text-2xl font-bold text-yellow-400 mb-6">Database</h4>
                    <div className="space-y-4">
<div className="flex items-center justify-between p-4 bg-teal-900/20 rounded-lg border border-teal-800/30">
                        <span className="font-semibold text-yellow-400">Database</span>
                        <span className="text-gray-300">MySQL</span>
                      </div>
                      <div className="bg-gray-800/50 rounded-lg p-4">
                        <p className="text-gray-300 text-sm leading-relaxed">
                          MySQL is a reliable relational database for structured data storage, complex queries, and transactions.
                          Supports ACID properties, indexing, and scalability for handling large datasets typical in construction projects.
                        </p>
                      </div>
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


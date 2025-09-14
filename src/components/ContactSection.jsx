import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, ArrowRight, AlertCircle } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [focusedField, setFocusedField] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [emailJSLoaded, setEmailJSLoaded] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Replace these with your actual EmailJS credentials
  const EMAILJS_SERVICE_ID = 'service_pvhfsjp';
  const EMAILJS_TEMPLATE_ID = 'template_w471djv';
  const EMAILJS_PUBLIC_KEY = 'EzEOemqIzsDPbswEk';

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  // Mouse tracking for interactive effects - matching projects section
  useEffect(() => {
    const handleMouseMove = (e) => {
      const rect = document.getElementById('contact-section')?.getBoundingClientRect();
      if (rect) {
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100
        });
      }
    };

    const section = document.getElementById('contact-section');
    if (section) {
      section.addEventListener('mousemove', handleMouseMove);
      return () => section.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  // Load EmailJS script
  useEffect(() => {
    const loadEmailJS = () => {
      if (window.emailjs) {
        window.emailjs.init(EMAILJS_PUBLIC_KEY);
        setEmailJSLoaded(true);
        return;
      }

      const script = document.createElement('script');
      script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
      script.onload = () => {
        if (window.emailjs) {
          window.emailjs.init(EMAILJS_PUBLIC_KEY);
          setEmailJSLoaded(true);
        }
      };
      script.onerror = () => {
        setError('Failed to load email service. Please try again later.');
      };
      document.head.appendChild(script);
    };

    loadEmailJS();
  }, [EMAILJS_PUBLIC_KEY]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
    setError('');
  };

  // EmailJS Submit Function
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    // Basic validation
    if (!formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()) {
      setError('Please fill in all required fields.');
      setIsSubmitting(false);
      return;
    }

    // Check if EmailJS is loaded
    if (!emailJSLoaded || !window.emailjs) {
      setError('Email service is still loading. Please try again in a moment.');
      setIsSubmitting(false);
      return;
    }

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: 'Shashini',
        reply_to: formData.email
      };

      const response = await window.emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams,
        EMAILJS_PUBLIC_KEY
      );

      if (response.status === 200) {
        setIsSubmitted(true);
        // Reset form after 5 seconds
        setTimeout(() => {
          setIsSubmitted(false);
          setFormData({ name: '', email: '', subject: '', message: '' });
        }, 5000);
      } else {
        throw new Error('Failed to send email');
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      if (error.text && error.text.includes('service')) {
        setError('Email service configuration error. Please contact me directly via email.');
      } else if (error.text && error.text.includes('template')) {
        setError('Email template error. Please contact me directly via email.');
      } else if (error.message && error.message.includes('network')) {
        setError('Network error. Please check your connection and try again.');
      } else {
        setError('Failed to send message. Please try again or contact me directly via email.');
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  const socialLinks = [
    { icon: Github, href: 'https://github.com/ShashiniMadhu', label: 'GitHub' },
    { icon: Linkedin, href: 'https://www.linkedin.com/in/shashini-madushika-965b01319?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app', label: 'LinkedIn' },
  ];

  return (
    <section id="contact-section" className="py-16 md:py-20 bg-black relative overflow-hidden">
      {/* Enhanced background elements with mouse interaction - matching projects section */}
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

      {/* Interactive grid pattern - matching projects section */}
      <div 
        className="absolute inset-0 opacity-[0.08] transition-opacity duration-300"
        style={{
          backgroundImage: 'linear-gradient(rgba(219,39,119,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.1) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          transform: `translate(${mousePosition.x * 0.005}px, ${mousePosition.y * 0.005}px)`
        }}
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Enhanced Section Header - matching projects section style */}
        <div className={`text-center mb-12 md:mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          <div className="flex items-center justify-center space-x-4 mb-6">
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-r from-transparent via-pink-500 to-pink-600 animate-shimmer"></div>
            <span className="text-pink-400 font-semibold tracking-wider text-sm uppercase relative">
              Let's Work Together
              <div className="absolute -bottom-1 left-0 w-full h-px bg-pink-300 animate-pulse"></div>
            </span>
            <div className="w-8 md:w-12 h-0.5 bg-gradient-to-l from-transparent via-pink-500 to-pink-600 animate-shimmer"></div>
          </div>
          
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-6 relative">
            Get In{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-pink-300 to-rose-400 relative inline-block animate-gradient-text">
              Touch
              <div className="absolute -bottom-2 left-0 w-full h-1 bg-gradient-to-r from-pink-200/20 via-pink-300/30 to-rose-200/20 rounded-full animate-slide-in"></div>
            </span>
          </h2>
          
          <p className="text-lg md:text-xl text-gray-400 max-w-3xl mx-auto leading-relaxed font-light">
            Ready to bring your ideas to life? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 md:gap-16 items-start">
          {/* Enhanced Contact Info */}
          <div className={`space-y-8 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, creative projects, or potential collaborations. 
                Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible!
              </p>
            </div>

            {/* Enhanced Direct Contact Info */}
            <div className="space-y-6">
              <h4 className="text-white font-semibold mb-4 text-xl">Direct Contact</h4>
              <div className="space-y-4">
                <a 
                  href="mailto:shashinimadushika413@gmail.com" 
                  className="group flex items-center space-x-4 p-4 bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-800/60 hover:border-pink-500/50 transition-all duration-300 hover:transform hover:scale-[1.02]"
                >
                  <div className="p-3 bg-pink-600/20 rounded-xl group-hover:bg-pink-600/30 transition-colors duration-300">
                    <Mail size={24} className="text-pink-400" />
                  </div>
                  <div>
                    <p className="text-white font-medium">Email</p>
                    <p className="text-gray-400 group-hover:text-pink-300 transition-colors duration-300">
                      shashinimadushika413@gmail.com
                    </p>
                  </div>
                </a>
              </div>
            </div>

            {/* Enhanced Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-6 text-xl">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group p-6 bg-gray-900/70 backdrop-blur-sm rounded-2xl border border-gray-800/60 hover:border-pink-500/50 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-translate-y-2 shadow-xl hover:shadow-pink-900/25"
                      title={social.label}
                    >
                      <IconComponent size={28} className="group-hover:scale-110 transition-transform duration-300" />
                      {/* Hover glow effect */}
                      <div 
                        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                        style={{
                          background: `radial-gradient(circle at center, rgba(219, 39, 119, 0.05) 0%, transparent 70%)`
                        }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Enhanced Contact Form */}
          <div className={`relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="group bg-gray-900/70 backdrop-blur-sm rounded-2xl p-6 md:p-8 border border-gray-800/60 hover:border-pink-500/50 transition-all duration-500 shadow-2xl hover:shadow-pink-900/25 relative overflow-hidden">
              {/* Enhanced hover glow effect */}
              <div 
                className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                style={{
                  background: `radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, rgba(219, 39, 119, 0.03) 0%, transparent 50%)`
                }}
              />

              {!isSubmitted ? (
                <div className="space-y-6 relative z-10">
                  <div className="mb-6">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Send Me a Message</h3>
                    <p className="text-gray-400 text-lg">Fill out the form below and I'll get back to you soon!</p>
                    {!emailJSLoaded && (
                      <div className="mt-3 text-sm text-yellow-400 flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
                        Loading email service...
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-xl flex items-start space-x-3 animate-pulse backdrop-blur-sm">
                      <AlertCircle className="text-red-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-300 text-sm font-medium">Error</p>
                        <p className="text-red-200 text-sm">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative group/input">
                        <label className="block text-white font-semibold mb-3">
                          Name <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('name')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                            focusedField === 'name' 
                              ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10 transform scale-[1.02]' 
                              : 'border-gray-700 hover:border-gray-600 group-hover/input:border-gray-600'
                          }`}
                          placeholder="Your Name"
                        />
                        {focusedField === 'name' && (
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      
                      <div className="relative group/input">
                        <label className="block text-white font-semibold mb-3">
                          Email <span className="text-pink-400">*</span>
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('email')}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                            focusedField === 'email' 
                              ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10 transform scale-[1.02]' 
                              : 'border-gray-700 hover:border-gray-600 group-hover/input:border-gray-600'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {focusedField === 'email' && (
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative group/input">
                      <label className="block text-white font-semibold mb-3">
                        Subject <span className="text-pink-400">*</span>
                      </label>
                      <input
                        type="text"
                        name="subject"
                        value={formData.subject}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('subject')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 backdrop-blur-sm ${
                          focusedField === 'subject' 
                            ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10 transform scale-[1.02]' 
                            : 'border-gray-700 hover:border-gray-600 group-hover/input:border-gray-600'
                        }`}
                        placeholder="Project Discussion, Collaboration, etc."
                      />
                      {focusedField === 'subject' && (
                        <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    <div className="relative group/input">
                      <label className="block text-white font-semibold mb-3">
                        Message <span className="text-pink-400">*</span>
                      </label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('message')}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={5}
                        className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none backdrop-blur-sm ${
                          focusedField === 'message' 
                            ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10 transform scale-[1.02]' 
                            : 'border-gray-700 hover:border-gray-600 group-hover/input:border-gray-600'
                        }`}
                        placeholder="Tell me about your project, goals, timeline, budget, and any specific requirements. The more details you provide, the better I can help you!"
                      ></textarea>
                      {focusedField === 'message' && (
                        <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    <button
                      type="button"
                      onClick={handleSubmit}
                      disabled={isSubmitting || !emailJSLoaded || !formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()}
                      className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg relative overflow-hidden group/btn ${
                        isSubmitting || !emailJSLoaded || !formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()
                          ? 'bg-gray-600 cursor-not-allowed text-gray-300' 
                          : 'bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 hover:scale-[1.02] hover:-translate-y-1 shadow-pink-600/30 hover:shadow-pink-600/50 hover:shadow-xl text-white'
                      }`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-pink-700 to-pink-800 transform -translate-x-full group-hover/btn:translate-x-0 transition-transform duration-500"></div>
                      
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin relative z-10"></div>
                          <span className="relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                          <span className="relative z-10">Send Message</span>
                          <ArrowRight className="w-4 h-4 opacity-70 group-hover/btn:translate-x-1 transition-transform duration-300 relative z-10" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 space-y-6 relative z-10">
                  <div className="w-20 h-20 bg-gradient-to-br from-green-600/30 to-green-500/20 rounded-full flex items-center justify-center mx-auto animate-pulse backdrop-blur-sm border border-green-500/30 shadow-xl shadow-green-900/20">
                    <CheckCircle className="text-green-400 w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-400 text-lg">
                      Thanks for reaching out! I've received your message and will get back to you within 24 hours.
                    </p>
                    <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 mt-6 border border-gray-700/50">
                      <p className="text-sm text-gray-300 leading-relaxed">
                        <strong className="text-white">What's next?</strong><br />
                        I'll review your message and respond with next steps or any follow-up questions. 
                        Keep an eye on your inbox!
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements - matching projects section style */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-pink-700 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-10 w-1.5 h-1.5 bg-pink-800 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-600 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-pink-700 rounded-full animate-pulse opacity-50" style={{animationDelay: '3s'}}></div>

      {/* Enhanced Styles - matching projects section animations */}
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

export default ContactSection;
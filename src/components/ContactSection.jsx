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
    <section id="contact-section" className="py-20 bg-black relative overflow-hidden">
      {/* Dark pink accent elements - matching your sections */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-950/30 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-pink-900/20 rounded-full blur-2xl -translate-x-1/2 translate-y-1/2"></div>
      </div>

      {/* Subtle grid pattern - consistent with your other sections */}
      <div className="absolute inset-0 opacity-3">
        <div className="h-full w-full" style={{
          backgroundImage: 'linear-gradient(rgba(219,39,119,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(219,39,119,0.05) 1px, transparent 1px)',
          backgroundSize: '40px 40px'
        }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Section Header - matching your pattern */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-3 mb-4">
            <div className="w-12 h-0.5 bg-pink-600"></div>
            <span className="text-pink-400 font-medium tracking-wide text-sm uppercase">Let's Work Together</span>
            <div className="w-12 h-0.5 bg-pink-600"></div>
          </div>
          
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6">
            Get In{' '}
            <span className="text-pink-400">Touch</span>
          </h2>
          
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Ready to bring your ideas to life? Let's create something amazing together
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Contact Info */}
          <div className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-3xl font-bold text-white mb-4">Let's Connect</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                I'm always excited to discuss new opportunities, creative projects, or potential collaborations. 
                Whether you have a specific project in mind or just want to explore possibilities, I'd love to hear from you.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Feel free to reach out through any of the channels below, and I'll get back to you as soon as possible!
              </p>
            </div>

            {/* Direct Contact Info */}
            <div className="space-y-4">
              <h4 className="text-white font-semibold mb-4">Direct Contact</h4>
              <div className="space-y-3">
                <a 
                  href="mailto:shashini.madushika@gmail.com" 
                  className="flex items-center space-x-3 text-gray-400 hover:text-pink-400 transition-colors duration-300 group"
                >
                  <div className="p-2 bg-gray-800/50 rounded-lg group-hover:bg-pink-600/20 transition-colors duration-300">
                    <Mail size={20} />
                  </div>
                  <span>shashinimadushika413@gmail.com</span>
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div className="pt-8">
              <h4 className="text-white font-semibold mb-4">Follow Me</h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-4 bg-gray-900/50 rounded-xl border border-gray-800 hover:border-pink-600/50 text-gray-400 hover:text-pink-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1 backdrop-blur-sm group"
                      title={social.label}
                    >
                      <IconComponent size={24} className="group-hover:scale-110 transition-transform duration-300" />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="relative">
            <div className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-800 hover:border-pink-600/50 transition-all duration-500 shadow-2xl">
              {!isSubmitted ? (
                <div className="space-y-6">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-white mb-2">Send Me a Message</h3>
                    <p className="text-gray-400">Fill out the form below and I'll get back to you soon!</p>
                    {!emailJSLoaded && (
                      <div className="mt-2 text-sm text-yellow-400 flex items-center gap-2">
                        <div className="w-3 h-3 border-2 border-yellow-400/30 border-t-yellow-400 rounded-full animate-spin"></div>
                        Loading email service...
                      </div>
                    )}
                  </div>

                  {error && (
                    <div className="p-4 bg-red-900/30 border border-red-700/50 rounded-xl flex items-start space-x-3 animate-pulse">
                      <AlertCircle className="text-red-400 w-5 h-5 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="text-red-300 text-sm font-medium">Error</p>
                        <p className="text-red-200 text-sm">{error}</p>
                      </div>
                    </div>
                  )}
                  
                  <div className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="relative">
                        <label className="block text-white font-semibold mb-2">
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
                          className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                            focusedField === 'name' 
                              ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10' 
                              : 'border-gray-700 hover:border-gray-600'
                          }`}
                          placeholder="Your Name"
                        />
                        {focusedField === 'name' && (
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                      
                      <div className="relative">
                        <label className="block text-white font-semibold mb-2">
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
                          className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                            focusedField === 'email' 
                              ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10' 
                              : 'border-gray-700 hover:border-gray-600'
                          }`}
                          placeholder="your.email@example.com"
                        />
                        {focusedField === 'email' && (
                          <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                        )}
                      </div>
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white font-semibold mb-2">
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
                        className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 ${
                          focusedField === 'subject' 
                            ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        placeholder="Project Discussion, Collaboration, etc."
                      />
                      {focusedField === 'subject' && (
                        <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white font-semibold mb-2">
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
                        className={`w-full px-4 py-4 bg-gray-800/50 border rounded-xl text-white placeholder-gray-500 focus:outline-none transition-all duration-300 resize-none ${
                          focusedField === 'message' 
                            ? 'border-pink-400 bg-gray-800/70 shadow-lg shadow-pink-400/10' 
                            : 'border-gray-700 hover:border-gray-600'
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
                      className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg relative overflow-hidden group ${
                        isSubmitting || !emailJSLoaded || !formData.name.trim() || !formData.email.trim() || !formData.subject.trim() || !formData.message.trim()
                          ? 'bg-gray-600 cursor-not-allowed text-gray-300' 
                          : 'bg-pink-600 hover:bg-pink-700 hover:scale-[1.02] shadow-pink-600/30 hover:shadow-pink-600/50 hover:shadow-xl text-white'
                      }`}
                    >
                      <div className="absolute inset-0 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                      
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                          <span className="relative z-10">Sending...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                          <span className="relative z-10">Send Message</span>
                          <ArrowRight className="w-4 h-4 opacity-70 group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        </>
                      )}
                    </button>
                  </div>

                  <p className="text-xs text-gray-500 text-center mt-4">
                    Your information is secure and will only be used to respond to your inquiry.
                  </p>
                </div>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto animate-pulse">
                    <CheckCircle className="text-green-400 w-12 h-12" />
                  </div>
                  <div className="space-y-4">
                    <h3 className="text-3xl font-bold text-white mb-2">Message Sent Successfully! 🎉</h3>
                    <p className="text-gray-400 text-lg">
                      Thanks for reaching out! I've received your message and will get back to you within 24 hours.
                    </p>
                    <div className="bg-gray-800/50 rounded-lg p-4 mt-6">
                      <p className="text-sm text-gray-300">
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

      {/* Floating Elements - matching your other sections */}
      <div className="absolute top-1/4 right-10 w-2 h-2 bg-pink-700 rounded-full animate-pulse"></div>
      <div className="absolute top-3/4 left-10 w-1.5 h-1.5 bg-pink-800 rounded-full animate-pulse" style={{animationDelay: '1s'}}></div>
      <div className="absolute top-1/3 right-1/4 w-1 h-1 bg-pink-600 rounded-full animate-ping opacity-60" style={{animationDelay: '2s'}}></div>
      <div className="absolute bottom-1/3 right-1/3 w-1.5 h-1.5 bg-pink-700 rounded-full animate-pulse opacity-50" style={{animationDelay: '3s'}}></div>
    </section>
  );
};

export default ContactSection;
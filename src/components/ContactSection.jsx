import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, Send, CheckCircle, ArrowRight } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState(null);
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

    const section = document.getElementById('contact-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setIsSubmitted(true);
    setIsSubmitting(false);
    
    // Reset after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', subject: '', message: '' });
    }, 3000);
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
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="relative">
                      <label className="block text-white font-semibold mb-2">Name *</label>
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
                            ? 'border-pink-400 bg-gray-800/70' 
                            : 'border-gray-700 hover:border-gray-600'
                        }`}
                        placeholder="Your Name"
                      />
                      {focusedField === 'name' && (
                        <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                      )}
                    </div>
                    
                    <div className="relative">
                      <label className="block text-white font-semibold mb-2">Email *</label>
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
                            ? 'border-pink-400 bg-gray-800/70' 
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
                    <label className="block text-white font-semibold mb-2">Subject *</label>
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
                          ? 'border-pink-400 bg-gray-800/70' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                      placeholder="Project Discussion"
                    />
                    {focusedField === 'subject' && (
                      <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  <div className="relative">
                    <label className="block text-white font-semibold mb-2">Message *</label>
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
                          ? 'border-pink-400 bg-gray-800/70' 
                          : 'border-gray-700 hover:border-gray-600'
                      }`}
                      placeholder="Tell me about your project, goals, timeline, and any specific requirements..."
                    ></textarea>
                    {focusedField === 'message' && (
                      <div className="absolute -top-1 left-4 w-2 h-2 bg-pink-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  
                  <button
                    type="button"
                    onClick={handleSubmit}
                    disabled={isSubmitting}
                    className={`w-full px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-3 shadow-lg relative overflow-hidden group ${
                      isSubmitting 
                        ? 'bg-gray-600 cursor-not-allowed' 
                        : 'bg-pink-600 hover:bg-pink-700 hover:scale-105 shadow-pink-600/30 hover:shadow-pink-600/40'
                    }`}
                  >
                    <div className="absolute inset-0 bg-pink-700 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                    
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                        <span className="text-white relative z-10">Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 text-white group-hover:translate-x-1 transition-transform duration-300 relative z-10" />
                        <span className="text-white relative z-10">Send Message</span>
                      </>
                    )}
                  </button>
                </div>
              ) : (
                <div className="text-center py-12 space-y-6">
                  <div className="w-20 h-20 bg-green-600/20 rounded-full flex items-center justify-center mx-auto">
                    <CheckCircle className="text-green-400 w-12 h-12" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400">
                      Thanks for reaching out! I'll get back to you within 24 hours.
                    </p>
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
'use client'

import React, { useState } from 'react';

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', formData);
    // Reset form
    setFormData({ name: '', email: '', query: '' });
  };

  return (
    <div className="contact-card">
      <h2 className="contact-title">Get In Touch</h2>
      
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h3 className="contact-subtitle">Send me a message</h3>
          <form onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name" className="form-label">Name</label>
                  <input
                    type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Your name"
                    required
                  />
                </div>
                
            <div className="form-group">
              <label htmlFor="email" className="form-label">Email</label>
                  <input
                    type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="your.email@example.com"
                    required
                  />
                </div>
                
            <div className="form-group full-width">
              <label htmlFor="query" className="form-label">Message</label>
                  <textarea
                id="query"
                name="query"
                value={formData.query}
                onChange={handleInputChange}
                className="form-textarea"
                placeholder="Tell me about your project or inquiry..."
                rows={3}
                    required
              ></textarea>
                </div>
                
            <button type="submit" className="submit-btn">
              Send Message
            </button>
              </form>
        </div>


      </div>
    </div>
  );
};

export default ContactSection; 
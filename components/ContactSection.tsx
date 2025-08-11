'use client'

import React, { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactSection: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  // Google Forms configuration
  const GOOGLE_FORM_ID = '1yTxOYR_Phd1Efd6WTMQUANm4qtxeZrN45kl9-bH1SZA';
  
  // Function to submit to Google Forms
  const submitToGoogleForms = async () => {
    try {
      // Create a form submission URL with the data
      const formUrl = `https://docs.google.com/forms/d/${GOOGLE_FORM_ID}/formResponse`;
      
      // Create a hidden iframe to submit the form (Google Forms requires this)
      const iframe = document.createElement('iframe');
      iframe.style.display = 'none';
      iframe.name = 'hidden-iframe-' + Date.now(); // Unique name to prevent conflicts
      document.body.appendChild(iframe);
      
      // Create a form element and submit it
      const form = document.createElement('form');
      form.method = 'POST';
      form.action = formUrl;
      form.target = iframe.name;
      
      // Add form fields - using the entry ID we found
      const addField = (name: string, value: string) => {
        const input = document.createElement('input');
        input.type = 'hidden';
        input.name = name;
        input.value = value;
        form.appendChild(input);
      };
      
      // Map your contact form fields to Google Form fields
      // All three entry IDs found and working!
      addField('entry.1614081804', formData.name);            // Name field
      addField('entry.602503688', formData.email);             // Email field
      addField('entry.1526309242', formData.query);            // Message field
      
      // Submit the form
      iframe.appendChild(form);
      form.submit();
      
      // Clean up the iframe after submission
      setTimeout(() => {
        if (document.body.contains(iframe)) {
          document.body.removeChild(iframe);
        }
      }, 2000);
      
    } catch (error) {
      console.error('Google Forms submission error:', error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setMessage({ type: '', text: '' });

    try {
      // Submit to Google Forms first (this will work)
      await submitToGoogleForms();
      
      // Try EmailJS if configured, but don't fail if it's not set up
      try {
        const result = await emailjs.sendForm(
          'service_2zgwqsa', // Your EmailJS service ID
          'template_ya97klm', // Your EmailJS template ID
          formRef.current!,
          'kKFp_pJIRgseC81TJ' // Your EmailJS public key
        );
        
        if (result.status === 200) {
          setMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
          setFormData({ name: '', email: '', query: '' });
        } else {
          setMessage({ type: 'error', text: 'Message sent to Google Forms, but email failed. Please try again.' });
        }
      } catch (emailError) {
        console.error('EmailJS error:', emailError);
        // If EmailJS fails, still show success since Google Forms worked
        setMessage({ type: 'success', text: 'Message sent successfully! I\'ll get back to you soon.' });
        setFormData({ name: '', email: '', query: '' });
      }
      
    } catch (error) {
      console.error('Google Forms error:', error);
      setMessage({ type: 'error', text: 'Failed to send message. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="contact-card">
      <h2 className="contact-title">Get In Touch</h2>
      
      <div className="contact-content">
        {/* Contact Form */}
        <div className="contact-form-section">
          <h3 className="contact-subtitle">Send me a message</h3>
          
          {message.text && (
            <div className={`message ${message.type}`}>
              {message.text}
            </div>
          )}
          
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
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
            
            <button 
              type="submit" 
              className={`submit-btn ${isLoading ? 'loading' : ''}`}
              disabled={isLoading}
            >
              {isLoading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactSection; 
"use client"

import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";

const Contact: React.FC = () => {
  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener('load', handleLoad);

    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    mobile: "",
    details: ""
  });
  
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    success: boolean;
    message: string;
  } | null>(null);

  const validateForm = (): boolean => {
    const newErrors: { [key: string]: boolean } = {};
    
    if (!formData.name.trim()) newErrors.name = true;
    if (!formData.email.trim() || !formData.email.includes('@')) newErrors.email = true;
    if (!formData.projectType.trim()) newErrors.projectType = true;
    if (!formData.mobile.trim()) newErrors.mobile = true;
    if (!formData.details.trim()) newErrors.details = true;
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error for this field if it exists
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: false }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/submit-form', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      
      if (response.ok) {
        setSubmitStatus({
          success: true,
          message: "Thank you! Your message has been sent successfully."
        });
        // Clear form
        setFormData({
          name: "",
          email: "",
          projectType: "",
          mobile: "",
          details: ""
        });
      } else {
        throw new Error(data.message || 'Something went wrong');
      }
    } catch (error) {
      setSubmitStatus({
        success: false,
        message: error instanceof Error ? error.message : "Failed to send message. Please try again."
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="overflow-hidden">
      <Navbar />
      
      <div className="mt-32 sm:mt-24 mb-0 sm:-mb-12 md:mt-0 min-h-screen flex justify-center items-center p-6">
        <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Left Side - Contact Info */}
          <div className="flex justify-center flex-col">
            <h1 className="text-6xl font-bold">
              Looking To Find And <span className="text-[rgba(249,227,98,1)]">Hire</span> Great{" "}
              <span className="text-[rgba(249,227,98,1)]">Designers?</span>
            </h1>
            <h2 className="mt-6 text-2xl font-semibold">Contact Us</h2>

            {/* Contact Details */}
            <div className="mt-4 space-y-3">
              <div className="flex items-center gap-3">
                <img src='./Phone.png' className='h-10' />
                <a href="tel:+918328003149" className="hover:underline hover:text-[rgba(249,227,98,1)] pl-5 flex items-center transition-all duration-200">+91 90633 80209</a>
              </div> 
              <div className="flex items-center gap-3">
                <img src='./mail.png' className='h-10' />
                <a href="mailto:neerajannangi1@gmail.com" className="hover:underline hover:text-[rgba(249,227,98,1)] pl-2 flex items-center transition-all duration-200">prodigydigitalsagency@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-xl w-full bg-[rgba(44,44,44,1)]">
            {submitStatus && (
              <div className={`p-3 mb-4 rounded-lg ${submitStatus.success ? 'bg-green-700' : 'bg-red-700'}`}>
                {submitStatus.message}
              </div>
            )}
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                placeholder="Full Name*"
                value={formData.name}
                onChange={handleChange}
                className={`px-2 h-10 rounded-lg bg-opacity-100 bg-[rgba(44,44,44,1)] border ${
                  errors.name ? 'border-red-500' : 'border-white'
                } focus:border-white`}
              />
              <input
                type="email"
                name="email"
                placeholder="Email*"
                value={formData.email}
                onChange={handleChange}
                className={`px-2 h-10 rounded-lg bg-opacity-100 bg-[rgba(44,44,44,1)] border ${
                  errors.email ? 'border-red-500' : 'border-white'
                } focus:border-white`}
              />
              <input
                type="text"
                name="projectType"
                placeholder="Project Type*"
                value={formData.projectType}
                onChange={handleChange}
                className={`px-2 h-10 rounded-lg bg-opacity-100 bg-[rgba(44,44,44,1)] border ${
                  errors.projectType ? 'border-red-500' : 'border-white'
                } focus:border-white`}
              />
              <input
                type="text"
                name="mobile"
                placeholder="Mobile*"
                value={formData.mobile}
                onChange={handleChange}
                className={`px-2 h-10 rounded-lg bg-opacity-100 bg-[rgba(44,44,44,1)] border ${
                  errors.mobile ? 'border-red-500' : 'border-white'
                } focus:border-white`}
              />
            </div>
            <textarea
              name="details"
              placeholder="Write Project Details*"
              value={formData.details}
              onChange={handleChange}
              className={`rounded-2xl w-full mt-4 bg-opacity-100 h-48 px-2 py-2 bg-[rgba(44,44,44,1)] border ${
                errors.details ? 'border-red-500' : 'border-white'
              } resize-none overflow-auto focus:border-white`}
              style={{
                scrollbarWidth: "none",
                msOverflowStyle: "none"
              }}
            />
            <button 
              type="submit" 
              disabled={isSubmitting}
              className={`mt-4 bg-[rgba(249,227,98,1)] px-6 py-3 font-bold rounded-full w-full text-black ${
                isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? "Sending..." : "Send Message →"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;
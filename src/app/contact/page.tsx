"use client"

import React, { useState } from "react";
import emailjs from "emailjs-com";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { useEffect } from "react";


const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    projectType: "",
    mobile: "",
    details: "",
  });
  useEffect(() => {
    // Check if the browser supports scrollRestoration
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    // Define a handler to scroll to the top on page load
    const handleLoad = () => {
      window.scrollTo(0, 0);
    };

    // Listen for the load event
    window.addEventListener('load', handleLoad);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener('load', handleLoad);
    };
  }, []);
  const [errors, setErrors] = useState<{ [key: string]: boolean }>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Check for empty fields
    let newErrors: { [key: string]: boolean } = {};
    Object.keys(formData).forEach((key) => {
      if (!formData[key as keyof typeof formData].trim()) {
        newErrors[key] = true;
      }
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // Send email via EmailJS
    emailjs.send(
      "service_ilzqc5e", // Replace with your EmailJS Service ID
      "template_dzubpke", // Replace with your EmailJS Template ID
      formData,
      "gshehYehGnSTsMhHn" // Replace with your EmailJS User ID
    )
    .then(() => {
      alert("Message sent successfully!");
      setFormData({ name: "", email: "", projectType: "", mobile: "", details: "" });
      setErrors({});
    })
    .catch((error) => {
      console.error("Email sending failed:", error);
      alert("Failed to send message. Please try again.");
    });
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
                <a href="tel:+918328003149" className="hover:underline hover:text-[rgba(249,227,98,1)] pl-9 flex items-center transition-all duration-200">+91 8328003149</a>
              </div> 
              <div className="flex items-center gap-3">
                <img src='./mail.png' className='h-10' />
                <a href="mailto:neerajannangi1@gmail.com" className="hover:underline hover:text-[rgba(249,227,98,1)] pl-6 flex items-center transition-all duration-200">neerajannangi1@gmail.com</a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <form onSubmit={handleSubmit} className="p-8 rounded-xl w-full bg-[rgba(44,44,44,1)]">
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
            <button type="submit" className="mt-4 bg-[rgba(249,227,98,1)] px-6 py-3 font-bold rounded-full w-full text-black">
              Send Message →
            </button>
          </form>

        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Contact;

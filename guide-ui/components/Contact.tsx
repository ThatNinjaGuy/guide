"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import "@/styles/Contact.css";
import { CONTACT_EMAIL } from "@/constants/constants";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // TODO: Implement form submission logic
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleEmailClick = () => {
    window.location.href = `mailto:${CONTACT_EMAIL}`;
  };

  return (
    <div className="contact">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <div className="contact-content">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>
              Have questions about our mentorship programs? We're here to help!
            </p>
            <div className="contact-details">
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <p>{CONTACT_EMAIL}</p>
                <i
                  className="fas fa-paper-plane"
                  onClick={handleEmailClick}
                  style={{ cursor: "pointer", marginLeft: "10px" }}
                  title="Send Email"
                ></i>
              </div>
              {/* <div className="contact-item">
                <i className="fas fa-phone"></i>
                <p>+91 9110091875</p>
              </div> */}
              {/* <div className="contact-item">
                <i className="fas fa-location-dot"></i>
                <p>India</p>
              </div> */}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

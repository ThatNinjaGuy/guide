"use client";

import React, { useState, ChangeEvent, FormEvent } from "react";
import { submitContactForm } from "@/lib/apis/contact";
import toast from "react-hot-toast";
import "@/styles/Contact.css";
import { CONTACT_EMAIL } from "@/constants/constants";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const toastStyles = {
  style: {
    background: "var(--background-paper)",
    color: "var(--text-secondary)",
    border: "1px solid var(--border-main)",
    padding: "16px",
    fontSize: "0.9rem",
    maxWidth: "350px",
    boxShadow: "var(--shadow-sm)",
  },
  duration: 3000,
  position: "top-right" as const,
};

function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await submitContactForm(formData);

      if (response.success) {
        toast.success(
          "Thank you for reaching out! Our team will get back to you soon.",
          toastStyles
        );

        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
        });
      } else {
        toast.error("Failed to send message. Please try again later.", {
          ...toastStyles,
          duration: 4000,
        });
      }
    } catch (error) {
      toast.error("Something went wrong. Please try again later.", {
        ...toastStyles,
        duration: 4000,
      });
    } finally {
      setIsSubmitting(false);
    }
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
                  className="fas fa-mailbox"
                  onClick={handleEmailClick}
                  style={{
                    cursor: "pointer",
                    marginLeft: "10px",
                    fontSize: "1.2rem",
                    color: "var(--primary-main)",
                  }}
                  title="Send Email"
                ></i>
              </div>
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

            <button
              type="submit"
              disabled={isSubmitting}
              className={isSubmitting ? "submitting" : ""}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Sending...
                </>
              ) : (
                "Send Message"
              )}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;

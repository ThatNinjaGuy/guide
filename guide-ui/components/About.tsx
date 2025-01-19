"use client";

import React from "react";
import "@/styles/About.css";

export default function About() {
  return (
    <div className="about">
      <div className="about-container">
        <h1>About MentorGuide</h1>
        <section className="mission-section">
          <h2>Our Mission</h2>
          <p>
            We connect aspiring individuals with experienced mentors to help
            them achieve their personal and professional goals. Our platform
            provides carefully curated guidance packages and personalized
            mentorship opportunities.
          </p>
        </section>

        <section className="values-section">
          <h2>Our Values</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3>Excellence</h3>
              <p>
                We strive to provide the highest quality mentorship experience.
              </p>
            </div>
            <div className="value-item">
              <h3>Accessibility</h3>
              <p>Making professional guidance accessible to everyone.</p>
            </div>
            <div className="value-item">
              <h3>Innovation</h3>
              <p>Continuously improving our platform and services.</p>
            </div>
          </div>
        </section>

        <section className="team-section">
          <h2>Our Team</h2>
          <p>
            Our team consists of experienced professionals, career counselors,
            and industry experts dedicated to helping you succeed in your
            journey.
          </p>
        </section>
      </div>
    </div>
  );
}

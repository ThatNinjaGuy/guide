// guide-ui/src/components/WhyChooseUs.js
import React from "react";
import "./WhyChooseUs.css"; // Import the new CSS file

function WhyChooseUs() {
  return (
    <section className="why-choose-us">
      <h2>Why Choose Our Platform?</h2>
      <div className="features-grid">
        <div className="feature-card">
          <i className="fas fa-user-check"></i>
          <h3>Verified Mentors</h3>
          <p>
            All our mentors are thoroughly vetted and experienced professionals
          </p>
        </div>
        <div className="feature-card">
          <i className="fas fa-comments"></i>
          <h3>Personalized Guidance</h3>
          <p>Get customized advice tailored to your specific needs and goals</p>
        </div>
        <div className="feature-card">
          <i className="fas fa-clock"></i>
          <h3>Flexible Scheduling</h3>
          <p>Book sessions at times that work best for your schedule</p>
        </div>
      </div>
    </section>
  );
}

export default WhyChooseUs;

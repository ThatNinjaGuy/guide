import React from "react";

function HeroSection({ searchQuery, setSearchQuery, handleSearch }) {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Find Your Perfect Academic Mentor</h1>
        <p className="hero-subtitle">
          Connect with experienced mentors who can guide you through your
          academic and career journey
        </p>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="What kind of guidance are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Find Mentors</button>
        </form>
      </div>
      <div className="hero-stats">
        <div className="stat-item">
          <span className="stat-number">500+</span>
          <span className="stat-label">Expert Mentors</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">10k+</span>
          <span className="stat-label">Students Guided</span>
        </div>
        <div className="stat-item">
          <span className="stat-number">95%</span>
          <span className="stat-label">Success Rate</span>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

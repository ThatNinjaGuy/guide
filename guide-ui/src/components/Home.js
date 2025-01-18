import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductBundle from "./ProductBundle";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Simulated API response
      const response = {
        json: () => [
          {
            id: 1,
            title: "College Application Success Bundle",
            description:
              "Complete guidance for college applications, essays, and interviews",
            price: "$299",
            image: "/images/college.jpg",
            features: [
              "Essay Review",
              "Interview Prep",
              "Application Strategy",
            ],
            mentors: 3,
            duration: "3 months",
          },
          // ... other bundles
        ],
      };
      const data = await response.json();
      navigate("/search-results", { state: { results: data } });
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const featuredBundles = [
    {
      id: 1,
      title: "College Application Success",
      description: "Expert guidance for college applications and essays",
      price: "$299",
      image: "/images/college.jpg",
      features: ["Essay Review", "Interview Prep", "Application Strategy"],
      mentors: 3,
      duration: "3 months",
      category: "College Prep",
    },
    {
      id: 2,
      title: "STEM Career Guidance",
      description: "Specialized mentoring for STEM career paths",
      price: "$249",
      image: "/images/stem.jpg",
      features: ["Career Planning", "Industry Insights", "Skills Assessment"],
      mentors: 5,
      duration: "2 months",
      category: "Career",
    },
    // Add more relevant bundles
  ];

  return (
    <div className="home">
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

      <section className="categories-section">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          {[
            "College Prep",
            "Career Guidance",
            "Academic Support",
            "Test Prep",
            "Skills Development",
            "Research Guidance",
          ].map((category) => (
            <div key={category} className="category-card">
              <h3>{category}</h3>
              <button
                onClick={() => navigate(`/search-results?category=${category}`)}
              >
                Explore
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="featured-bundles">
        <h2>Featured Guidance Packages</h2>
        <div className="bundles-grid">
          {featuredBundles.map((bundle) => (
            <ProductBundle key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <h2>Why Choose Our Platform?</h2>
        <div className="features-grid">
          <div className="feature-card">
            <i className="fas fa-user-check"></i>
            <h3>Verified Mentors</h3>
            <p>
              All our mentors are thoroughly vetted and experienced
              professionals
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-comments"></i>
            <h3>Personalized Guidance</h3>
            <p>
              Get customized advice tailored to your specific needs and goals
            </p>
          </div>
          <div className="feature-card">
            <i className="fas fa-clock"></i>
            <h3>Flexible Scheduling</h3>
            <p>Book sessions at times that work best for your schedule</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;

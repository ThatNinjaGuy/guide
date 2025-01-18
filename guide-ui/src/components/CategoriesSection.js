import React from "react";
import { useNavigate } from "react-router-dom";

function CategoriesSection() {
  const navigate = useNavigate();

  const categories = [
    "College Prep",
    "Career Guidance",
    "Academic Support",
    "Test Prep",
    "Skills Development",
    "Research Guidance",
  ];

  return (
    <section className="categories-section">
      <h2>Browse by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
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
  );
}

export default CategoriesSection;

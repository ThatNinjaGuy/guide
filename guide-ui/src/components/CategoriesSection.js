import React from "react";
import { useNavigate } from "react-router-dom";
import "./CategoriesSection.css";

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
          <div
            key={category}
            className="category-card"
            tabIndex="0"
            onClick={() => navigate(`/search-results?category=${category}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                navigate(`/search-results?category=${category}`);
            }}
            role="button"
            aria-label={`Explore ${category}`}
          >
            <h3>{category}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;

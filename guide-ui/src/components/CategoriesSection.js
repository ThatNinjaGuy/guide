import React from "react";
import "./CategoriesSection.css";

function CategoriesSection({ handleSearch }) {
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
            onClick={() => handleSearch("", [], [], category)}
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

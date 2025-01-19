import React from "react";
import "./CategoriesSection.css";
import { categories } from "../data/categories";

function CategoriesSection({ handleSearch }) {
  return (
    <section className="categories-section">
      <h2>Browse by Category</h2>
      <div className="categories-grid">
        {categories.map((category) => (
          <div
            key={category.id}
            className="category-card"
            tabIndex="0"
            onClick={() => handleSearch("", [], [], category.name)}
            role="button"
            aria-label={`Explore ${category.name}`}
          >
            <h3>{category.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default CategoriesSection;

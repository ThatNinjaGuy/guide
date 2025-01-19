"use client";

import React from "react";
import "@/styles/CategoriesSection.css";
import { useCategories } from "../hooks/useCategories";

interface Category {
  id: string;
  name: string;
}

interface CategoriesSectionProps {
  handleSearch: (
    query: string,
    universities: string[],
    experience: string[],
    category: string[]
  ) => void;
}

function CategoriesSection({ handleSearch }: CategoriesSectionProps) {
  const { categories, loading } = useCategories();

  if (loading) {
    return (
      <section className="categories-section">
        <h2>Browse by Category</h2>
        <div className="categories-grid">
          <p>Loading categories...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="categories-section">
      <h2>Browse by Category</h2>
      <div className="categories-grid">
        {categories.map((category: Category) => (
          <div
            key={category.id}
            className="category-card"
            tabIndex={0}
            onClick={() => handleSearch("", [], [], [category.name])}
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

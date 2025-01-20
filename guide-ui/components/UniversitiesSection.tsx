"use client";

import React from "react";
import "@/styles/UniversitiesSection.css";
import { useUniversities } from "@/hooks/useUniversities";

interface University {
  id: string;
  name: string;
}

interface UniversitiesSectionProps {
  handleSearch: (
    query: string,
    universities: string[],
    experiences: string[],
    categories: string[]
  ) => void;
}

function UniversitiesSection({ handleSearch }: UniversitiesSectionProps) {
  const { universities, loading } = useUniversities();

  if (loading) {
    return (
      <section className="universities-section">
        <h2>Browse by Universities</h2>
        <div className="universities-grid">
          <p>Loading universities...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="universities-section">
      <h2>Browse by Universities</h2>
      <div className="universities-grid">
        {universities.map((university: University) => (
          <div
            key={university.id}
            className="university-card"
            tabIndex={0}
            onClick={() => handleSearch("", [university.name], [], [])}
            role="button"
            aria-label={`Explore ${university.name}`}
          >
            <h3>{university.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UniversitiesSection;

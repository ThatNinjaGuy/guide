import React from "react";
import "./UniversitiesSection.css";
import { useUniversities } from "../hooks/useUniversities";

function UniversitiesSection({ handleSearch }) {
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
        {universities.map((university) => (
          <div
            key={university.id}
            className="university-card"
            tabIndex="0"
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

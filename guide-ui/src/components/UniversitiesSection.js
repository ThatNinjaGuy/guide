import React from "react";
import "./UniversitiesSection.css";
import { universities } from "../data/universities";

function UniversitiesSection({ handleSearch }) {
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

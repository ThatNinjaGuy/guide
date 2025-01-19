import React from "react";
import "./UniversitiesSection.css";

function UniversitiesSection({ handleSearch }) {
  const universities = [
    "Harvard University",
    "Stanford University",
    "MIT",
    "University of Oxford",
    "University of Cambridge",
    "Caltech",
    "Yale University",
    "Princeton University",
    "Columbia University",
    "Cornell University",
  ];

  return (
    <section className="universities-section">
      <h2>Browse by Universities</h2>
      <div className="universities-grid">
        {universities.map((university) => (
          <div
            key={university}
            className="university-card"
            tabIndex="0"
            onClick={() => handleSearch("", [university], [], [])}
            role="button"
            aria-label={`Explore ${university}`}
          >
            <h3>{university}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default UniversitiesSection;

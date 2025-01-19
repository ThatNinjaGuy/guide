import React from "react";
import { useNavigate } from "react-router-dom";
import "./UniversitiesSection.css";

function UniversitiesSection() {
  const navigate = useNavigate();

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
            onClick={() => navigate(`/search-results?university=${university}`)}
            onKeyDown={(e) => {
              if (e.key === "Enter")
                navigate(`/search-results?university=${university}`);
            }}
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

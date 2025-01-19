import React from "react";
import "./ExperienceSection.css";

function ExperienceSection({ handleSearch }) {
  const experiences = [
    "Internship",
    "Entry Level",
    "Mid Level",
    "Senior Level",
    "Management",
    "Executive",
  ];

  return (
    <section className="experience-section">
      <h2>Browse by Experience</h2>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <div
            key={experience}
            className="experience-card"
            tabIndex="0"
            onClick={() => handleSearch("", [], [experience], [])}
            role="button"
            aria-label={`Explore ${experience}`}
          >
            <h3>{experience}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

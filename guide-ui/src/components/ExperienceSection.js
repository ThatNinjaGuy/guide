import React from "react";
import "./ExperienceSection.css";
import { useExperiences } from "../hooks/useExperiences";

function ExperienceSection({ handleSearch }) {
  const { experiences, loading } = useExperiences();

  if (loading) {
    return (
      <section className="experience-section">
        <h2>Browse by Experience</h2>
        <div className="experience-grid">
          <p>Loading experiences...</p>
        </div>
      </section>
    );
  }

  return (
    <section className="experience-section">
      <h2>Browse by Experience</h2>
      <div className="experience-grid">
        {experiences.map((experience) => (
          <div
            key={experience.id}
            className="experience-card"
            tabIndex="0"
            onClick={() => handleSearch("", [], [experience.name], [])}
            role="button"
            aria-label={`Explore ${experience.name}`}
          >
            <h3>{experience.name}</h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ExperienceSection;

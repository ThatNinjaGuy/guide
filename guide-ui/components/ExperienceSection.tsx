"use client";

import React from "react";
import "@/styles/ExperienceSection.css";
import { useExperiences } from "../hooks/useExperiences";

interface Experience {
  id: string;
  name: string;
}

interface ExperienceSectionProps {
  handleSearch: (
    query: string,
    universities: string[],
    experience: string[],
    category: string[]
  ) => Promise<void>;
}

function ExperienceSection({ handleSearch }: ExperienceSectionProps) {
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
        {experiences.map((experience: Experience) => (
          <div
            key={experience.id}
            className="experience-card"
            tabIndex={0}
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

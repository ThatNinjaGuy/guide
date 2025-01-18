import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedBundles from "./FeaturedBundles";
import WhyChooseUs from "./WhyChooseUs";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Simulated API response
      const response = {
        json: () => [
          {
            id: 1,
            title: "College Application Success Bundle",
            description:
              "Complete guidance for college applications, essays, and interviews",
            price: "$299",
            image: "/images/college.jpg",
            features: [
              "Essay Review",
              "Interview Prep",
              "Application Strategy",
            ],
            mentors: 3,
            duration: "3 months",
          },
          // ... other bundles
        ],
      };
      const data = await response.json();
      navigate("/search-results", { state: { results: data } });
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  const featuredBundles = [
    {
      id: 1,
      title: "College Application Success",
      description: "Expert guidance for college applications and essays",
      price: "$299",
      image: "/images/college.jpg",
      features: ["Essay Review", "Interview Prep", "Application Strategy"],
      mentors: 3,
      duration: "3 months",
      category: "College Prep",
    },
    {
      id: 2,
      title: "STEM Career Guidance",
      description: "Specialized mentoring for STEM career paths",
      price: "$249",
      image: "/images/stem.jpg",
      features: ["Career Planning", "Industry Insights", "Skills Assessment"],
      mentors: 5,
      duration: "2 months",
      category: "Career",
    },
    // Add more relevant bundles
  ];

  return (
    <div className="home">
      <HeroSection
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        handleSearch={handleSearch}
      />
      <CategoriesSection />
      <FeaturedBundles featuredBundles={featuredBundles} />
      <WhyChooseUs />
    </div>
  );
}

export default Home;

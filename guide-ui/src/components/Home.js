import React from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedBundles from "./FeaturedBundles";
import WhyChooseUs from "./WhyChooseUs";
import UniversitiesSection from "./UniversitiesSection";
import ExperienceSection from "./ExperienceSection";
import { fetchSearchResults } from "../apis/search";

function Home() {
  const navigate = useNavigate();

  const handleSearch = async (
    searchQuery,
    universities,
    experience,
    category
  ) => {
    try {
      console.log(searchQuery, universities, experience, category);
      const data = await fetchSearchResults(
        searchQuery,
        universities,
        experience,
        category
      );
      console.log(data);
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
    {
      id: 3,
      title: "Graduate School Preparation",
      description: "Comprehensive guidance for graduate school applications",
      price: "$349",
      image: "/images/grad-school.jpg",
      features: ["Research Proposal", "Statement of Purpose", "GRE Prep"],
      mentors: 4,
      duration: "4 months",
      category: "Graduate Studies",
    },
    {
      id: 4,
      title: "Business School Admissions",
      description: "Strategic guidance for MBA applications",
      price: "$399",
      image: "/images/mba.jpg",
      features: ["MBA Essays", "GMAT Prep", "Interview Coaching"],
      mentors: 3,
      duration: "3 months",
      category: "Business",
    },
    {
      id: 5,
      title: "Medical School Journey",
      description: "Complete support for medical school aspirants",
      price: "$449",
      image: "/images/medical.jpg",
      features: ["MCAT Strategy", "Clinical Experience", "Application Review"],
      mentors: 4,
      duration: "6 months",
      category: "Medical",
    },
    {
      id: 6,
      title: "International Student Guide",
      description: "Specialized support for international applicants",
      price: "$329",
      image: "/images/international.jpg",
      features: [
        "Visa Guidance",
        "Cultural Preparation",
        "English Proficiency",
      ],
      mentors: 3,
      duration: "4 months",
      category: "International",
    },
  ];

  return (
    <div className="home">
      <HeroSection handleSearch={handleSearch} />
      <UniversitiesSection handleSearch={handleSearch} />
      <FeaturedBundles featuredBundles={featuredBundles} />
      <CategoriesSection handleSearch={handleSearch} />
      <ExperienceSection handleSearch={handleSearch} />
      <WhyChooseUs />
    </div>
  );
}

export default Home;

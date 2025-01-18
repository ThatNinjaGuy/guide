import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import ProductBundle from "./ProductBundle";
import "./Home.css";

function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = async (e) => {
    e.preventDefault();
    try {
      // Replace with your actual API endpoint
      // TODO: Replace with actual API call
      // const response = await fetch(`/api/search?query=${searchQuery}`);
      const response = {
        json: () => [
          {
            id: 1,
            title: "Career Development Bundle",
            description:
              "Comprehensive career planning and development guidance",
            price: "$199",
            image: "/images/career.jpg",
          },
          {
            id: 2,
            title: "College Application Package",
            description: "Expert guidance for college applications and essays",
            price: "$249",
            image: "/images/college.jpg",
          },
          {
            id: 3,
            title: "Interview Preparation Bundle",
            description: "Mock interviews and preparation techniques",
            price: "$179",
            image: "/images/interview.jpg",
          },
          {
            id: 4,
            title: "Study Skills Enhancement",
            description: "Learn effective study methods and time management",
            price: "$149",
            image: "/images/study.jpg",
          },
          {
            id: 5,
            title: "Professional Networking Package",
            description: "Build your professional network and personal brand",
            price: "$219",
            image: "/images/networking.jpg",
          },
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
      title: "Career Guidance Package",
      description: "Complete career counseling with experienced mentors",
      price: "$199",
      image: "/images/career-guidance.jpg",
    },
    {
      id: 2,
      title: "Academic Excellence Bundle",
      description: "Academic mentoring and study planning",
      price: "$149",
      image: "/images/academic.jpg",
    },
    {
      id: 3,
      title: "Career Guidance Package",
      description: "Complete career counseling with experienced mentors",
      price: "$199",
      image: "/images/career-guidance.jpg",
    },
    {
      id: 4,
      title: "Academic Excellence Bundle",
      description: "Academic mentoring and study planning",
      price: "$149",
      image: "/images/academic.jpg",
    },
    // Add more bundles as needed
  ];

  return (
    <div className="home">
      <section className="hero-section">
        <h1>Find Your Perfect Mentor</h1>
        <form onSubmit={handleSearch} className="search-form">
          <input
            type="text"
            placeholder="What kind of guidance are you looking for?"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button type="submit">Search</button>
        </form>
      </section>

      <section className="featured-bundles">
        <h2>Featured Guidance Packages</h2>
        <div className="bundles-grid">
          {featuredBundles.map((bundle) => (
            <ProductBundle key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;

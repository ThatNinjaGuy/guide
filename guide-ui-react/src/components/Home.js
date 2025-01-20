import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Home.css";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedBundles from "./FeaturedBundles";
import WhyChooseUs from "./WhyChooseUs";
import UniversitiesSection from "./UniversitiesSection";
import ExperienceSection from "./ExperienceSection";
import { fetchSearchResults } from "../apis/search";
import { fetchFeaturedBundles } from "../apis/products";

function Home() {
  const navigate = useNavigate();
  const [featuredBundles, setFeaturedBundles] = useState([]);

  useEffect(() => {
    const loadFeaturedBundles = async () => {
      try {
        const bundles = await fetchFeaturedBundles();
        setFeaturedBundles(bundles);
      } catch (error) {
        console.error("Error fetching featured bundles:", error);
      }
    };

    loadFeaturedBundles();
  }, []);

  const handleSearch = async (
    searchQuery,
    universities,
    experience,
    category
  ) => {
    try {
      const data = await fetchSearchResults(
        searchQuery,
        universities,
        experience,
        category
      );
      navigate("/search-results", { state: { results: data } });
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

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

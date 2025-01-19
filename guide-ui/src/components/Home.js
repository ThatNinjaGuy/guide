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
import { products } from "../data/products"; // Import the products list

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

  // Filter products to get only bundles
  const featuredBundles = products.filter((product) => product.products);

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

"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import "@/styles/Home.css";
import HeroSection from "./HeroSection";
import CategoriesSection from "./CategoriesSection";
import FeaturedBundles from "./FeaturedBundles";
import WhyChooseUs from "./WhyChooseUs";
import UniversitiesSection from "./UniversitiesSection";
import ExperienceSection from "./ExperienceSection";
import { fetchSearchResults } from "@/lib/apis/search";
import { fetchFeaturedBundles } from "@/lib/apis/products";

interface Bundle {
  id: string;
  title: string;
  description: string;
  price: number;
}

export default function Home() {
  const router = useRouter();
  const [featuredBundles, setFeaturedBundles] = useState<Bundle[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadFeaturedBundles = async () => {
      setIsLoading(true);
      try {
        const bundles = await fetchFeaturedBundles();
        console.log("bundles", bundles);
        setFeaturedBundles(bundles || []);
      } catch (error) {
        console.error("Error fetching featured bundles:", error);
        setFeaturedBundles([]);
      } finally {
        setIsLoading(false);
      }
    };

    loadFeaturedBundles();
  }, []);

  const handleSearch = async (
    searchQuery: string,
    universities: string[],
    experience: string[],
    categories: string[]
  ) => {
    try {
      console.log(searchQuery, universities, experience, categories);
      const data = await fetchSearchResults(
        searchQuery,
        universities,
        experience,
        categories[0] || ""
      );
      console.log(data);
      router.push({
        pathname: "/search-results",
        query: { results: JSON.stringify(data) },
      });
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };

  return (
    <div className="home">
      <HeroSection handleSearch={handleSearch} />
      <UniversitiesSection handleSearch={handleSearch} />
      <FeaturedBundles
        featuredBundles={featuredBundles}
        isLoading={isLoading}
      />
      <CategoriesSection handleSearch={handleSearch} />
      <ExperienceSection handleSearch={handleSearch} />
      <WhyChooseUs />
    </div>
  );
}

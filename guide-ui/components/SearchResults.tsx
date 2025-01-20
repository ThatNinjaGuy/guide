"use client";

import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import ProductBundle from "./ProductBundle";
import { fetchSearchResults } from "@/lib/apis/search";
import "@/styles/SearchResults.css";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  products?: Product[]; // Added to match bundled products structure
}

interface SearchResult {
  searchQuery: string;
  universities: string[];
  experience: string[];
  category: string[];
  normalProducts: Product[];
  bundledProducts: Product[];
}

function SearchResults() {
  const searchParams = useSearchParams();
  const [results, setResults] = useState<SearchResult | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      const query = searchParams.get("q") || "";
      const universities = searchParams.getAll("universities") || [];
      const experience = searchParams.getAll("experience") || [];
      const category = searchParams.getAll("category") || [];

      try {
        const searchResults = await fetchSearchResults(
          query,
          universities,
          experience,
          category
        );
        setResults(searchResults as SearchResult);
      } catch (error) {
        console.error("Error fetching search results:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchResults();
  }, [searchParams]);

  if (loading) {
    return <div className="search-results">Loading...</div>;
  }

  if (!results) {
    return <div className="search-results">No results found</div>;
  }

  return (
    <div className="search-results">
      <div className="products-section">
        <h2>Recommended Packages</h2>
        <div className="results-grid">
          {results.bundledProducts.map((bundle: Product) => (
            <ProductBundle key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>

      <div className="products-section">
        <h2>Available Products</h2>
        <div className="results-grid">
          {results.normalProducts.map((product: Product) => (
            <ProductBundle key={product.id} bundle={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

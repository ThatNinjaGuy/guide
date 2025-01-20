import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductBundle from "./ProductBundle";
import { fetchSearchResults } from "../lib/apis/search"; // Adjust the import path as needed
import "./SearchResults.css";

function SearchResults() {
  const [searchParams] = useSearchParams();
  const [results, setResults] = useState({
    normalProducts: [],
    bundledProducts: [],
  });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchResults = async () => {
      try {
        setIsLoading(true);
        const searchQuery = searchParams.get("q") || "";
        const universities = searchParams.get("universities")?.split(",") || [];
        const experience = searchParams.get("experience")?.split(",") || [];
        const categories = searchParams.get("categories")?.split(",") || [];

        const data = await fetchSearchResults(
          searchQuery,
          universities,
          experience,
          categories
        );

        setResults({
          normalProducts: data.normalProducts || [],
          bundledProducts: data.bundledProducts || [],
        });
      } catch (error) {
        console.error("Error fetching search results:", error);
        setResults({ normalProducts: [], bundledProducts: [] });
      } finally {
        setIsLoading(false);
      }
    };

    fetchResults();
  }, [searchParams]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="search-results">
      <div className="products-section">
        <h2>Recommended Packages</h2>
        <div className="results-grid">
          {results.bundledProducts.map((bundle) => (
            <ProductBundle key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>

      <div className="products-section">
        <h2>Available Products</h2>
        <div className="results-grid">
          {results.normalProducts.map((product) => (
            <ProductBundle key={product.id} bundle={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

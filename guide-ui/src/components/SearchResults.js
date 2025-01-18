import React from "react";
import { useLocation } from "react-router-dom";
import ProductBundle from "./ProductBundle";
import "./SearchResults.css";

function SearchResults() {
  const location = useLocation();
  const results = location.state?.results || [];

  return (
    <div className="search-results">
      <h2>Recommended Packages</h2>
      <div className="results-grid">
        {results.map((result) => (
          <ProductBundle key={result.id} bundle={result} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

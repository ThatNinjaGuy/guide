import React from "react";
import { useLocation } from "react-router-dom";
import ProductBundle from "./ProductBundle";
import "./SearchResults.css";

function SearchResults() {
  const location = useLocation();
  const normalProducts = location.state?.results?.normalProducts || [];
  const bundledProducts = location.state?.results?.bundledProducts || [];

  return (
    <div className="search-results">
      <h2>Recommended Packages</h2>
      <div className="results-grid">
        {bundledProducts.map((bundle) => (
          <ProductBundle key={bundle.id} bundle={bundle} />
        ))}
      </div>
      <h2>Available Products</h2>
      <div className="results-grid">
        {normalProducts.map((product) => (
          <ProductBundle key={product.id} bundle={product} />
        ))}
      </div>
    </div>
  );
}

export default SearchResults;

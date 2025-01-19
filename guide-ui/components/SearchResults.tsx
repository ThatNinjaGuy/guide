import React from "react";
import { useRouter } from "next/router";
import ProductBundle from "./ProductBundle";
import "@/styles/SearchResults.css";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface SearchResultsProps {
  results?: {
    normalProducts: Product[];
    bundledProducts: Product[];
  };
}

function SearchResults() {
  const router = useRouter();
  const results = router.query.results
    ? JSON.parse(router.query.results as string)
    : null;
  const normalProducts = results?.normalProducts || [];
  const bundledProducts = results?.bundledProducts || [];

  return (
    <div className="search-results">
      <div className="products-section">
        <h2>Recommended Packages</h2>
        <div className="results-grid">
          {bundledProducts.map((bundle: Product) => (
            <ProductBundle key={bundle.id} bundle={bundle} />
          ))}
        </div>
      </div>

      <div className="products-section">
        <h2>Available Products</h2>
        <div className="results-grid">
          {normalProducts.map((product: Product) => (
            <ProductBundle key={product.id} bundle={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default SearchResults;

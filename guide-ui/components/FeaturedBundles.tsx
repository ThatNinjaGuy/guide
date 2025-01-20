import React from "react";
import ProductBundle from "./ProductBundle";
import "@/styles/FeaturedBundles.css";

interface Bundle {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface FeaturedBundlesProps {
  featuredBundles: Bundle[];
  isLoading: boolean;
}

function FeaturedBundles({ featuredBundles, isLoading }: FeaturedBundlesProps) {
  if (isLoading) {
    return (
      <section className="featured-bundles">
        <h2>Featured Bundles</h2>
        <div className="bundles-grid">
          <p>Loading bundles...</p>
        </div>
      </section>
    );
  }

  if (!featuredBundles || featuredBundles.length === 0) {
    return null; // Or return a "No bundles available" message
  }

  return (
    <section className="featured-bundles">
      <h2>Featured Bundles</h2>
      <div className="bundles-grid">
        {featuredBundles.map((bundle: Bundle) => (
          <ProductBundle key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedBundles;

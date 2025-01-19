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
}

function FeaturedBundles({ featuredBundles }: FeaturedBundlesProps) {
  return (
    <section className="featured-bundles">
      <h2>Featured Guidance Packages</h2>
      <div className="bundles-grid">
        {featuredBundles.map((bundle: Bundle) => (
          <ProductBundle key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedBundles;

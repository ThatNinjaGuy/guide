import React from "react";
import ProductBundle from "./ProductBundle";
import "./FeaturedBundles.css";

function FeaturedBundles({ featuredBundles }) {
  return (
    <section className="featured-bundles">
      <h2>Featured Guidance Packages</h2>
      <div className="bundles-grid">
        {featuredBundles.map((bundle) => (
          <ProductBundle key={bundle.id} bundle={bundle} />
        ))}
      </div>
    </section>
  );
}

export default FeaturedBundles;

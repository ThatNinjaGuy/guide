"use client";

import React from "react";
import { useRouter } from "next/navigation";
import "@/styles/ProductBundle.css";

interface Bundle {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface ProductBundleProps {
  bundle: Bundle;
}

function ProductBundle({ bundle }: ProductBundleProps) {
  const router = useRouter();

  return (
    <div className="product-bundle">
      <div className="bundle-details">
        <div className="bundle-content">
          <h3>{bundle.title}</h3>
          <p>{bundle.description}</p>
        </div>
        <div>
          <div className="price">{bundle.price}</div>
          <button
            className="select-button"
            onClick={() => router.push(`/product/${bundle.id}`)}
          >
            Select Package
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBundle;

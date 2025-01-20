"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "@/styles/ProductDetails.css";
import logo from "@/assets/images/logo512.png";
import ProductBundle from "./ProductBundle";
import { fetchProductById, fetchProductsByIds } from "@/lib/apis/products";

interface Product {
  id: string;
  title: string;
  description: string;
  price: number;
  image?: string;
  products?: string[];
}

interface ProductDetailsProps {
  id: string;
}

export default function ProductDetails({ id }: ProductDetailsProps) {
  const [productBundle, setProductBundle] = useState<Product | null>(null);
  const [includedProducts, setIncludedProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        setIsLoading(true);
        setError(null);

        const product = await fetchProductById(id);
        setProductBundle(product);

        setIncludedProducts([]);

        if (product && product.products && product.products.length > 0) {
          const included = await fetchProductsByIds(product.products);
          setIncludedProducts(included as Product[]);
        } else {
          setIncludedProducts([]);
        }
      } catch (error) {
        console.error("Error loading product details:", error);
        setError("Failed to load product details. Please try again later.");
      } finally {
        setIsLoading(false);
      }
    };

    loadProductDetails();
  }, [id]);

  if (isLoading) {
    return <div className="loading-state">Loading product details...</div>;
  }

  if (error) {
    return <div className="error-state">{error}</div>;
  }

  if (!productBundle) {
    return <div className="error-state">Product not found</div>;
  }

  return (
    <div className="product-details-container">
      <div className="product-row">
        <div className="product-column">
          <div className="product-row-a">
            <Image
              src={productBundle.image || logo}
              alt={productBundle.title}
              className="product-image"
              width={512}
              height={512}
            />
            <h2 className="product-title">{productBundle.title}</h2>
          </div>
          <div className="product-row-b">
            <p className="product-description">{productBundle.description}</p>
          </div>
        </div>
        <div className="pricing-column">
          <div className="pricing-info">
            <div className="pricing">
              <h3>Price: {productBundle.price}</h3>
            </div>
            <button className="purchase-button">Purchase Package</button>
          </div>
        </div>
      </div>
      {includedProducts.length > 0 && (
        <div className="included-sessions">
          <h3>Included Mentorships</h3>
          <div className="product-cards">
            {includedProducts.map((product: Product) => (
              <ProductBundle key={product.id} bundle={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

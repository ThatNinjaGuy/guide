"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import "./ProductDetails.css";
import logo from "@/assets/images/logo512.png";
import ProductBundle from "./ProductBundle";
import { fetchProductById, fetchProductsByIds } from "@/lib/apis/products";

interface ProductDetailsProps {
  id: string;
}

export default function ProductDetails({ id }: ProductDetailsProps) {
  const [productBundle, setProductBundle] = useState<any>(null);
  const [includedProducts, setIncludedProducts] = useState([]);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const product = await fetchProductById(id);
        setProductBundle(product);

        setIncludedProducts([]);

        if (product && product.products && product.products.length > 0) {
          const included = await fetchProductsByIds(product.products);
          setIncludedProducts(included as any);
        }
      } catch (error) {
        console.error("Error loading product details:", error);
      }
    };

    loadProductDetails();
  }, [id]);

  if (!productBundle) {
    return <p>Loading product details...</p>;
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
            {includedProducts.map((product: any) => (
              <ProductBundle key={product.id} bundle={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

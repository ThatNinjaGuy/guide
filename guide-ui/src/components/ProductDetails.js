import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import logo from "../assets/images/logo512.png"; // Ensure this path is correct
import ProductBundle from "./ProductBundle"; // Import the ProductBundle component
import { products } from "../data/products"; // Import the products array

function ProductDetails() {
  const { id } = useParams();

  // Find the product by id
  const productBundle = products.find((product) => product.id === id);

  // If the product is a bundle, find the included products
  const includedProducts = productBundle.products
    ? productBundle.products.map((productId) =>
        products.find((product) => product.id === productId)
      )
    : [];

  return (
    <div className="product-details-container">
      <div className="product-row">
        <div className="product-column">
          <div className="product-row-a">
            <img
              src={productBundle.image || logo} // Use the product image or default logo
              alt={productBundle.title}
              className="product-image"
            />
            <h2 className="product-title">{productBundle.title}</h2>
          </div>
          <div className="product-row-b">
            <p className="product-description">{productBundle.description}</p>
          </div>
        </div>
        <div className="pricing-column">
          <div className="pricing-info">
            {/* <h2 className="pricing-title">{productBundle.title}</h2> */}
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
            {includedProducts.map((product) => (
              <ProductBundle key={product.id} bundle={product} />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default ProductDetails;

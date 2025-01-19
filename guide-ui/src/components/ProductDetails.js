import React from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import logo from "../assets/images/logo512.png"; // Ensure this path is correct
import ProductBundle from "./ProductBundle"; // Import the ProductBundle component

function ProductDetails() {
  const { id } = useParams();

  // Updated dummy data for prototyping
  const productBundle = {
    id: id,
    title: "1-on-1 Mentorship Package",
    description: `A comprehensive package offering personalized mentorship sessions.
                  This package is designed to provide in-depth knowledge and hands-on experience.`,
    image: logo, // Use the imported logo image
    products: [
      {
        id: "session1",
        title: "Session 1: Introduction to Programming",
        description: "Learn the basics of programming with hands-on examples.",
        price: "Included",
      },
      {
        id: "session2",
        title: "Session 2: Advanced JavaScript",
        description: "Dive deep into JavaScript and learn advanced concepts.",
        price: "Included",
      },
      {
        id: "session3",
        title: "Session 3: React Basics",
        description:
          "Understand the fundamentals of React and build your first app.",
        price: "Included",
      },
    ],
    price: "$299",
  };

  return (
    <div className="product-details-container">
      <div className="product-info">
        <div className="product-row">
          <img
            src={productBundle.image}
            alt={productBundle.title}
            className="product-image"
          />
          <div className="product-text">
            <h2>{productBundle.title}</h2>
            <p>{productBundle.description}</p>
          </div>
          <div className="pricing-info">
            <div className="pricing">
              <h3>Price: {productBundle.price}</h3>
            </div>
            <button className="purchase-button">Purchase Package</button>
          </div>
        </div>
      </div>
      <div className="included-sessions">
        <h3>Included Sessions:</h3>
        <div className="product-cards">
          {productBundle.products.map((product) => (
            <ProductBundle key={product.id} bundle={product} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;

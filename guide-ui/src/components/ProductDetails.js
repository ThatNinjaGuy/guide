import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ProductDetails.css";
import logo from "../assets/images/logo512.png"; // Ensure this path is correct
import ProductBundle from "./ProductBundle"; // Import the ProductBundle component
import { fetchProductById, fetchProductsByIds } from "../apis/products";

function ProductDetails() {
  const { id } = useParams();
  const [productBundle, setProductBundle] = useState(null);
  const [includedProducts, setIncludedProducts] = useState([]);

  useEffect(() => {
    const loadProductDetails = async () => {
      try {
        const product = await fetchProductById(id);
        setProductBundle(product);

        if (product && product.products) {
          const included = await fetchProductsByIds(product.products);
          setIncludedProducts(included);
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

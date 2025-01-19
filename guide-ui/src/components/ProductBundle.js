import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductBundle.css";

function ProductBundle({ bundle }) {
  const navigate = useNavigate();

  // Function to format the description
  const formatDescription = (description) => {
    if (description.length > 70) {
      return description.substring(0, 67) + "...";
    }
    return description;
  };

  // Function to format the title
  const formatTitle = (title) => {
    if (title.length > 40) {
      return title.substring(0, 37) + "...";
    }
    return title;
  };

  return (
    <div className="product-bundle">
      {/* <img src={bundle.image} alt={bundle.title} className="bundle-image" /> */}
      <div className="bundle-details">
        <h3>{formatTitle(bundle.title)}</h3>
        <p>{formatDescription(bundle.description)}</p>
        <div className="price">{bundle.price}</div>
        <button
          className="select-button"
          onClick={() => navigate(`/product/${bundle.id}`)}
        >
          Select Package
        </button>
      </div>
    </div>
  );
}

export default ProductBundle;

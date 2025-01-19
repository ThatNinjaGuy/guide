import React from "react";
import { useNavigate } from "react-router-dom";
import "./ProductBundle.css";

function ProductBundle({ bundle }) {
  const navigate = useNavigate();

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
            onClick={() => navigate(`/product/${bundle.id}`)}
          >
            Select Package
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductBundle;

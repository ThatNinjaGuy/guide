import React from "react";
import "./ProductBundle.css";

function ProductBundle({ bundle }) {
  return (
    <div className="product-bundle">
      <img src={bundle.image} alt={bundle.title} />
      <h3>{bundle.title}</h3>
      <p>{bundle.description}</p>
      <div className="price">{bundle.price}</div>
      <button className="select-button">Select Package</button>
    </div>
  );
}

export default ProductBundle;

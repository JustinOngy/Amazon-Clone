import React from "react";
import ProductData from "../components/ProductData";
import "../components/SearchPage.css";

const SearchPage = () => {
  return (
    <div className="search-container">
      {Object.keys(ProductData).map((category) => (
        <div key={category} className="category-container">
          {ProductData[category].map((product) => (
            <div key={product.id} className="product-container">
              <div className="image-bg">
                <img
                  src={product.image}
                  alt={product.name}
                  className="product-image"
                />
              </div>

              <div className="product-details">
                <h3 className="product-name">{product.name}</h3>
                <span className="product-price">
                  ${product.price.toFixed(2)}
                </span>
                <button className="add-to-cart-button">Add to Cart</button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchPage;

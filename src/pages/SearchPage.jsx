import React from "react";
import ProductData from "../components/ProductData";
import { Link } from "react-router-dom";
import "../components/SearchPage.css";

const SearchPage = ({ addToCart }) => {
  return (
    <div className="search-container">
      {Object.keys(ProductData).map((category) => (
        <div key={category} className="category-container">
          {ProductData[category].map((product) => (
            <Link to={`/products/${product.id}`} className="product-link">
              <div key={product.id} className="product-container">
                <div className="image-bg">
                  <img
                    className="product-image"
                    src={product.image}
                    alt={product.name}
                  />
                </div>
                <div className="product-details">
                  <h3 className="product-name">{product.name}</h3>
                  <span className="product-price">
                    ${product.price.toFixed(2)}
                  </span>
                </div>

                <button
                  className="add-to-cart-button"
                  onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </div>
            </Link>
          ))}
        </div>
      ))}
    </div>
  );
};

export default SearchPage;

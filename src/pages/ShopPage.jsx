import React from "react";
import "../components/ShopPage.css";
import ProductList from "../components/ProductList";
import ProductData from "../components/ProductData";

function ShopPage({ addToCart }) {
  return (
    <div>
      <h1 className="big-title">Today's Deals</h1>
      <h2 className="shop-title">Electronics</h2>
      <ProductList products={ProductData.electronics} addToCart={addToCart} />
      <h2 className="shop-title">Movies</h2>
      <ProductList products={ProductData.movies} addToCart={addToCart} />
      <h2 className="shop-title">Apple Earbuds & Accessories</h2>
      <ProductList products={ProductData.apple} addToCart={addToCart} />
      <h2 className="shop-title">Clothing, Shoes & Accessories</h2>
      <ProductList products={ProductData.shoes} addToCart={addToCart} />
    </div>
  );
}

export default ShopPage;

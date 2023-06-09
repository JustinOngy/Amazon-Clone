import React from "react";
import ProductList from "../components/ProductList";
import beats from "../assets/beats.png";
import ring from "../assets/ring.png";
import dot from "../assets/dot.png";
import nike from "../assets/nike.jpeg";
import bonds from "../assets/bonds.jpeg";
import socks from "../assets/socks.jpeg";
import movie1 from "../assets/movie1.jpg";
import movie2 from "../assets/movie2.jpg";
import movie3 from "../assets/movie3.jpg";
import apple1 from "../assets/apple1.jpg";
import apple2 from "../assets/apple2.jpg";
import apple3 from "../assets/apple3.jpg";

function ShopPage({ addToCart }) {
  const electronics = [
    {
      id: 1,
      name: "Beats Studio3 Wireless",
      price: 328.5,
      image: beats,
    },
    {
      id: 2,
      name: "Echo Dot (3rd Gen) smart speaker",
      price: 29.0,
      image: dot,
    },
    {
      id: 3,
      name: "Ring Video Doorbell 3",
      price: 199.0,
      image: ring,
    },
  ];
  const shoes = [
    {
      id: 4,
      name: "Nike Black White Sneaker",
      price: 84.99,
      image: nike,
    },
    {
      id: 5,
      name: "Bonds Men's Underwear Cotton",
      price: 32.95,
      image: bonds,
    },
    {
      id: 6,
      name: "Compression Socks (3 Pairs)",
      price: 12.0,
      image: socks,
    },
  ];
  const movies = [
    {
      id: 7,
      name: "Avatar: The Way of Water",
      price: 36.98,
      image: movie1,
    },
    {
      id: 8,
      name: "Avengers: Endgame",
      price: 32.95,
      image: movie3,
    },
    {
      id: 9,
      name: "JOHN WICK: CHAPTER 4",
      price: 13.88,
      image: movie2,
    },
  ];

  const apple = [
    {
      id: 10,
      name: "Apple Watch SE (2nd Generation)",
      price: 389.0,
      image: apple1,
    },
    {
      id: 11,
      name: "3 in 1 Wireless Charging Station",
      price: 53.99,
      image: apple2,
    },
    {
      id: 12,
      name: "Apple AirPods (3rd Generation)",
      price: 239.0,
      image: apple3,
    },
  ];
  return (
    <div>
      <h1>Today's Deals</h1>
      <h2>Electronics</h2>
      <ProductList products={electronics} addToCart={addToCart} />
      <h2>Movies</h2>
      <ProductList products={movies} addToCart={addToCart} />
      <h2>Apple Earbuds & Accessories</h2>
      <ProductList products={apple} addToCart={addToCart} />
      <h2>Clothing, Shoes & Accessories</h2>
      <ProductList products={shoes} addToCart={addToCart} />
    </div>
  );
}

export default ShopPage;

import "./App.css";
import Header from "./components/Header";
import { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ShopPage from "./pages/ShopPage";
import ProductPage from "./components/ProductPage";
import SearchPage from "./pages/SearchPage";

function App() {
  useEffect(() => {
    const savedCartItems = JSON.parse(localStorage.getItem("cartItems"));

    if (savedCartItems) {
      setCartItems(savedCartItems);
    }
  }, []);

  const [cartItemCount, setCartItemCount] = useState(0);

  const updateCartItemCount = () => {
    setCartItemCount(cartItems.length);
  };

  const [cartItems, setCartItems] = useState([]);

  const addToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);

    if (existingItem) {
      const updatedCartItems = cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );

      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      const newItem = { ...item, quantity: 1 };
      setCartItems((prevItems) => [...prevItems, newItem]);
      localStorage.setItem(
        "cartItems",
        JSON.stringify([...cartItems, newItem])
      );
    }

    updateCartItemCount();
  };

  const removeFromCart = (itemId) => {
    const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    updateCartItemCount();
  };
  useEffect(() => {
    updateCartItemCount();
  }, [cartItems]);

  return (
    <div className="App">
      <Router>
        <Header cartItemCount={cartItemCount} />
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                addToCart={addToCart}
                updateCartItemCount={updateCartItemCount}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <CartPage
                cartItems={cartItems}
                removeFromCart={removeFromCart}
                setCartItems={setCartItems}
              />
            }
          />
          <Route
            path="/Search?"
            element={
              <SearchPage
                addToCart={addToCart}
                updateCartItemCount={updateCartItemCount}
              />
            }
          />

          <Route path="/product/:id" element={<ProductPage />} />
          <Route
            path="/Shop"
            element={
              <ShopPage
                addToCart={addToCart}
                updateCartItemCount={updateCartItemCount}
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

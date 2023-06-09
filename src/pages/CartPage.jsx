import React, { useState } from "react";
import "../components/CartPage.css";
import CheckoutModal from "../components/CheckoutModal";

const Cart = ({ cartItems, removeFromCart, setCartItems }) => {
  const [itemQuantities, setItemQuantities] = useState(
    cartItems.reduce((quantities, item) => {
      quantities[item.id] = item.quantity;
      return quantities;
    }, {})
  );

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity < 0) {
      newQuantity = 0;
    }

    if (newQuantity === 0) {
      const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    } else {
      setItemQuantities((prevState) => ({
        ...prevState,
        [itemId]: newQuantity,
      }));

      const updatedCartItems = cartItems.map((item) =>
        item.id === itemId ? { ...item, quantity: newQuantity } : item
      );
      setCartItems(updatedCartItems);
      localStorage.setItem("cartItems", JSON.stringify(updatedCartItems));
    }
  };
  const totalPrice = cartItems.reduce(
    (total, item) => total + item.price * (itemQuantities[item.id] || 0),
    0
  );

  const handleRemove = (itemId) => {
    removeFromCart(itemId);
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="cart-container">
      <h2>Your Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul className="cart-items">
          {cartItems.map((item, index) => (
            <li key={index} className="cart-item">
              <figure>
                <img src={item.image} alt={item.name} className="item-image" />
              </figure>
              <div className="item-details">
                <h3 className="item-name">{item.name}</h3>
                <p className="item-price">${item.price}</p>
                <div className="quantity-container">
                  <button
                    className="quantity-button"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        (itemQuantities[item.id] || 0) - 1
                      )
                    }>
                    -
                  </button>
                  <span className="quantity">
                    {itemQuantities[item.id] || 0}
                  </span>
                  <button
                    className="quantity-button"
                    onClick={() =>
                      updateQuantity(
                        item.id,
                        (itemQuantities[item.id] || 0) + 1
                      )
                    }>
                    +
                  </button>
                </div>
                <button
                  className="remove-button"
                  onClick={() => handleRemove(item.id)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
      <div className="total-price">
        <p className="total-label">Total:</p>
        <p className="total-amount">${totalPrice.toFixed(2)}</p>
      </div>
      <button className="checkout-button" onClick={openModal}>
        Proceed to Checkout
      </button>
      {isModalOpen && <CheckoutModal closeModal={closeModal} />}
    </div>
  );
};

export default Cart;

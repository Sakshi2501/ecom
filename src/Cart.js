import React, { useState } from 'react';
import './Cart.css'; 

const Cart = ({ cartItems, showCart, setShowCart }) => {
  const [totalPrice, setTotalPrice] = useState(0);

  // Calculate total price
  const calculateTotalPrice = () => {
    let total = 0;
    cartItems.forEach(item => {
      total += item.price;
    });
    setTotalPrice(total);
  };

  // Handle click on "Show Cart" button
  const handleShowCart = () => {
    calculateTotalPrice();
    setShowCart(!showCart);
  };

  return (
    <div className={`cart ${showCart ? 'open' : ''}`}>
      <button className="show-cart-button" onClick={handleShowCart}>
        {showCart ? 'Hide Cart' : 'Show Cart'}
      </button>
      <div className="cart-items">
        <h2>Cart</h2>
        <ul>
          {cartItems.map(item => (
            <li key={item.id}>
              {item.title} - ${item.price}
            </li>
          ))}
        </ul>
        <p>Total Price: ${totalPrice}</p>
      </div>
    </div>
  );
};

export default Cart;

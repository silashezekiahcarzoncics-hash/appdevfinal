//\src\components\CartSideBar.jsx
import React from "react";
import "./CartSideBar.css";
<<<<<<< HEAD
import { Link, useNavigate } from "react-router-dom";

const CartSidebar = ({ cart, onRemove, computeSubtotal, onClose }) => {
  const navigate = useNavigate();

  const handleSetOrder = () => {
    const isLoggedIn = localStorage.getItem("isLoggedIn") === "true";

    if (!isLoggedIn) {
      alert("You must log in first before setting an order.");
      navigate("/login");
      return;
    }

    navigate("/customerinfo");
  };

  return (
    <div className="cart-sidebar">
      <button className="close-btn" onClick={onClose}>×</button>
=======
import { Link } from "react-router-dom";

const CartSidebar = ({ cart, onRemove, computeSubtotal,onClose  }) => {
  return (
    <div className="cart-sidebar">
       <button className="close-btn" onClick={onClose}>×</button> {/*exp*/}
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
      <h3>Your Cart</h3>

      <div className="cart-items-container">
        <ul className="cart-items">
          {cart.map((item, index) => (
            <li key={index} className="cart-item">
              <img src={item.image} alt={item.name} width="60" />
              <div>
                <p><strong>{item.name}</strong></p>
                <p>Type/Size: {item.selectedSize}</p>

<<<<<<< HEAD
                {item.selectedPieces !== undefined ? (
                  <p>Box Quantity: {item.selectedPieces}</p>
                ) : (
                  item.note && (
                    <p style={{ fontStyle: "italic", color: "#666" }}>
                      {item.note}
                    </p>
                  )
                )}

                <p>Qty: {item.quantity}</p>
                <p>₱{(item.price / item.quantity).toFixed(2)} each</p>
                <p>Total: ₱{item.price.toFixed(2)}</p>
=======
                {/* Show Box Quantity only if available */}
                {item.selectedPieces !== undefined ? (
                  <p>Box Quantity: {item.selectedPieces}</p>
                ) : (
                  item.note && <p style={{ fontStyle: "italic", color: "#666" }}>{item.note}</p>
                )}

                <p>Qty: {item.quantity}</p>
                {/*<p>₱{(item.price / item.quantity).toFixed(2)} each</p>*/}
               {/*} <p>Total: ₱{item.price.toFixed(2)}</p>*/}
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35

                <button className="remove-btn" onClick={() => onRemove(index)}>
                  Remove
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>

      <div className="cart-total">
<<<<<<< HEAD
          <p >
    Subtotal: ₱{computeSubtotal().toFixed(2)}
  </p>    
        <button
          className="checkout-btn"
          disabled={cart.length === 0}
          style={{
            opacity: cart.length === 0 ? 0.5 : 1,
            cursor: cart.length === 0 ? "not-allowed" : "pointer",
            color: "white",
          }}
          onClick={handleSetOrder}
        >
          Set Order
        </button>
=======
        <p style={{ display: "none" }}>
    Subtotal: ₱{computeSubtotal().toFixed(2)}
  </p>    
        
        
        <Link to={cart.length === 0 ? "#" : "/order"}>
          <button
       className="checkout-btn"
       disabled={cart.length === 0}
       style={{ opacity: cart.length === 0 ? 0.5 : 1,
         cursor: cart.length === 0 ? "not-allowed" : "pointer"
         ,color: "white", }}
          >
          Set Order
         </button>
          </Link>
>>>>>>> f337583942063416bf7b0a096a2860fbeadb3e35
      </div>
    </div>
  );
};

export default CartSidebar;

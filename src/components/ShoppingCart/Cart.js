import React from "react";
import "./Cart.css"
import OrderItem from "./OrderItem";

function Cart(){
    return (
      <div className="cart-outer">
        <h1>Your Cart</h1>

        <div className="cart-container">
          <div className="items-list">
            <div className="items-list-header">
              <p>Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
            <hr className="item-list-hr" />
            <OrderItem />
            <OrderItem />
          </div>
          <div className="checkout-container">
            <div className="checkout-inner">
              <h2>Order Summary</h2>
              <hr />
              <div className="checkout-text">
                <p>
                  <span>Subtotal:</span>
                  <span>20</span>
                </p>
                <p>
                  <span>Shipping:</span>
                  <span>$ 0</span>
                </p>
                <a href="#">Add a coupon code</a>
              </div>
              <div className="checkout-total">
                <p>
                  <span className="total">TOTAL</span>
                  <span className="cost">$ 200.00</span>
                </p>
              </div>
              <div className="checkout-button">
                <button className="checkout-btn">CHECKOUT</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Cart

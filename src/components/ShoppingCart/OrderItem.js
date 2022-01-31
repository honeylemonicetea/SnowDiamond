import React from "react";
import {NavLink} from 'react-router-dom'
import './OrderItem.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faTrash} from '@fortawesome/free-solid-svg-icons'



function OrderItem(){
    return (
      <div className="order-item-container">
        <div className="order-item-left">
          <div className="order-img"></div>
          <div className="order-left-text">
            <NavLink to="/">CHUCK TAYLOR ALL STARS HIGH TOP</NavLink>
            <p className="order-color">
              <span>
                <b>Color: </b>
                Black 
              </span>
            </p>
            <p className="order-size">
              <span>
                <b>Size: </b>
                32
              </span>
            </p>
          </div>
        </div>
        <div className="order-item-right">
          <div className="order-price-bin">
            <p className="order-price">
              $<b>2.99</b>
            </p>
            
          </div>
          <div className="add-remove-btns">
            <button className="order-less-btn">-</button>
            <span className="quantity-square">1</span>
            <button className="order-more-btn">+</button>
          </div>
          <FontAwesomeIcon icon={faTrash} />
        </div>
       
      </div>
    );
}

export default OrderItem
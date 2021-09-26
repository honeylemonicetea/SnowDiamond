import React, {useState} from 'react'

import './navbar.css'
import {NavLink, BrowserRouter} from "react-router-dom";
import {faBars, faTimes} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function Navbar(){

    const [burgerOpen, setBurgerOpen] = useState("closed")
    function toggleOpen(){
      if (burgerOpen == 'closed'){
        setBurgerOpen('opened')
        console.log(burgerOpen)
      }
      else{
        setBurgerOpen('closed')
        console.log(burgerOpen);
      }
    }
    return (
      <div className="menu">
        {/* NORMAL */}
        <div className="box">
          <div className="logo item">
            <NavLink to="/home">
              {" "}
              <img src={require("../../../img/diamond.png").default} />
            </NavLink>
          </div>

          <div className="menu-bar item">
            <NavLink to="/home">HOME</NavLink>
            <NavLink to="/shop">SHOP</NavLink>
            <NavLink to="/lookbook">LOOKBOOK</NavLink>
            <NavLink to="/features">FEATURES</NavLink>
            <NavLink to="/pages">PAGES</NavLink>
            <NavLink to="/not-found">BLOG</NavLink>
          </div>
          <div className="icon-bar item">
            <NavLink to="/not-found">
              <img src={require("../../../img/icons8-search.svg").default} />
            </NavLink>
            <NavLink to="/not-found">
              <img
                src={
                  require("../../../img/icons8-heart-outline-60.png").default
                }
              />
            </NavLink>
            <NavLink to="/not-found">
              <img
                src={
                  require("../../../img/icons8-shopping-cart-48.png").default
                }
              />
            </NavLink>
          </div>
        </div>
        {/* burger button */}

        {/* BURGER MENU */}
        <div className="box-burger">
          <div className="top-burger">
            <NavLink to="/home">
              <img
                src={require("../../../img/diamond.png").default}
                className="logo-burger"
              />
             </NavLink>
            <p className="website-name">美人鱼</p>
            {/* <div className="bar-wrapper"> */}
            <FontAwesomeIcon
              icon={burgerOpen == "closed" ? faBars : faTimes}
              size="2x"
              onClick={toggleOpen}
            />
            {/* </div> */}
          </div>

          <div className={`bottom-burger ${burgerOpen}`}>
            <div className="menu-bar-burger item-burger">
              <NavLink to="/home" onClick={toggleOpen}>
                HOME
              </NavLink>
              <NavLink to="/shop" onClick={toggleOpen}>
                SHOP
              </NavLink>
              <NavLink to="/lookbook" onClick={toggleOpen}>
                LOOKBOOK
              </NavLink>
              <NavLink to="/features" onClick={toggleOpen}>
                FEATURES
              </NavLink>
              <NavLink to="/pages" onClick={toggleOpen}>
                PAGES
              </NavLink>
              <NavLink to="/not-found" onClick={toggleOpen}>
                BLOG
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    );
}
export default Navbar

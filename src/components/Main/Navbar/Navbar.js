import React from 'react'

import './navbar.css'
import {NavLink, BrowserRouter} from "react-router-dom";

function Navbar(){
    return(
        <div className="menu">
                <div className="box">
                    <div className="logo item">
                        <NavLink to='/home'> <img src={require("../../../img/logo-15.svg").default}/></NavLink>
                    </div>

                    <div className="menu-bar item">
                        <NavLink to='/home' >HOME</NavLink>
                        <NavLink to='/shop'>SHOP</NavLink>
                        <NavLink to="/lookbook">LOOKBOOK</NavLink>
                        <NavLink to="/features">FEATURES</NavLink>
                        <NavLink to="/pages">PAGES</NavLink>
                        <NavLink to="/not-found">BLOG</NavLink>
                    </div>
                    <div className="icon-bar item">
                        <NavLink to='/not-found'><img src={require("../../../img/icons8-search.svg").default}/></NavLink>
                        <NavLink to='/not-found'><img src={require("../../../img/icons8-heart-outline-60.png").default}/></NavLink>
                        <NavLink to='/not-found'><img src={require("../../../img/icons8-shopping-cart-48.png").default}/></NavLink>
                    </div>
                </div>
        </div>
    )
}
export default Navbar

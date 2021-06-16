import React, {useState} from "react";

import './Header.css'
import {NavLink} from "react-router-dom";


function Header(){

    return(
        <header id="head">
            <div className="text">
                <p className="trend">NEW TREND</p>
                <h1 className="brand">美人鱼</h1>
                <p className="trend">An exclusive selection of this season's trends.</p>
                <button><NavLink to='/shop'>SHOP NOW</NavLink></button>
            </div>

        </header>
    )
}

export default Header
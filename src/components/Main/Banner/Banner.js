import React from "react";
import './Banner.css'
import {NavLink} from 'react-router-dom'

function Banner(){
    return(
        <section className="banner">
        <div className="banner-text">
            <p className="trend">OWN THE DAY</p>
            <h1 className="brand">CREAM SODA</h1>
           
            <button> <NavLink to='/shop'>SHOP COLLECTION</NavLink></button>
        </div>
        <div className="banner-image"/>

    </section>)
}

export default Banner
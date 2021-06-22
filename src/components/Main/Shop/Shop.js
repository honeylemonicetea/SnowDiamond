import React from 'react'
import {NavLink} from 'react-router-dom'
import './shop.css'

function Shop(){
    return(
    <div className='shop-container'>
        <div className='side-menu'>
            <h3>Shop by Category</h3>
            <NavLink to=''>Women</NavLink>
            <NavLink to=''>Men</NavLink>
            <h3>Shop by Product</h3>
            <NavLink to=''> View All</NavLink>
            <NavLink to=''>Dresses</NavLink>
            <NavLink to=''>Tops</NavLink>
            <NavLink to=''>Shirts & Blouses</NavLink>
            <NavLink to=''>Pants</NavLink>
            <NavLink to=''>Cardigans & Sweaters</NavLink>
            <NavLink to=''>Jeans</NavLink>
            <NavLink to=''>Hoodies & Sweatshirts</NavLink>
            <NavLink to=''>Sportswear</NavLink>
            <NavLink to=''>Shoes</NavLink>
            <NavLink to=''>Jumpsuits & Rompers</NavLink>
            <NavLink to=''>Skirts</NavLink>
        </div>
        <div className='item-grid'></div>
    </div>)
}
export default Shop
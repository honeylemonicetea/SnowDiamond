// SHOP ALL ITEMS
// MAKE AN API CALL

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./shop.css";
import ItemCard from "./item-card/ItemCard";
import Spinner from "../Main/GlobalComponents/Spinner";
import {Route} from 'react-router-dom'
import ItemDetail from "./item-detail/ItemDetail";

function Shop(props) {

   useEffect(() => {
     window.scrollTo(0, 0);
   }, []);
  const [clothing, setClothing] = useState([])
  const [loading, setLoading] = useState(false)
  const [time, setTime] = useState("")
  useEffect(() => {
    setLoading(true)
    let startTime = new Date().getTime()
    fetch("https://h-and-m-api.herokuapp.com/clothing")
      .then((result) => result.json())
      .then((result) => {
          setClothing(result)
          setLoading(false)
          let endTime = new Date().getTime()
          let newT = endTime - startTime
          setTime(newT)
      },
      (error)=>{
          console.log(error)
      }
      );
    
  }, []);

  return loading ? (
    <Spinner />
  ) : (
    <div className="shop-container">
      <div className="side-menu side">
        <h3>Shop by Category</h3>
        <NavLink to="shop">View All</NavLink>
        <NavLink to="category/women">Women</NavLink>
        <NavLink to="category/men">Men</NavLink>
        <h3>Shop by Product</h3>
        <NavLink to="shop"> View All</NavLink>
        <NavLink to="category/dresses">Dresses</NavLink>
        <NavLink to="category/tops">Tops</NavLink>
        <NavLink to="category/shirts-blouses">Shirts & Blouses</NavLink>
        <NavLink to="category/pants">Pants</NavLink>
        <NavLink to="category/cardigans-sweaters">Cardigans & Sweaters</NavLink>
        <NavLink to="category/jeans">Jeans</NavLink>
        <NavLink to="category/hoodies-sweatshirts">
          Hoodies & Sweatshirts
        </NavLink>
        <NavLink to="category/sportswear">Sportswear</NavLink>
        <NavLink to="category/shoes">Shoes</NavLink>
        <NavLink to="category/jumpsuits-rompers">Jumpsuits & Rompers</NavLink>
        <NavLink to="category/skirts">Skirts</NavLink>
      </div>

      <div className="item-grid side">
        {clothing.map((e) => (
          <ItemCard
            id={e.id}
            imageA={e.imageA}
            imageB={e.imageB}
            title={e.title}
            price={e.price}
            swatches={e.swatches}
          />
        ))}
      </div>
    </div>
  );
}
export default Shop;

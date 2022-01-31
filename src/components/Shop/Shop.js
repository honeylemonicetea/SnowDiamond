// SHOP ALL ITEMS
// MAKE AN API CALL

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./shop.css";
import ItemCard from "./item-card/ItemCard";
import Spinner from "../Main/GlobalComponents/Spinner";
import Pagination from "../Main/GlobalComponents/Pagination/Pagination";

// import LoadMoreBtn from "../Main/GlobalComponents/LoadMore/LoadMore";
// import ReactPaginate from 'react-paginate';

// const cardsNumber = 6;
// let cardsArray = []


function Shop(props) {

    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const [clothing, setClothing] = useState([])
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState("")
    const [toggleMenu, setToggleMenu] = useState("menu-closed");

    // PAGINATION
    const [currentPage, setcurrentPage] = useState(1)
    const [itemsPerPage, setItemsPerPage] = useState(6)
    // PAGINATION END

    useEffect(() => {
      // fetching items using an async function
      const fetchClothes = async () => {
        setLoading(true);
        const response = await fetch("https://h-and-m-api.herokuapp.com/clothing")
        const resp = await response.json()
        setClothing(resp)
        console.log(clothing[0])
        setLoading(false)
      };
      fetchClothes()
      
      
    }, []);
      const lastItemInd = currentPage * itemsPerPage
      const firstItemInd = lastItemInd - itemsPerPage
      const currentItemInd = clothing.slice(firstItemInd, lastItemInd)
  function closeMenu(){
    if (toggleMenu == 'menu-closed'){
      setToggleMenu('menu-open')
    }
    else if (toggleMenu=='menu-open'){
      setToggleMenu('menu-closed')
    }
  }

  // change page
  const paginate = (pageNumber) => {
     
       window.scrollTo(0, 0);
     
    setcurrentPage(pageNumber)
  }

  return loading ? (
    <Spinner />
  ) : (
    <div className="shop-container">
      <div className={`gray-overlay ${toggleMenu}`} onClick={closeMenu}></div>
      <div className={`side-menu side ${toggleMenu}`}>
        <h3>Shop by Category</h3>
        <NavLink to="/shop">View All</NavLink>
        <NavLink to="category/women">Women</NavLink>
        <NavLink to="category/men">Men</NavLink>
        <h3>Shop by Product</h3>
        <NavLink to="/shop"> View All</NavLink>
        <NavLink to="category/dresses">Dresses</NavLink>
        <NavLink to="category/tops">Tops</NavLink>
        <NavLink to="category/shirts-blouses">Shirts & Blouses</NavLink>
        <NavLink to="category/pants">Pants</NavLink>
        <NavLink to="category/cardigans-sweaters">Cardigans & Sweaters</NavLink>
        <NavLink to="category/jeans">Jeans</NavLink>
        <NavLink to="category/hoodies-sweatshirts">
          Hoodies & Sweatshirts
        </NavLink>
        <NavLink to="category/underwear">Underwear</NavLink>
        <NavLink to="category/sportswear">Sportswear</NavLink>
        <NavLink to="category/shoes">Shoes</NavLink>
        <NavLink to="category/jumpsuits-rompers">Jumpsuits & Rompers</NavLink>
        <NavLink to="category/skirts">Skirts</NavLink>
      </div>
      <button onClick={closeMenu} className="category-menu">
        CATEGORIES
      </button>
      <div className="item-grid side">
        <div className="item-grid-inner">
          {/* currentItemInd */}
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
            {/* <Pagination itemsPerPage={itemsPerPage} totalItems={clothing.length} paginate={paginate}/> */}
       
      </div>
    </div>
  );
}
export default Shop;

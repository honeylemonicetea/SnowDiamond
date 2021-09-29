// SHOP ALL ITEMS
// MAKE AN API CALL

import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./shop.css";
import ItemCard from "./item-card/ItemCard";
import Spinner from "../Main/GlobalComponents/Spinner";

// import LoadMoreBtn from "../Main/GlobalComponents/LoadMore/LoadMore";
// import ReactPaginate from 'react-paginate';

// const cardsNumber = 6;
// let cardsArray = []


function Shop(props) {
  // PAGINATION START
  
    // const perPage = 6
    // let pageNum = 0
    // let pages = 0
    // const [pagesAmount, setpagesAmount] = useState(pages)


  // PAGINATION END



    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);
    const [clothing, setClothing] = useState([])
    const [loading, setLoading] = useState(false)
    const [time, setTime] = useState("")
    const [toggleMenu, setToggleMenu] = useState("menu-closed");
    //  loadmore
    //  const [cardsToShow, setcardsToShow] = useState([])
    //  const [next, setnext] = useState(6)
    // loadmore end


    useEffect(() => {
      setLoading(true)
      let startTime = new Date().getTime()
      fetch("https://h-and-m-api.herokuapp.com/clothing")
        .then((result) => result.json())
        .then((result) => {
            setClothing(result)
            // setpagesAmount(Math.ceil(result.length/perPage))
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
  // LOAD MORE
  // const loopWithSlice = (start, end) => {
  //   const slicedPosts = clothing.slice(start, end);
  //   cardsArray = [...cardsArray, ...slicedPosts];
  //   setcardsToShow(cardsArray);
  // };

  // useEffect(() => {
  //   loopWithSlice(0, cardsNumber);
  // }, []);

  // const handleShowMorePosts = () => {
  //   loopWithSlice(next, next + cardsNumber);
  //   setnext(next + cardsNumber);
  // };

  // pagination FUNCTION START
  // function pageNav(){
  //   let items = clothing.slice(pageNum * perPage, (pageNum + 1) * perPage);
  // }
  
  // PAGINATION FRUNCTION END

  // LOAD MORE END
  function closeMenu(){
    if (toggleMenu == 'menu-closed'){
      setToggleMenu('menu-open')
    }
    else if (toggleMenu=='menu-open'){
      setToggleMenu('menu-closed')
    }
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

        {/* <LoadMoreBtn/> */}
      </div>
    </div>
  );
}
export default Shop;

import React, {useEffect, useState} from "react";
import {useParams} from 'react-router-dom'
import ItemCard from "../item-card/ItemCard";
import {NavLink} from 'react-router-dom'
import Spinner from '../../Main/GlobalComponents/Spinner'

function Category(){
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
     let { category } = useParams();
     const [filteredCat, setFilteredCat] = useState([]);
     const [loading, setLoading] = useState(false);
     const [toggleMenu, setToggleMenu] = useState("menu-closed")

    //  LOADING API
     useEffect(() => {
       setLoading(true);
       
       fetch("https://h-and-m-api.herokuapp.com/clothing")
         .then((result) => result.json())
         .then(
           (result) => {
             console.log(result)
             if (
               category !== "women" &&
               category !== "men" &&
               category !== "kids"
             ) {
               let selected = result.filter((e) => {
                 if (e.category == category) {
                   return e;
                 }
               });
               setFilteredCat(selected);
               setLoading(false);
             } else if (category == "women") {
               let selected = result.filter((e) => {
                 if (e.fashionChoice == "female") {
                   return e;
                 }
               });
               setFilteredCat(selected);
               setLoading(false);
             } else if (category == "men") {
               let selected = result.filter((e) => {
                 if (e.fashionChoice == "male") {
                   return e;
                 }
               });
               setFilteredCat(selected);
               setLoading(false);
             }
             
             
           },
           (error) => {
             console.log(error);
           }
         );
     }, [category]);
     console.log(category)
      function closeMenu() {
        if (toggleMenu == "menu-closed") {
          setToggleMenu("menu-open");
        } else if (toggleMenu == "menu-open") {
          setToggleMenu("menu-closed");
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
          <NavLink to="/category/women">Women</NavLink>
          <NavLink to="/category/men">Men</NavLink>
          <h3>Shop by Product</h3>
          <NavLink to="/shop"> View All</NavLink>
          <NavLink to="/category/dresses">Dresses</NavLink>
          <NavLink to="/category/tops">Tops</NavLink>
          <NavLink to="/category/shirts-blouses">Shirts & Blouses</NavLink>
          <NavLink to="/category/pants">Pants</NavLink>
          <NavLink to="/category/cardigans-sweaters">
            Cardigans & Sweaters
          </NavLink>
          <NavLink to="/category/jeans">Jeans</NavLink>
          <NavLink to="/category/hoodies-sweatshirts">
            Hoodies & Sweatshirts
          </NavLink>
          <NavLink to="/category/sportswear">Sportswear</NavLink>
          <NavLink to="/category/shoes">Shoes</NavLink>
          <NavLink to="/category/jumpsuits-rompers">
            Jumpsuits & Rompers
          </NavLink>
          <NavLink to="/category/skirts">Skirts</NavLink>
        </div>
        <button onClick={closeMenu} className="category-menu">
          open menu
        </button>
        <div className="item-grid side">
          <div className="item-grid-inner">
            {filteredCat.map((e) => (
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
      </div>
    );
}

export default Category
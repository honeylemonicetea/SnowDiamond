import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import GridCards from "./GridCards/GridCards";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterContact from "./FooterContact/FooterContact";
import {useEffect} from 'react'

function Main(){
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    return (
      <div className="Main">
        <Header />
        <GridCards />
        <Banner />
        <FooterContact />
        <FooterCopyright />
      </div>
    );
}

export default Main
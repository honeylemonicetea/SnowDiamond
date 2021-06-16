import React from "react";
import Header from "./Header/Header";
import Banner from "./Banner/Banner";
import Navbar from "./Navbar/Navbar";
import GridCards from "./GridCards/GridCards";
import FooterCopyright from "./FooterCopyright/FooterCopyright";
import FooterContact from "./FooterContact/FooterContact";

function Main(){
    return(
        <div className='Main'>
        <Header/>
        <GridCards/>
        <Banner/>
        <FooterContact/>
        <FooterCopyright/>
        </div>
    )
}

export default Main
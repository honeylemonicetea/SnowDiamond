import React from 'react'
import Gallery from "./Gallery/Gallery";
import Women from "./Women/Women";
import Men from "./Men/Men";
import Collage from "./Collage/Collage";
import './gridCards.css'

function GridCards(){
    return(
        <article id="grid-gal">
            <div className="container">
                <Gallery/>
            </div>
            <div className="container gallery">
                <h1>WOMEN’S FASHION</h1>
                <h4>Shop our new arrivals from established brands</h4>
                <Women/>
            </div>
            <div className="container gallery">
                <h1>MEN'S FASHION</h1>
                <h4>Shop our new arrivals from established brands</h4>
                <Men/>
            </div>
            <div className="container gallery">
                <h1>AVONE STYLES</h1>
                <h4>Choose Your Favorite Color</h4>
                <Collage/>
            </div>
        </article>
    )
}

export default GridCards
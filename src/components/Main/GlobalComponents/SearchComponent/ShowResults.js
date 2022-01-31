import React from "react";
import ItemCard from "../../../Shop/item-card/ItemCard";

function ShowResult(props){
    return(
        <div className="show-results-container">
            <div className="item-grid side">
                <div className="item-grid-inner">
                {/* currentItemInd */}
                {props.clothes.map((e) => (
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
    )
}
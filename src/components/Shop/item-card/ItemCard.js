import React from 'react'
import './Itemcard.css'

function ItemCard(props){
    return(
        <div className="item-card">
            <div className="double-image">
                <div className='img first-img' style={{backgroundImage:`url(${props.image1})`}}/>
            </div>
            <div>
                <p className='item-title'>{props.title}</p>
                <p className="item-price">{props.price}</p>
            </div>
            
        </div>
    )
}

export default ItemCard


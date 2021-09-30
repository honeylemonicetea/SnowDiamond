import React from 'react'
import './Itemcard.css'
import { Img, SwatchDiv } from './CardStyled'
import {Link} from 'react-router-dom'


function ItemCard(props){
    


    return(
        <div className="item-card">
            <div className="double-image">
                {/* <div  className='img first-img' style={{backgroundImage:`url(${props.image1})`}}/> */}
                <a href=""></a>
                <Link to={`item/${props.id}`}>
                     <Img imageA = {props.imageA} imageB = {props.imageB} title={props.title}/>
                </Link>
               
                {/* <img src={props.imageA} alt="" /> */}
            </div>
            <div className='itemInform'>
                <p className='item-title'>{props.title}</p>
                <p className="item-price">{props.price}</p>
               {props.swatches.map(e=><SwatchDiv colorCode = {e.colorCode} title = {e.colorName}/>)}
        
            </div>
            
        </div>
    )
}

export default ItemCard


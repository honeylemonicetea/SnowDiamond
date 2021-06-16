import React from 'react'

import Carousel from "react-bootstrap/Carousel";


function CarCustom(props){
    console.log(props.pics)
    console.log(props.num)
    console.log(`this is a pic link ${props.pics[props.num]}`)
    return(
        <Carousel.Item>
            <img 
                className="d-block w-100"
                src={props.pics[props.num]}
                alt='whatevs'

            />
            <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
        </Carousel.Item>

)
}

export default CarCustom
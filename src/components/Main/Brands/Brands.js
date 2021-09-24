import React, {useState, useEffect} from 'react'
import './brands.css'

// import {Carousel} from "react-bootstrap";

import Carousel from "react-bootstrap/Carousel";
import CarCustom from "../Carousel/Carousel";


function Brand(props){
     useEffect(() => {
       window.scrollTo(0, 0);
     }, []);
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex, e) => {
        setIndex(selectedIndex);
    }; 
    let len = props.pics.length;
    let nums = []
    for (let index = 0; index < len; index++) {
        nums.push(index)
    }
    console.log(nums)

    return(
        <div className='brand-page'>
            <div className='brand-container'>
                <div className='brand-item'>
                    <h1><span>{props.name}</span> <img id='brand-logo' src={require("../../../img/"+props.logo).default} alt='brand logo'/></h1>
                    <p className='slogan'>{props.slogan}</p>
                    <p className='lorem'>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam dolores eaque exercitationem ipsa ipsum, iure natus nihil quisquam quo voluptatum. Earum, maxime optio? Ab consectetur ea eos illo iure maxime, molestias nihil officia porro, quisquam, recusandae reiciendis. Alias aliquid animi aperiam si
                    </p>
                </div>
                <div className='brand-item'>
                    <div className='car'>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                       
                        {/* {nums.map((e)=><CarCustom pics={props.pics} num = {e}/>)} */}
                        <Carousel.Item>
                            <img className="d-block w-100" src={props.pics[0]} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={props.pics[1]} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={props.pics[2]} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={props.pics[3]} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={props.pics[4]} alt="First slide"/>
                        </Carousel.Item>
                        <Carousel.Item>
                            <img className="d-block w-100" src={props.pics[5]} alt="First slide"/>
                        </Carousel.Item>
                    </Carousel>

                    </div>
                   
                </div>


            </div>


            <p/>

        </div>
    )
}

export default Brand
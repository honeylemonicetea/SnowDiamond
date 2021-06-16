import React from "react";
import './Men.css'
import {NavLink} from "react-router-dom";

function Men(){
    return(
        <div className="men fashion-gallery">
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                    <NavLink to='/cloudberry'>Cloudberry</NavLink>

                    <p className="title">月饼</p>
                    <div className="price">
                        <p className="old-price">$200.0</p>
                        <p className="discount">$100.0</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                    <NavLink to='/cloudberry'>Cloudberry</NavLink>
                    <p className="title"> CHOCOLATE CHIP COOKIE</p>
                    <div className="price">
                        <p className="old-price">$1500.00</p>
                        <p className="discount">$1399.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                    <NavLink to='/cloudberry'>Cloudberry</NavLink>
                    <p className="title">GINGERBREAD</p>
                    <div className="price">
                        <p className="old-price">$1500.00</p>
                        <p className="discount">$1399.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                    <NavLink to='/cloudberry'>Cloudberry</NavLink>
                    <p className="title">SOUFFLE</p>
                    <div className="price">
                        <p className="old-price">$1500.00</p>
                        <p className="discount">$1399.99</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Men

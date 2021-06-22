import React from "react";
import './Women.css'
import {NavLink} from "react-router-dom";

function Women(){
    return(
        <div className="women fashion-gallery">
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                    <p><NavLink to='/raspberry'>Raspberry</NavLink></p>
                    <p className="title"><a href="#">MERINGUE</a></p>
                    <div className="price">
                        <p className="old-price">$1500.00</p>
                        <p className="discount">$1399.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                <p><NavLink to='/raspberry'>Raspberry</NavLink></p>
                    <p className="title">SUNDAE</p>
                    <div className="price">
                        <p className="old-price">$1500.00</p>
                        <p className="discount">$1399.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                <p><NavLink to='/raspberry'>Raspberry</NavLink></p>
                    <p className="title">PANNA COTTA</p>
                    <div className="price">
                        <p className="old-price">$1500.00</p>
                        <p className="discount">$1399.99</p>
                    </div>
                </div>
            </div>
            <div className="item">
                <div className="item-image"/>
                <div className="item-text">
                <p><NavLink to='/raspberry'>Raspberry</NavLink></p>
                    <p className="title">CHURRO CHEESECAKE</p>
                    <div className="price">
                        <p className="old-price">$1500.00</p>
                        <p className="discount">$1399.99</p>
                    </div>
                </div>
            </div>
        </div>

    )

}

export default Women
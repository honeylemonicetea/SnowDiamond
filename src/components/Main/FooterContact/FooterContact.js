import React from "react";
import './footerContact.css'
import {NavLink} from 'react-router-dom'

function FooterContact(){
    return(
        <footer className='footer-contact'>
        <div className="box">
            <div className="item company-info">
                <h2>SHORTCAKE</h2>
                <p>
                    We earned a reputation of being good at what we do.
                    Let us take your online shop to new dimension in
                    success!
                </p>
                <p id="location">Zen Garden</p>
                <a id="mail" href="mailto:dks@gmail.com">CONTACT ME</a>
                <a href="tel:29209320">+7982891883792</a>
                <div className="social">
                    <a href="#"><img src={require("../../../img/043-facebook-1.svg").default} alt=""/></a>
                    <a href="#"> <img src={require("../../../img/013-twitter-1.svg").default} alt=""/></a>
                    <a href="#"> <img src={require("../../../img/034-instagram.svg").default} alt=""/></a>
                    <a href="#"> <img src={require("../../../img/031-linkedin.svg").default} alt=""/></a>
                </div>
            </div>
            <div className="item email-updates">
                <h2>RECEIVE EMAIL UPDATES</h2>
                <div className="input">
                    <input type="email" placeholder="Your Email Address"/>
                    <button>JOIN</button>
                </div>
                <div className="link-box">
                    <div className="link-item">
                        <h3>SHOP</h3>
                        <NavLink to='/shop'>Shop</NavLink>
                        <NavLink to='/shop'>Collection</NavLink>
                        <NavLink to='/shop'>Outlet</NavLink>
                        <NavLink to='/lookbook'>Lookbook</NavLink>
                    </div>
                    <div className="link-item">
                        <h3>HELP</h3>
                        <NavLink to='not-found'>FAQ</NavLink>
                        <NavLink to='not-found'>Privacy Policy</NavLink>
                        <NavLink to='not-found'>Terms and conditions</NavLink>
                        <NavLink to='not-found'>Return and Exchanges</NavLink>
                        
                    </div>
                    <div className="link-item">
                        <h3>ABOUT</h3>
                        <NavLink to='not-found'>Journal</NavLink>
                        <NavLink to='not-found'>Our Story</NavLink>
                        <NavLink to='not-found'>Contact</NavLink>
                        <NavLink to='not-found'>Store Location</NavLink>
                    </div>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default FooterContact
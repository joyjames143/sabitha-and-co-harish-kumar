import React from 'react'
import NavbarRoutes from './NavbarRoutes';
import Tilt from 'react-parallax-tilt';
import deals2 from "../images and videos sabitha and co/deals2.jpg"
import deals3 from "../images and videos sabitha and co/deals3.jpg"
import "../componentCSS/Deals.css"

export default function Deals() {
    return (
        <div>
             <div>
                <NavbarRoutes/>
            </div>
            <div className="navbar-routes-heading-">TODAYS OFFER</div>
                <div className="image-and-h1-container-about">
                            <div className="inside-image-and-h1-container-deals">
                                    <Tilt>                       
                                                    <img className="product-image" src={deals2} alt="logo" />
                                                    <h1  className="product-h1">comming<br></br> soon...</h1>
                                                                            
                                    </Tilt>
                            </div>
                </div>
        </div>
    )
} 

import React from 'react'
import "../componentCSS/Products.css"
import Tilt from 'react-parallax-tilt';
import img1 from "../images and videos sabitha and co/img1.jpg"
import img2 from "../images and videos sabitha and co/img2.jpg"
import img4 from "../images and videos sabitha and co/img4.jpg"
import img5 from "../images and videos sabitha and co/img5.jpg"
import img6 from "../images and videos sabitha and co/img6.jpeg"
import { Link } from "react-router-dom"

export default function Products() {
    return (
        
            <div className="product-container" id="PRODUCTS" >
                <h1 className="heading">PRODUCTS</h1>
                <div className="image-and-h1-container">
                        <div className="inside-image-and-h1-container">
                                <Tilt> 
                                        <Link to="/tiles">
                                                <img className="product-image" src={img1} alt="logo" />
                                                <h1  className="product-h1">TILES</h1>
                                        </Link>
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container">
                                <Tilt> 
                                <Link to="/sanitaryware">
                                                <img className="product-image" src={img6}  alt="logo" />
                                                <h1  className="product-h1">SANITARY WARE</h1>
                                        </Link>
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container">
                                <Tilt> 
                                        <Link to="/cpfittings">
                                                <img className="product-image" src={img2} alt="logo"  />
                                                <h1  className="product-h1">CP - FITTING</h1>
                                        </Link>
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container">
                                <Tilt> 
                                        <Link to="/counterpads">
                                                <img className="product-image" src={img5}  alt="logo" />
                                                <h1  className="product-h1">COUNTER TOP</h1>
                                        </Link>
                                </Tilt>
                        </div>
                        
                        
                    
                </div>
                
            </div>

    )
}

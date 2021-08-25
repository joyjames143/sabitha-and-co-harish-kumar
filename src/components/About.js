import React from 'react'
import "../componentCSS/About.css"
import Tilt from 'react-parallax-tilt';
import aboutback1 from "../images and videos sabitha and co/aboutback1.jpg"
import aboutback2 from "../images and videos sabitha and co/aboutback2.jpg"
import img4 from "../images and videos sabitha and co/img4.jpg"
import img5 from "../images and videos sabitha and co/img5.jpg"
import img6 from "../images and videos sabitha and co/img6.jpeg"

export default function About() {
    return (
        <div>
            <h1 className="heading">ABOUT</h1>
            <div className="about-sabithaandco">
                <div className="description-about-sabithandco">
                <div className="image-and-h1-container-about">
                        <div className="inside-image-and-h1-container-about">
                                <Tilt>                       
                                                <img className="product-image" src={aboutback1} alt="logo" />
                                                <h1  className="product-h1">16 brands</h1>                              
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container-about">
                                <Tilt>                      
                                                <img className="product-image" src={aboutback2}  alt="logo" />
                                                <h1  className="product-h1">24 sizes</h1>                               
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container-about">
                                <Tilt>                                        
                                                <img className="product-image" src={aboutback1} alt="logo"  />
                                                <h1  className="product-h1">100 formats</h1>                                      
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container-about">
                                <Tilt>                                        
                                                <img className="product-image" src={aboutback2}  alt="logo" />
                                                <h1  className="product-h1">80 work force</h1>                                  
                                </Tilt>
                        </div>   
                        <div className="inside-image-and-h1-container-about">
                                <Tilt>                      
                                                <img className="product-image" src={aboutback1}  alt="logo" />
                                                <h1  className="product-h1">2400 design</h1>                               
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container-about">
                                <Tilt>                                        
                                                <img className="product-image" src={aboutback2} alt="logo"  />
                                                <h1  className="product-h1">50000sqft showroom</h1>                                      
                                </Tilt>
                        </div>
                        <div className="inside-image-and-h1-container-about">
                                <Tilt>                                        
                                                <img className="product-image" src={aboutback1}  alt="logo" />
                                                <h1  className="product-h1">195000sqft warehousing</h1>                                  
                                </Tilt>
                        </div>            
                    
                </div>
                <br></br>
                    <h3>
                      
                    &ensp; &ensp; &ensp; &ensp;Ssabitha & Co in dindigul is one of the leading businesses in the tile dealers. We are very proud to introduce 
                        "First ever live walkthrough display showroom" in dindigul.we offer products such a wall tiles, floor tiles, glass components, all sanitary ware, and cp-fitting.
                        
                      
                                     
                    </h3>
                </div>
            </div>
        </div>
    )
}

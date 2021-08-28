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
                    <h4>VISION:</h4>                       
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;To bring quality ceramic product’s with customer centric focus and make our customers feel gratify by our core values of integrity.   </p>                   
                    <h4>MISSION:</h4>                        
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;To offer “The best” ceramic product and service to our customers </p>                 
                    <h4>CAREER:</h4>                        
                            <p>&nbsp;&nbsp;&nbsp;&nbsp;In 1990 ceramic business thought shimmered in our mind, We began in a humble zone of 600sqft in thadikombu street, Dindigul. During the year 2005 we extended the zone of display to 1500sqft. 
                            Later SABITHA & CO chose to grandstand its item in various manner so we constructed a showroom with gigantic presentation of 25,000sqft. To settle on client happiness with their decision of choice, we made live showcase to make our client perceive how their whole living space would be and feel the atmosphere of their living space and to make a world class shopping experience.
                            Somany, Kajaria, Axi marble, Jhonson are among the brands that were displayed.</p>              
                </div>
            </div>
        </div>
    )
}

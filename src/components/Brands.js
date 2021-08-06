import React from 'react'
import "../componentCSS/Brands.css"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import logo1 from "../images and videos sabitha and co/logo1.png"
import logo2 from "../images and videos sabitha and co/logo2.png"
import logo3 from "../images and videos sabitha and co/logo3.png"
import logo4 from "../images and videos sabitha and co/logo4.png"
import logo5 from "../images and videos sabitha and co/logo5.jpg"



const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2
    }
  };

export default function Brands() {
    return (
        <div className="brands-container">
            <h1 className="heading">TOP BRANDS</h1>
            <div className="carousel-div">
            <Carousel 
                responsive={responsive}  
                infinite={true} 
                autoPlaySpeed={1000} 
                autoPlay={true}
                
                removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
            >
                <div className="logo-img-div"><img className="logo-img" src={logo1}/></div>
                <div className="logo-img-div"><img className="logo-img" src={logo2}/></div>
                <div className="logo-img-div"><img className="logo-img" src={logo3}/></div>
                <div className="logo-img-div"><img className="logo-img" src={logo4}/></div>
                <div className="logo-img-div"><img className="logo-img" src={logo5}/></div>
                
            </Carousel>; 
            </div>
            
        </div>
    )
}

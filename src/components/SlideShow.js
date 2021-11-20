import React, { useState, useEffect } from 'react';
import "../componentCSS/SlideShow.css"
//carousel//
import Carousel from "react-multi-carousel";
//arrow//
import { GiSmashArrows } from "react-icons/gi";
////
import Navbar from './Navbar'
import img1 from "../images and videos sabitha and co/slideshowimg/img1.png"
import img2 from "../images and videos sabitha and co/slideshowimg/img2.png"
import img3 from "../images and videos sabitha and co/slideshowimg/img3.png"
import img4 from "../images and videos sabitha and co/slideshowimg/img4.png"
import img5 from "../images and videos sabitha and co/slideshowimg/img5.png"
import trust from "../images and videos sabitha and co/trust.png"
import honesty from "../images and videos sabitha and co/honesty.png"
import business from "../images and videos sabitha and co/business.png"
//spinner//
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner"

const responsive = {
    superLargeDesktop: {
        breakpoint: { max: 4000, min: 3000 },
        items: 1
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 1
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

export default function SlideShow() { 
    const [imageLoading , setImageLoading] = useState(false)

    const LoadindIsEnded = () => {
        setImageLoading(true)
        
    }


    return (
        <div className="main">
        <div className="main-div-ss">
            <Carousel 
                arrows={true}
                swipeable={true}
                draggable={true}
                ssr={true}
                responsive={responsive}
                infinite={true} 
                autoPlaySpeed={4000} 
                autoPlay={true}
                keyBoardControl={true}
                removeArrowOnDeviceType={["tablet", "mobile","desktop","superLargeDesktop"]}
            >
                
                <div className="image-div-ss"><img className="logo-img" src={img1} alt="company logo"  onLoad={LoadindIsEnded}/></div>
                <div className="image-div-ss"><img className="logo-img" src={img2} alt="company logo"  onLoad={LoadindIsEnded}/></div>
                <div className="image-div-ss"><img className="logo-img" src={img3} alt="company logo"  onLoad={LoadindIsEnded} /></div>
                <div className="image-div-ss"><img className="logo-img" src={img4} alt="company logo"  onLoad={LoadindIsEnded}/></div>
                <div className="image-div-ss"><img className="logo-img" src={img5} alt="company logo"  onLoad={LoadindIsEnded} /></div>
                
                
            </Carousel>; 
        </div>
        <div className="overlay-div-ss">
                {imageLoading === false && <div><Loader type="Circles" color="black" height={100} width={50} /></div> }
                    
        </div>
            <Navbar/>
            <div className="trusted-logo-div">
                <img className="trusted-logo" src={business} alt="BUSINESS" style={{ }} />
                <br></br>
                <img className="trusted-logo" src={honesty} alt="HONESTY" style={{ }} />
                <br></br>
                <img className="trusted-logo" src={trust} alt="TRUST" style={{ }} />
            </div>
            
            <div className="main-ss-buttons ">
                <a href="#PRODUCTS"><GiSmashArrows className="arrow-helper" size="2em"/></a>
                
            </div>
        </div>
    ) 
}

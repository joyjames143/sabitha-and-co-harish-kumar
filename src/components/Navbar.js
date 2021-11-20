import React, { useState ,useEffect } from 'react';
import "../componentCSS/Navbar.css"
import { SiProducthunt } from "react-icons/si";
import { FaProductHunt } from "react-icons/fa";
import { HiGift,HiLocationMarker } from "react-icons/hi";
import { FcGallery } from "react-icons/fc";
import { Link } from "react-router-dom"
import logoMain from "../images and videos sabitha and co/logoMain.png"
import sandclogo from "../images and videos sabitha and co/sandclogo.jpg"
import logomobile from "../images and videos sabitha and co/logomobile.png"



const ComputerList = () => {
    return(
        <div className="first-navbar-header" >
            <ul id="outer">
                <li> <a href="#PRODUCTS" id="inner"> <SiProducthunt className="icon-navbar" size="20%"/> <h2>Products</h2> </a> </li>
                <Link to="/galleryy">
                <li> <a id="inner"> <FcGallery className="icon-navbar" size="20%"/> <h2>Gallery  </h2> </a> </li>
                </Link>
            </ul>
            <ul>
            <Link to="/">
                <li>
                    <img className="main-sabitha-logo" src={sandclogo} alt="company logo"/>
                </li>
                
            </Link>
            </ul>
            <ul id="outer">
                <Link to="/deals">
                <li> <a id="inner"> <HiGift className="icon-navbar" size="20%"/> <h2>Deals   </h2> </a> </li>
                </Link>
                <li> <a href="#LOCATION" id="inner"> <HiLocationMarker   className="icon-navbar" size="19%"/> <h2>Location</h2> </a> </li>
            </ul>
        </div>

    )
}

const MobileList = () => {
    return(
        <>
        <div className=" first-navbar-header" >
            <div id="first-navbar-mobile">
                <ul id="one">
                        <Link to="/">
                            <li><h1>sabitha & co</h1></li>
                            <li><p>Tiles & ceramics</p></li>
                        </Link>
                </ul>
                <ul id="twooo" className="navbar-icon-three">
                        <a href="#PRODUCTS" ><li><FaProductHunt className="icon-navbar" size="100%" /></li></a>
                        <Link to="/galleryy">
                            <a ><li><FcGallery className="icon-navbar" size="100%" /></li></a> 
                        </Link>
                        <Link to="/deals">
                            <a ><li><HiGift className="icon-navbar" size="100%" /></li></a> 
                        </Link>
                        
                        <a href="#LOCATION" ><li><HiLocationMarker   className="icon-navbar" size="100%"/></li></a>
                </ul>
            </div>
            </div> 
        </>
    )
}

export default function Navbar() {

    const [isMobile,setIsMobile] = useState(typeof window !=='undefined' && window.matchMedia("(max-width:700px)").matches)

    useEffect(()=>{
        window.addEventListener("resize",()=>{
            setIsMobile(typeof window !=='undefined' && window.matchMedia("(max-width:700px)").matches)
        })
    })

    return (
        <>
            {isMobile ? <MobileList/> : <ComputerList/> }
            
        </>
    )
}

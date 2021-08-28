import React, { useState ,useEffect } from 'react';
import "../componentCSS/NavbarRoutes.css"
import { FaToilet,FaGifts} from "react-icons/fa";
import { Link } from "react-router-dom"
import { GiDominoTiles } from "react-icons/gi";
import { SiAirtable } from "react-icons/si";
import { HiGift} from "react-icons/hi";
import { GoHome } from "react-icons/go";
import { FcGallery } from "react-icons/fc";
import {GiTap } from "react-icons/gi";

const ComputerList = () => {
    return(
        <div className="first-navbar-header-routes" >
            <ul>
                <Link to="/">
                    <li> <h1><GoHome/>sms</h1> </li>
                </Link>
            </ul>
            <ul id="outer-routes">
                <li> <Link to="/tiles"        id="inner-routes">  <h2>Tiles        </h2> </Link> </li>
                <li> <Link to="/sanitaryware" id="inner-routes">  <h2>SanitaryWare </h2> </Link> </li>
                <li> <Link to="/cpfittings"   id="inner-routes">  <h2>Cp-fittings  </h2> </Link> </li>
                <li> <Link to="/counterpads"  id="inner-routes">  <h2>CounterPads  </h2> </Link> </li>
                <li> <Link to="/galleryy"      id="inner-routes">  <h2>Gallery      </h2> </Link> </li>
                <li> <Link to="/deals"  id="inner-routes">  <h2>deals  </h2> </Link> </li>
            </ul>
        </div>

    )
}

const MobileList = () => {
    return(
        <>
            <div className="first-navbar-header-routes" >
                <div id="first-navbar-mobile-routes">
                    <ul id="one-routes">
                            <li><Link to="/"> <h1><GoHome/>sms </h1> </Link> </li>
                    </ul>
                    <ul id="twooo-routes" className="navbar-icon-three-routes">
                        <a> <Link to="/tiles">        <li><GiDominoTiles       className="icon-navbar-routes" size="90%"  /></li></Link>  </a>
                        <a> <Link to="/sanitaryware"> <li><FaToilet            className="icon-navbar-routes" size="55%"  /></li></Link>  </a>
                        <a> <Link to="/cpfittings">   <li><GiTap               className="icon-navbar-routes" size="100%" /></li></Link>  </a>
                        <a> <Link to="/counterpads">  <li><SiAirtable          className="icon-navbar-routes" size="80%"  /></li></Link>  </a>
                        <a> <Link to="/galleryy">      <li><FcGallery           className="icon-navbar-routes" size="100%" /></li></Link>  </a>
                        <a> <Link to="/deals">        <li><FaGifts              className="icon-navbar-routes" size="80%"  /></li></Link>  </a>
                         
                    </ul> 
                </div>
            </div> 
        </>
    )
}

export default function NavbarRoutes() {

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

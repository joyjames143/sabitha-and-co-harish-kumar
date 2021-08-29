import React from 'react'
import "../componentCSS/Pageend.css"
import { Link } from "react-router-dom"
import { FaInstagramSquare} from "react-icons/fa";
import { GoHome } from "react-icons/go";
import { FaProductHunt } from "react-icons/fa";
import { FcGallery } from "react-icons/fc";

export default function Pageend() {
    return (
        <div className="padeend-main-first-div">
            <div className="padeend-main-second-div" >
                <a href="#PRODUCTS"><FaProductHunt   className="facebook"   size="2rem"/></a>           
                <Link to="/galleryy">
                    <a><FcGallery  className="facebook"   size="2rem"/></a>
                </Link>
                <a href="https://www.instagram.com/sabitha_dindigul/"><FaInstagramSquare className="instagram"  size="2rem"/></a>
                <a href="#"><GoHome  className="facebook"   size="2rem"/></a>             
            </div>
        </div>
    )
}

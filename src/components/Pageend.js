import React from 'react'
import "../componentCSS/Pageend.css"
import { FaFacebookSquare ,FaInstagramSquare,FaHome} from "react-icons/fa";

export default function Pageend() {
    return (
        <div className="padeend-main-first-div">
            <div className="padeend-main-second-div" >
                <a href="#"><FaFacebookSquare  className="facebook"   size="2rem"/></a>
                <a href="https://www.instagram.com/sabitha_dindigul/"><FaInstagramSquare className="instagram"  size="2rem"/></a>
            </div>
        </div>
    )
}

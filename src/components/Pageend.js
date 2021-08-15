import React from 'react'
import "../componentCSS/Pageend.css"
import { FaFacebookSquare ,FaInstagramSquare,FaHom} from "react-icons/fa";

export default function Pageend() {
    return (
        <div className="padeend-main-first-div">
            <div className="padeend-main-second-div" >
                <a href="#"><FaFacebookSquare  className="facebook"   size="2.5rem"/></a>
                <a href="#"><FaInstagramSquare className="instagram"  size="2.5rem"/></a>
                <a href="/"><FaHome            className="home"       size="2.5rem"/></a>
                
               
            </div>
        </div>
    )
}

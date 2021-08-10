import React from 'react'
import "../componentCSS/Contacticon.css"
import { FaMobileAlt,FaPhoneSquare } from "react-icons/fa";


export default function ContactIcon() {
    return (
        <div>
             <div className="contact-phone-icon">
                <a href="#CONTACT">
                    <FaPhoneSquare className="chaticon-fontawesom" size="2rem" />
                </a>
            </div>
        </div>
    )
}

import React from 'react'
import "../componentCSS/Contacticon.css"
import { FaMobileAlt } from "react-icons/fa";

export default function ContactIcon() {
    return (
        <div>
             <div className="contact-phone-icon">
                <a href="#CONTACT">
                    <FaMobileAlt className="chaticon-fontawesom" size="2rem" />
                </a>
            </div>
        </div>
    )
}

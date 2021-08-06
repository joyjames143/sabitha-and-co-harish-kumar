import React from 'react'
import "../componentCSS/Location.css"

 

export default function Location() {
    

    return (
        <div id="LOCATION">
            <h1 className="heading">LOCATION</h1>
            <div className="main-google-map-div">
                <iframe className="googlemap-iframe" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3924.5981370853888!2d77.96538131411353!3d10.373981369331132!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00aa8c0e686169%3A0x151ad9c020262cfb!2sSABITHA%20%26%20CO!5e0!3m2!1sen!2sin!4v1626433201150!5m2!1sen!2sin"  allowfullscreen="" loading="lazy"></iframe>
            </div>
        </div>
    )
}

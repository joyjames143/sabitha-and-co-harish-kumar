import React from 'react'
import NavbarRoutes from './NavbarRoutes';
import Gallery from 'react-grid-gallery';
import "../componentCSS/Galleryy.css"
import p1 from "../images and videos sabitha and co/gallery/p1.jpeg"
import p2 from "../images and videos sabitha and co/gallery/p2.jpeg"
import p3 from "../images and videos sabitha and co/gallery/p3.jpeg"
import p4 from "../images and videos sabitha and co/gallery/p4.jpeg"
import p5 from "../images and videos sabitha and co/gallery/p5.jpeg"
import p6 from "../images and videos sabitha and co/gallery/p6.jpeg"
import p7 from "../images and videos sabitha and co/gallery/p7.jpeg"
import p8 from "../images and videos sabitha and co/gallery/p8.jpeg"
import p9 from "../images and videos sabitha and co/gallery/p9.jpeg"
import p10 from "../images and videos sabitha and co/gallery/p10.jpeg"
import p11 from "../images and videos sabitha and co/gallery/p11.jpeg"
import p12 from "../images and videos sabitha and co/gallery/p12.jpeg"
import p13 from "../images and videos sabitha and co/gallery/p13.jpeg"
import p14 from "../images and videos sabitha and co/gallery/p14.jpeg"
import p15 from "../images and videos sabitha and co/gallery/p15.jpeg"


const IMAGES =
[{
        src: p1,
        thumbnail: p1,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "cp-fittings"
},
{
        src: p2,
        thumbnail: p2,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "sanitary ware"
},
 
{
        src: p3,
        thumbnail: p3,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "tiles"
},
{
        src: p4,
        thumbnail: p4,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "sanitary ware"
},
{
        src: p5,
        thumbnail: p5,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "sanitary ware"
},
{
        src: p6,
        thumbnail: p6,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "counter tops"
},
{
        src: p7,
        thumbnail: p7,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "cp-fittings"
},
{
        src: p8,
        thumbnail: p8,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "tiles"
},
{
        src: p9,
        thumbnail: p9,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "tiles"
},
{
        src: p10,
        thumbnail: p10,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "cp-fitting"
},
{
        src: p11,
        thumbnail: p11,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "tiles"
},
{
        src: p12,
        thumbnail: p12,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "cp-fitting"
},
{
        src: p13,
        thumbnail: p13,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "sanitary ware"
},

{
        src: p14,
        thumbnail: p14,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "sanitary ware"
},
{
        src: p15,
        thumbnail: p15,
        thumbnailWidth: 320,
        thumbnailHeight: 212,
        caption: "tiles"
},
]
 

export default function Galleryy() {
    return (
        <div>
              <div> <NavbarRoutes/> </div>
              <div className="navbar-routes-heading-">GALLERY</div>
              <div className="galleryy-main-div">
                <Gallery  images={IMAGES}/>
              </div>
              
        </div>
    )
} 

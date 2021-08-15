import React, { useState, useEffect } from 'react';
import "../componentCSS/SlideShow.css"
import Navbar from './Navbar'
import img1 from "../images and videos sabitha and co/img1.jpg"
import img2 from "../images and videos sabitha and co/img2.jpg"
import img3 from "../images and videos sabitha and co/img3.jpg"
import img4 from "../images and videos sabitha and co/img4.jpg"
import img5 from "../images and videos sabitha and co/img5.jpg"
import {AiOutlineCodeSandbox} from "react-icons/ai"
import trust from "../images and videos sabitha and co/trust.png"
//spinner//
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import Loader from "react-loader-spinner"

const SliderData = 
        [
            { image : img1 },
            { image : img2 },
            { image : img3 },
            { image : img4 },
            { image : img5 },
        ]

export default function SlideShow() { 
    const [imageLoading , setImageLoading] = useState(false)
    const [slidenumber , setslidenumber] = useState(0)
    const [timer , setTimer]             = useState(0)
    const [scroll, setScroll]            = useState(false)

    const LoadindIsEnded = () => {
        setImageLoading(true)
        
    }

    const slidechange = (index) => {
        setslidenumber(index)
        setTimer(timer+1)
    }

    const onscrolling = () => {
        const scrolled = window.scrollY
        if(scrolled < 50){
            setScroll(false)
        }else{
            setScroll(true)
        }
    }

    // useEffect(() => {
    //     window.addEventListener('scroll', onscrolling);
    //     if (scroll === false){
    //         const timeout = setTimeout(()=>{
    //                 setTimer(timer+1)
    //                 setslidenumber(timer%SliderData.length)
                    
    //         },4000)
    //         return () => clearTimeout(timeout)
    //     }
    //   },[timer]);

    return (
        <div className="main">

            <div className="main-div-ss">
                {SliderData.map((slide,index)=>{return ( 

                    <div className={index === slidenumber ?  "slide active":"slide"} key={index}>
                    {index === slidenumber && (<img src={slide.image} alt="main-image" className="image-div-ss" onLoad={LoadindIsEnded}/>)}
                    </div>
                    
                )})}
            </div>
            <div className="overlay-div-ss">
                {imageLoading === false && <div><Loader type="Bars" color="black" height={100} width={50} /></div> }
                    
            </div>
 
            <Navbar/>
            <div className="trusted-logo-div">
                <img className="trusted-logo" src={trust} alt="SMS" style={{ }} />
            </div>
            
            <div className="main-ss-buttons ">
                {SliderData.map((slide,index)=>{return ( 
                    <div className={index === slidenumber ?  "icon activee":"icon"} key={index}>
                        {<AiOutlineCodeSandbox key={index} size="1.3em" className="box-react-icon" onClick={()=>slidechange(index)}/>}
                    </div>
                )})}
            </div>
        
        </div>
    ) 
}

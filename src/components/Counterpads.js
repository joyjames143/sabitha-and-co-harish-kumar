import React from 'react'
import NavbarRoutes from './NavbarRoutes';
import HoverCard from 'react-png-hovercard'; 
import "../componentCSS/Tiles.css"
//down are all imports of images///////
import kajaria from "../images and videos sabitha and co/kajaria.png"
//down are all imports of catlog pdfs///////
import kajariamaster from "../images and videos sabitha and co/catlogs/countertop/kajaria/kajariamaster.pdf"

export default function Counterpads() {
    return (
        <div>
            <div> <NavbarRoutes/> </div>
            <div className="navbar-routes-heading-">COUNTER TOP</div>
            <div className="cards-tiles-main-div">
{/*----------------------first one--------------------------------*/}
                    <HoverCard
                        className="hovercard-tiles"
                        front={
                        <div className="Front">
                            <img
                            src={kajaria}
                            alt=""
                            style={{ }}
                            />
                        </div>
                        }
                        back={
                        <div className="Back">
                            <div className="logo-card-heading">
                                <h2>KAJARIA CATLOGUE</h2>
                                
                            </div>
                            <div className="buttons-different-types">
                                <div className="two-button-div">
                                <a className="logo-button-anchor" href={kajariamaster} target="_blank"><button className="logo-button" >MASTER            </button>  </a>
                                
                                </div>
                                <div className="two-button-div">
                                
                                </div>
                                
                                
                            </div>
                        </div>
                        }
                    
                        animationSpeed={500}
                        
                        margin={10}
                    />
            </div>
        </div>
    )
}

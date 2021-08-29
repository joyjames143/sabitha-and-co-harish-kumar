import React from 'react'
import NavbarRoutes from './NavbarRoutes';
import HoverCard from 'react-png-hovercard'; 
import "../componentCSS/Tiles.css"
//down are all imports of images///////
import johnson from "../images and videos sabitha and co/johnson.png"
import queo from "../images and videos sabitha and co/queo.png"
import hindware from "../images and videos sabitha and co/hindware.png"
//down are all imports of catlog pdfs///////
import Queomaster from "../images and videos sabitha and co/catlogs/cp-fitting/queo/Queomaster.pdf"
import johnsonmaster from "../images and videos sabitha and co/catlogs/cp-fitting/Johnson&Johnson/johnsonmaster.pdf"
import Johnsoninternational from "../images and videos sabitha and co/catlogs/cp-fitting/Johnson&Johnson/Johnsoninternational.pdf"


export default function Cpfittings() {
    return (
        <div>
            <div> <NavbarRoutes/> </div>
            <div className="navbar-routes-heading-"> CP-FITTINGS </div>
            <div className="cards-tiles-main-div">
{/*----------------------first one--------------------------------*/}
                    <HoverCard
                        className="hovercard-tiles"
                        front={
                        <div className="Front">
                            <img
                            src={johnson}
                            alt=""
                            style={{ }}
                            />
                        </div>
                        }
                        back={
                        <div className="Back">
                            <div className="logo-card-heading">
                                <h2>JOHNSON CATLOGUE</h2>
                                
                            </div>
                            <div className="buttons-different-types">
                                <div className="two-button-div">
                                <a className="logo-button-anchor" href={johnsonmaster} target="_blank"><button className="logo-button" >MASTER </button>  </a>                              
                                </div>
                                <div className="two-button-div">
                                <a className="logo-button-anchor" href={Johnsoninternational}><button className="logo-button" >GLOBAL </button>  </a>
                                </div>                                                                
                            </div>
                        </div>
                        }
                    
                        animationSpeed={500}
                        
                        margin={10}
                    />
{/*----------------------second one--------------------------------*/}
                    <HoverCard
                        className="hovercard-tiles"
                        front={
                        <div className="Front">
                            <img
                            src={queo}
                            alt=""
                            style={{ }}
                            />
                        </div>
                        }
                        back={
                        <div className="Back">
                            <div className="logo-card-heading">
                                <h2>QUEO CATLOGUE</h2>
                            </div>
                            <div className="buttons-different-types">
                                <div className="two-button-div">
                                    <a className="logo-button-anchor" href={Queomaster} target="_blank"><button className="logo-button" >MASTER</button>  </a>
                                </div>
                                <div className="two-button-div">
                                </div>
                                
                                
                            </div>
                        </div>
                        }
                    
                        animationSpeed={500}
                        
                        margin={10}
                    />
              
{/*----------------------Third one--------------------------------*/}
                    <HoverCard
                        className="hovercard-tiles"
                        front={
                        <div className="Front">
                            <img
                            src={hindware}
                            alt=""
                            style={{ }}
                            />
                        </div>
                        }
                        back={
                        <div className="Back">
                            <div className="logo-card-heading">
                                <h2>HINDWARE CATLOGUE</h2>
                            </div>
                            <div className="buttons-different-types">
                                <div className="two-button-div">
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >Soon....</button>  </a>
                                
                                </div>
                                <div className="two-button-div">
                                
                                
                                </div>
                                
                                
                            </div>
                        </div>
                        }
                    
                        animationSpeed={500}
                        
                        margin={10}
                    />
{/*----------------------End--------------------------------*/}
            </div>
        </div>
    )
}

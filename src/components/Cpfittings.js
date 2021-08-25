import React from 'react'
import NavbarRoutes from './NavbarRoutes';
import HoverCard from 'react-png-hovercard'; 
import "../componentCSS/Tiles.css"
//down are all imports of images///////
import johnson from "../images and videos sabitha and co/johnson.png"
import queo from "../images and videos sabitha and co/queo.png"
import hindware from "../images and videos sabitha and co/hindware.png"
///////////////////////////////////////

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
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >MASTER            </button>  </a>
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >80&#215;160       </button>  </a>
                                </div>
                                <div className="two-button-div">
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >120&#215;240      </button>  </a>
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >120&#215;180      </button>  </a>  
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
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >MASTER</button>  </a>
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >80&#215;160       </button>  </a>
                                </div>
                                <div className="two-button-div">
                                
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >120&#215;240      </button>  </a>
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >120&#215;180      </button>  </a>  
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
                                <h2>KAJARIA CATLOGUE</h2>
                            </div>
                            <div className="buttons-different-types">
                                <div className="two-button-div">
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >MASTER</button>  </a>
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >80&#215;160       </button>  </a>
                                </div>
                                <div className="two-button-div">
                                
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >120&#215;240      </button>  </a>
                                <a className="logo-button-anchor" href="#"><button className="logo-button" >120&#215;180      </button>  </a>  
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

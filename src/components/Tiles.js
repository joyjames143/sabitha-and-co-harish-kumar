import React from 'react'
import "../componentCSS/Tiles.css"
import NavbarRoutes from './NavbarRoutes';
import HoverCard from 'react-png-hovercard'; 
//down are all imports of images///////
import aximarblelogo from "../images and videos sabitha and co/aximarblelogo.png"
import simerologo from "../images and videos sabitha and co/simerologo.png"
import somaylogo from "../images and videos sabitha and co/somaylogo.png"
import italicalogo from "../images and videos sabitha and co/italicalogo.png"
import kajaria from "../images and videos sabitha and co/kajaria.png"
import colortile from "../images and videos sabitha and co/colortile.png"
///down are all imports of catlogur pdfss///////
import aximarblemaster from "../images and videos sabitha and co/catlogs/TILES/axi marble/aximarblemaster.pdf"
import aximarble120x180 from "../images and videos sabitha and co/catlogs/TILES/axi marble/aximarble120x180.pdf"
import aximarble120x240 from "../images and videos sabitha and co/catlogs/TILES/axi marble/aximarble120x240.pdf"
import kajariamaster from "../images and videos sabitha and co/catlogs/TILES/kajaria/kajariamaster.pdf"
import italicamaster from "../images and videos sabitha and co/catlogs/TILES/italica/italicamaster.pdf"

export default function Tiles() {
    return (
        <div>
            <div> <NavbarRoutes/> </div>
            <div className="navbar-routes-heading-">FLOOR TILES</div>
            
            <div className="cards-tiles-main-div">
{/*----------------------first one--------------------------------*/}
                <HoverCard
                 className="hovercard-tiles"
                front={
                  <div className="Front">
                    <img
                      src={aximarblelogo}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>AXI MARBLE CATLOGUE</h2>                      
                      </div>
                      <div className="buttons-different-types">
                        <div className="two-button-div">
                          <a className="logo-button-anchor" href={aximarblemaster} target="_blank"><button className="logo-button" >MASTER            </button>  </a>
                        </div>
                        <div className="two-button-div">
                          <a className="logo-button-anchor" href={aximarble120x180} target="_blank"><button className="logo-button" >120&#215;240      </button>  </a>
                          <a className="logo-button-anchor" href={aximarble120x240} target="_blank"><button className="logo-button" >120&#215;180      </button>  </a>  
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
                      src={somaylogo}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>SOMAY CATLOGUE</h2>
                      </div>
                      <div className="buttons-different-types">
                        <div className="two-button-div">
                          <a className="logo-button-anchor" href="#"><button className="logo-button" >MASTER</button>  </a>
                          <a className="logo-button-anchor" href="#"><button className="logo-button" >80&#215;160       </button>  </a>
                          <a className="logo-button-anchor" href="#"><button className="logo-button" >80&#215;160       </button>  </a>
                        </div>
                        <div className="two-button-div">
                          <a className="logo-button-anchor" href="#"><button className="logo-button" >80&#215;160       </button>  </a>
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
                          <a className="logo-button-anchor" href={kajariamaster} target="_blank"><button className="logo-button" >MASTER</button>  </a>
                    
                        </div>
                        <div className="two-button-div">

                        </div>
                        
                        
                      </div>
                  </div>
                }
               
                animationSpeed={500}
                
                margin={10}
              />
{/*----------------------fourth one--------------------------------*/}
              
              <HoverCard
                 className="hovercard-tiles"
                front={
                  <div className="Front">
                    <img
                      src={italicalogo}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>ITALICA CATLOGUE</h2>
                      </div>
                      <div className="buttons-different-types">
                        <div className="two-button-div">
                          <a className="logo-button-anchor" href={italicamaster} target="_blank"><button className="logo-button" >MASTER</button>  </a>
                          
                        </div>
                        <div className="two-button-div">
                        
                            <a></a>
                        </div>
                        
                        
                      </div>
                  </div>
                }
               
                animationSpeed={500}
                
                margin={10}
              />
{/*----------------------fifth one--------------------------------*/}
<HoverCard
                 className="hovercard-tiles"
                front={
                  <div className="Front">
                    <img
                      src={simerologo}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>SIMERO CATLOGUE</h2>
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
            </div>
{/*wallTiles-----wallTiles-----wallTiles-----wallTiles-----wallTiles-----wallTiles-----wallTiles-----wallTiles-----wallTiles-----wallTiles-----wallTiles--------*/}
<div className="navbar-routes-heading-">WALL TILES</div>
            
            <div className="cards-tiles-main-div">
{/*----------------------first one--------------------------------*/}
              <HoverCard
                 className="hovercard-tiles"
                front={
                  <div className="Front">
                    <img
                      src={somaylogo}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>SOMAY CATLOGUE</h2>
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
{/*----------------------second one--------------------------------*/}
<HoverCard
                 className="hovercard-tiles"
                front={
                  <div className="Front">
                    <img
                      src={italicalogo}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>ITALICA CATLOGUE</h2>
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
                      src={aximarblelogo}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>AXI MARBLE CATLOGUE</h2>
                        
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
{/*----------------------fourth one--------------------------------*/}
              <HoverCard
                 className="hovercard-tiles"
                front={
                  <div className="Front">
                    <img
                      src={colortile}
                      alt=""
                      style={{ }}
                    />
                  </div>
                }
                back={
                  <div className="Back">
                      <div className="logo-card-heading">
                        <h2>SOMAY CATLOGUE</h2>
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
             
            </div>
        
        
        </div>
    )
}

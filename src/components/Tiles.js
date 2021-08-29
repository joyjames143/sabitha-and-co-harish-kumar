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
///down are all imports of catlogue pdfss///////
import aximarblemaster from "../images and videos sabitha and co/catlogs/TILES/axi marble/aximarblemaster.pdf"
import aximarble120x180 from "../images and videos sabitha and co/catlogs/TILES/axi marble/aximarble120x180.pdf"
import aximarble120x240 from "../images and videos sabitha and co/catlogs/TILES/axi marble/aximarble120x240.pdf"
import somaymaster1 from "../images and videos sabitha and co/catlogs/TILES/somayfloor/somaymaster1.pdf"
import somaymaster2 from "../images and videos sabitha and co/catlogs/TILES/somayfloor/somaymaster2.pdf"
import somaymaster3 from "../images and videos sabitha and co/catlogs/TILES/somayfloor/somaymaster3.pdf"
import somay400x400 from "../images and videos sabitha and co/catlogs/TILES/somayfloor/somay400x400.pdf"
import somay200x1200 from "../images and videos sabitha and co/catlogs/TILES/somayfloor/somay200x1200.pdf"
import somaystairs from "../images and videos sabitha and co/catlogs/TILES/somayfloor/somaystairs.pdf"
import kajariamaster from "../images and videos sabitha and co/catlogs/TILES/kajaria/kajariamaster.pdf"
import italicamaster from "../images and videos sabitha and co/catlogs/TILES/italica/italicamaster.pdf"
import somay300x450 from "../images and videos sabitha and co/catlogs/TILES/somaywall/somay300x450.pdf"
import somay300x600 from "../images and videos sabitha and co/catlogs/TILES/somaywall/somay300x600.pdf"
import somay300x750 from "../images and videos sabitha and co/catlogs/TILES/somaywall/somay300x750.pdf"
import somay450x900 from "../images and videos sabitha and co/catlogs/TILES/somaywall/somay450x900.pdf"
 


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
                          <a className="logo-button-anchor" href={aximarble120x180} target="_blank"><button className="logo-button" >120&#215;180      </button>  </a>
                          <a className="logo-button-anchor" href={aximarble120x240} target="_blank"><button className="logo-button" >120&#215;240      </button>  </a>  
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
                          <a className="logo-button-anchor" href={somaymaster1} target= "_blank"><button className="logo-button" >MASTER1</button>  </a>
                          <a className="logo-button-anchor" href={somaymaster2} target= "_blank"><button className="logo-button" >MASTER2</button>  </a>
                          <a className="logo-button-anchor" href={somaymaster3} target= "_blank"><button className="logo-button" >MASTER3</button>  </a>
                        </div>
                        <div className="two-button-div">
                          <a className="logo-button-anchor" href={somay400x400}  target= "_blank"><button className="logo-button" >400&#215;400       </button>  </a>
                          <a className="logo-button-anchor" href={somay200x1200} target= "_blank"><button className="logo-button" >200&#215;1200      </button>  </a>
                          <a className="logo-button-anchor" href={somaystairs}   target= "_blank"><button className="logo-button" >STAIRS      </button>  </a>  
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
                          <a className="logo-button-anchor" href={somay300x450}><button className="logo-button" >300&#215;450</button>  </a>
                          <a className="logo-button-anchor" href={somay300x600}><button className="logo-button" >300&#215;600</button>  </a>
                        </div>
                        <div className="two-button-div">
                        
                          <a className="logo-button-anchor" href={somay300x750}><button className="logo-button" >300&#215;750</button>  </a>
                          <a className="logo-button-anchor" href={somay450x900}><button className="logo-button" >450&#215;900</button>  </a>  
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
                            <a className="logo-button-anchor" href={italicamaster} target="_blank"><button className="logo-button" >MASTER</button>  </a>                         
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
                          <a className="logo-button-anchor" href={aximarble120x180} target="_blank"><button className="logo-button" >120&#215;180      </button>  </a>
                          <a className="logo-button-anchor" href={aximarble120x240} target="_blank"><button className="logo-button" >120&#215;240      </button>  </a>  
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
                        <h2>COLORTILE CATLOGUE</h2>
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
             
            </div>
        
        
        </div>
    )
}

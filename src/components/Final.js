import React from 'react'
import SlideShow from './SlideShow'
import Products from './Products'
import Brands from "./Brands"
import Chatbott from './chatbot/Chatbot'
import Contact from './Contact'
import ContactIcon from './ContactIcon'
import Location from "./Location"
import About from './About'
import { BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Tiles from './Tiles'
import Galleryy from './Galleryy'
import Cpfittings from './Cpfittings'
import Counterpads from './Counterpads'
import Sanitaryware from './Sanitaryware'
import Pageend from './Pageend'
import Deals from './Deals'

export default function Final() {
    return (
        <Router>
            <Switch>
                <Route exact path="/">
                    <SlideShow/>
                    <Products/>
                    <Brands/>
                    <Contact/> 
                    
                    <About/>
                    <Location/>
                    <Pageend/>
                    <ContactIcon/>
                    <Chatbott/>
                </Route>
            </Switch>
            
            <Switch>
                <Route exact path="/tiles">
                    <Tiles />
                </Route>
                <Route exact path="/cpfittings">
                    <Cpfittings />
                </Route>
                <Route exact path="/counterpads">
                    <Counterpads />
                </Route>
                <Route exact path="/sanitaryware">
                    <Sanitaryware />
                </Route>
                <Route exact path="/deals">
                    <Deals />
                </Route>
                <Route exact path="/galleryy">
                    <Galleryy/>
                </Route>
            </Switch>
        </Router>
    )
}

import React,{ useState } from 'react'
import "../../componentCSS/Chatbot.css"
import Chatbot from "react-chatbot-kit";
import config from "./config";
import MessageParser from "./MessageParser";
import ActionProvider from "./ActionProvider";
import { FaRobot } from "react-icons/fa";
import { AiFillMessage } from "react-icons/ai";
 
export default function Chatbott() {
    const [botClicked, setBotClickked ] = useState(false)

    const iconClicked = () =>{
        setBotClickked(!botClicked)
    }

    return ( 
        <div>
            <div className="chatbox-icon">
                <AiFillMessage className="chaticon-fontawesom" size="2rem" onClick={iconClicked}/>
            </div>
            
            <div className = { botClicked ? "chatbot-main-div" : "chatbot-main-div do-not-open" }>
                <Chatbot 
                    config={config}
                    messageParser={MessageParser}
                    actionProvider={ActionProvider}
                />
            
            </div>
        </div>
    )
}

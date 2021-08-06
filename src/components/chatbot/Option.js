import React from 'react'
import "../../componentCSS/Option.css"

export default function Option(props) {

    const options = [
        {
            text:"Tiles",
            handler:props.actionProvider.handleTiles,
            id:1,
        },
        {
            text:"Glass",
            handler:props.actionProvider.handleGlass,
            id:2,
        },
        {
            text:"Counter pads",
            handler:props.actionProvider.handleCounterpads,
            id:3,
        },
        {
            text:"Cp-fitting",
            handler:props.actionProvider.handleCpfitting,
            id:4,
        },
        {
            text:"Sanitaryware",
            handler:props.actionProvider.handleSanitaryware,
            id:5,
        },
    ]

    const buttonMarkup = options.map((option)=>(
        <button key={option.id} onClick={option.handler} className="option-button">
            {option.text}
        </button>
    ))

    return (
        <div className="option-container">
            {buttonMarkup}
        </div>
    )
}

import React from 'react'

export default function AvatarBot() {
    const myStyle= {
        width:"40px",
        height:"40px",
        borderRadius:"50%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        fontSize:"0.8rem",
        backgroundColor:"grey",
        color:"white",
        marginRight:"15px",


    }
    return (
        <div>
            <div style={myStyle}>SMS</div>
        </div>
    )
}

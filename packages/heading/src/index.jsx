import React from "react";

const Heading = ({label, subText}) =>{
    return(
        <>
            <h1 style={{color: "blue"}}>{label}</h1>
            <p style={{color: "blue"}}>{subText}</p>
        </>
    )
}

export default Heading;
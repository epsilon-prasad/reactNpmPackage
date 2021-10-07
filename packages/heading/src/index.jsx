import React from "react";

const Heading = ({label, subText}) =>{
    return(
        <>
            <h1>{label}</h1>
            <p style={{color: "red"}}>{subText}</p>
        </>
    )
}

export default Heading;
import React from 'react'
import Image from "../components/catcat.png"

function Piccat()
{
    return (
    <div style= {{ textAlign: "center"}}>
        <img src={Image} alt="CAT" width ="350" height="350"/>
    </div>
        );
}

export  default Piccat;
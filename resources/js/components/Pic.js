import React from 'react'
import Image from "../components/19.png"

function Pic()
{
    return (
    <div style= {{ textAlign: "center"}}>
        <img src={Image} alt="RID"　width ="350" height="350" />
    </div>
    );
}

export  default Pic;
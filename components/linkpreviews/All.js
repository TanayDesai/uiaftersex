import React, { useState } from 'react';
import Preview from "./Preview";
import starship from "../../assests/images/starship.png";
import vercel from "../../assests/images/vercel.png";
import reflect from "../../assests/images/reflect.png";
import apple2 from "../../assests/images/apple2.png";

const weblinks = [
    // {
    //     name: "Apple",
    //     img: apple2
    // },
    {
        name: "SpaceX",
        img: starship
    },
    // {
    //     name: "Vercel",
    //     img: vercel
    // },
    {
        name: "Reflect",
        img: reflect
    }
]

const All = () => {
    return (
        <div style={{display:"flex",flexWrap:"wrap",flexDirection:"row"}}>
        {weblinks.map(weblink => (
            <div style={{margin:"auto",position:"relative", flexWrap: "wrap"}}>
            <Preview key={weblink.name} name={weblink.name} img={weblink.img} />
            </div>
        ))}    
        </div>
    )
}

export default All;
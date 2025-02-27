import React, { useState } from "react";

interface Node{
    x : number ;
    y : number ;
}

interface EdgeProps{
    start ?: Node ;
    end ?: Node ;
}

export default function Edge({start , end} : EdgeProps){

    return(
        <>
            {/* <line
                // x1={start.x}
                // y1={start.y}
                // x2={end.x}
                // y2={end.y}
                x1={10}
                y1={30}
                x2={20}
                y2={50}
                stroke="black" 
            /> */}
            <div
            
            style={{
                width: 240,
                top: "calc(10% + 57px)" ,
                left: "50%" ,
                transformOrigin: '0 0' ,
                border: '2px solid black',
                position: 'absolute' ,
                rotate: '130deg'

            }}>

            </div>
        </>
    )
}
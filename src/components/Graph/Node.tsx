import React, { useState , MouseEvent, useEffect } from 'react';
import "./node.css"

type Props = {
    id ?: number ,
    top ?: string ,
    left ?: string ,
    active ?: boolean ,
    childreId ?: number[] , 
}
export default function Node({id , top , left , active} : Props){

    return(
        <>
            <div 
            className= {`node-design ${active ? 'node-active' : 'node-inactive'}`}
            style={{left: left , top:top }}
            ></div>
        </>
    )
}
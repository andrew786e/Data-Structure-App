import React, { useState } from "react"
import Node from "./Node"
import "./graph.css"
import { nodeInformation } from "./data/nodeData"
import { StackItem  , Stack} from "../../utility/data-structures/Stack"
import Edge from "./Edge"
import {dfs} from "../../utility/algorithms/dfs"

export default function Graph(){
    const [nodeStackValues , setNodeStack] = useState<StackItem[]>(nodeInformation) ;
    const updateStack = (position: number) => {
        setNodeStack(prev => 
            prev.map((node, index) => 
                index === position ? { ...node, active: !node.active } : node
            )
        );
    };

    const runDfs = async () => {
        await dfs(nodeStackValues, updateStack);
    };

    return(
        <>
        <button className="button-style" onClick={runDfs}> Show Pre-Order Dfs</button>
        <div className="graph-container">
            <div className="node-container">
                {nodeStackValues.map((node) => 
                    (<Node key = {node.id} id = {node.id} active = {node.active} top = {node.top} left = {node.left}/>)
                )}
                <Edge />
            </div>
        </div>
        </>
    )
}
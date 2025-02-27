import { Stack, StackItem } from "../data-structures/Stack";
import { waitSeconds } from "../general/timer";

// Function performs dfs on the graph to create visual representation.
export async function dfs(stack : StackItem[] , update : (position : number) => void){
    const visitedNodes = new Set<number>() ;
    const nodeStack = new Stack() ;

    nodeStack.push(stack[0]) ;


    while(!nodeStack.isEmpty()){
        let node : StackItem | null = nodeStack.peek() ;
        if(node){
            let nodePosition = node.id - 1 ;

            if(!visitedNodes.has(node.id)){
                visitedNodes.add(node.id) ; 
                update(nodePosition) ;
                await waitSeconds() ;
        
                // Going to make more general later right now just focusing on binary trees

                if(node.childrenId.length == 0){
                    nodeStack.pop() ;
                    update(nodePosition) ;
                    await waitSeconds() ;
                }else if(node.childrenId.length == 1){
                    nodeStack.push(stack[node.childrenId[0] - 1]) ;
                }else{
                    nodeStack.push(stack[node.childrenId[1] - 1] ) ;
                    nodeStack.push(stack[node.childrenId[0] - 1]) ;

                }

            }else{
                // Already been searched
                nodeStack.pop();
                update(nodePosition) ;
                await waitSeconds() ;
            }
        }
    }
}

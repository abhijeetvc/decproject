import React,{ useEffect } from "react"

function UseEffectDemo(){

    // Case 1
    // useEffect(()=>{
    //     console.log('hiiiiiii');
    // })

    //Case 2
    // useEffect(()=>{
    //     console.log('hiiiiiii');
    // },[])
    
    const[value,setValue]=React.useState(0)

    //case 3
    useEffect(()=>{
        console.log('hiiiiiii');
    },[value])


    const increment=()=>{
        setValue(value+10)
    }

    return(
        <div>
            <h1>Use Effect Demo!!!</h1>
            <p>Value : {value}</p>
            <button type="button" onClick={increment}>Increment</button>
        </div>
    )
}

export default UseEffectDemo
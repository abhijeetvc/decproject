import React,{ createContext, useContext } from "react"
import CheckContextOne from "./CheckContextOne"

export const MyContext=createContext()

function ContextDemo(){
    
    const[value,setValue]=React.useState(0)

    const handleChange=()=>{
        setValue(value+1)
    }

    return(
        <MyContext.Provider value={{value,setValue}}>
        <div>
            <h1>Context API</h1>
            <p>Value is: {value}</p>
            <button type="button" onClick={handleChange}>Change</button>
            <CheckContextOne/>
            <CheckContextTwo/>
        </div>
        </MyContext.Provider>
    )
}

// function CheckContextOne(){

//     const {value,setValue}=useContext(MyContext)

//     const handleChange=()=>{
//         setValue(value+1)
//     }


//     return(
//         <div>
//             <h2>Context One</h2>
//             <p>Value1 is: {value}</p>
//             <button type="button" onClick={handleChange}>Change</button>
//         </div>

//     )
// }


function CheckContextTwo(){

    const {value,setValue}=useContext(MyContext)

    const handleChange=()=>{
        setValue(value+1)
    }


    return(
        <div>
            <h2>Context Two</h2>
            <p>Value2 is : {value}</p>
            <button type="button" onClick={handleChange}>Change</button>
        </div>
    )
}


export default ContextDemo
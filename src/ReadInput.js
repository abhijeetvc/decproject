
import React from 'react'
import Display from './Display'

function ReadInput(){

   // let message=""

    const[message,setMessage]=React.useState('')
    const[text,setText]=React.useState('')

    const readValue=(event)=>{
        
        // message=event.target.value
        setMessage(event.target.value)
        console.log(message);
    }

    const displayValue=()=>{
        setText(message)
    }

    return(
        <div>
            <h1>Read Input</h1>
            <input type='text' name="firstName" onChange={readValue}/>
            <button type='button' onClick={displayValue}>Read</button>
            <p>Message : {text}</p>
            <Display/>
        </div>
    )
}



export default ReadInput
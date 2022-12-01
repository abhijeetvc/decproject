import React from 'react'
// function ClassDemo(){

//     const[number,setNumber]=React.useState(0)

//     return(
//         <div>
//             <h1>Hello React!!!</h1>
//             <p>Number is: {number}</p>
//         </div>
//     )
// }

class ClassDemo extends React.Component{

    constructor(){

        this.state={
            number:0,
        }
    }

    display=()=>{
        console.log("hiiiiiiii");
    }

    render(){
        return(
            <div>
                <h2>Class Demo!!!</h2>
                <p>Number is: {this.state.number}</p>
                <button type='button' onClick={this.display}>Check</button>
            </div>
        )
    }
}

export default ClassDemo
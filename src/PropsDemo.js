
function PropsDemo(){

    let message="Hello React!!!"

    return(
        <div>
            <h1>Props Demo!!!</h1>
            {/* <p>Message : {message}</p> */}
            <ChildDemo message={message}/>
            <ChildDemo1 message={message}/>
        </div>
    )
}

function ChildDemo({message}){

    return(
        <div>
            <h2>Child Component</h2>
            <p>Message : {message}</p>
        </div>
    )
}

function ChildDemo1({message}){

    return(
        <div>
            <h2>Child Component</h2>
            <p>Message : {message}</p>
        </div>
    )
}

export default PropsDemo
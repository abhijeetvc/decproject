import ChildDemo from "./ChildDemo"
import ChildDemo1 from "./ChildDemo1"
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




export default PropsDemo
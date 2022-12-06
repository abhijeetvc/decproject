import React,{ useEffect } from "react";

function UseEffectExample(){

    const[userList,setUserList]=React.useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(response=>response.json())
        .then(res=>{
            console.log(res);
            setUserList(res)
        })
    },[])
   
    return(
        <div>
            <h1>User List!!!</h1>
            <ul>
                {
                    userList.map((user)=>(
                        <li key={user.id}>{user.username+" | "+user.address.city}</li>
                    ))
                }
            </ul>
        </div>
    )
}

export default UseEffectExample
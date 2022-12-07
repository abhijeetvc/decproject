import React,{ useEffect } from "react";

function UseEffectExample(){

    const userInfo={
        username:'',
        address:{
            city:''
        }
    }

    const userData={
        username:'',
        city:''
    }

    const[userList,setUserList]=React.useState([])
    const[user,setUser]=React.useState(userData)

    useEffect(()=>{
        if(userList.length===0){
            fetch('https://jsonplaceholder.typicode.com/users')
            .then(response=>response.json())
            .then(res=>{
                console.log(res);
                setUserList(res)
            })
        }
        console.log(userList);
       
    },[userList])

    const handleInput=event=>{
        setUser({...user,[event.target.name]:event.target.value})
    }

    const addData=()=>{
        userInfo.username=user.username
        userInfo.address.city=user.city
        userInfo.id=userList.length+1

        setUserList([...userList,userInfo])
        console.log(userList);
    }

    const editUser=(editUser,index)=>{
        console.log(editUser);
    }
   
    return(
        <div>
            <h1>User List!!!</h1>
            <form>
                <label>Username : </label>
                <input type='text' name="username" onChange={handleInput}/>

                <label>City : </label>
                <input type='text' name="city" onChange={handleInput}/>

                <button type="button" onClick={addData}>Add</button>

            </form>

            <ul>
                {
                    userList.map((user,index)=>(
                        <div>
                             <li key={user.id}>{user.username+" | "+user.address.city}</li>
                             <button type="button" onClick={()=>editUser(user,index)}>Edit</button>
                        </div>
                       
                    ))
                }
            </ul>
        </div>
    )
}

export default UseEffectExample

// Life and Javscript waits for no one!!!
import React, { useReducer, useState } from 'react'
let initialstate=[{id:"AAA",email:"aaa@test.com",phone:11111},]
function reducer(state,action)
{
switch(action.type)
{
    case "add":
    return [...state,action.payload]
    case "Del":
        return state .filter((s)=>{
            return s.id!==action.payload
        })
}
}
function Empolyee() {
    const [state,dispatch]=useReducer(reducer,initialstate)
    const [name,setName]=useState("")
    const [email,setEmail]=useState("")
    const [phone,setPhone]=useState("")
    function addemp(e)
    {
        e.preventDefault()
        let emp={
            id:new Date(),
            name,
            email,phone
        }
        console.log(emp)
        dispatch({type:"add",payload:emp})

    }
  return (
    <div>
      <form onSubmit={(e)=>addemp(e)}>
      <input type='text'placeholder='Enter name' value={name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
      <input type='text'placeholder='Enter email addresss' value={email} onChange={(e)=>setEmail(e.target.value)}/><br/><br/>
      <input type='text'placeholder='Enter phone number' value={phone} onChange={(e)=>setPhone(e.target.value)}/><br/><br/>
      <button type='submit'>Add Empolyee</button>
      </form>
      {
        state.map((item,index)=>{
            return(
                <li key={index}>
                <h4>{item.name}</h4>
                <h4>{item.email}</h4>
                <h4>{item.phone}</h4>
                <button onClick={()=>dispatch({type:"Del",payload:item.id})}>Delete</button>
                </li>
            )
        })
      }
    </div>
  )
}

export default Empolyee

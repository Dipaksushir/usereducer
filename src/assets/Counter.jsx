import React from 'react'
import { useReducer } from 'react'
let initialstate=0
function reducer(state,action)
{
    switch(action.type)
    {
        case "plus":
        return state+1
        case "minus":
            return state-1
    }
    return state
}
function Counter() {
    const[state,dispatch]=useReducer(reducer,initialstate)
  return (
    <div>
      <h1>{state}</h1>
      <button onClick={()=>dispatch({type:"plus"})}>Increment</button>
      <button onClick={()=>dispatch({type:"minus"})}>Decrement</button>
    </div>
  )
}

export default Counter

import React, { useEffect } from 'react'
import { useState} from 'react'

const State = () => {
    const[count,setCount]=useState(0)
    const[like,setLike]=useState(false)
    useEffect(()=>{
        console.log("from useEffect");
    })
  return (
    <div>
        <h1>Count:{count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>
        <button onClick={()=>setCount(count-1)}>Decrement</button>
        <h2>Like:{like}</h2>
        <button onClick={()=>setLike(like+1)}>👍</button>
        <button onClick={()=>setLike(like-1)}>👎</button>
    </div>
  )
}

export default State
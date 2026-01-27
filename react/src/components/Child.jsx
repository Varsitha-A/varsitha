import React from 'react'

const Child = ({send}) => {
    
  return (
    <div>
        <button onClick={()=>send("hello from child")}>Send Data to Parent</button>
    </div>
  )
}

export default Child
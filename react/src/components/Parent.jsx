import React from 'react'
import Child from './Child'
const Parent = () => {
    const getData=(data)=>{
    console.log("Received from Child: Data fetched successfully",data)
}
  return (
    <div>
        <Child send={getData}/>
    </div>
  )
}

export default Parent
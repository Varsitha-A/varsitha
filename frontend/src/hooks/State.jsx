import React, { useState } from 'react'

const State = () => {
  const [count, setCount] = useState(0)
 const [like, setLike] = useState(0)
 const [dislike, setDislike] = useState(0)
 
  return (
    <div>
      <h2>useState Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={()=> setLike(like+1)}>❤likes: {like}</button>
      <button onClick={()=> setDislike(dislike+1)}>☹dislikes: {dislike}</button>
    </div>
  )
}

export default State
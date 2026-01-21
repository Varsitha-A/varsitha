import React, { useState, useEffect } from 'react'

const AnimatedEffect = () => {
  const [count, setCount] = useState(0)
  const [like, setLike] = useState(0)
  const [dislike, setDislike] = useState(0)
  const [bgColor, setBgColor] = useState('#f0f0f0')

  useEffect(() => {
    const colors = ['#FFC0CB', '#FFD700', '#90EE90', '#ADD8E6', '#FFA07A']
    const randomColor = colors[Math.floor(Math.random() * colors.length)]
    setBgColor(randomColor)
  }, [count])

  useEffect(() => {
    const likeBtn = document.getElementById('likeBtn')
    likeBtn.classList.add('scale-up')
    const timeout = setTimeout(() => likeBtn.classList.remove('scale-up'), 300)
    return () => clearTimeout(timeout)
  }, [like])

  useEffect(() => {
    const dislikeBtn = document.getElementById('dislikeBtn')
    dislikeBtn.classList.add('shake')
    const timeout = setTimeout(() => dislikeBtn.classList.remove('shake'), 300)
    return () => clearTimeout(timeout)
  }, [dislike])

  return (
    <div style={{ backgroundColor: bgColor, padding: '50px', textAlign: 'center', transition: 'background-color 0.5s' }}>
      <h2>Interactive useEffect Example</h2>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <br /><br />
      <button id="likeBtn" onClick={() => setLike(like + 1)}>❤ Likes: {like}</button>
      <button id="dislikeBtn" onClick={() => setDislike(dislike + 1)}>☹ Dislikes: {dislike}</button>
    </div>
  )
}

export default AnimatedEffect

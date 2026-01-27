import React from 'react'
import Profile from '../components/Profile.jsx'
import State from '../hooks/State.jsx'
import Parent from '../components/Parent.jsx'
import Form from '../hooks/Form.jsx'
const Home = () => {
  return (
    <div>
        <div>Home</div>
    <Profile name="Varsitha" age={20} skills={["HTML","CSS","JAVASCRIPT"]}/>
    <State/>
    
    <Parent/>
    <Form/> 
    </div>
  )
}

export default Home
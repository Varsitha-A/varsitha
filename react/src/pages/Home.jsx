import React from 'react'
import Profile from '../components/Profile.jsx'
import State from '../hooks/State.jsx'
import Parent from '../components/Parent.jsx'
import Form from '../hooks/Form.jsx'
import { Link } from 'react-router-dom'
import { userContext } from '../App.jsx'
import { useState } from 'react'
const Home = () => {
  const[user,setUser]=useState("Varshi");
  return (
    <div>
      
        <Link to={'/form'}>Form</Link><br />
        <Link to={'/state'}>State</Link><br />
        <Link to={'/profile'}>Profile</Link><br />
        <Link to={'/reducer'}>Reducer</Link>
        
     <userContext.Provider value={user}>
       <Profile  age={20} skills={["HTML","CSS","JAVASCRIPT"]}/>
     </userContext.Provider>
    {/* <Profile name="Varsitha" age={20} skills={["HTML","CSS","JAVASCRIPT"]}/> */}
    <Parent/>
    </div>
  )
}

export default Home
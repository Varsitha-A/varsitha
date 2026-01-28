import React from 'react'
import { useContext } from 'react'
import { userContext } from '../App';
const Profile = ({age,skills}) => {
  const name=useContext(userContext);
  return (
    <div>
        <h1>Name: {name} {age}years old</h1>
        <ul>
            {skills.map((skill)=>(
            <li>{skill}</li>
            ))}
        </ul>
        
    </div>
  )
}

export default Profile
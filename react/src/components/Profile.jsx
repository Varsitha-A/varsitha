import React from 'react'

const Profile = ({name,age,skills}) => {
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
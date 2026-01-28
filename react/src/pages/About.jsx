import React, { useEffect,useState} from 'react'
import { Link } from 'react-router-dom';
const About = () => {
  const[users,setUsers]=useState([]);
  useEffect(()=>{fetch('https://fakestoreapi.com/users')
  .then(response => response.json())
  .then(data => setUsers(data));
    },[])
    // console.log(users)
  return (
    <div>
        <h1>Users</h1>
            {users.map(user => (
                <div key={user.id}>
                    <h4>{user.username}</h4>
                    <h3>{user.email }</h3>
                    <h5>{user.password }</h5>
                    <Link to={`/users/${user.id}`}> View Details</Link>
                </div>
            ))}
         
    </div>
  )
}

export default About
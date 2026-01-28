import React, { useEffect, useState } from 'react'

const Form = () => {
    const [form, setForm] = useState({
        username: "",
        email: "",
        age:"",
        department:""
    })
    useEffect(()=>{
        console.log("Form state updated:", form);
    })
    const handleChange = (e) => {
        const {name, value} = e.target
        setForm((prev)=>({
            ...prev,
            [name]: value
        }))
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(form)
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            <label>Username:</label>
            <input type="text" name="username" value={form.username} onChange={handleChange}/><br/>
            <label>Email:</label>   
            <input type="email" name="email" value={form.email} onChange={handleChange}/><br/>
            <label>Age:</label>
            <input type="number" name="age" value={form.age} onChange={handleChange}/><br/>
            <label>Department:</label>
            <input type="text" name="department" value={form.department} onChange={handleChange}/><br/>
            <input type="submit" value="Submit"/>
        </form> 
    </div>
  )
}

export default Form
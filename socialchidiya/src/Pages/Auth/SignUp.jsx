import React, { useState } from 'react'
import './Signup.css'

function SignUp() {

  const [user,setUser] = useState({
    fullName:"",
    userName:"",
    email:"",
    password:"",
    cPassword:"",
  })

  const handleInput =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setUser({...user,[name]:value})
  }

  console.log(user)

  

  return (
  <div className="signup-maincontainer">
    <div className='signUp-container'>
    <h2>The social Chidiya</h2>
    <h2>Sign Up</h2>
    <form >
  <label for="fullname">Full Name:</label><br/>
  <input type="text" id="fullname" name="fullName" value={user.fullName} onChange={handleInput} required/><br/>

  <label for="username">Username:</label><br/>
  <input type="text" id="username" name="userName" value={user.userName} onChange={handleInput} required/><br/>

  <label for="email">Email:</label><br/>
  <input type="email" id="email" name="email" value={user.email} onChange={handleInput} required/><br/>

  <label for="password">Password:</label><br/>
  <input type="password" id="password" name="password" value={user.password} onChange={handleInput} required/><br/>

  <label for="confirm_password">Confirm Password:</label><br/>
  <input type="password" id="cPassword" name="cPassword" value={user.cPassword} onChange={handleInput} required/><br/>

  <input type="submit" value="Sign Up"/>
    </form>
    </div>    
    </div>
  )
}

export default SignUp 
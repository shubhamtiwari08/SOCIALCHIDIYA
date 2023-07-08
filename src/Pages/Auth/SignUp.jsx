import React, { useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'

function SignUp() {

  const Navigate = useNavigate()
  const [user,setUser] = useState({
    fullName:"",
    username:"",
    email:"",
    password:"",
    cPassword:"",
  })

  const handleInput =(e)=>{
        const name = e.target.name
        const value = e.target.value
        setUser({...user,[name]:value})
  }

  const handleSignUp = (e)=>{
        e.preventDefault()
        signUpUser()
  }

  const signUpUser = async ()=>{
    try {
      const response = await fetch('/api/auth/signup',{
        method:"POST",
        body:JSON.stringify(user)
      })
      const data = await response.json()
      if(response.status === 201){
          Navigate('/login')
      }else{
        console.log(data?.errors[0])
        console.log("not working")
      }
    } catch (error) {
      console.error(error)
    }
  }

  

  return (
  <div className="signup-maincontainer">
    <div className='signUp-container'>
    <h2>Sign Up</h2>
    <form onSubmit={handleSignUp}>
  <label for="fullname">Full Name:</label><br/>
  <input type="text" id="fullName" name="fullName" value={user.fullName} onChange={handleInput} required/><br/>

  <label for="username">Username:</label><br/>
  <input type="text" id="username" name="username" value={user.username} onChange={handleInput} required/><br/>

  <label for="email">Email:</label><br/>
  <input type="email" id="email" name="email" value={user.email} onChange={handleInput} required/><br/>

  <label for="password">Password:</label><br/>
  <input type="password" id="password" name="password" value={user.password} onChange={handleInput} required/><br/>

  <label for="confirm_password">Confirm Password:</label><br/>
  <input type="password" id="cPassword" name="cPassword" value={user.cPassword} onChange={handleInput} required/><br/>

  <input type="submit" value="Sign Up"/>
    </form>
    <p style={{margin:"1rem"}}>already signed in ? <NavLink to="/login">login</NavLink></p>
    </div>    
    </div>
  )
}

export default SignUp 
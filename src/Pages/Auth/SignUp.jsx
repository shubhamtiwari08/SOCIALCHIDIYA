import React, { useContext, useState } from 'react'
import './Signup.css'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { userContext } from '../../Context/userContext/userContext'

function SignUp() {

  const {userDispatch,userState} = useContext(userContext)

  const Navigate = useNavigate()
  const [user,setUser] = useState({
    firstName:"",
    lastName:"",
    username:"",
    email:"",
    password:"",
    cPassword:"",
    avatarUrl:"https://randomuser.me/api/portraits/men/2.jpg",
    bio:"My bio"
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
       console.log(data)
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
  <label for="firstName">First Name:</label><br/>
  <input type="text" id="firstName" name="firstName" value={user.firstName} onChange={handleInput} required/><br/>

  <label for="fristName">Last Name:</label><br/>
  <input type="text" id="lastName" name="lastName" value={user.lastName} onChange={handleInput} required/><br/>


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
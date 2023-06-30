import React, { useContext, useState } from 'react'
import './Login.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { useLocation, useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'

function Login() {

  const{isLogged,setIsLogged,userProfile,setUserProfile}= useContext(AuthContext)
  const Navigate = useNavigate()
  const location = useLocation()

  const [loginData,setLoginData] = useState({
    username:"",
    password:""
  }) 

  const handleInput=(e)=>{
    const name = e.target.name
    const value = e.target.value

    setLoginData({...loginData,[name]:value})
  }

  console.log(loginData)

const userLogin = async(loginData)=>{
   try {
    const response = await fetch("/api/auth/login",{
    method:"POST",
    body:JSON.stringify(loginData)
  })
  console.log(response)
  const data = await response.json()
  if(response.status === 200){
    setUserProfile(data.foundUser)
    localStorage.setItem("Token", data.encodedToken)
    setIsLogged(!isLogged)
    toast.success("logged in successfully")
    Navigate(location.state?.from?.pathname || "/home")
  }else if(response.status === 404){
    toast.error("invalid email or password")
  }
   } catch (error) {
     toast.error(error) 
   }
}

const handleSubmit=(e)=>{
  e.preventDefault()
  userLogin(loginData)
}

const handleGuest = (e) =>{
  const defaultData = {
    username:"adarshbalika",
    password:"adarshBalika123"
  }
  setLoginData(defaultData)
}

  return (
<div className='login-main-container'>
<h1 className='logo-name hero-word-two green login-head'>Let's flock together</h1>
  <div class="container">
    <h2 >Login</h2>
    <form id="login-form" action="/login" method="post" onSubmit={handleSubmit}>
      <label for="username">Username:</label><br/>
      <input type="username" id="username" name="username" value={loginData.username}  onChange={handleInput} required/><br/>

      <label for="password">Password:</label><br/>
      <input type="password" id="password" name="password" value={loginData.password} onChange={handleInput} required/><br/>

      <input type="submit" value="Log In"/>
      <button onClick={handleGuest} className='button guest-btn'>guest login</button>
    </form>
    <div class="create-account">
    <NavLink to='/signup'>create new account</NavLink>
    </div>
  </div>
</div>
  )
}

export default Login

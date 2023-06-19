import React, { useContext, useState } from 'react'
import './Login.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { useNavigate } from 'react-router'

function Login() {

  const{isLogged,setIsLogged,userProfile,setUserProfile}= useContext(AuthContext)
  const Navigate = useNavigate()

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
  const response = await fetch("/api/auth/login",{
    method:"POST",
    body:JSON.stringify(loginData)
  })
  const data = await response.json()
  console.log(data)
  if(response.status === 200){
    setUserProfile(data.foundUser)
    setIsLogged(!isLogged)
    Navigate("/home")
  }
  
}

const handleSubmit=(e)=>{
  e.preventDefault()
  userLogin(loginData)
}

const handleGuest = () =>{
  const defaultData = {
    username:"adarshbalika",
    password:"adarshBalika123"
  }
  userLogin(defaultData)
}

  return (
<div className='login-main-container'>
<h1>The social chidiya</h1>
  <div class="container">
    <h2>Login</h2>
    <form id="login-form" action="/login" method="post" onSubmit={handleSubmit}>
      <label for="username">Username:</label><br/>
      <input type="username" id="username" name="username" value={loginData.username}  onChange={handleInput} required/><br/>

      <label for="password">Password:</label><br/>
      <input type="password" id="password" name="password" value={loginData.password} onChange={handleInput} required/><br/>

      <input type="submit" value="Log In"/>
      <button onClick={handleGuest}>guest login</button>
    </form>
    <div class="create-account">
      <a href="/signup">Create New Account</a>
    </div>
  </div>
</div>
  )
}

export default Login

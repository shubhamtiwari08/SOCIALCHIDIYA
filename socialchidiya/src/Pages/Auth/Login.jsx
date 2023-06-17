import React from 'react'
import './Login.css'

function Login() {
  return (
<div className='login-main-container'>
<h1>The social chidiya</h1>
  <div class="container">
    <h2>Login</h2>
    <form id="login-form" action="/login" method="post">
      <label for="email">Email:</label><br/>
      <input type="email" id="email" name="email" required/><br/>

      <label for="password">Password:</label><br/>
      <input type="password" id="password" name="password" required/><br/>

      <input type="submit" value="Log In"/>
    </form>
    <div class="create-account">
      <a href="/signup">Create New Account</a>
    </div>
  </div>
</div>
  )
}

export default Login

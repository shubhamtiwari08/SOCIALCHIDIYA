import React from 'react'
import './landing.css'

function Landing() {
  return (
    <div className='landing-main-container'>
      <div className="content-main-box">
       <div className="content-container">
         <div className="logo green hero-word-two">
          THE  <span className='logo-name hero-word'>SOCIAL CHIDIYA</span>         </div>
         <div className="tagline">
         <span className='hero-word'>"FLOCK </span><span className='hero-word-two green'>together,</span><br/>
         <span className='hero-word'>SPREAD </span><span className='hero-word-two green'>your wings,</span><br/>
         <span className='hero-word-two pink'> and be </span><br/>
         <span className='hero-word'> SOCIAL CHIDIYA!"</span>
         </div>
         <div className="join-box">
        <button className="join-btn button">JOIN NOW</button>
          <p>already have an account ? Login </p>
         </div>
       </div>
       <div className="image-container">
         
       </div>
       </div>
    </div>
  )
}

export default Landing

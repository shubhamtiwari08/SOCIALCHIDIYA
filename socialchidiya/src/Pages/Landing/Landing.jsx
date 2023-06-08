import React from 'react'
import './landing.css'

function Landing() {
  return (
    <div className='landing-main-container'>
       <div className="content-container">
         <div className="logo">
          THE SOCIAL CHIDIYA
         </div>
         <div className="tagline">
         <span>"Flock together</span>
         <span>spread your wings,</span>
         <span> and </span>
         <span> be social Chidiya!"</span>
         </div>
         <div className="join-box">
        <div className="join-btn">JOIN NOW</div>
          <p>already have an account ? Login </p>
         </div>
       </div>
       <div className="image-container">
       </div>
      
    </div>
  )
}

export default Landing

import React from 'react'
import './Follow.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'

function Follow() {
  return (
    <div className='Follow-container'>
      <ProfileCircle /> 
      <div className="name">
      <p>shubham tiwari</p> 
      <p>@shubhamTiwari</p> 
      </div>
      
      <button>Follow +</button>
    </div>
  )
}

export default Follow

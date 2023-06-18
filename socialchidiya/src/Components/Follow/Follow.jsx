import React from 'react'
import './Follow.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'

function Follow({data}) {
    
  const {firstName,lastName,username} = data

  return (
    <div className='Follow-container'>
      <ProfileCircle /> 
      <div className="name">
      <p>{firstName + " " + lastName}</p> 
      <p>@{username}</p> 
      </div>
      
      <button>Follow +</button>
    </div>
  )
}

export default Follow

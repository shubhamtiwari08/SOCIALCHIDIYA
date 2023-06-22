import React, { useContext } from 'react'
import './Follow.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { userContext } from '../../Context/userContext/userContext'

function Follow({data}) {
    
  const {_id,firstName,lastName,username} = data
  const {followUser} = useContext(userContext)

  return (
    <div className='Follow-container'>
      <ProfileCircle /> 
      <div className="name">
      <p>{firstName + " " + lastName}</p> 
      <p>@{username}</p> 
      </div>
      
      <button onClick={()=>followUser(_id)}>Follow +</button>
    </div>
  )
}

export default Follow

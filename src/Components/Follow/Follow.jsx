import React, { useContext, useEffect } from 'react'
import './Follow.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { userContext } from '../../Context/userContext/userContext'
import { useNavigate } from 'react-router'
import { AuthContext } from '../../Context/AuthContext/AuthContext'

function Follow({data}) {
    
  const {_id,firstName,lastName,username} = data
  const {followUser,userState} = useContext(userContext)
  const {isLogged}= useContext(AuthContext)
  const {allUsers}= userState
  const profileUrl = allUsers.find(user => user.username.includes(username)).avatarUrl

  const Navigate = useNavigate()


  return (
    <div className='Follow-container'>
      <ProfileCircle url={profileUrl}/> 
      <div className="name" onClick={()=>Navigate(`/thirdprofile/${_id}`)}>
      <div className="name-container">
      <p>{firstName + " " + lastName}</p>
      <p style={{fontSize:"10px",color:"grey"}}>@{username}</p>
      </div> 
      </div>      
      <button onClick={()=>isLogged?followUser(_id):Navigate("/login")} className='button'>Follow +</button>
    </div>
  )
}

export default Follow

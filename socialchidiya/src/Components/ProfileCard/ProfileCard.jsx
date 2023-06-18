import React, { useContext, useEffect } from 'react'
import './ProfileCard.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { userContext } from '../../Context/userContext/userContext'

function ProfileCard() {

  const{userProfile} = useContext(AuthContext)
  const {getMainUser,mainUser}=useContext(userContext)
   console.log(mainUser)

   const {_id} = userProfile
   const {bio,followers,following,firstName,lastName,username,website}=mainUser

  useEffect(()=>{
    getMainUser(_id)
  },[])




  return (
    <div className='profileCard-main-container'>
    <div className='profile-img' style={{borderRadius:"50%",width:`80px`,height:`80px`,overflow:"hidden"}}>
      <img src='https://placehold.co/600x400/png' alt="profile" style={{objectFit:"cover"}} />
    </div>
    <h1>{`${firstName} ${lastName}`}</h1>
    <p>@{username}</p>
    <button>Edit profile</button>
    <p>{bio}</p>
    <p>{website}</p>
    <div className="Reach-count">
       <p>0</p>
       <p>{following.length}</p>
       <p>{followers.length}</p>
       <p>Posts</p>
       <p>following</p>
      <p>followers</p>
      
      
    </div>
    </div>
  )
}

export default ProfileCard

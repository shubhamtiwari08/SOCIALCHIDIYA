import React, { useContext, useEffect, useState } from 'react'
import './ProfileCard.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { userContext } from '../../Context/userContext/userContext'
import { postContext } from '../../Context/PostContext/PostProvider'
import FeedPost from '../FeedPost/FeedPost'
import EditProfile from '../EditProfilePopUp/EditProfile'
import { users } from '../../backend/db/users'

function ProfileCard({profileUsername,userId}) {
  const [editProfile,setEditProfile]=useState(false)
  const {postState} = useContext(postContext)
  const {userState,getThirdUser,followUser,unFollowUser}=useContext(userContext)


  const thirdUser = userState.allUsers.find(user=> user.username === profileUsername)
  const bio = userState.thirdUser?.bio
  const followers = userState.thirdUser?.followers
  const following = userState.thirdUser?.firstName
  const lastName = userState.thirdUser?.lastName
  const firstName = userState.thirdUser?.firstName
  const avatarUrl = userState.thirdUser?.avatarUrl
  const username = userState.allUsers.find(user=> user.username === profileUsername)?.username
  const website = userState.thirdUser?.website

  const thirdUserPost = postState.posts.filter(post => post.username === username)
  const ifAuthUser = userState?.authUser?.username === username
  const ifFollowing = userState?.authUser?.following.filter(user => user.username === username)

  console.log(ifFollowing.length===1?"true":"false")

  console.log(ifAuthUser, username, "check")

  useEffect(()=>{
    getThirdUser(userId)
  },[userId])


  return (
    <div className='profileCard-main-container'>
    
    <div className='profile-img' style={{borderRadius:"50%",width:`80px`,height:`80px`,overflow:"hidden"}}>
      <img src={avatarUrl} alt="profile" style={{objectFit:"cover"}} />
    </div>
    <h1>{`${firstName} ${lastName}`}</h1>
    <p>@{username}</p>
    {ifAuthUser?(<button onClick={()=>setEditProfile(!editProfile)}>Edit profile</button>):(ifFollowing.length===1?<button onClick={()=>unFollowUser(userId)}>unFollow</button>:<button onClick={()=>followUser(userId)}>Follow</button>)}
    <p>{bio}</p>
    <p>{website}</p>
    <div className="Reach-count">
       <p>0</p>
       <p>{following?.length}</p>
       <p>{followers?.length}</p>
       <p>Posts</p>
       <p>following</p>
      <p>followers</p>  
    </div>
      {thirdUserPost.map(post => <FeedPost feedData={post}/>)}
      {editProfile && <EditProfile editToggle={{editProfile,setEditProfile}}/>}   
    </div>
  )
}

export default ProfileCard

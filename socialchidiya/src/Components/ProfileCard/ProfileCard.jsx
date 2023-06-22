import React, { useContext, useEffect } from 'react'
import './ProfileCard.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { userContext } from '../../Context/userContext/userContext'
import { postContext } from '../../Context/PostContext/PostProvider'
import FeedPost from '../FeedPost/FeedPost'

function ProfileCard() {

  const {postState} = useContext(postContext)
  const {userState}=useContext(userContext)
  const {bio,followers,following,firstName,lastName,username,website}= userState.authUser

  

  const authUserPost = postState.posts.filter(post => post.username === username)


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
       <p>{following?.length}</p>
       <p>{followers?.length}</p>
       <p>Posts</p>
       <p>following</p>
      <p>followers</p>  
    </div>
      {authUserPost.map(post => <FeedPost feedData={post}/>)}
    </div>
  )
}

export default ProfileCard

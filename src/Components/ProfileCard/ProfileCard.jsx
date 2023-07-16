import React, { useContext, useEffect, useState } from 'react'
import './ProfileCard.css'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { userContext } from '../../Context/userContext/userContext'
import { postContext } from '../../Context/PostContext/PostProvider'
import FeedPost from '../FeedPost/FeedPost'
import EditProfile from '../EditProfilePopUp/EditProfile'
import { users } from '../../backend/db/users'
import { useNavigate } from 'react-router'
import { NavLink } from 'react-router-dom'

function ProfileCard({profileUsername,userId,avatarUrl}) {
  const [editProfile,setEditProfile]=useState(false)
  const {isLogged,userProfile} = useContext(AuthContext)
  const {postState} = useContext(postContext)
  const {userState,getUser,getThirdUser,followUser,unFollowUser}=useContext(userContext)


  console.log(userProfile)
  
  const thirdUser = userState.allUsers.find(user=> user.username === profileUsername)
  const userCheck = thirdUser?.username === userProfile.username
  const bio = userCheck ? userProfile?.bio : userState.thirdUser?.bio  
  const followers = userCheck ? userProfile?.followers : userState.thirdUser?.followers
  const following = userCheck ? userProfile?.following :userState.thirdUser?.following
  const lastName = userCheck ? userProfile?.lastName:userState.thirdUser?.lastName 
  const firstName = userCheck ? userProfile?.firstName : userState.thirdUser?.firstName
  const username = userState.allUsers.find(user=> user.username === profileUsername)?.username ?? userProfile?.username 
  const website = userCheck ? userProfile?.website : userState.thirdUser?.website

  const thirdUserPost = postState.posts.filter(post => post.username === username)
  const ifAuthUser = userState?.authUser?.username === username
  const ifFollowing = userState?.authUser?.following?.filter(user => user.username === username)
  const navigate = useNavigate()

  console.log(ifFollowing?.length===1?"true":"false")

  console.log(ifAuthUser, username, "check")
  console.log(userCheck)

  useEffect(()=>{
    getThirdUser(userId)
  },[userId,editProfile])


  return (
    <div className='profileCard-main-container'> 
    <div className='profile-img' style={{borderRadius:"50%",width:`80px`,height:`80px`,overflow:"hidden"}}>
      <img src={avatarUrl} alt="profile"  />
    </div>
    <h1>{`${firstName} ${lastName}`}</h1>
    <p>@{username}</p>
    {ifAuthUser?(<button className='button' onClick={()=>setEditProfile(!editProfile)}>Edit profile</button>):isLogged?(ifFollowing?.length===1?<button className='button' onClick={()=>unFollowUser(userId)}>unFollow</button>:<button className='button' onClick={()=>followUser(userId)}>Follow</button>):<button onClick={()=>navigate("/login")}>Follow</button>}
    <p>{bio}</p>
    <a href={website} target='_blank'>{website}</a>
    <div className="Reach-count">
       <p>0</p>
       <p>{following?.length}</p>
       <p>{followers?.length}</p>
       <p>Posts</p>
       <p>following</p>
      <p>followers</p>  
    </div>
    <div className="main-feed">
      {thirdUserPost.length === 0 ? <h1>there are no post to display</h1> : thirdUserPost.map(post => <FeedPost feedData={post}/>)}
      </div>
      {editProfile && <EditProfile editToggle={{editProfile,setEditProfile}}/>}   
    </div>
  )
}

export default ProfileCard

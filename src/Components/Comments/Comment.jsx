import React, { useContext } from 'react'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'
import { userContext } from '../../Context/userContext/userContext'

function Comment({commentData,postUsername}) {
    console.log(commentData)
    const {userState} = useContext(userContext)
  
    const {allUsers}= userState
    const profileUrl = allUsers.find(user=> user.username.includes(commentData?.username)).avatarUrl
  return (
    <div className='main-conmment-container'>
    <div className="profile-info">
    <ProfileCircle url={profileUrl}/>
    <div className="comment-profile">
      <p><span>{commentData?.username}</span><span> @{commentData?.username}</span></p>
      <p style={{color:"red"}}>replying to @{postUsername}</p>
    </div>
    </div>
    <p className='comment-content'>{commentData?.text}</p>
    {/*<div className="action-btns action-btn-post">
      <FontAwesomeIcon icon={faHeart} color='blue'/>
      <FontAwesomeIcon icon={faComment} color='blue'/>
      <FontAwesomeIcon icon={faShare} color='blue'/>
  <FontAwesomeIcon icon={faBookmark} color='blue'/>
   </div>*/}
       <hr />       
    </div>
  )
}

export default Comment

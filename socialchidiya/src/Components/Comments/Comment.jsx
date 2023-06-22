import React from 'react'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import './Comment.css'

function Comment({commentData,postUsername}) {
    console.log(commentData)
  return (
    <div className='main-conmment-container'>
    <div className="profile-info">
    <ProfileCircle/>
    <div className="comment-profile">
      <p><span>{commentData?.username}</span><span> @{commentData?.username}</span></p>
      <p>replying to @{postUsername}</p>
    </div>
    </div>
    <p className='comment-content'>{commentData?.text}</p>
      <div className="action-btns action-btn-post">
      <FontAwesomeIcon icon={faHeart} color='blue'/>
      <FontAwesomeIcon icon={faComment} color='blue'/>
      <FontAwesomeIcon icon={faShare} color='blue'/>
      <FontAwesomeIcon icon={faBookmark} color='blue'/>
   </div>
              
    </div>
  )
}

export default Comment

import React from 'react'
import './FeedPost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faEllipsis, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

function FeedPost({feedData}) {

  const {id,content,mediaUrl,likes,comments,username} = feedData

  return (
    <div className='feed-post-main-container'>
     <ProfileCircle/>
     <div className="Post-content">
       <div className="name">
         <p><span>{username}</span> <span>@{username}</span></p>
         <button><FontAwesomeIcon icon={faEllipsis} color='blue' size='xl'/></button>
       </div>
       <div className="post-info">
         {content}
       </div>
       <div className="action-btns">
       <FontAwesomeIcon icon={faHeart} color='blue'/>
       <FontAwesomeIcon icon={faComment} color='blue'/>
       <FontAwesomeIcon icon={faShare} color='blue'/>
       <FontAwesomeIcon icon={faBookmark} color='blue'/>
    </div>
     </div>

    </div>
  )
}

export default FeedPost

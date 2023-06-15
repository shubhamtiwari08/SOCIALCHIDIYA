import React from 'react'
import './FeedPost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faEllipsis, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'

function FeedPost() {
  return (
    <div className='feed-post-main-container'>
     <ProfileCircle/>
     <div className="Post-content">
       <div className="name">
         <p><span>Shubham tiwari</span> <span>@shubhamtiwari</span></p>
         <button><FontAwesomeIcon icon={faEllipsis} color='blue' size='xl'/></button>
       </div>
       <div className="post-info">
         Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid numquam quas doloribus sapiente minus architecto dolores accusamus earum. Eius, hic quibusdam? Iusto necessitatibus laboriosam veritatis perferendis provident exercitationem at hic.
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

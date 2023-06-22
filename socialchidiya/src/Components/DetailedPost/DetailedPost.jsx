import React, { useContext, useEffect } from 'react'
import './DetailedPost.css'
import Profile from '../../Pages/Profile/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import PostProvider, { postContext } from '../../Context/PostContext/PostProvider'
import { useParams } from 'react-router'
import Comment from '../Comments/Comment'

function DetailedPost() {

   const {getDetailedPost,singlePost} = useContext(postContext)
   const {singlePostId} = useParams()
   // const {_id,content,mediaURL,likes:{ likeCount,likedBy,dislikedBy},username,createdAt} = singlePost

   const date = singlePost?.createdAt?.slice(0,10)
   const time = singlePost?.createdAt?.slice(11,16)
   const comments = singlePost?.comments

   console.log(singlePost)



   

  return (
     <div>
     <div className='post-profile-container'>
     <div className='profile-info'>
     <ProfileCircle/>
     <div className='profile'>
     <h4>{singlePost?.username}</h4>
     <p>@{singlePost?.username}</p>
     </div>
     </div>
     <div className="main-content">
      <p>
       {singlePost?.content}
      </p>
      </div>
      <div className="dateandtime">
         <p>{date}</p>
         <p>{time}AM</p>
      </div>
      <hr />
      <h4>{singlePost?.likes?.likeCount} likes</h4>
      <hr />
      </div>
      <div className="action-btns action-btn-post">
      <FontAwesomeIcon icon={faHeart} color='blue'/>
      <FontAwesomeIcon icon={faComment} color='blue'/>
      <FontAwesomeIcon icon={faShare} color='blue'/>
      <FontAwesomeIcon icon={faBookmark} color='blue'/>
   </div>
   <hr />
   <div className="comment">
     <ProfileCircle/>
     <input type="text" placeholder='comment your reply'/>
     <button className='button post-btn' > Post </button>
   </div>
   <hr />
   {
   comments?.map(comment => <Comment commentData={comment} postUsername={singlePost?.username}/>)
   }
     </div>
  )
}

export default DetailedPost

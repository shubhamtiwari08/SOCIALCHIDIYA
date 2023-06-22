import React, { useContext, useState } from 'react'
import './FeedPost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faEllipsis, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { postContext } from '../../Context/PostContext/PostProvider'
import { useNavigate } from 'react-router'
import { userContext } from '../../Context/userContext/userContext'

function FeedPost({feedData}) {

  const {_id,content,likes:{likeCount,likedBy},mediaUrl,likes,comments,username} = feedData
  const {getDetailedPost,addBookmarkPost,removeBookmarkPost,LikePost,dislikePost,postState} = useContext(postContext)
  const {userState} = useContext(userContext)

  const mainUser = userState.authUser

  const {bookmarked} = postState

  console.log(bookmarked)

  const Navigate = useNavigate()
  const handleSinglePost = (id)=>{
       getDetailedPost(id)
       Navigate(`/home/${id}`)
  }

  const bookmarkedByUser = () =>{
    return bookmarked?.filter((postId)=> postId._id === _id).length !==0
  }


  const likedByUser = () =>{
    return likedBy?.filter((userId)=> userId._id === mainUser?._id).length !==0
  }

  
  const handleBookmark = (id)=>{
    if(bookmarkedByUser()){
      console.log("remove")
        return removeBookmarkPost(id)
    }else{
      console.log("add")
      return addBookmarkPost(id)
    }
  }

 
  const handleLike=(id)=>{
     if(likedByUser()){
        return dislikePost(id)
     }else{
       return LikePost(id)
     }
  }

  
  

  return (
    <div className='feed-post-main-container' >
     <ProfileCircle/>
     <div className="Post-content" onClick={()=>handleSinglePost(_id)}>
       <div className="name">
         <p><span>{username}</span> <span>@{username}</span></p>
         <button><FontAwesomeIcon icon={faEllipsis} color='blue' size='xl'/></button>
       </div>
       <div className="post-info">
         {content}
       </div>
     </div>
     <div className="action-btns" >
       <div onClick={()=>handleLike(_id)}>{likedByUser()?<FontAwesomeIcon icon={faHeart} color='red' />:<FontAwesomeIcon icon={faHeart} color='blue' />} {likeCount}</div>
       <FontAwesomeIcon icon={faComment} color='blue'/>
       <FontAwesomeIcon icon={faShare} color='blue' />
       <span className='bookmark-btn' onClick={()=>handleBookmark(_id)}>{bookmarkedByUser()?<FontAwesomeIcon icon={faBookmark} color='grey' />:<FontAwesomeIcon icon={faBookmark} color='blue' />}</span>
       
    </div>

    </div>
  )
}

export default FeedPost

import React, { useContext, useEffect } from 'react'
import './DetailedPost.css'
import Profile from '../../Pages/Profile/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import PostProvider, { postContext } from '../../Context/PostContext/PostProvider'
import { useParams } from 'react-router'
import Comment from '../Comments/Comment'
import { userContext } from '../../Context/userContext/userContext'
import { AuthContext } from '../../Context/AuthContext/AuthContext'

function DetailedPost() {

   const {getDetailedPost,getPost,postState,addBookmarkPost,removeBookmarkPost,LikePost,dislikePost,singlePost} = useContext(postContext)
   const {userState}=useContext(userContext)
   const {userProfile,isLogged} = useContext(AuthContext)

   const {avatarUrl} = userProfile

   const {singlePostId} = useParams()
   // const {_id,content,mediaURL,likes:{ likeCount,likedBy,dislikedBy},username,createdAt} = singlePost

   const date = (singlePost?.createdAt?.slice(0,10))
  //  const reverseDate =(date)=>{
  //   var splitString = date.split("")
  //   var reverseArray = splitString.reverse()
  //   var joinArray = reverseArray.join("")

  //   return joinArray
  //  }

  //  const correctDate = reverseDate(date)


   const time = singlePost?.createdAt?.slice(11,16)
   const comments = singlePost?.comments
   const {allUsers}= userState
   const profileUrl = allUsers.find(user=> user.username.includes(singlePost?.username))?.avatarUrl

   

   const commentProfileUrl = allUsers.find(user=> singlePost?.comments?.find(innerUser=> innerUser?.username?.includes(user.username)))?.avatarUrl
   

   const mainUser = userState.authUser
   const {bookmarked} = postState


   const bookmarkedByUser = () =>{
      return bookmarked?.filter((postId)=> postId._id === singlePostId).length !==0
    }

    const likedByUser = () =>{
      return singlePost?.likes?.likedBy?.filter((userId)=> userId._id === mainUser?._id).length !==0
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
          dislikePost(id)
          getDetailedPost(singlePostId)
       }else{
        console.log("like")
         LikePost(id)
         getDetailedPost(singlePostId)
       }
    }

    
  

    useEffect(()=>{
      getDetailedPost(singlePostId)
    },[])



   

  return (
     <div>
     <div className='post-profile-container'>
     <div className='profile-info'>
     <ProfileCircle url={profileUrl}/>
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
      <div onClick={()=>handleLike(singlePostId)} className="like-button"  >{likedByUser()?<FontAwesomeIcon icon={faHeart} color='red'  />:<FontAwesomeIcon icon={faHeart} color='blue'  />} {singlePost?.likes?.likeCount}</div>                                                                       
      <div className="comment-button"><FontAwesomeIcon icon={faComment} color='blue'/></div>
      <div className="copy-button"><FontAwesomeIcon icon={faShare} color='blue'/></div>
      
      <span className='bookmark-btn' onClick={()=>handleBookmark(singlePost?._id)}>{bookmarkedByUser()?<FontAwesomeIcon icon={faBookmark} color='grey' />:<FontAwesomeIcon icon={faBookmark} color='blue' />}</span>
   </div>
   <hr />
   {isLogged?<div className="comment">
     <ProfileCircle url={avatarUrl}/>
     <input type="text" placeholder='comment your reply'/>
     <button className='button post-btn' > Post </button>
   </div>:""}
   <hr />
   {
    comments?.map(comment => <Comment commentData={comment} postUsername={singlePost?.username}/>)
   }
     </div>
  )
}

export default DetailedPost

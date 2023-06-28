import React, { useContext, useState } from 'react'
import './FeedPost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faEllipsis, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import { postContext } from '../../Context/PostContext/PostProvider'
import { useNavigate } from 'react-router'
import { userContext } from '../../Context/userContext/userContext'
import Clipboard from 'clipboard'
import OptionPopUp from '../optionPopup/optionPopUp'
import EditPopUp from '../EditPopUp/EditPopUp'

function FeedPost({feedData}) {



  const [viewEdit,setViewEdit] = useState(false)
  const [option,setOption] = useState(false)

  const {_id,content,mediaUrl,likes,comments,username} = feedData
  const {getDetailedPost,edit,setEdit,addBookmarkPost,removeBookmarkPost,deletePost,LikePost,dislikePost,postState} = useContext(postContext)
  const {userState} = useContext(userContext)
  

  const mainUser = userState.authUser
  const {allUsers}= userState
  const profileUrl = allUsers.find(user=> user.username.includes(username)).avatarUrl

  const {bookmarked} = postState

  const clipboard = new Clipboard('.copy-button', {
    text: function() {
      return `localhost:3000/home/${_id}`;
    }
  });

  const thirdUser = allUsers.find(user => user.username === username)
  const userId = thirdUser._id
  const firstName = thirdUser.firstName
  const lastName = thirdUser.lastName

  const Navigate = useNavigate()
  const handleSinglePost = (id)=>{
       getDetailedPost(id)
       Navigate(`/home/${id}`)
  }

  const bookmarkedByUser = () =>{
    return bookmarked?.filter((postId)=> postId._id === _id).length !==0
  }


  const likedByUser = () =>{
    return likes?.likedBy?.filter((userId)=> userId._id === mainUser?._id).length !==0
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
     
     <div className="main-feed-content">
     <ProfileCircle  url ={profileUrl}/>
     <div className="Post-content">
     {username === userState?.authUser?.username && <button className='pop-out-btn' onClick={()=> setOption(!option)} ><FontAwesomeIcon icon={faEllipsis} color='blue' size='xl'/></button>}
       <div className="name" onClick={()=>Navigate(`/thirdprofile/${userId}`)}>
         <p><span className='full-name'>{`${firstName} ${lastName}`}</span> <span className='username'>@{username}</span></p>
         {viewEdit && <EditPopUp editOption={{viewEdit,setViewEdit}} postId={_id}/>}
       </div>
       <div className="option-btns">
       {option&&<OptionPopUp id={_id} editOption={{viewEdit,setViewEdit}} toggle={{setOption,option}} editToggle={{edit,setEdit}} />}
       </div>
       <div className="post-info" onClick={()=>handleSinglePost(_id)}>
         {content}
       </div>
     </div>
    </div>
    <div className="action-btns" >
       <div onClick={()=>handleLike(_id)}>{likedByUser()?<FontAwesomeIcon icon={faHeart} color='red' />:<FontAwesomeIcon icon={faHeart} color='blue' />} {likes?.likeCount}</div>
       <div className="comment"><FontAwesomeIcon icon={faComment} color='blue'/>{comments?.length>0?comments?.length:""}</div>
       <div className="copy-button"><FontAwesomeIcon icon={faShare} color='blue' /></div>
       <span className='bookmark-btn' onClick={()=>handleBookmark(_id)}>{bookmarkedByUser()?<FontAwesomeIcon icon={faBookmark} color='grey' />:<FontAwesomeIcon icon={faBookmark} color='blue' />}</span>
       
    </div>

    </div>
  )
  }


export default FeedPost

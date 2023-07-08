import React, { useContext, useEffect, useState } from 'react'
import './FeedPost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShareFromSquare,faBookmark,faComment,faHeart } from '@fortawesome/free-regular-svg-icons';
import {  faEllipsis} from '@fortawesome/free-solid-svg-icons'
import { postContext } from '../../Context/PostContext/PostProvider'
import { useNavigate } from 'react-router'
import { userContext } from '../../Context/userContext/userContext'
import Clipboard from 'clipboard'
import OptionPopUp from '../optionPopup/optionPopUp'
import EditPopUp from '../EditPopUp/EditPopUp'
import Postloader from '../loader/Postloader'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { toast } from 'react-toastify'

function FeedPost({feedData}) {



  const [viewEdit,setViewEdit] = useState(false)
  const [option,setOption] = useState(false)
  const [loading,setLoading] = useState(true)
  const {_id,content,mediaURL,likes,comments,username} = feedData
  const {getDetailedPost,edit,setEdit,addBookmarkPost,removeBookmarkPost,deletePost,LikePost,dislikePost,postState} = useContext(postContext)
  const {userState} = useContext(userContext)
  const {isLogged} = useContext(AuthContext)
  
  const navigate = useNavigate()

  const mainUser = userState.authUser
  const {allUsers}= userState
  

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
  const profileUrl = thirdUser?.avatarUrl

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
      toast.success(" Removed from bookmarks");
        return removeBookmarkPost(id)
    }else{
      toast.success("Added to bookmarks");                                                                                                                 
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

  const loginFirst=()=>{
    navigate("/login")
    toast.error("login first")
  }
  
  const handleComment =()=>{
    console.log("yet to be done")
  }

  const handleShare =()=>{
    toast.success("succesfully copied link !! share the post")
  }


  useEffect(()=>{
    setLoading(false)
  },[])




  
  

  return (
    <div className='feed-post-main-container' >
      {
        loading?<Postloader/>:<>
        <div className="main-feed-content">
        <ProfileCircle  url ={profileUrl}/>
        <div className="Post-content">
        {username === userState?.authUser?.username && <button className='pop-out-btn feed-option' onClick={()=> setOption(!option)} ><FontAwesomeIcon icon={faEllipsis} color='blue' size='xl'/></button>}
        <div className="option-btns">
        {option&& <OptionPopUp id={_id} editOption={{viewEdit,setViewEdit}} toggle={{setOption,option}} editToggle={{edit,setEdit}} />}
        </div>
          <div className="name" onClick={()=>Navigate(`/thirdprofile/${userId}`)}>
            <p><span className='full-name'>{`${firstName} ${lastName}`}</span> <span className='username'>@{username}</span></p>
          </div>
          <div className="post-info" onClick={()=>handleSinglePost(_id)}>
            {content}
            {mediaURL ? <img src={mediaURL} alt={content} />:""}
          </div>
          {viewEdit && <EditPopUp editOption={{viewEdit,setViewEdit}} postId={_id}/>}
        </div>
       </div>
       <div className="action-btns" >
          <div className="like-button" onClick={()=>isLogged?handleLike(_id):loginFirst()}>{likedByUser()?<FontAwesomeIcon icon="heart" color='red' />:<FontAwesomeIcon icon={faHeart} color='blue' />} {likes?.likeCount}</div>
          <div className="comment-button" onClick={()=>isLogged?handleComment():loginFirst()}><FontAwesomeIcon icon={faComment} color='blue'/>{comments?.length>0?comments?.length:""}</div>
          <div className="copy-button" onClick={()=> handleShare()}><FontAwesomeIcon icon={faShareFromSquare} color='blue' /></div>
          <span className='bookmark-btn' onClick={()=>handleBookmark(_id)}>{bookmarkedByUser()?<FontAwesomeIcon icon="bookmark" color='blue' />:<FontAwesomeIcon icon={faBookmark} color='blue' />}</span>
       </div>
        </>
      }  
    
    </div>
    
  )
  }


export default FeedPost

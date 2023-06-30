import React, { useContext, useState } from 'react'
import './CreatePost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faImage, faSmile } from '@fortawesome/free-solid-svg-icons'
import { postContext } from '../../Context/PostContext/PostProvider'
import EditPopUp from '../EditPopUp/EditPopUp'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import Loading from '../loader/loading'
import { text } from '@fortawesome/fontawesome-svg-core'
import { toast } from 'react-toastify'



function CreatePost({editOption,postId}) {
  const [textareaToggle,setTextareaToggle]=useState(false)
  const {createPost,editPost,createToggle,setCreateToggle,singlePost} = useContext(postContext)
  const {userProfile}=useContext(AuthContext)
  const {avatarUrl} = userProfile

  const initialData ={content:"",
  mediaURL:"",
  category:""} 

  const [content,setContent] = useState(editOption?.viewEdit ? singlePost?.content :"")
  const [newPostData,setNewPostData] = useState({
    content:editOption?.viewEdit ? content:"",
    mediaURL:"",
    category:""
  })

  console.log(editOption, "optino")
  
  


  console.log(singlePost)
  const handleInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setNewPostData({...newPostData,[name]:value})
    console.log(newPostData)
  }

  const submitNewPost = (e)=>{
     e.preventDefault()
  if(textareaToggle){
    if(textareaToggle && editOption?.viewEdit){
        editPost(postId,newPostData)
        editOption?.setViewEdit(!editOption?.viewEdit)
        toast.success("Post edited successfully!")
     }else{
    createPost(newPostData)
    setNewPostData(initialData)
    toast.success("New Post added successfully!")
     }
   }
    if(createToggle ){
    setCreateToggle(!createToggle)
   }
   
  }
   return (
    <div className='create-post-main-container'>
    <form onSubmit={submitNewPost}>
     <div className="input-box">
     <ProfileCircle url={avatarUrl}/>
      <textarea name="content" placeholder="write about what's flocking..." id="createPost" cols="20" rows="5" value={newPostData.content} onChange={handleInput} onClick={()=>setTextareaToggle(true)} />
     </div>    
    <div className="btns">
    <div className="add-btns">
    <div className="icon-btns">
    <FontAwesomeIcon icon={faSmile} style={{ color: 'blue' }} />
    <FontAwesomeIcon icon={faImage} style={{ color: 'blue' }} />
    <FontAwesomeIcon icon={faGift} style={{ color: 'blue' }} />
    </div>
    <button type='submit' className='button post-btn' >{editOption?.viewEdit ?"update":"Post"}</button>
    </div>
    </div>
    </form>
    </div>
  )
}

export default CreatePost

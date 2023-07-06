import React, { useContext, useEffect, useRef, useState } from 'react'
import './CreatePost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faImage, faSmile } from '@fortawesome/free-solid-svg-icons'
import { postContext } from '../../Context/PostContext/PostProvider'
import EditPopUp from '../EditPopUp/EditPopUp'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { toast } from 'react-toastify'
import { userContext } from '../../Context/userContext/userContext'



function CreatePost({editOption,postId,singlePost}) {
  const [textareaToggle,setTextareaToggle]=useState(false)
  const {createPost,editPost,createToggle,setCreateToggle} = useContext(postContext)
  const {userProfile}=useContext(AuthContext)
  const {userState} = useContext(userContext)
  const imageInputRef = useRef(null)

  const avatarUrl = userState?.authUser?.avatarUrl

  const initialData ={content:"",
  mediaURL:"",
  category:""} 

  

  const [content,setContent] = useState(  singlePost?.content || "")
  const [selectImage,setSelectedImage] = useState("")
  const [newPostData,setNewPostData] = useState({
    content: content || "",
    mediaURL:selectImage||"",
    category:""
  })


  console.log(singlePost?.content,"check 1")
  console.log(content,"usestate content")
  console.log(newPostData?.content,"viewwwwwwwwwww")


  
  const handleInput = (e)=>{
    const name = e.target.name
    let value =""
    if(e.target.files){
       setSelectedImage(URL.createObjectURL(e.target.files[0]))
       value = URL.createObjectURL(e.target.files[0])
       console.log("files")
       setNewPostData({...newPostData,[name]:value})
    }else{
      console.log("else")
       value = e.target.value
       setNewPostData({...newPostData,[name]:value})
    }
    console.log(selectImage)
    
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

  const handleImageClick=()=>{
    imageInputRef.current.click()
    console.log(imageInputRef)
  }

  

  useEffect(() => {
    if (singlePost) {
      setContent(singlePost.content);
      setNewPostData({content:singlePost.content,mediaURL:"",category:""})
    }
  }, [singlePost]);

   return (
    <div className='create-post-main-container'>
    <form onSubmit={submitNewPost} encType='multipart/form-data'>
     <div className="input-box">
     <ProfileCircle url={avatarUrl}/>
      <textarea name="content" placeholder="write about what's flocking..." id="createPost" cols="20" rows="5" value={newPostData?.content} onChange={handleInput} onClick={()=>setTextareaToggle(true)} />
     </div>    
    <div className="btns">
    <div className="add-btns">
    <div className="icon-btns">
    <FontAwesomeIcon icon={faSmile} style={{ color: 'blue' }} />
    <label htmlFor="image-input"  style={{cursor:"pointer"}} >
    <FontAwesomeIcon icon={faImage} style={{ color: 'blue' }} onClick={handleImageClick}  />
    </label>
    <br/>
    <input type="file" name='mediaURL' accept="image/*"  ref={imageInputRef}  onChange={handleInput} style={{display:"none"}}/>
    </div>
    <button type='submit' className='button post-btn' >{editOption?.viewEdit ?"update":"Post"}</button>
    </div>
    </div>
    </form>
    </div>
  )
}

export default CreatePost

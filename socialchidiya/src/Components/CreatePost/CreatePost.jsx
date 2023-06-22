import React, { useContext, useState } from 'react'
import './CreatePost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faImage, faSmile } from '@fortawesome/free-solid-svg-icons'
import { postContext } from '../../Context/PostContext/PostProvider'


function CreatePost() {

  const [newPostData,setNewPostData] = useState({
    content:"",
    mediaURL:"",
    category:""
  })
  const {createPost} = useContext(postContext)

  const handleInput = (e)=>{
    const name = e.target.name
    const value = e.target.value
    setNewPostData({...newPostData,[name]:value})
    console.log(newPostData)
  }

  const submitNewPost = (e)=>{
     e.preventDefault()
     createPost(newPostData)
  }



  return (
    <div className='create-post-main-container'>
    <form onSubmit={submitNewPost}>
     <div className="input-box">
     <ProfileCircle/>
      <textarea name="content" id="createPost" cols="20" rows="5" onChange={handleInput} />
     </div>    
    <div className="btns">
    <div className="add-btns">
    <div className="icon-btns">
    <FontAwesomeIcon icon={faSmile} style={{ color: 'blue' }} />
    <FontAwesomeIcon icon={faImage} style={{ color: 'blue' }} />
    <FontAwesomeIcon icon={faGift} style={{ color: 'blue' }} />
    </div>
    
    <button type='submit' className='button post-btn'>Post</button>
    </div>
    
    </div>
    </form>
    </div>
  )
}

export default CreatePost

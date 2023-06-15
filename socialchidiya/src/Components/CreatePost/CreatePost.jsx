import React from 'react'
import './CreatePost.css'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGift, faImage, faSmile } from '@fortawesome/free-solid-svg-icons'


function CreatePost() {
  return (
    <div className='create-post-main-container'>
     <div className="input-box">
     <ProfileCircle/>
    <input type="text" placeholder='write something here'/>
      
     </div>    
    <div className="btns">
    <div className="add-btns">
    <div className="icon-btns">
    <FontAwesomeIcon icon={faSmile} style={{ color: 'blue' }} />
    <FontAwesomeIcon icon={faImage} style={{ color: 'blue' }} />
    <FontAwesomeIcon icon={faGift} style={{ color: 'blue' }} />
    </div>
    
    <button className='button post-btn'>Post</button>
    </div>
    
    </div>
    
    </div>
  )
}

export default CreatePost

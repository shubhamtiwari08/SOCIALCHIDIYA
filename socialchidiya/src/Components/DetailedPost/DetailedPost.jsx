import React from 'react'
import './DetailedPost.css'
import Profile from '../../Pages/Profile/Profile'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBookmark, faComment, faHeart, faShare } from '@fortawesome/free-solid-svg-icons'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'

function DetailedPost() {
  return (
     <div>
     <div className='post-profile-container'>
     <div className='profile-info'>
     <ProfileCircle/>
     <div className='profile'>
     <h4>shubham tiwari</h4>
     <p>@shubhamtiwari</p>
     </div>
     </div>
     <div className="main-content">
      <p>
         Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quas eligendi id error aspernatur mollitia nam aperiam fugit quasi! Dicta doloremque suscipit repellendus aspernatur aliquam eius id similique, voluptas optio veritatis?
      </p>
      </div>
      <div className="dateandtime">
         <p>date</p>
         <p>time</p>
      </div>
      <hr />
      <h4>0 likes</h4>
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
     </div>
  )
}

export default DetailedPost

import React, { useContext, useState } from 'react'
import './Navigation.css'
import ProfileCircle from './Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCompass, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import {Link,NavLink} from 'react-router-dom'
import CreatePostPopUp from '../createPostPopUp/createPostPopUp';


function Navigation() {
   const [view,setView]=useState(false)
   const{userProfile} = useContext(AuthContext)
   const Navigate = useNavigate()

   const {username,firstName,lastName} = userProfile

  return (
    <div>
    {view && <div className="create-post-pop-up" > <div className="background" onClick={()=> setView(!view)}></div><div className="input-area"><CreatePostPopUp/></div></div>}
    <div className="logo green hero-word-two">
          THE  <span className='logo-name hero-word'>SOCIAL CHIDIYA</span>
      </div>    
      <div className="navigation-links">
         <ul>

            <li><FontAwesomeIcon icon={faHome} style={{ color: 'blue' }} /> <NavLink to='/home'>Home</NavLink></li>
            <li><FontAwesomeIcon icon={faCompass} style={{ color: 'blue' }} spin/> <NavLink to='/explore'>Explore</NavLink></li>
            <li><FontAwesomeIcon icon={faBookmark} style={{color:"blue"}}/> <NavLink to='/bookmark'>Bookmark</NavLink></li>
            <li><FontAwesomeIcon icon={faUser} style={{color:"blue"}}/> <NavLink to='/profile'>Profile</NavLink></li>
         </ul>
         <button className='button' onClick={()=>setView(!view)}>Create Post</button>
         <div className="profile-link">
         <ProfileCircle/>
         <div className="profile-name" onClick={()=>Navigate("/profile")}>
            <h5 >{firstName +" "+ lastName}</h5>
            <p>@{username}</p>

         </div>
         
      </div>
      </div>
    
    </div>
  )
}

export default Navigation

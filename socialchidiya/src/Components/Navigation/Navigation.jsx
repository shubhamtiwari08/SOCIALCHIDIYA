import React, { useContext, useState } from 'react'
import './Navigation.css'
import ProfileCircle from './Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCompass, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';
import {Link,NavLink} from 'react-router-dom'
import CreatePostPopUp from '../createPostPopUp/createPostPopUp';
import { postContext } from '../../Context/PostContext/PostProvider';


function Navigation() {
   const {createToggle,setCreateToggle} = useContext(postContext)
   const{userProfile} = useContext(AuthContext)
   const Navigate = useNavigate()

   const {username,firstName,lastName,avatarUrl} = userProfile

  return (
    <div>
    {createToggle && <div className="create-post-pop-up" > <div className="background" onClick={()=> setCreateToggle(!createToggle)}></div><div className="input-area"><CreatePostPopUp/></div></div>}
      <div className="navigation-links">
         <ul>

            <li><FontAwesomeIcon icon={faHome} style={{ color: 'blue' }} /> <NavLink to='/home' activeClassName="active" className="nav-link">Home</NavLink></li>
            <li><FontAwesomeIcon icon={faCompass} style={{ color: 'blue' }} spin/> <NavLink to='/explore' activeClassName="active" className="nav-link">Explore</NavLink></li>
            <li><FontAwesomeIcon icon={faBookmark} style={{color:"blue"}}/> <NavLink to='/bookmark' activeClassName="active"  className="nav-link">Bookmark</NavLink></li>
            <li><FontAwesomeIcon icon={faUser} style={{color:"blue"}}/> <NavLink to='/profile' activeClassName="active"  className="nav-link">Profile</NavLink></li>
         </ul>
         <button className='button' onClick={()=>setCreateToggle(!createToggle)}>Create Post</button>
         <div className="profile-link">
         <ProfileCircle url={avatarUrl}/>
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

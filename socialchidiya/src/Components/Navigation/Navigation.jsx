import React, { useContext } from 'react'
import './Navigation.css'
import ProfileCircle from './Profile/ProfileCircle'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookmark, faCompass, faHome, faUser } from '@fortawesome/free-solid-svg-icons'
import { AuthContext } from '../../Context/AuthContext/AuthContext';
import { useNavigate } from 'react-router';

function Navigation() {

   const{userProfile} = useContext(AuthContext)
   const Navigate = useNavigate()

   const {username,firstName,lastName} = userProfile

  return (
    <div>
    <div className="logo green hero-word-two">
          THE  <span className='logo-name hero-word'>SOCIAL CHIDIYA</span>
      </div>    
      <div className="navigation-links">
         <ul>
            <li><FontAwesomeIcon icon={faHome} style={{ color: 'blue' }} /> Home</li>
            <li><FontAwesomeIcon icon={faCompass} style={{ color: 'blue' }} spin/> Explore</li>
            <li><FontAwesomeIcon icon={faBookmark} style={{color:"blue"}}/> Bookmark</li>
            <li><FontAwesomeIcon icon={faUser} style={{color:"blue"}}/> Profile</li>
         </ul>
         <button className='button'>Create Post</button>
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

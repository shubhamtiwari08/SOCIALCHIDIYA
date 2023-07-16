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
import { userContext } from '../../Context/userContext/userContext';


function Navigation() {
   const {createToggle,setCreateToggle} = useContext(postContext)
   const{userProfile,isLogged} = useContext(AuthContext)
   const {userState} = useContext(userContext)
   const Navigate = useNavigate()

   const {username,firstName,lastName} = userProfile

   console.log(userState?.authUser, "detailssssssssss check")

   const avatarUrl = userState?.authUser?.avatarUrl
   console.log(userProfile, "initiaaaaaaaaaaaaaal")

  return (
    <div>
    {createToggle && <div className="create-post-pop-up" > 
    <div className="background" onClick={()=> setCreateToggle(!createToggle)}></div>
    <div className="input-area"><CreatePostPopUp/></div>
    </div>}
      <div className="navigation-links">
            <ul>
               <li>
               <FontAwesomeIcon icon={faHome} style={{ color: 'blue' }} />
               <NavLink to='/home' activeClassName="active" className="nav-link">Home</NavLink>
               </li>
               <li>
               <FontAwesomeIcon icon={faCompass} style={{ color: 'blue' }} spin/>
            <NavLink to='/explore' activeClassName="active" className="nav-link">Explore</NavLink>
               </li>
               <li><FontAwesomeIcon icon={faBookmark} style={{color:"blue"}}/> <NavLink to='/bookmark' activeClassName="active"  className="nav-link">Bookmark</NavLink></li>
               <li><FontAwesomeIcon icon={faUser} style={{color:"blue"}}/> <NavLink to='/profile' activeClassName="active"  className="nav-link">Profile</NavLink></li>
            </ul>
            <button className='button' onClick={()=>isLogged?setCreateToggle(!createToggle):Navigate("/login")}>Create Post</button>
            <div className="profile-link">
            {isLogged? 
               <>
               <ProfileCircle url={avatarUrl}/>
               <div className="profile-name" onClick={()=>Navigate("/profile")}>
               <h5 >{firstName +" "+ lastName}</h5>
               <p>@{username}</p>
               </div>
               </>:""}
         </div>
      </div>
      <div className="mobile-navigation">
      <div className="mobile-navigation-links">
      <ul>
         <li>
         <NavLink to='/home' activeClassName="active" className="nav-link">
         <FontAwesomeIcon icon={faHome} style={{ color: 'blue' }} />
         </NavLink>
         </li>
         <li> 
         <NavLink to='/explore' activeClassName="active" className="nav-link">
         <FontAwesomeIcon icon={faCompass} style={{ color: 'blue' }} spin/>
         </NavLink>
         </li>
         <li> 
         <NavLink to='/bookmark' activeClassName="active"  className="nav-link">
         <FontAwesomeIcon icon={faBookmark} style={{color:"blue"}}/>
         </NavLink>
         </li>
         <li> 
         <NavLink to='/profile' activeClassName="active"  className="nav-link"><FontAwesomeIcon icon={faUser} style={{color:"blue"}}/>
         </NavLink>
         </li>
      </ul>
      <button className='button' onClick={()=>isLogged?setCreateToggle(!createToggle):Navigate("/login")}>+</button>
      </div>
      </div>
    </div>
  )
}

export default Navigation

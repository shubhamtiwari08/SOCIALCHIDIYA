import React, { useContext, useEffect } from 'react'
import './ThirdProfile.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import { userContext } from '../../Context/userContext/userContext'
import { useParams } from 'react-router'
import { postContext } from '../../Context/PostContext/PostProvider'

function ThirdProfile() {

  const {getThirdUser,userState} = useContext(userContext)
  const {postState} = useContext(postContext)

  const {userId} = useParams()

  const thirdUser = userState.thirdUser
  const personalPost = postState.posts.filter((post)=>post.username.includes(thirdUser?.username))
  const thirdUsername = thirdUser?.username 


  useEffect(()=>{
    getThirdUser(userId)
  },[thirdUsername]) 

  
  console.log(personalPost,"personalllllllllllllllllllllllllllllll")

  return (
    <div className='main-container-home'>
       <section>
          <Navigation/>
       </section>
       <main>
       <ProfileCard profileUsername={thirdUsername} userId={userId}/>
       </main>
       <section>
           <Suggestions/>
       </section>
    </div>
  )
}

export default ThirdProfile    
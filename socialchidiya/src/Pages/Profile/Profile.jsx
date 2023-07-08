import React, { useContext, useEffect, useState } from 'react'
import './Profile.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import Loading from '../../Components/loader/loading'
import { userContext } from '../../Context/userContext/userContext'

function Profile() {

  const [loading,setLoading] = useState(true)
  const {userProfile} = useContext(AuthContext)
  const {userState} = useContext(userContext)
  const avatarUrl = userState?.authUser?.avatarUrl

  console.log(avatarUrl)

  useEffect(()=>{
    setLoading(false)
  },[])

  return (
    <div className='main-container-home'>
    {loading?<Loading/>:
       <>
       <section>
          <Navigation/>
       </section>
       <main>
       <ProfileCard profileUsername={userProfile.username} userId={userProfile._id} avatarUrl={avatarUrl}/> 
       </main>
       <section>
           <Suggestions/>
       </section>
       </>}
    </div>
  )
}

export default Profile    
import React from 'react'
import './ThirdProfile.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'

function ThirdProfile() {
  return (
    <div className='main-container-home'>
       <section>
          <Navigation/>
       </section>
       <main>
       <ProfileCard name={"follow"}/>
       <div className='filter-btn'>
       <h2>Latest Posts</h2> <FontAwesomeIcon icon={faFilter} color='blue'/>
       </div>
       <FeedPost/>
       <FeedPost/>
       <FeedPost/>
       </main>
       <section>
           <Suggestions/>
       </section>
    </div>
  )
}

export default ThirdProfile    
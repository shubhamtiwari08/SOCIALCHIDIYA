import React from 'react'
import './Bookmark.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'

function Bookmark() {
  return (
    <div className='main-container-home'>
       <section>
          <Navigation/>
       </section>
       <main>
       <h2>Bookmark</h2>
       <FeedPost/>
       </main>
       <section>
           <Suggestions/>
       </section>
    </div>
  )
}

export default Bookmark    
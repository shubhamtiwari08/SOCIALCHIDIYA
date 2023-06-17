import React from 'react'
import './Post.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCirclXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import DetailedPost from '../../Components/DetailedPost/DetailedPost'

function Post() {
  return (
    <div className='main-container-home'>
       <section>
          <Navigation/>
       </section>
       <main>
       <h2> Post</h2>
       <DetailedPost/>
       </main>
       <section>
           <Suggestions/>
       </section>
   </div>
   )
}

export default Post    
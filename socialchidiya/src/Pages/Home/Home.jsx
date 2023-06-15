import React from 'react'
import './Home.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'

function Home() {
  return (
    <div className='main-container-home'>
       <section>
          <Navigation/>
       </section>
       <main>
       <CreatePost/>
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

export default Home    
import React from 'react'
import './Explore.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'

function Explore() {
  return (
    <div className='main-container-home'>
       <section>
          <Navigation/>
       </section>
       <main>
       <h2>Explore</h2>
       <div className="filter-btns">
         <button>For You</button>
         <button>Trending</button>
         <button>Technology</button>
         <button>Sports</button>
         <button>News</button>
       </div>
       <FeedPost/>
       </main>
       <section>
           <Suggestions/>
       </section>
    </div>
  )
}

export default Explore    
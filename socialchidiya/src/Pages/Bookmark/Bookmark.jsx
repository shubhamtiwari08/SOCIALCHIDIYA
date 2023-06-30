import React, { useContext, useEffect, useState } from 'react'
import './Bookmark.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFilter, faFilterCircleDollar, faFilterCircleXmark } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import { postContext } from '../../Context/PostContext/PostProvider'
import { useSearchParams } from 'react-router-dom'
import Loading from '../../Components/loader/loading'

function Bookmark() {
  
  const{postState} = useContext(postContext)

  const[loading,setLoading] = useState(true)
  
  useEffect(()=>{
    setLoading(false)
  },[])

  
  return (

    <div className='main-container-home'>
    {loading?<Loading/>:
    <>   
    <section className='navigation'>
          <Navigation/>
    </section>
       <main>
       <h2>Bookmark</h2>
       <div className="main-feed">
       {postState?.bookmarked.map(post => <FeedPost feedData={post}/>)}
       </div>
       </main>
    <section>
           <Suggestions/>
   </section>
    </>}
    </div>
  )
}

export default Bookmark    
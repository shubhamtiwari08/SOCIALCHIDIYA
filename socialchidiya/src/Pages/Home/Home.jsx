import React, { useContext, useEffect, useState } from 'react'
import './Home.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import CreatePost from '../../Components/CreatePost/CreatePost'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurn, faDashboard, faDatabase, faFilter, faFilterCircleDollar, faFilterCircleXmark, faHamburger, faList, faTimeline, faTimes, faTimesCircle, faTimesSquare } from '@fortawesome/free-solid-svg-icons'
import FeedPost from '../../Components/FeedPost/FeedPost'
import ProfileCard from '../../Components/ProfileCard/ProfileCard'
import { postContext } from '../../Context/PostContext/PostProvider'
import { getTrendingPost } from '../../Reducers/postReducerUtils'
import { userContext } from '../../Context/userContext/userContext'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import Loading from '../../Components/loader/loading'


function Home() {

  const{postState,postDispatch} = useContext(postContext)
  const [loading,setLoading] = useState(true)
  const{posts,sort} = postState
  const{userProfile} = useContext(AuthContext)
  const {getMainUser,userState}=useContext(userContext)


  const {_id}= userProfile
  const allPost = posts
  const trendingPost = getTrendingPost(allPost,sort)

  const personalFeed = trendingPost.filter(post=>{
     return userState?.authUser?.following?.find(user => user.username === post.username) || post.username === userState?.authUser?.username
  } )

  const trending = sort === "trending"
  useEffect(()=>{
    getMainUser(_id)
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
       <CreatePost/>
       <div className='filter-btn'>
       <h2>Latest Posts</h2> 
       <div className='filter-btn'> 
       <div className='sort-btn button' onClick={()=> postDispatch({type:"SORTING",payload:"trending"})} style={{boxShadow:trending?"0 0 2px 4px orange":""}}><FontAwesomeIcon icon={faBurn} color='blue' /> Trending </div> 
       <div className='sort-btn button' onClick={()=> postDispatch({type:"SORTING",payload:"latest"})} style={{boxShadow:sort === "latest"?"0 0 2px 4px orange":""}}><FontAwesomeIcon icon={faList} color='blue' /> latest </div>
       </div>
       </div>
       <div className="main-feed">
       {personalFeed.map(post => <FeedPost feedData={post}/>)}
       </div>
       </main>
       <section>
           <Suggestions/>
       </section>
       </>
  }
    </div>
  )
}

export default Home    
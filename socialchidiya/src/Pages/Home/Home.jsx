import React, { useContext, useEffect } from 'react'
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

function Home() {

  const{postState,postDispatch} = useContext(postContext)
  
  const{posts,sort} = postState
  const{userProfile} = useContext(AuthContext)
  const {getMainUser,userState}=useContext(userContext)


  const {_id}= userProfile
  const allPost = posts
  const trendingPost = getTrendingPost(allPost,sort)

  const personalFeed = trendingPost.filter(post=>{
     return userState?.authUser?.following?.find(user => user.username === post.username) || post.username === userState?.authUser?.username
  } )

  useEffect(()=>{
    getMainUser(_id)
  },[])
  

  return (
    <div className='main-container-home'>
       <section>
        <Navigation/>
       </section>
       <main>
       <CreatePost/>
       <div className='filter-btn'>
       <h2>Latest Posts</h2> 
       <div className='filter-btn'> 
       <div className='sort-btn' onClick={()=> postDispatch({type:"SORTING",payload:"trending"})}><FontAwesomeIcon icon={faBurn} color='blue'/> Trending </div> 
       <div className='sort-btn' onClick={()=> postDispatch({type:"SORTING",payload:"latest"})}><FontAwesomeIcon icon={faList} color='blue' /> latest </div>
       </div>
       </div>
       {personalFeed.map(post => <FeedPost feedData={post}/>)}
       </main>
       <section>
           <Suggestions/>
       </section>
    </div>
  )
}

export default Home    
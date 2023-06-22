import React, { useContext } from 'react'
import './Explore.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import FeedPost from '../../Components/FeedPost/FeedPost'
import { postContext } from '../../Context/PostContext/PostProvider'
import { userContext } from '../../Context/userContext/userContext'
import { exploreFilters } from '../../Reducers/postReducerUtils'


function Explore() {


  const {postState,postDispatch} = useContext(postContext)
  const {userState} = useContext(userContext)
  const explorePost = postState.posts.filter(post => post.username !== userState?.authUser?.username ) 

  const exploreSort = postState.exploreSort
  const filteredPost = exploreFilters(explorePost,exploreSort)

  console.log(filteredPost)

  console.log(exploreSort, "sorrrrrrrrrrt")

  return (
    <div className='main-container-home'>
       <section>
          <Navigation/>
       </section>
       <main>
       <h2>Explore</h2>
       <div className="filter-btns">
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"all"})}>For You</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"cooking"})}>Cooking</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"tech"})}>Technology</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"inspiration"})}>Inspiring</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"news"})}>News</button>
       </div>
       {filteredPost.map(post=> <FeedPost feedData={post}/>)}
       </main>
       <section>
           <Suggestions/>
       </section>
    </div>
  )
}

export default Explore    
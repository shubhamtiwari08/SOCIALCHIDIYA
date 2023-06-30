import React, { useContext, useEffect, useState } from 'react'
import './Explore.css'
import Navigation from '../../Components/Navigation/Navigation'
import Suggestions from '../../Components/Suggestions/Suggestions'
import FeedPost from '../../Components/FeedPost/FeedPost'
import { postContext } from '../../Context/PostContext/PostProvider'
import { userContext } from '../../Context/userContext/userContext'
import { exploreFilters } from '../../Reducers/postReducerUtils'
import Loading from '../../Components/loader/loading'


function Explore() {


  const {postState,postDispatch} = useContext(postContext)
  const [loading,setLoading] = useState(true)
  const {userState} = useContext(userContext)
  const explorePost = postState.posts.filter(post => post.username !== userState?.authUser?.username ) 

  const exploreSort = postState.exploreSort
  const filteredPost = exploreFilters(explorePost,exploreSort)

  console.log(filteredPost)

  console.log(exploreSort, "sorrrrrrrrrrt")


  useEffect(()=>{
    setLoading(false)
  })

  return (
    <div className='main-container-home'>
    {loading?<Loading/>:
    <>
       <section>
          <Navigation/>
       </section>
       <main>
       <h2>Explore</h2>
       <div className="filter-btns">
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"all"})} className={exploreSort==="all"&&"explore-btn"}  >For You</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"cooking"})} className={exploreSort==="cooking"&&"explore-btn"}>Cooking</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"tech"})} className={exploreSort==="tech"&&"explore-btn"}>Technology</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"inspiration"})} className={exploreSort==="inspiration"&&"explore-btn"}>Inspiring</button>
         <button onClick={()=>postDispatch({type:"EXPLORE_FILTER",payload:"news"})} className={exploreSort==="news"&&"explore-btn"}>News</button>
       </div>
       {filteredPost.map(post=> <FeedPost feedData={post}/>)}
       </main>
       <section>
           <Suggestions/>
       </section>
       </>
  }
    </div>
  )
}

export default Explore    
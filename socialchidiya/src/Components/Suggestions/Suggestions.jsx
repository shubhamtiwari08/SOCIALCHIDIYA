import React from 'react'
import Follow from '../Follow/Follow'
import './Suggestions.css'

function Suggestions() {
  return (
    <div className='follow-main-container'>
       <div className="search-follow"><input type="text" placeholder='Search Posts,People,Anything' /></div>

       <div className="followers"><p><span>who to follow</span> <span>Show more</span></p> <Follow/> </div>   
    </div>
  )
}
 
export default Suggestions

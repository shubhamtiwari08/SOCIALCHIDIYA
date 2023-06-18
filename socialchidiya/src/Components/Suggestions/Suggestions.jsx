import React, { useContext } from 'react'
import Follow from '../Follow/Follow'
import './Suggestions.css'
import { userContext } from '../../Context/userContext/userContext'

function Suggestions() {

 const {socialUsers} = useContext(userContext)

 const finalUsers = socialUsers.users

  return (
    <div className='follow-main-container'>
       <div className="search-follow"><input type="text" placeholder='Search Posts,People,Anything' /></div>

       <div className="followers"><p><span>who to follow</span> <span>Show more</span></p> {finalUsers.map(item =><Follow data={item}/> ) } </div>   
    </div>
  )
}
 
export default Suggestions

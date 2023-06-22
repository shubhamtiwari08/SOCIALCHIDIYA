import React, { useContext, useEffect, useState } from 'react'
import Follow from '../Follow/Follow'
import './Suggestions.css'
import { userContext } from '../../Context/userContext/userContext'

function Suggestions() {

 const {userState,followUser} = useContext(userContext) 
 const [suggestion,setSuggestion] = useState([])

 const finalUsers = userState?.allUsers
 const mainUser = userState?.authUser
 
 console.log(userState.allUsers)


 const handleSearch =(e)=>{
  setSuggestion(finalUsers.filter(user => user?.username?.includes(e.target.value)))    
 }


 useEffect(()=>{
  setSuggestion(
    finalUsers?.filter(
      (currUser)=>{
       return  !mainUser?.following?.find(
          (innerCurrUser) => innerCurrUser._id === currUser._id
        ) && currUser.username !== mainUser?.usesrname
      }
     )
  )
 },[mainUser])

 const displaySuggestion = suggestion?.slice(0,4)

  return (
    <div className='follow-main-container'>
       <div className="search-follow"><input type="text" placeholder='Search Posts,People,Anything' onChange={(e)=>handleSearch(e)} /></div>

       <div className="followers"><p><span>who to follow</span> <span>Show more</span></p> {displaySuggestion?.map(item =><Follow data={item}/> ) } </div>   
    </div>
  )
}
 
export default Suggestions

import React, { useContext, useEffect, useState } from 'react'
import Follow from '../Follow/Follow'
import './Suggestions.css'
import { userContext } from '../../Context/userContext/userContext'

function Suggestions() {

 const {userState,followUser} = useContext(userContext) 
 const [suggestion,setSuggestion] = useState([])
 const [followSearch,setFollowSearch] = useState(false)

 const finalUsers = userState?.allUsers
 const mainUser = userState?.authUser
 
 console.log(userState.allUsers)


 const handleSearch =(e)=>{
  setSuggestion(finalUsers.filter(user => user?.username?.includes(e.target.value)))    
  if(e.target.value ===""){
    setFollowSearch(!followSearch)
  }
 }


 useEffect(()=>{
  setSuggestion(
    finalUsers?.filter(
      (currUser)=>{
       return  !mainUser?.following?.find(
          (innerCurrUser) => innerCurrUser._id === currUser._id 
        ) && currUser?._id !== mainUser?._id
      }
     )
  )
 },[mainUser])

 const displaySuggestion = suggestion?.slice(0,4)

  return (
    <>
    <div className='follow-main-container'>
       <div className="search-follow"><input type="text" placeholder='Search People...' onChange={(e)=>handleSearch(e)} /></div>

       <div className="followers"><p><span className='follow-heading'>who to follow</span></p> {displaySuggestion?.map(item =><Follow data={item}/>)} </div>   
    </div>
    <div className={followSearch?'mobile-follow-container toggle-follow':"mobile-follow-container"} >
    <div className="search-follow"><input type="text" placeholder='Search People...' onClick={()=>setFollowSearch(!followSearch)}onChange={(e)=>handleSearch(e)} /></div>
       {followSearch && <div className="followers"><p><span>who to follow</span></p> {displaySuggestion?.map(item =><Follow data={item}/>)} </div>}
    </div>
    </>
  )
}
 
export default Suggestions

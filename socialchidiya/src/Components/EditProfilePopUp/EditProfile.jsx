import React, { useContext, useState } from 'react'
import { userContext } from '../../Context/userContext/userContext'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import './EditProfile.css'

function EditProfile({editToggle}) {

    const {userState,editUser}=useContext(userContext)
    const {avatarUrl,bio,firstName,lastName,username,website}= userState.authUser
    
    
    const [profileContent,setProfileContent] = useState({
        avatarUrl,
        username,
        website,
        firstName,
        lastName,
        bio,
    })
    



const handleInput=(e)=>{
    const name = e.target.name
    const value = e.target.value 
    setProfileContent({...profileContent,[name]:value})
  console.log(profileContent)
}

const handleSubmit =(e)=>{
    e.preventDefault()
    editUser(profileContent)
    editToggle.setEditProfile(!editToggle.editProfile)

}

  return (
    <div className='main-editProfile-container'>
     <div className="background-profile" onClick={()=>(editToggle.setEditProfile(!editToggle.editProfile))}></div>
     <div className="outer-edit-container">
     <h1>edit Profile</h1>
     <form onSubmit={handleSubmit}>
     <div className="edit-container">
      <p>avatar</p>
      <p><ProfileCircle/></p>
      <p>FirstName</p>
      <p>{profileContent.firstName}</p>
      <p>LastName</p>
      <p>{profileContent.lastName}</p>
      <p>Username</p>
      <p>{profileContent.username}</p>
      <p>Bio</p>
      <input type="text" name='bio' value={profileContent.bio} onChange={handleInput}/>
      <p>Website</p>
      <input type="text" name='website' value={profileContent.website} onChange={handleInput}/>
     </div>
     <button type='submit'>update</button>
     </form>
     </div>
     
      
    </div>
  )
}

export default EditProfile

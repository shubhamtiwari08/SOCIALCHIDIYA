import React, { useContext, useEffect, useRef, useState } from 'react'
import { userContext } from '../../Context/userContext/userContext'
import ProfileCircle from '../Navigation/Profile/ProfileCircle'
import './EditProfile.css'
import { toast } from 'react-toastify'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCamera } from '@fortawesome/free-solid-svg-icons'

function EditProfile({editToggle}) {

    const {userState,editUser,getUser}=useContext(userContext)
    const {avatarUrl,bio,firstName,lastName,username,website}= userState.authUser
    const imageInputRef = useRef(null)
     
    const [selectImage,setSelectedImage] = useState("")
    const [profileContent,setProfileContent] = useState({
        avatarUrl,
        username,
        website,
        firstName,
        lastName,
        bio,
    })
    
const handleImageClick=()=>{
   imageInputRef.current.click()
}



const handleInput=(e)=>{
  let value = ""
  const name = e.target.name
  if(e.target.files){
     setSelectedImage(URL.createObjectURL(e.target.files[0]))
     value = URL.createObjectURL(e.target.files[0])
     setProfileContent({...profileContent,[name]:value})
  }else{
    value = e.target.value
    setProfileContent({...profileContent,[name]:value})
    console.log(profileContent, "new dataaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa")
}
}

const handleSubmit =(e)=>{
    e.preventDefault()
    editUser(profileContent)
    editToggle.setEditProfile(!editToggle.editProfile)
    toast.success("Details updated")
    console.log(userState?.authUser?.avatarUrl,"checkkkkkkkkkkkkkkkkkkkkkkkkkkk")
}




  return (
    <div className='main-editProfile-container'>
     <div className="background-profile" onClick={()=>(editToggle.setEditProfile(!editToggle.editProfile))}></div>
     <div className="outer-edit-container">
     <h1>Edit Profile</h1>
     <form onSubmit={handleSubmit} encType='multipart/form-data'>
     <div className="edit-container">
      <p>avatar</p>
      <input type="file" name='avatarUrl' accept="image/*"  ref={imageInputRef}  onChange={handleInput} style={{display:"none"}}/>
      <p><ProfileCircle url={selectImage?selectImage:userState?.authUser?.avatarUrl}/>  <FontAwesomeIcon icon={faCamera} onClick={handleImageClick} /> </p>
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
     <button type='submit' className="button" >update</button>
     </form>
     </div>  
    </div>
  )
}

export default EditProfile

import React from 'react'
import './ProfileCard.css'

function ProfileCard() {
  return (
    <div className='profileCard-main-container'>
    <div className='profile-img' style={{borderRadius:"50%",width:`80px`,height:`80px`,overflow:"hidden"}}>
      <img src='https://placehold.co/600x400/png' alt="profile" style={{objectFit:"cover"}} />
    </div>
    <h1>shubham tiwari</h1>
    <p>@shubhamtiwari</p>
    <button>Edit profile</button>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae quam debitis pariatur incidunt iusto cumque. Minima debitis eius id beatae vero. Velit fugit voluptates sequi eos possimus vitae iste culpa?</p>
    <p>shubhamtiwari.com</p>
    <div className="Reach-count">
       <p>0</p>
       <p>0</p>
       <p>37.4k</p>
       <p>Posts</p>
       <p>following</p>
      <p>followers</p>
      
      
    </div>
    </div>
  )
}

export default ProfileCard

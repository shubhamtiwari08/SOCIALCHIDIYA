import React from 'react'
import './profilecircle.css'

function ProfileCircle({url}) {
  return (
    <div style={{borderRadius:"50%",width:`3rem`,height:`3rem`,overflow:"hidden",border:"1px solid black",objectFit:"contain"}} className='profile-circle'>
      <img src={url} alt="profile" style={{objectFit:"cover"}} />
    </div>
  )
}

export default ProfileCircle

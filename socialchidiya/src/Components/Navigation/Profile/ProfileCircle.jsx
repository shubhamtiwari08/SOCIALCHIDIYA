import React from 'react'

function ProfileCircle() {
  return (
    <div style={{borderRadius:"50%",width:`35px`,height:`35px`,overflow:"hidden"}}>
      <img src='https://placehold.co/600x400/png' alt="profile" style={{objectFit:"cover"}} />
    </div>
  )
}

export default ProfileCircle

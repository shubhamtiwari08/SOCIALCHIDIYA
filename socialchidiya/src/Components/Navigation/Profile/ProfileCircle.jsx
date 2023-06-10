import React from 'react'

function ProfileCircle() {
  return (
    <div style={{borderRadius:"50%",width:"50px",height:"50px",overflow:"hidden"}}>
      <img src='https://placehold.co/600x400/png' alt="profile" style={{objectFit:"cover"}} />
    </div>
  )
}

export default ProfileCircle

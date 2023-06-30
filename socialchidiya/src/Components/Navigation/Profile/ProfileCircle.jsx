import React from 'react'

function ProfileCircle({url}) {
  return (
    <div style={{borderRadius:"50%",width:`35px`,height:`35px`,overflow:"hidden",border:"1px solid black"}}>
      <img src={url} alt="profile" style={{objectFit:"cover"}} />
    </div>
  )
}

export default ProfileCircle

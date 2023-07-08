import React, { useContext, useEffect } from 'react'
import CreatePost from '../CreatePost/CreatePost'
import PostProvider, { postContext } from '../../Context/PostContext/PostProvider'
import "./editPopup.css"

function EditPopUp({editOption,postId}) {

  const {singlePost} = useContext(postContext)
  const {viewEdit,setViewEdit} = editOption
  

  console.log(singlePost, "editttttttttt")


  return (
    <div className='edit-pop-up'>
       <div className="back-container" onClick={()=>setViewEdit(!viewEdit)}></div>
       <div className="update-container">
       <CreatePost editOption={editOption} postId={postId} singlePost={singlePost} />
    </div>
            
    </div>
  )
}

export default EditPopUp

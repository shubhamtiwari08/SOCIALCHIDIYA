import React, { useContext } from 'react'
import { postContext } from '../../Context/PostContext/PostProvider'

function OptionPopUp({id,toggle,editOption}) {
    const {deletePost} = useContext(postContext)
    const{option,setOption}= toggle
    const {viewEdit,setViewEdit} = editOption

    

    const handleDelete = (id) =>{
        deletePost(id)
        setOption(!option)
    }

    const handleEdit=(id)=>{
          setViewEdit(!viewEdit)
          setOption(!option)
        }

  return(
    <div className="pop-out-menu">
           <button onClick={()=> handleEdit(id)}>Edit</button>
           <button onClick={()=>handleDelete(id)}>Delete</button>
    </div>
  )
}

export default OptionPopUp

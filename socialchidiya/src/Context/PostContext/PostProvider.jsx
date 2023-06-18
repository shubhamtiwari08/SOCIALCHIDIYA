import React, { createContext, useContext, useEffect, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'

export const postContext = createContext()

function PostProvider({children}) {
    const [allPost,setAllPost] = useState([])
    const {isLogged}=useContext(AuthContext)

    const getPost = async()=>{
        try {
            const response = await fetch("/api/posts")
            const data = await response.json()
            setAllPost(data.posts)
            console.log(allPost)
        } catch (error) {
            console.error(error)
        }
    }

    useEffect(()=>{
        getPost()
    },[isLogged])




  return (
    <postContext.Provider value={{allPost}}>
    {children}
    </postContext.Provider>
  )
}

export default PostProvider

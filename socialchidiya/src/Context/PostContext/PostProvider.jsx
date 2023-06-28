import React, { createContext, useContext, useEffect, useReducer, useState } from 'react'
import { AuthContext } from '../AuthContext/AuthContext'
import { postReducer } from '../../Reducers/postReducer'

export const postContext = createContext()

function PostProvider({children}) {
    const {isLogged}=useContext(AuthContext)
    const [createToggle,setCreateToggle]=useState(false)
    const [singlePost,setSinglePost] = useState({})
    const [edit,setEdit] = useState(false)
  
    const initialState={posts:[],sort:"latest",bookmarked:[],exploreSort:"all"}

    const [postState,postDispatch] = useReducer(postReducer,initialState)
  
    const Token = localStorage.getItem("Token")

    const getPost = async()=>{
        try {
            const response = await fetch("/api/posts")
            const data = await response.json()
            postDispatch({type:"SET_POST",payload:data.posts})
            console.log(data)
        } catch (error) {
            console.error(error)
        }
    }


    const deletePost = async(id)=>{
        try {
            const response = await fetch(`/api/posts/${id}`,{
                method:"DELETE",
                headers:{
                    authorization:Token
                }
            })
            const data = await response.json()
            if(response.status === 201){
            postDispatch({type:"SET_POST",payload:data.posts})                 
            }
        } catch (error) {
            console.error(error)
        }
    }



    const getDetailedPost = async(id)=>{
        try {
            const response = await fetch(`/api/posts/${id}`)
            const data = await response.json()
            setSinglePost(data.post)   
        } catch (error) {
            console.error(error)
        }
    }

    const addBookmarkPost = async(id)=>{
     try {
            const response = await fetch(`/api/users/bookmark/${id}`,{
                method:"POST",
                headers:{
                    authorization:Token
                }
            })
            const data = await response.json()
            console.log(response)
          if(response.status === 200){
             postDispatch({type:"ADD_BOOKMARK",payload:data.bookmarks})
             console.log(postState.bookmarked,"bookmark")
          }else{
            console.log("error")
            console.log(postState.bookmarked,"bookmarkkkkkkkkkkkkkkkk")
          }
            
        } catch (error) {
            console.error(error)
        }
    }


    const removeBookmarkPost = async(id)=>{
        try {
            const response = await fetch(`/api/users/remove-bookmark/${id}`,{
                method:"POST",
                headers:{
                    authorization:Token
                }
            })
            const data = await response.json()
          if(response.status === 200){
             postDispatch({type:"ADD_BOOKMARK",payload:data.bookmarks})
             console.log(postState.bookmarked,"bookmarkkkkkkkkkkkkkkkk")
          }else{
            console.log("error")
          }
            
        } catch (error) {
            console.error(error)
        }
    }


    const LikePost = async(id)=>{
        try {
            const response = await fetch(`/api/posts/like/${id}`,{
                method:"POST",
                headers:{
                    authorization:Token
                }
            })
            const data = await response.json()
            console.log(response, "respoooooooooooooooooooooooooonse")
          if(response.status === 201){
            postDispatch({type:"SET_POST",payload:data.posts})
          }else{
            console.log("error")
          }
            
        } catch (error) {
            console.error(error)
        }
    }

    const dislikePost  = async(id)=>{
        try {
            const response = await fetch(`/api/posts/dislike/${id}`,{
                method:"POST",
                headers:{
                    authorization:Token
                }
            })
            const data = await response.json()
          if(response.status === 201){
            postDispatch({type:"SET_POST",payload:data.posts})
          }else{
            console.log("error")
          }
            
        } catch (error) {
            console.error(error)
        }
    } 

    const createPost = async(body)=>{
         try {
            const response = await fetch("api/posts",{
                method:"POST",
                headers:{
                    authorization:Token
                },
                body:JSON.stringify({postData:body})
            })
            const data = await response.json()
        postDispatch({type:"SET_POST",payload:data.posts})
         } catch (error) {
            console.error(error)
         }
        }

    const editPost = async(id,body)=>{
        try {
            const response = await fetch(`/api/posts/edit/${id}`,{
                method:"POST",
                headers:{
                    authorization:Token
                },
                body:JSON.stringify({
                    postData:body
                })
            })
            const data = await response.json()
            postDispatch({type:"SET_POST",payload:data.posts})
            console.log(data)

        } catch (error) {
            console.error(error)
        }
    }

    


    useEffect(()=>{
        getPost()
    },[isLogged])





  return (
    <postContext.Provider value={{edit,setEdit,editPost,deletePost,postState,createToggle,setCreateToggle,postDispatch,createPost,getDetailedPost,singlePost,LikePost,dislikePost,removeBookmarkPost,addBookmarkPost }}>
    {children}
    </postContext.Provider>
  )
}

export default PostProvider

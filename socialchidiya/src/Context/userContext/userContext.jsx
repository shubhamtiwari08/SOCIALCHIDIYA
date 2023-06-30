import React, { createContext, useEffect, useReducer, useState } from 'react'
import { userReducer } from './userReducer'

export const userContext = createContext()


function UserProvider({children}) {

//const [mainUser,setMainUser]=useState({})
// const [socialUsers,setSocialUsers]=useState([])

const initialState = {
  allUsers:[],
  authUser:{_id: "t7cZfWIp-q",
  firstName: "Adarsh",
  lastName: "Balika",
  username: "adarshbalika",
  password: "adarshBalika123",
  bio: "Be yourself!",
  bookmarks: [],
  avatarUrl:
    "https://randomuser.me/api/portraits/men/2.jpg",
  website: "https://romabulani.netlify.app/",
  createdAt: "2022-01-01T10:55:06+05:30",
  updatedAt: "11-12-43",
},
  thirdUser:{},
}

const [userState,userDispatch] = useReducer(userReducer,initialState) 


const Token = localStorage.getItem("Token")

const getUser = async()=>{
    try {
    const response = await fetch("/api/users")
    const data = await response.json()
    userDispatch({type:"UPDATE_USER",payload:data.users})
console.log(data)
    } catch (error) {
      console.error(error)    
    }

}

const getMainUser = async(id)=>{
    const response = await fetch(`/api/users/${id}`)
    const data = await response.json()
    userDispatch({type:"SET_AUTH_USER",payload:data.user})
}

const getThirdUser = async(id)=>{
  const response = await fetch(`/api/users/${id}`)
  const data = await response.json()
  userDispatch({type:"SET_THIRD_USER",payload:data.user})
}

const followUser = async(id)=>{
  try {
     const response = await fetch(`/api/users/follow/${id}`,{
      method:"POST",
      headers:{
        authorization:Token
      }
     })
     const data = await response.json()
     userDispatch({type:"SET_AUTH_USER",payload:data.user})
     userDispatch({type:"SET_THIRD_USER",payload:data.followUser})
     
  } catch (error) {
    console.error(error)
  }
}

const unFollowUser = async(id)=>{
  try {
     const response = await fetch(`/api/users/unfollow/${id}`,{
      method:"POST",
      headers:{
        authorization:Token
      }
     })
     const data = await response.json()
     userDispatch({type:"SET_AUTH_USER",payload:data.user})
     userDispatch({type:"SET_THIRD_USER",payload:data.followUser})
     
  } catch (error) {
    console.error(error)
  }
}



const editUser = async(body)=>{
    try {
       const response = await fetch("/api/users/edit",{
        method:"POST",
        headers:{
          authorization:Token
        },
        body:JSON.stringify({
          userData:body
        })
       })
       const data = await response.json()
       if(response.status === 201){
        userDispatch({type:"SET_AUTH_USER",payload:data.user})
       }
    } catch (error) {
      console.error(error)
    }
}

useEffect(()=>{
    getUser()
    getMainUser()
},[])


  return (
     <userContext.Provider value={{unFollowUser,getUser,getThirdUser,followUser,editUser,getMainUser,userState}}>
      {children}
     </userContext.Provider>
  )
}

export default UserProvider

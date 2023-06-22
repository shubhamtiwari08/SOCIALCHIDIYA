import React, { createContext, useEffect, useReducer, useState } from 'react'
import { userReducer } from './userReducer'

export const userContext = createContext()


function UserProvider({children}) {

//const [mainUser,setMainUser]=useState({})
// const [socialUsers,setSocialUsers]=useState([])

const initialState = {
  allUsers:[],
  authUser:{}
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
     
  } catch (error) {
    console.error(error)
  }
}

useEffect(()=>{
    getUser()
    getMainUser()
},[])


  return (
     <userContext.Provider value={{followUser,getMainUser,userState}}>
      {children}
     </userContext.Provider>
  )
}

export default UserProvider

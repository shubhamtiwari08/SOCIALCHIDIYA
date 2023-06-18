import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext()


function UserProvider({children}) {

const [mainUser,setMainUser]=useState({})
const [socialUsers,setSocialUsers]=useState([])

const getUser = async()=>{
    try {
    const response = await fetch("/api/users")
    const data = await response.json()
    setSocialUsers(data)
console.log(data)
    } catch (error) {
      console.error(error)    
    }

}

const getMainUser = async(id)=>{
    const response = await fetch(`/api/users/${id}`)
    const data = await response.json()
    setMainUser(data.user)
}

useEffect(()=>{
    getUser()
},[])


  return (
     <userContext.Provider value={{socialUsers,getMainUser,mainUser}}>
      {children}
     </userContext.Provider>
  )
}

export default UserProvider

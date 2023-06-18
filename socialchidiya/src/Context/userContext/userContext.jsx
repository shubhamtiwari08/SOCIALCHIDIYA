import React, { createContext, useEffect, useState } from 'react'

export const userContext = createContext()


function UserProvider({children}) {


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

useEffect(()=>{
    getUser()
},[])


  return (
     <userContext.Provider value={{socialUsers}}>
      {children}
     </userContext.Provider>
  )
}

export default UserProvider

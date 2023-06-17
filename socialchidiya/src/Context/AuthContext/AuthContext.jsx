import React, { createContext, useState } from 'react'

export const AuthContext = createContext()

function AuthProvider({children}) {
    const [isLogged,setIsLogged] = useState(false)
    const [userProfile,setUserProfile] = useState({})

  return (
     <AuthContext.Provider value={{isLogged,setIsLogged,userProfile,setUserProfile}}>
          {children}
     </AuthContext.Provider>
  )

  
}

export default AuthProvider

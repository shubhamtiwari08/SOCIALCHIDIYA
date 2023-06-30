import React, { useContext } from 'react'
import { AuthContext } from '../../Context/AuthContext/AuthContext'
import { Navigate, useLocation } from 'react-router'

function RequiresAuth({children}) {

    const {isLogged} = useContext(AuthContext)
    const location = useLocation()
    

  return (
    isLogged?children : <Navigate to="/login" state={{from:location}}/>
  )
}

export default RequiresAuth

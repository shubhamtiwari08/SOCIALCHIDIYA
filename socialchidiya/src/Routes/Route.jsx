import React from 'react'
import { Route,Routes } from 'react-router'
import Landing from '../Pages/Landing/Landing'
import Home from '../Pages/Home/Home'

function Routing() {
  return (
    <div>
    <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/home' element={<Home/>}/>
    </Routes>
    </div>
  )
}

export default Routing

import React from 'react'
import { Route,Routes } from 'react-router'
import Landing from '../Pages/Landing/Landing'
import Home from '../Pages/Home/Home'
import Profile from '../Pages/Profile/Profile'
import ThridProfile from '../Pages/3rdPersonProfile/ThridProfile'
import Explore from '../Pages/Explore/Explore'
import Bookmark from '../Pages/Bookmark/Bookmark'
import SignUp from '../Pages/Auth/SignUp'
import Login from '../Pages/Auth/Login'
import Post from '../Pages/Post/Post'
import MockAPI from '../Components/Mockman/mockman'

function Routing() {
  return (
    <div>
    <Routes>
       <Route path='/' element={<Landing/>}/>
       <Route path='/home' element={<Home/>}/>
       <Route path='/profile' element={<Profile/>}/>
       <Route path='/Thirdprofile' element={<ThridProfile/>}/>
       <Route path='/explore' element={<Explore/>}/>
       <Route path='/bookmark' element={<Bookmark/>}/>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/Login' element={<Login/>}/>
       <Route path='/post' element={<Post/>}/>
       <Route path='/mockman' element={<MockAPI/>}/>

       
    </Routes>
    </div>
  )
}

export default Routing

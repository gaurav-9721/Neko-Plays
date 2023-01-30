import React from 'react'
import Navbar  from './Component/Navbar'
import Home from './Component/Home'
import { Route, Routes } from 'react-router-dom'
import Login from './Component/Login'
import Register from './Component/Register'
import { useAuth } from './Hooks/useAuthLogin'
import NavbarLoggedIn from './Component/NavbarLoggedIn'
import NavbarLoggedOut from './Component/NavbarLoggedOut'
import Play from './Component/Play'
import Profile from './Component/Profile'

const App = () => {
  const {auth} = useAuth();

  return (
    <>
    
    {auth ? <NavbarLoggedIn/> : <NavbarLoggedOut/>}  

    <Routes>
    <Route exact path='/' element={<Home/>}/>
      <Route exact path='/profile' element={<Profile/>}/>
      <Route exact path='/login' element={<Login/>}/>
      <Route exact path='/register' element={<Register/>}/>
      <Route exact path='/play' element={<Play/>}/>
    </Routes>
    </>
  )
}

export default App
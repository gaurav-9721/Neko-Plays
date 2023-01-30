import React from 'react'
import NavbarLoggedIn from './NavbarLoggedIn'
import NavbarLoggedOut from './NavbarLoggedOut'
import { useAuth } from '../Hooks/useAuthLogin'


const Navbar = () => {

  const {auth} = useAuth();

  {auth ? <NavbarLoggedIn/> : <NavbarLoggedOut/>}  
}

export default Navbar
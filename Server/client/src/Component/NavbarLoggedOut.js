import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink } from 'react-router-dom'
import logo from '../images/logo.png'
import neko_plays from '../images/neko_plays.png'
import '../App.css'

const NavbarLoggedOut = () => {
  return (

    
    <nav className="navbar navbar-expand-lg navbar-light bg-black mynavbar sticky-top">
 
   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button> 

  <div className="navbar-collapse " id="navbarSupportedContent">
    
  <NavLink className="navbar-brand" to="/"> 
  <div>
  <img src={logo} alt ='' className='neko_logo'></img>
  <img src={neko_plays} alt ='' className='neko_plays_text'></img>
  </div>
   </NavLink> 
   
    <ul className="navbar-nav ms-auto">

      <li className="nav-item">
        <NavLink className="nav-link" to="/profile">
          <span className='navText'> About </span></NavLink>
      </li>

      <li className="nav-item ">
      <NavLink className="nav-link" to="/login">
          <span className='navText'> Login </span></NavLink>
      </li>

      <li className="nav-item">
      <NavLink className="nav-link" to="/register">
          <span className='navText'> Register </span></NavLink>
      </li>
      
      
    </ul>
    
  </div>
</nav>


  )
}

export default NavbarLoggedOut
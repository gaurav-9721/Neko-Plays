import React from 'react'
import 'bootstrap/dist/css/bootstrap.css'
import { NavLink, useNavigate } from 'react-router-dom'
import logo from '../images/logo.png'
import neko_plays from '../images/neko_plays.png'
import '../App.css'
import { useAuth } from '../Hooks/useAuthLogin'

const NavbarLoggedIn = () => {
  const { setAuth, user } = useAuth();
  const navigate = useNavigate();

  const logout = async () => {
    const res = await fetch('/logout', {
      method: 'GET',
      headers: {
        "Content-type": 'application/json',
        Accept: 'application/json'
      },
      credentials: 'include'

    })

    setAuth(false)
    navigate('/login')
  }

  return (


    <nav className="navbar navbar-expand-lg navbar-light bg-black mynavbar sticky-top">

      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="  navbar-collapse " id="navbarSupportedContent">

        <NavLink className="navbar-brand" to="/">
          <div>
            <img src={logo} alt='' className='neko_logo'></img>
            <img src={neko_plays} alt='' className='neko_plays_text'></img>
          </div>
        </NavLink>


        <ul className="navbar-nav ms-auto">

          <li className="nav-item">
            <NavLink className="nav-link" to="/play">
              <span className='navText'> Play</span></NavLink>
          </li>


          <li class="nav-item dropdown">
            <NavLink className="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              <span className='navText'>Profile</span>
            </NavLink>
            <div class="dropdown-menu dropdown-menu-right ms-auto mx-auto" aria-labelledby="dropdownMenuButton">
              
              <NavLink to='/profile'><button class="dropdown-item" type="button">Profile</button></NavLink>
              
              <button class="dropdown-item" type="button">Settings</button>
              <div className='dropdown-divider'/>
              <button class="dropdown-item" type="button" onClick={logout}>Logout</button>
            </div>
          </li>


        </ul>
      </div>

    </nav>


  )
}

export default NavbarLoggedIn
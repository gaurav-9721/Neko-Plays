import React from 'react'
import bg from '../images/hutao.png'
import { NavLink, useNavigate } from 'react-router-dom'
import { useAuth } from '../Hooks/useAuthLogin'

const Home = () => {
  const navigate = useNavigate();
  const {auth, setAuth} = useAuth()

  const play = async (e) => {
    e.preventDefault()
    if (auth){
      navigate('/play')
    }
    else{
      navigate('/login')
    }
  }
  

  return (
    <div className='page-background'>
      <div className='home'>
        <h1 className='home-text'> Let's Play Meow!</h1><br></br>
      </div>
      
      <div className='home'>
        <NavLink>
          <button type="button" class="play-btn" to='/play' onClick={play}>
            <b> PLAY </b>
          </button>
        </NavLink>
      </div>
      <div className='home'/>
      <div className='home'/>
     
      
    </div>
  )
}

export default Home
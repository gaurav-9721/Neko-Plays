import React from 'react'
import { NavLink } from 'react-router-dom'
import tictactoe from '../images/tictactoe.png'
import blackrootimg from '../images/BlackRoot.png'
import logo from '../images/logo.png'
import chessimg from '../images/chess.png'
import {Card, CardGroup, CardImg, Button} from 'react-bootstrap'

const Play = () => {
  return (

   
    <div className='play-div-main '>
      
 
      
      <div className='game-card'><center>
        <img alt="Mew" className='game-card-img' src={tictactoe}/>
        <div className='game-card-info'>
          <center><h4> Tic Tac Toe </h4></center>
          <button className='playcard-btn'> PLAY </button>
        </div></center>
      </div>

      <div className='game-card'><center>
        <img alt="Mew" className='game-card-img' src={blackrootimg}/>
        <div className='game-card-info'>
          <center><h4> Blackroot </h4></center>
          <button className='playcard-btn'> PLAY </button>
        </div></center>
      </div>

      <div className='game-card'><center>
        <img alt="Mew" className='game-card-img' src={chessimg}/>
        <div className='game-card-info'>
          <center><h4> Chess </h4></center>
          <button className='playcard-btn'> PLAY </button>
        </div></center>
      </div>

      <div className='game-card'><center>
        <img alt="Mew" className='game-card-img' src={logo}/>
        <div className='game-card-info'>
          <center><h4> Demo Game </h4></center>
          <button className='playcard-btn'> PLAY </button>
        </div></center>
      </div>

      <div className='game-card'><center>
        <img alt="Mew" className='game-card-img' src={logo}/>
        <div className='game-card-info'>
          <center><h4> Demo Game </h4></center>
          <button className='playcard-btn'> PLAY </button>
        </div></center>
      </div>
      
      
    </div>


    


  )
}

export default Play
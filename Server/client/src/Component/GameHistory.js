import React from 'react'

const GameHistory = () => {
  return (
    <div className='profile-info-view'>
       

       <div className='profile-pair-div row'>
            <span className='profile-keys col'> Blackroot </span>
            <span className='profile-values col'>  Highest Score: 1260 </span>
            <span className='profile-values col'> </span>
       </div>

       <div className='profile-pair-div row'>
            <span className='profile-keys col'> Tic Tac Toe  </span>
            <span className='profile-values col'> Wins: 18    </span>
            <span className='profile-values col'>Losses: 9 </span>
       </div>

       <div className='profile-pair-div row'>
            <span className='profile-keys col'> Chess </span>
            <span className='profile-values col'>  Wins: 8   </span>
            <span className='profile-values col'> Losses: 5</span>
       </div>

       <div className='profile-pair-div row'>
            <span className='profile-keys col'> Mario </span>
            <span className='profile-values col'>  Highest Score: 55300   </span>
            <span className='profile-values col'> </span>
       </div>

       

    </div>
  )
}

export default GameHistory
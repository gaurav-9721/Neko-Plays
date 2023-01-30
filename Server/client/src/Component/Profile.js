import { React, useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import PersonalProfile from './PersonalProfile';
import GameHistory from './GameHistory';

const Profile = () => {

  
  const [currentComponent, setComponent] = useState(1)

  const changeTab = (e) => {
    e.preventDefault()
    console.log('RUn')
    if (e.target.name == 'gamehistory') setComponent(2)
    else if (e.target.name == 'personalinfo') setComponent(1)
  }

  return (

    
    <div className='profle-main-div'>
    <span className='profile-heading'>Profile</span>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button name = 'personalinfo'  className="nav-link nav-tabs-profile" onClick={changeTab}>Personal Information</button>
          <button name = 'gamehistory' className="nav-link nav-tabs-profile" onClick={changeTab}>Game History</button>
        </div>
      </nav>

      {(() => {
        switch (currentComponent) {
          case 1:
            return <PersonalProfile />
          case 2:
            return <GameHistory></GameHistory>
          default:
            return <PersonalProfile />
        }
      })()}


    </div>
  )
}

export default Profile
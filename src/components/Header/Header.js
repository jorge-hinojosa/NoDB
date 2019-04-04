import React from 'react';
import './Header.css'

function Header (props) {
  return (
    <header className="App-header">
      <div className="Header">
        <h3 id="title">
          <img id="header-icon"
            src="https://image.flaticon.com/icons/svg/1568/1568442.svg"
            alt="MuseBoard" />
          MuseBoard
        </h3>
      </div>
      
    </header>
  )
}

export default Header;
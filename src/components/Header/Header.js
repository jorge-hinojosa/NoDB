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
        <nav className="Nav">
          <button className="Nav-btn">BLOG</button>
          <button className="Nav-btn">ABOUT</button>
          <button className="Nav-btn">CONTACT</button>
        </nav>
      </div>
      
    </header>
  )
}

export default Header;
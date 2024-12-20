import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';


const MyHeader = (props) => {
  const [isActive, setIsActive] = useState(false);
  const toggleClass = () => {
    setIsActive(!isActive);
  };
    return  <header>
    <div>
    <a href='/azkar'><img src="images/icon.png" height="55px" /></a>
    </div>
    <nav>
      <ul>
        <li><a href='#moments'>Our Moments</a></li>
        <li><a href='#facts'>Fun Facts</a></li>
        <li><a href='#events'>Order of Event</a></li>
        <li><a href='#directions'>Directions</a></li>
        <li><a href='/azkar/gallery'>Live Gallery</a></li>
      </ul>
    </nav>
    <div id="hamburger-icon" className={isActive ? 'open' : ''} onClick={toggleClass}> 
    <div className="bar1"></div>
    <div className="bar2"></div>
    <div className="bar3"></div>
  
      <ul id="mobile-menu" className={isActive ? 'open' : ''}>
        <li><a href='#moments'>Our Moments</a></li>
        <li><a href='#facts'>Fun Facts</a></li>
        <li><a href='#events'>Order of Event</a></li>
        <li><a href='#directions'>Directions</a></li>
        <li><a href='/azkar/gallery'>Live Gallery</a></li>
      </ul>
     
    </div>
  </header>;
  };

export default MyHeader;
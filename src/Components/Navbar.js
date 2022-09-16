import React from 'react';
import './Navbar.css';


function Navbar() {
  return (
    <div className='nav'>
      <ul>
        <a href="#icon"><button class="button">SIGN IN</button></a>
        <a href="#icon"><button class="button">LOG IN</button></a>
        <li><a href="#home">About</a></li>
        <li><a href="#news">Contact</a></li>
        <li><a href="#contact">News</a></li>
        <li><a href="#about">Home</a></li>
    </ul>
      
    </div>
  );
}

export default Navbar;

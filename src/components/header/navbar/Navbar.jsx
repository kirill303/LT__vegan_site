import React from 'react';
import navbarLogo from './logo.svg';
import search from './Search.svg';
import basket from './basket.svg';
import './Navbar.scss'
export default function Navbar(props) {
   return (
      <nav className='nav'>
         <ul className="nav__list">
            <li className="nav__list-item">About Us</li>
            <li className="nav__list-item">Service</li>
            <li className="nav__list-item">Menu</li>
            <li className="nav__list-item">Contact</li>
         </ul>
         <div className="nav__logo ">
            <img src={navbarLogo} alt="#"/>
         </div>
         <div className="nav__menu svg">
            <div className="nav__search ">
               <img src={search} alt="#"/>
            </div>
            <div className="nav__basket">
               <img src={basket} alt="#"/>
            </div>
            <button className="button nav__registration">
               Registrtion Now
            </button>
         </div>
      </nav>
   )
}
import React from 'react';
import Navbar from './navbar/Navbar';
import './Header.scss'
export default function Header(props) {
   return (
      <header className='header'>
         <div className="header__container container">
            <Navbar />
         </div>
      </header>
   )
}
import React from 'react';
import './Main.scss';
//Pages
import Review from './pages/_1rewiew/Rewiew';
import Best from './pages/_2best/best';
import Explor from './pages/_3explor/Explor';
import About from './pages/_4about/About';
import Download from './pages/_5download/Download';

export default function Main(props) {
   return (
      <main className='main'>
         <Review />
         <Best />
         <Explor />
         <About />
         <Download/>
      </main>
   )
}
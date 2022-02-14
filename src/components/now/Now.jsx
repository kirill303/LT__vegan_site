import React from 'react';
import arrow from './arrowInEclipse.png';
import './now.scss'
export default function Now({ text, c }) {
   return (
      <div className={"now " + c}>
         {text}
         <div><img src={arrow} alt="#"/></div>
      </div>
   )
}
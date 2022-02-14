import React from 'react';
import './Headline.scss'
export default function Headline({ h1, h2, c }) {
   return (
      <div className={'headline ' + c} >
         <h1 >{h1}</h1>
         <h2>{h2}</h2>
      </div>

   )
}
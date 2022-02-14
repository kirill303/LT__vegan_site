import React from 'react';
import './card.scss';
export default function Card({ icon, headline, text }) {
   return (
      <div className='best__card'>
         <div className="best__card-icon">
            <img src={icon} alt="#" />
         </div>
         <div className="best__card-right">
            <div className="best__card-headline">
               {headline}
            </div>
            <div className="best__card-text">
               {text}
            </div>
         </div>
      </div>

   )
}
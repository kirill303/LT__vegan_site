import React from 'react';
import './card.scss'
export default function Card({ icon, headline, text }) {
   return (
      <li className='review__card'>
         <div className="review__card-icon">
            <img src={icon} alt="#" />
         </div>
         <div className="review__card-right">
            <div className="review__card-headline">
               {headline}
            </div>
            <div className="review__card-text">
               {text}
            </div>
         </div>
      </li>
   )
}
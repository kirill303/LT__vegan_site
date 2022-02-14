import React from 'react';
import Headline from '../../../headline/Headline';
import './Best.scss';
import line from './img/line.svg';
import img1 from './img/img1.png';
//Импрот svg-шок для карточек
import card1 from './img/card1.svg';
import card2 from './img/card2.svg';
import card3 from './img/card3.svg';
import Card from './card/Card';
import arrow from './img/arrow.svg'

export default function Best(props) {
   const h2 = <>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br />
      Lorem Ipsum has been the industry's  standard dummy text ever since the<br />
      1500s, when an unknown printer took a galley...</>

   const cards__list = [
      { icon: card3, headline: 'Fasted delivery Service', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.r' },
      { icon: card2, headline: 'Online order Service', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.(4.8)' },
      { icon: card1, headline: '24/8 Service', text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.' },
   ]
   return (
      <div className='best-page page'>
         <div className="best__container container">
            <Headline c={'best-headline'} h1={'Why We Aer The Best?'} h2={h2} />
            <div className="best__bottom">
               <div className="best__list">
                  {cards__list.map((li,i) => {
                     return (
                        <Card {...li} key = {i} />
                     )
                  })}
                  <div className='best__arrow'><img src={arrow} alt="#" /></div>
               </div>
               <img src={img1} alt="#" />
            </div>
         </div>
         <div className="line">
            <img src={line} alt="#" />
         </div>
      </div>
   )
}
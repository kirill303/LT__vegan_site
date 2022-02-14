import React from 'react';
import Headline from '../../../headline/Headline';
import './Rewiew.scss';
import rewiewBackground from './img/rewiew__background.png';
import fruits from './img/fruits.jpg';
import Card from './card/card';
//Импрот svg-шок для карточек
import card1 from './img/card1.svg';
import card2 from './img/card2.svg';
import card3 from './img/card3.svg';
import Now from '../../../now/Now';

export default function Review(props) {
   const cards__list = [
      { icon: card3, headline: '30K', text: 'User Order' },
      { icon: card2, headline: '20K', text: 'Review(4.8)' },
      { icon: card1, headline: '300', text: 'Items' },
   ]
   return (
      <div className='rewiew-page page'>
         <div className="rewiew__container container">
            <Headline c={'rewiew__headline'} h1={'Organic Fruit & Vegetables'} h2={<> Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br /> Lorem Ipsum has been the industry s standard dummy text ever since the <br />1500s, when an unknown printer took a galley</>} />
            <Now text={'Order Now'} c={'rewiew__now'} />
            <div className="review__bottom">
               <div className="review__bottom-fruits">
                  <img src={fruits} alt="#" />
               </div>
               <ul className='review__bottom-list'>
                  {cards__list.map((li,i) => {
                     return (
                        <Card {...li} key = {i} />
                     )
                  })}
               </ul>
            </div>
         </div>
         <div className="rewiew__background">
            <img src={rewiewBackground} alt="#" />
         </div>
      </div>
   )
}
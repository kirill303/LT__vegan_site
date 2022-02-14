import React from 'react';
import Headline from '../../../headline/Headline';
import Now from '../../../now/Now';
import  './explor.scss';

import fruit from './fruit.png';
import lists from './lists.png';

export default function Explor(props) {
   const h2 = <>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
      industry. Lorem Ipsum has been the industry's standard dummy text <br />
      ever since the 1500s, when an unknown printer...</>
   return (
      <div className='explor-page page'>
         <div className="explor__container container">
            <div className="explor__left">
               <div className="explor__fruit">
                  <img src={fruit} alt="#" />
               </div>
            </div>
            <div className="explor__right">
               <Headline c={'explore__headline'} h1={'Explor Our Special Items '}h2={h2}/>
               <Now text = {'Explor Now'} c ={'explor__now'} />
               <div className="explor__lists">
                  <img src={lists} alt="#" />
               </div>
            </div>
         </div>
      </div>

   )
}
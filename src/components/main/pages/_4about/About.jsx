import React from 'react';
import Headline from '../../../headline/Headline';
import './about.scss';

import coolMan from './coolMan.png';
import stars from './stars.png';
import arrow1 from './arrow1.png';
import arrow2 from './arrow2.png';

export default function About(props) {
   const h2 = <>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
      industry. Lorem Ipsum has been the industry's standard dummy text<br />
      ever since the 1500s, when an unknown printer took a galley of type<br />
      and scrambled it to make a type specimen book. It has survived not<br />
      only five centuries, but also the leap into electronic typesetting,<br />
      remaining essentially unchanged. It was popularis</>
   return (
      <div className="about-page page">
         <div className="about__container container">
            <div className="about__left">
               <Headline c={'about__heading'} h1={<>What Our Customers<br /> About Us saying</>} h2={h2} />
               <div className="about__bottom">
                  <div className="about__reviews">
                     <div className="about__reveiws-name">
                        Ahmed Hridoy
                     </div>
                     <div className="about__reveiws-stars">
                        <img src={stars} alt="" />
                     </div>
                  </div>
                  <div className="about__arrows">
                     <div>
                        <img src={arrow2} alt="" />
                     </div>
                     <div>
                        <img src={arrow1} alt="" />
                     </div>
                  </div>
               </div>
            </div>
            <div className="about__right">
               <div>
                  <img src={coolMan} alt="" />
               </div>
            </div>
         </div>
      </div>
   )
}
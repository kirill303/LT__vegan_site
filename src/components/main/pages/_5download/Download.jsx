import React from 'react';
import Headline from '../../../headline/Headline';
import './download.scss';

import phone from './phone.png';
import appStore from './AppStore.png';
import googlePlay from './GooglePlay.png'

export default function Download(props) {
   const h2 = <>Lorem Ipsum is simply dummy text of the printing and typesetting<br />
      industry. Lorem Ipsum has been the industry's standard dummy text<br />
      ever since the 1500s, when an unknown printer...</>
   return (
      <div className="download__page page">
         <div className="download__container container">
            <div className="download__left">
               <div>
                  <img src={phone} alt="#" />
               </div>
            </div>
            <div className="download__right">
               <div className="download__app">
                  Download App
               </div>
               <Headline c={'download__headline'} h1={<>Simple Way To Order<br /> Your Organic Fruit </>} h2={h2} />
               <div className="download__stores">
                  <div>
                     <img src={appStore} alt="#" />
                  </div>
                  <div>
                     <img src={googlePlay} alt="#" />
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}
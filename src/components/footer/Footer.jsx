import React from 'react';
import './footer.scss';
import logo from './logo.svg';
import contacts from './contacts.png'

export default function Footer(props) {
   return (
      <footer className='footer'>
         <div className="footer__container container">
            <div className="footer__left">
               <img src={logo} alt="" />
               <p>
                  Lorem Ipsum is simply dummy text of the printing 
                  and typesetting industry. Lorem 
                  Ipsum has been the industry's standard 
                  dummy text ever since the 1500s, when 
                  an unknown printer... 
               </p>
            </div>
            <div className="footer__right">
               <ul className='footer__contacts'>
                  <li className="footer__contacts-item">
                  <h6>Navigation</h6> <br />
                  About Us <br />
                  Service <br />
                  Menu <br />
                  </li>
                  <li className="footer__contacts-item">
                  <h6>Resources</h6> <br />
                  Reviews <br />
                  Blog <br />
                  Update News <br />
                  </li>
                  <li className="footer__contacts-item">
                  <h6>Contact Us</h6> <br />
                  Email: oyasim@email.com <br />
                  <div className = {'logs'}><img src={contacts} alt="" /></div>
                  </li>
               </ul>
            </div>
         </div>
      </footer>
   )
}
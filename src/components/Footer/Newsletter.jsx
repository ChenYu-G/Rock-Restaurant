import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="Be A Member" />
      <h2 className="headtext__cormorant">Subscribe Us Right Now</h2>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="text" placeholder="Enter your name" />
      <input type="email" placeholder="Enter your email address" /> 
      <div className='select'>
      <p>Do you want to receive our newsletter?</p>
      <input type="checkbox" id='checkbox'/>
      
      </div>
      
      <button type="submit" className="custom__button">Join</button>
      
    </div>
  </div>
);

export default Newsletter;
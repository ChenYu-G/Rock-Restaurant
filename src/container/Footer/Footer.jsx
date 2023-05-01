import React from 'react';
import { FiFacebook, FiTwitter, FiInstagram } from 'react-icons/fi';

import { FooterOverlay, Newsletter } from '../../components';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding app__bg" id="login">
    <FooterOverlay />
    <Newsletter />

    <div className="app__footer-links">
      
    <div className="app__footer-links_work">
        <h1 className="app__footer-headtext">Working Hours</h1>
        <p className="p__opensans">Sunday - Thursday</p>
        <p className="p__opensans">4:30 pm - 10:00 pm</p>
        <p className="p__opensans">Friday-Saturday</p>
        <p className="p__opensans">4:30 pm - 11:00 pm</p>
      </div>

      <div className="app__footer-links_logo">
        <h1 className="app__footer-headtext">CAP7AIN</h1>
        <p className="p__opensans">&quot;A good restaurant is like a vacation; it transports you, and it becomes a lot more than just about the food.

&quot;</p>
      </div>

      <div className="app__footer-links_contact">
        <h1 className="app__footer-headtext">Address & Contact</h1>
        <p className="p__opensans">4109 Poco Mas Drive, Dallas, Texas, 75202</p>
        <p className="p__opensans">214-571-7975</p>
        <p className="p__opensans">214-263-4355</p>
        <p className="p__opensans_org">cap7ainonline@gmail.com</p>
      </div>
      
    </div>

    

    <div className="footer__copyright">
      <p className="p__opensans">React Web Project: ChenYu Geng, 2022</p>
      <p className="p__opensans">Learned from and code followed Youtuber: JavaScript Mastery</p>
    </div>

  </div>
);

export default Footer;

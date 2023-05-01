import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './IntroPic.css';

const IntroPic = () => (
  <div className='img__container app__bg'>
    <div className='left pic-container'>
        <img className='intro__pic' src={images.introPic1} alt="intro__pic1"/>
    </div>
    <div className='right pic-container'>
        <img className='intro__pic' src={images.introPic2} alt="intro__pic2"/>
    </div>
  </div>
);

export default IntroPic;

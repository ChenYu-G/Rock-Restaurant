import React from 'react';

import { Chef, FindUs, Footer, Header, Intro, IntroPic, SpecialMenu } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
  <div>
    <Navbar />
    <Header />
    <SpecialMenu />
    <Chef />
    <Intro />
    <IntroPic />
    <FindUs />
    <Footer />
  </div>
);

export default App;

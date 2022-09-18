import React, {useState} from 'react';
import { Footer } from './components/Footer/Footer';
import { Header } from './components/Header/Header';
import { Info } from './components/Info/Info';
import { Intro } from './components/Intro/Intro';
import { Menu } from './components/Menu/Menu';
import { Rate } from './components/Rate/Rate';
import { Telegram } from './components/Telegram/Telegram';
import './style/App.scss';


function App() {


  return (
    <div className="App">
      <div className="container">
        <Header />
        <Intro />
        <Menu />
        <Info />
      </div>
      <Rate />
      <div className="container">
        <Telegram />
      </div>
      <Footer />
    </div>
  )

};

export default App;
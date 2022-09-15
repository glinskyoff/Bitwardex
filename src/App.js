import React, {useState} from 'react';
import { Header } from './components/Header/Header';
import { Intro } from './components/Intro/Intro';
import { Menu } from './components/Menu/Menu';
import './style/App.scss';


function App() {


  return (
    <div className="App">
      <div className="container">
        <Header />
        <Intro />
        <Menu />
      </div>
    </div>
  )

};

export default App;
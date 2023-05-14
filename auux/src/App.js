import './App.css';
import React, { Component, useState } from 'react';
import Logo from './components/Logo';
import Timer from './components/Timer';
import Current from './components/Current';
import List from './components/List';
import Search from './components/Search';
import Button from './components/Button';
import InputField from './components/InputField';

function App() {
  return (
    <div className="App">
      <div className='Lobby'>
        <div className='Container'>
          <Logo />
          <Button /> 
          <Button />
        </div>
      </div>
      <div className="Header">
        <Logo />
        <Timer />
      </div>
      <div className="Body">
        <Current />
        <List />
      </div>
      <div className="Footer">
        <Search />
      </div>
    </div>
  );
}

export default App;

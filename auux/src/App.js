import './App.css';
import React, { Component, useState } from 'react';
import Logo from './components/Logo';
import Timer from './components/Timer';
import Current from './components/Current';
import List from './components/List';
import Search from './components/Search';
import axios from 'axios';
import Button from './components/Button';
import InputField from './components/InputField';

function App() {
  return (
    <div className="App">
      <div className='Lobby'>
        <div className='Container'>
          <Logo />
          <Button text = "Join Party"/>
          <Button text = "Create Party"/>
        </div>

        <div className='Join'>
          <Logo />
          <p>Party Code:</p>
          <InputField type="text" placeholder="Enter code here"/>
          <InputField type="submit" placeholder="Enter" />
          <Button text="Go Back"/>
        </div>

        <div className='Create'>
          <Logo /> 
          <Button text="Login In Spotify" />
          <Button text="Go Back"/>
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

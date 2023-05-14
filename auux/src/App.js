import './App.css';
import React, { useState } from 'react';
import Logo from './components/Logo';
import Timer from './components/Timer';
import Current from './components/Current';
import List from './components/List';
import Search from './components/Search';
import react from 'react';

function App() {
  return (
    <div className="App">
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

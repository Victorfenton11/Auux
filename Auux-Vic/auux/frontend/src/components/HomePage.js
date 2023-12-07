import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import Logo from './Logo';
import Timer from './Timer';
import Current from './Current';
import List from './List';
import Search from './Search';

export default function HomePage(props) {
  const { roomCode } = useParams();
  const [votesToSkip, setVotesToSkip] = useState(3);
  const [isHost, setIsHost] = useState(false);

  const getRoomDetails = async () => {
    //fetch('/api/get-room' + '?code=' + roomCode).then((response) => response.json()).then((data) => {
     // setVotesToSkip(data.votes_to_skip);
     // setIsHost(data.is_host);
    //});
  }

  useEffect(() => {
    getRoomDetails();
  }, [])

  return (
    <div className="App">
      <div className="Header">
        <Logo />
        <Timer />
        <FontAwesomeIcon icon="fa-light fa-sliders" />
      </div>
      <div className="Body">
        <Current />
        <List />
      </div>
      <div className="Footer">
        <Search />
      </div>
    </div>
  )
}

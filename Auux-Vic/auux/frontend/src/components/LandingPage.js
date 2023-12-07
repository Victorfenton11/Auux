import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import Button from './Button';
import HomePage from './HomePage';

export default function LandingPage() {
  let defaultVotes = 2;
  let navigate = useNavigate();

  const [votesToSkip, setVotesToSkip] = useState(defaultVotes);
  const [roomCode, setRoomCode] = useState(null);

  const handleCreateRoom = async () => {
    const requestOptions = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        votes_to_skip: votesToSkip,
      }),
    };
    fetch('/api/create-room', requestOptions).then((response) => response.json()).then((data) => navigate('/room/' + data.code));
  }

  const handleClickJoin = () => {
    document.getElementById("popUp").style.display = "block";
  }

  const handleBack = () => {
    document.getElementById("popUp").style.display = "none";
  }

  const handleJoinRoom = async () => {
    const inputCode = document.getElementById("roomCode").value;
    const requestOptions = {
      method: "POST",
      headers: {"Content-Type": "application/json" },
      body: JSON.stringify({
        code: inputCode
      })
    };
    fetch('/api/join-room', requestOptions).then((response) => {
      if (response.ok) {
        navigate('/room/' + inputCode)
      } else {
        alert("Room Not Found");
      }
    }).catch((error) => {
      console.log(error);
    });
  }

  function renderLandingPage() {
    return <div className='Lobby'>
            <div className='Container'>
              <Logo />
              <Button text='Create Room' handler={handleCreateRoom}/>
              <Button text='Join Room' handler={handleClickJoin}/>
            </div>
            <div className='Container' id="popUp">
              <Logo />
              <input type="text" className="codeInput" id="roomCode" placeholder="Room Code"></input>
              <Button text='Join' handler={handleJoinRoom}/>
              <hr></hr>
              <Button text='Back' handler={handleBack}/>
            </div>
          </div>
  }

  useEffect(() => {
    async function getUserInRoom() {
      fetch('/api/user-in-room').then((response) => response.json()).then((data) => {
        setRoomCode(data.code);
      });
    }
    getUserInRoom();
  }, [roomCode]);

  return (
    <Routes>
      <Route path='/' element={roomCode ? <Navigate to={'/room/' + roomCode} replace /> : renderLandingPage()} />
      <Route path='/room/:roomCode' element={<HomePage />} />
    </Routes>
  )
}

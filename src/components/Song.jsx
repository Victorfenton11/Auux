import React from 'react'
import '../styles/Song.css'

export default function Song(props) {
  return (
    <div className='Song'>
      <img className='Cover' alt="Album Cover" src= {props.img} />
      <p className='Title'>Song Title</p>
      <p className='Title' style= {{fontSize: 0.9 + 'rem'}}>Artist</p>
      <div className='VoteContainer'>
        <img src={ require('../upvote.png') } alt="Upvote" className='Vote' style={{left: 0}}/>
        <p className='Votes'>0</p>
        <img src={ require('../downvote.png') } alt="Downvote" className='Vote' style={{borderColor: 'red'}}/>
      </div>
    </div>
  )
}

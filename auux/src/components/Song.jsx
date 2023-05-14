import React from 'react'
import '../styles/Song.css'

export default function Song(props) {
  return (
    <div className='Song'>
      <img className='Cover' alt="Album Cover" src= {props.img} />
      <p className='Title'>Song Title</p>
      <p className='Title' style= {{fontSize: 0.9 + 'rem'}}>Artist</p>
      <img src={ require('../upvote.png') } alt="Upvote" className='Vote' style={{right: 24 + '%'}}/>
      <p className='Votes'>0</p>
      <img src={ require('../downvote.png') } alt="Downvote" className='Vote' style={{margin: 'red'}}/>
    </div>
  )
}

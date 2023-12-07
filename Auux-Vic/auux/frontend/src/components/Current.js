import React from 'react'
import '../styles/Current.css'

export default function Current(props) {
  return (
    <div className='CurrentlyPlaying'>
      <p className='NowPlaying'>Now Playing</p>
      <img className='SongCover' alt="Album Cover" src= {'./logo.png'} />
      <p className='SongTitle'>Song Title</p>
      <p className='SongTitle' style= {{fontSize: 1 + 'rem'}}>Artist</p>
    </div>
  )
}

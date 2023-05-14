import React from 'react'
import '../styles/Search.css'

export default function Search() {
  return (
    <>
      <img src={require('../search.png')} alt='Search' className='SearchIcon'/>
      <input className='Search' placeholder='Search Spotify...'></input>
    </>
  )
}

import React from 'react'
import '../styles/Search.css'
import searchImg from '../search.png'

export default function Search() {
  return (
    <>
      <img src={searchImg} alt='Search' className='SearchIcon'/>
      <input className='Search' placeholder='Search Spotify...'></input>
    </>
  )
}

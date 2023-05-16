import React from 'react'
import '../styles/Logo.css'

export default function Logo() {
  return (
      <a href='/'>
        <img alt="Logo" src={require('../Auux_logo.png')} className='Logo'/>
      </a>
  )
}
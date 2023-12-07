import React from 'react'
import logoImage from '../Auux_logo.png'
import '../styles/Logo.css'

export default function Logo() {
  return (
      <a href='/'>
        <img alt="Logo" src={logoImage} className='Logo'/>
      </a>
  )
}
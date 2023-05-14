import React from 'react'
import '../styles/Button.css'

export default function MyButton(props) {
  return (
    <div className='btn'>
        <button>{props.text}</button>        
    </div>
  );
}


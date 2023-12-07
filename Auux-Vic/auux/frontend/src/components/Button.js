import React from 'react'
import '../styles/Button.css'

export default function MyButton(props) {
  return (
    <div className='btn' onClick={props.handler}>
        <button>{props.text}</button>        
    </div>
  );
}


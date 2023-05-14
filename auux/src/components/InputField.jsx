import React from 'react'
import '../styles/InputField.css'

export default function InputField(props) {
  return (
    <div className='input-field'>
        <input type={props.type} placeholder={props.placeholder} required></input>
    </div> 
  );
}

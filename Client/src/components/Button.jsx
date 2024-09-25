import React from 'react';
import './Button.css';



function Button({name,sx}) {
  return (
    <button className='button' style={sx}>{name}</button>
  )
}

export default Button

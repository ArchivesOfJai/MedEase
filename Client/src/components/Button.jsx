import React from 'react';


const defaultSx = { backgroundColor: '#2F80ED',
  color: '#FFFFFF',
  width: '150px',
  height: '40px',
  borderRadius: '99px',
  padding: '5px 30px',
  fontSize: '1.5rem',
  border: 'none',
  textAlign: 'center',
  verticalAlign: 'middle',

}

function Button({className,name,sx={},...props}) {
  return (
    <button className={className} style={{...defaultSx,...sx}} {...props}>{name}</button>
  )
}

export default Button

import React from 'react';


const defaultSx = { 
  width: 'max-content',
  borderRadius: '99px',
  padding: '10px 30px',
  border: 'none',
  textAlign: 'center',
  verticalAlign: 'middle',
  cursor: 'pointer',
}

function Button({children,className,name,sx={},...props}) {
  return (
    <button className={className} style={{...defaultSx,...sx}} {...props}>{name}{children}</button>
  )
}

export default Button

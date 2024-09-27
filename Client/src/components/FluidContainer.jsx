import React from 'react'

const defaultSx = {
  maxWidth: '1200px',  
}
function FluidContainer({children,className,sx={},...props}) {
  return (
    <div className={className} style={{...defaultSx,...sx}} {...props}>
      {children}
    </div>
  )
}

export default FluidContainer;

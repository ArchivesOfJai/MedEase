import React from 'react'

function FluidContainer({children,className,...props}) {
  return (
    <div className={`fluid-container ${className}`} {...props}>
      {children}
    </div>
  )
}

export default FluidContainer;

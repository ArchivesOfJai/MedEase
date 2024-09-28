import React from 'react'
import styled from 'styled-components';



const FluidContainer_div = styled.div`
  width: 100%;
  margin: 0 auto; 
`

function FluidContainer({children,className,sx={},...props}) {
  return (
    <FluidContainer_div className={className} style={{...sx}} {...props}>
      {children}
    </FluidContainer_div>
  )
}

export default FluidContainer;

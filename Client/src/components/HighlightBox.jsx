import React from 'react'
import styled from 'styled-components'
import Row from './Row'
import Col from './Col'
import Text from './Text'
function HighlightBox({className,sx={},number,numberSx,textSx,text,...props}) {
  const Box=styled.div`
  display:inline-flex;
  `
  return (
    <Box className={className} style={{...sx}} {...props}>
      <Row>
        <Col sx={{padding:"0",}}>
          <Text type="span" className='number' sx={numberSx}>
            {number}
          </Text>
        </Col>
        <Col sx={{padding:"0"}}>
          <Text type="span" className='text'  sx={textSx}>
            {text}
          </Text>
        </Col>
      </Row>
    </Box>
  )
}

export default HighlightBox

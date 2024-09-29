import React from "react";
import styled from "styled-components";



const Container_div = styled.div`
  width:1400px;
  margin: 0 auto;
  padding: 0 20px;
  @media (max-width: 1400px) {
    width:1200px;
  }
  @media (max-width: 1200px) {
    width:992px;
  }
  @media (max-width: 992px) {
    width:768px;
  }
  @media (max-width: 768px) {
    width:576px;
  }
  @media (max-width: 576px) {
    width:100%;
    padding: 0;
  }
  
`
function Container({ children, className,sx={},...props }) {
  return (
    <Container_div className={className} style={{...sx}} {...props}>
      {children}
    </Container_div>
  );
}

export default Container;

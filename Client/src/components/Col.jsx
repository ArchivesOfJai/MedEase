import React from "react";
import styled from "styled-components";

const DefaultCol = styled.div`
  flex-grow:1;
  flex-basis: 0;
  padding: 0 20px;
  @media (max-width: 768px) {
    padding: 0 10px;
  }
`;
function Col({ children, className, sx = {}, ...props }) {
  return (
    <DefaultCol className={`col ${className}`} style={{ ...sx }} {...props}>
      {children}
    </DefaultCol>
  );
}

export default Col;

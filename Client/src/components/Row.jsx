import React from "react";
import styled from "styled-components";

const FlexRow = styled.div`
  display: flex;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
function Row({ children, className, sx = {}, ...props }) {
  return (
    <FlexRow className={`row ${className}`} style={{ ...sx }} {...props}>
      {children}
    </FlexRow>
  );
}

export default Row;

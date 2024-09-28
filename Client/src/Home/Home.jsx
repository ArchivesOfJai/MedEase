import React from "react";
import FluidContainer from "../components/FluidContainer";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
function Home() {
  return (
    <FluidContainer id='homeIntro'>
      <Container>
        <Row>
          <Col>
            <h1>Home</h1>
          </Col>
          <Col>
            <h1>Home</h1>
          </Col>
        </Row>
      </Container>
    </FluidContainer>
  );
}

export default Home;

import React from "react";
import FluidContainer from "../components/FluidContainer";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Text from "../components/Text";
import StarIcon from "@mui/icons-material/Star";
import image1 from "../assets/image1.png";
const rated_1 = {
  display: "inline-flex",
  alignItems: "center",
  backgroundColor: "#f0f7ff",
  color: "#007bff",
  padding: "2px 16px",
  borderRadius: "20px",
  fontFamily: '"Inter", sans-serif',
  fontSize: "12px",
};

const connectingYou = {
  color: "#1E1E1E",
  fontFamily: '"Inter", sans-serif',
  fontSize: "32px",
};


const image1Sx = {
  width: "60%",
  margin:'90px 40px 60px 40px',
  borderRadius: "40px",
};

function Home() {
  return (
    <FluidContainer id="homeIntro">
      <Container>
        <Row>
          <Col sx={{ position: "relative", textAlign: "left" }}>
            <Text type="span" sx={{ ...rated_1 }}>
              <StarIcon sx={{ paddingRight: "5px", fontSize: "16px" }} />
              Rated #1 choice for healthcare appointments by users
            </Text>
            <Text type="p" sx={connectingYou}>
              Connecting You <i>to</i> better Health
            </Text>
          </Col>
          <Col>
            <img src={image1} alt="image" style={image1Sx} />
          </Col>
        </Row>
      </Container>
    </FluidContainer>
  );
}

export default Home;

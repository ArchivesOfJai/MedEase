import React from "react";
import FluidContainer from "../components/FluidContainer";
import Row from "../components/Row";
import Col from "../components/Col";
import Container from "../components/Container";
import Text from "../components/Text";
import StarIcon from "@mui/icons-material/Star";
import image1 from "../assets/image1.png";
import "./Home.css";
import Button from "../components/Button";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import HighlightBox from "../components/HighlightBox";

function Home() {
  const numberSx = {
    color: "#007bff",
    fontSize: "32px",
    fontWeight: "700",
    verticalAlign: "middle",
  };

  const textSx = {
    color: "#1E1E1E",
    fontSize: "12px",
    fontWeight: "500",
    paddingRight: "25px",
    verticalAlign: "middle",
  };
  return (
    // first section homeIntro
    <FluidContainer id="homeIntro">
      <Container>
        <Row>
          {/* text col */}
          <Col className="col1">
            <Text className="ratedtext" type="span">
              <StarIcon sx={{ fontSize: "14px", marginRight: "5px" }} />
              Rated #1 choice for healthcare appointments by users
            </Text>

            <Text type="p" className="connectingyou">
              Connecting You <i>to</i> Better Health
            </Text>

            <Text type="p" className="description">
              We're here to link you directly to improved health outcomes,
              effortlessly connecting you with the care you need.
            </Text>

            <Button className="bookconsultation-btn" name="Book Consultation" />

            <Button className="learnmore-btn" name="Learn More">
              <ArrowRightAltIcon
                sx={{
                  fontSize: "20px",
                  marginLeft: "5px",
                  verticalAlign: "middle",
                }}
              />
            </Button>
          </Col>

          {/* image col */}
          <Col sx={{position: "relative"}}>
            <img src={image1} alt="image" className="image" />

            <HighlightBox
              className="highlight-box-1"
              number={"2.650+"}
              text={"patients have trusted us"}
              numberSx={numberSx}
              textSx={textSx}
            />


            <HighlightBox
              className="highlight-box-2"
              number={"10K+"}
              text={"Hours of Patients Meetings"}
              numberSx={numberSx}
              textSx={textSx}
            />
          </Col>
        </Row>
      </Container>
    </FluidContainer>
  );
}

export default Home;

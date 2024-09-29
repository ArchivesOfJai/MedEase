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
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

function Home() {
  return (
    <FluidContainer id="homeIntro">
      <Container>
        <Row>
          <Col className='col1'>
            <Text className="ratedtext" type="span" >
              <StarIcon sx={{fontSize: "14px", marginRight: "5px"}}/>
              Rated #1 choice for healthcare appointments by users
            </Text>
            <Text type="p" className='connectingyou'>
              Connecting You <i>to</i> Better Health
            </Text>
            <Text type="p" className='description'>
            We're here to link you directly to improved health outcomes, effortlessly connecting you with the care you need.
            </Text>
            <Button className='bookconsultation-btn' name="Book Consultation"/>
            <Button className='learnmore-btn' name="Learn More">
              <ArrowRightAltIcon sx={{fontSize: "20px", marginLeft: "5px",verticalAlign: "middle"}}/>
            </Button>
          </Col>
          <Col>
            <img src={image1} alt="image" className="image" />
          </Col>
        </Row>
      </Container>
    </FluidContainer>
  );
}

export default Home;

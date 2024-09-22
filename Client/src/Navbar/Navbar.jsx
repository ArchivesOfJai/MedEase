import React from "react";
import "./Navbar.css";
import BrandNameWithLogo from "./BrandNameWithLogo";
import brandLogo from "../assets/Logo.svg";
import Container from "../Container";
function Navbar() {
  return (
    <>
      <nav className="navbar">
        <Container>
          <BrandNameWithLogo imgUrl={brandLogo} brandName="MedEase" brandNameStyle={{color: "#2F80ED"}} />
          
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
  
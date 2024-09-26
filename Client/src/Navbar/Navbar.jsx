import React from "react";
import "./Navbar.css";
import BrandNameWithLogo from "./BrandNameWithLogo";
import brandLogo from "../assets/Logo.svg";
import Container from "../components/Container";
import NavLinksContainer from "./NavLinksContainer";
import Button from "../components/Button";
function Navbar() {
  let token = localStorage.getItem("token");
  return (
    <>
      <nav className="navbar">
        <Container className={"nav-container"}>
          <BrandNameWithLogo imgUrl={brandLogo} brandName="MedEase" brandNameStyle={{color: "#2F80ED"}} />
          <NavLinksContainer/>
          <Button name={token?"Logout":"Login"} />
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
  
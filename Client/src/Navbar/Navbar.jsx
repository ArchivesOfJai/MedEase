import React from "react";
import BrandNameWithLogo from "./BrandNameWithLogo";
import brandLogo from "../assets/Logo.svg";
import Container from "../components/Container";
import NavLinksContainer from "./NavLinksContainer";
import Button from "../components/Button";
import "./Navbar.css";

const defaultNavbarSx = {
  padding: '10px 0',
}

const defaultContainerSx = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}
function Navbar() {
  let token = localStorage.getItem("token");

  return (
    <>
      <nav id="navbar" style={defaultNavbarSx}>
        <Container sx={defaultContainerSx}>
          <BrandNameWithLogo imgUrl={brandLogo} brandName="MedEase" brandNameSx={{color: "#2F80ED"}} />
          <NavLinksContainer/>
          <Button className='login-btn' name={token?"Logout":"Login"} />
        </Container>
      </nav>
    </>
  );
}

export default Navbar;
  
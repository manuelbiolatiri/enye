import React from "react";
import styled from "styled-components";
import './Header.css'
import enyelogo from "./enyelogo.png"

const Nav = styled.nav`
  padding: 0 100px;
  height: 4rem;
  background: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width:100%;
  @media (max-width: 768px) {
    width:100%;
    padding: 0 30px;
  }
`;

const Logo = styled.h1`
  font-size: 25px;
  color: #060c14;
  vertical-align: middle;
`;

const Links = styled.a`
  color: #060c14;
  text-decoration: none;

  :hover {
    text-decoration: underline;
  }
`;

const NavIcon = styled.button`
  background: none;
  cursor: pointer;
  border: none;
  outline: none;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Line = styled.span`
  display: block;
  border-radius: 50px;
  width: 25px;
  height: 3px;
  margin: 5px;
  background-color: #060c14;
  transition: width 0.4s ease-in-out;

  :nth-child(2) {
    width: ${props => (props.open ? "40%" : "70%")};
  }
`;

const Overlay = styled.div`
  position: absolute;
  height: ${props => (props.open ? "80vh" : 0)};
  width: 100vw;
  background: #fff;
  transition: height 0.4s ease-in-out;
  z-index: 1;

  @media (min-width: 769px) {
    display: none;
  }
`;

const Header = () => {

    return (
            <div className="navv">
      <Nav>
        <Logo><Links href="/" id="logo">
           <div style={{ height: 50, backgroundColor:"blue" }}><img src={enyelogo} style={{ height:"50px", width:150}} alt="website logo"/></div>
</Links></Logo>
        <NavIcon>
          <Line />
          <Line />
          <Line />
        </NavIcon>
      </Nav>
      <Overlay>
      </Overlay>
    </div>
        )
};

export default Header;
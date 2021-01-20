import React, { useState } from "react";
import styled from "styled-components";
import {Link, useHistory } from "react-router-dom";
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

const Menu = styled.ul`
  list-style: none;
  display: flex;
  width:auto;

  li {
    margin: 0px 20px;
  }

  @media (max-width: 768px) {
    display: none;
  }
`;

const Item = styled.li``;

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

const OverlayMenu = styled.ul`
  list-style: none;
  position: absolute;
  left: 45%;
  top: 27%;
  transform: translate(-50%, -50%);

  li {
    opacity: ${props => (props.open ? 1 : 0)};
    font-size: 25px;
    margin: 20px 0px;
    transition: opacity 0.4s ease-in-out;
  }

  li:nth-child(2) {
    // margin: 50px 0px;
  }
`;

const Header = () => {

  const [toggle, toggleNav] = useState(false);

    return (
            <div className="navv">
      <Nav>
        <Logo><Links href="/" id="logo">
           <div style={{ border: "2px solid red", height: 50, backgroundColor:"blue" }}><img src={enyelogo} style={{ height:"50px", width:150}} alt="website logo"/></div>
</Links></Logo>
        <Menu>
          <Item>
          <Links to="/sign_up" className="link">Register</Links>
          </Item>
          <Item>
          <Links to="/sign_in" className="link">Login</Links>
          </Item>
          <Item>
          <Links to="#footer" className="link">Contact</Links>
          </Item>
        </Menu>
        <NavIcon onClick={() => toggleNav(!toggle)}>
          <Line open={toggle} />
          <Line open={toggle} />
          <Line open={toggle} />
        </NavIcon>
      </Nav>
      <Overlay open={toggle}>
        <OverlayMenu open={toggle}>
          <Item>
          <Links href="/sign_up">Register</Links>
          </Item>
          <Item>
          <Links href="/sign_in">Login</Links>
          </Item>
          <Item>
          <Links href="/#footer">Contact</Links>
          </Item>
        </OverlayMenu>
      </Overlay>
    </div>
        )
};

export default Header;
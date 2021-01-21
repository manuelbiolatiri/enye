import React from "react";
import './Header.css'
import enyelogo from "./enyelogo.png"

const Header = () => {

    return (
      <div className="nav">
        <div className="logo">
            <div style={{ height: 50, backgroundColor:"blue" }}><img src={enyelogo} style={{ height:"50px", width:150}} alt="website logo"/></div>
        </div>
        <div className="nav-icon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    )
};

export default Header;
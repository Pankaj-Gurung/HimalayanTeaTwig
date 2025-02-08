import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";
import Nepalflag from "../../Images/nepal-flag-icon.svg?url";
import truck from "../../Images/truck.gif";
import Button from '../Button/Button'
import logo from '../../Images/logo.png'

const Navbar = (props) => {
  const {} = props;

  return (
    <>
      <div className="nav-container">
        
          <div className="top-nav">
            <span>Delivery all over Nepal!</span>{" "}
            <p>
              <img src={truck} alt="" className="truck" />
            </p>
          </div>

          <nav>
  <div className="logo"><img src={logo} alt="Logo" /></div>

  <div className="link-wrapper">
    <Link to={"/home"}>Home</Link>
    <Link to={"/shop"}>Shop</Link>
    <Link to={"/contactus"}>Contact Us</Link>
    <Link to={"/aboutus"}>About Us</Link>
  </div>

  <div className="button-wrapper">
    <Button>Login</Button>
    <Button>Signup</Button>
  </div>
</nav>


      </div>
    </>
  );
};

export default Navbar;

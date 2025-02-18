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
    <main className="nav-container">

        
          <div className="top-nav">
            <span>Delivery all over Nepal!</span>{" "}
            <p>
              <img src={truck} alt="" className="truck" />
            </p>
          </div>
          <nav>

  <Link to={'/home'}><div className="logo"><img src={logo} alt="Logo" /></div></Link>

  <div className="link-wrapper">
    <Link className="nav-links" to={"/home"} >HOME</Link>
    <Link className="nav-links" to={"/shop"}>SHOP</Link>
    <Link className="nav-links" to={"/contactus"}>CONTACT US</Link>
    <Link className="nav-links" to={"/aboutus"}>ABOUT US</Link>
  </div>

  <div className="right-link">
  <Link>ACCOUNT</Link>
  <Link>CART</Link>
  </div>
</nav>
    </main>
  );
};

export default Navbar;

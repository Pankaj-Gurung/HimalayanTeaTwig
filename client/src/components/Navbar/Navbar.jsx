import React from "react";
import {Link} from "react-router-dom";
import "./Navbar.scss";
import Nepalflag from "../../Images/nepal-flag-icon.svg?url";
import truck from "../../Images/truck.gif";

const Navbar = (props) => {
  const {} = props;

  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <div className="top-nav">
            <span>Delivery all over Nepal!</span>{" "}
            <p>
              <img src={truck} alt="" className="truck" />
            </p>
          </div>
          <nav className="nav-link-wrap">
            <Link to={"/home"}>
              Home{" "}
            </Link>
            <Link to={"/shop"}>
              Shop{" "}
            </Link>
            <Link to={"/contactus"}>
              Contact Us
            </Link>
            <Link to={"/aboutus"}>
              About Us
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;

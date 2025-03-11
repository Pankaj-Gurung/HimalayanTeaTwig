import React from "react";
import { Link } from "react-router-dom";
import "./navbar.scss";
import Nepalflag from "../../Images/nepal-flag-icon.svg?url";
import truck from "../../Images/truck.gif";
import logo from "../../Images/logo.png";
import { CgProfile } from "react-icons/cg";
import { LuShoppingCart } from "react-icons/lu";

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
      <nav className="bottom-nav">
        <Link to={"/"}>
          <div className="logo">
            <img src={logo} alt="Logo" />
          </div>
        </Link>
        <div className="link-wrapper">
          <Link className="nav-links" to={"/"}>
            HOME
          </Link>
          <Link className="nav-links" to={"/shop"}>
            SHOP
          </Link>
          <Link className="nav-links" to={"/contactus"}>
            CONTACT US
          </Link>
          <Link className="nav-links" to={"/aboutus"}>
            ABOUT US
          </Link>
        </div>
        <div className="right-link">
          <Link>
            <CgProfile size={20} />
            <span>ACCOUNT</span>
          </Link>
          <Link>
            <LuShoppingCart size={20} />
            <span>CART</span>
          </Link>
        </div>
      </nav>
    </main>
  );
};

export default Navbar;

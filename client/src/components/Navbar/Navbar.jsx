import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
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
          <nav>
            <Link to={"/home"}>
              <a>Home</a>{" "}
            </Link>
            <Link to={"/shop"}>
              <a>Shop</a>{" "}
            </Link>
            <Link>
              <a>Contact Us</a>
            </Link>
            <Link to={"/aboutus"}>
              <a>About Us</a>
            </Link>
          </nav>
        </div>

        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/shop" element={<Shop />}></Route>
          <Route path="/aboutus" element={<About />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default Navbar;

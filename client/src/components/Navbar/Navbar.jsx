import React from "react";
import { Link, Routes, Route } from "react-router-dom";
import Home from "../../pages/Home/Home";
import Shop from "../../pages/Shop/Shop";
import About from "../../pages/About/About";
import "./Navbar.scss";

const Navbar = (props) => {
  const {} = props;

  return (
    <>
      <div className="nav-container">
        <div className="nav-wrapper">
          <nav>
            <Link to={"/home"}>
              <a>Home</a>{" "}
            </Link>
            <Link to={"/shop"}>
              <a>Shop</a>{" "}
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

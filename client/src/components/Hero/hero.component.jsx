import React from "react";
import teaicon from "../../Images/smalltea-icon.png";
import heroimg101 from "../../Images/hero1.1.jpg";
import moneyicon from "../../Images/affordable-icon.png";
import handpickicon from "../../Images/handpick-icon.png";
import "./hero.scss";

const Hero = () => {
  return (
    <main className="hero-container">
      <div className="firstimg-wrapper">
        <img src={heroimg101} alt="" className="first-img101" />
        <div className="img1">
          <h1>Original Tea All the Way From Ilam</h1>
          <div className="heroicon-wrapper">
            <p>
              {" "}
              <img src={teaicon} alt="" className="hero-icon" />
              High Quality Tea
            </p>
            <p>
              <img src={moneyicon} alt="" className="hero-icon" />
              Reasonable Pricing
            </p>
            <p>
              <img src={handpickicon} alt="" className="hero-icon" />
              Hand Picked
            </p>
          </div>
        </div>
      </div>
      <div className="secondimg-wrapper"></div>
      <div className="thirdimg-wrapper"></div>
    </main>
  );
};

export default Hero;

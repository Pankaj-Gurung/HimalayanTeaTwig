import React from "react";
import Hero from "../../components/hero/hero.component";
import "./home.scss";
import { Helmet } from "react-helmet";

const Home = () => {
  return (
    <>
      <Helmet>
        <title>HTT - Home Page</title>
      </Helmet>
      <Hero />
    </>
  );
};

export default Home;

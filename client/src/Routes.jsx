import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.page";
import About from "./pages/about/about.page";
import Contactus from "./pages/contact/contactus.page";
import Privacy from "./pages/terms&conditions/privacy.page";

const AppRoutes = () => {
  return (
    <>
    <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
        <Route path="/privacy" element={<Privacy />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

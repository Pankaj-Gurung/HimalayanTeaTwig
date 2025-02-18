import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/home.page";
import Shop from "./pages/shop/shop.page";
import About from "./pages/about/about.page";
import Contactus from "./pages/contact/contactus.page";

const AppRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/home" element={<Home />}></Route>
        <Route path="/shop" element={<Shop />}></Route>
        <Route path="/aboutus" element={<About />}></Route>
        <Route path="/contactus" element={<Contactus />}></Route>
      </Routes>
    </>
  );
};

export default AppRoutes;

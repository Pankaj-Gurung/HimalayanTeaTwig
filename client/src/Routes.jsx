import React from 'react'
import {Routes, Route} from 'react-router-dom'
import Home from "./pages/Home/Home";
import Shop from "./pages/Shop/Shop";
import About from "./pages/About/About";
import Contactus from './pages/Contact/Contactus';

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
  )
}

export default AppRoutes
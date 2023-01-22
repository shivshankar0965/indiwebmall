import React from "react";
import { Outlet } from "react-router-dom";
import Slider from "../Components/First_Column_rrb/Slider";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Jewelry from "../Components/Second_Column_rrb/Jewelry1";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider/>
    <Jewelry/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Home;

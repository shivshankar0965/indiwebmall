import React from "react";
import Slider from "../Components/First_Column_rrb/Slider";
import Footer from "../Components/Footer/Footer";
import Navbar from "../Components/Navbar/Navbar";
import Jewelry from "../Components/Second_Column_rrb/Jewelry1";
import Vouchers from "./Vouchers";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Vouchers />
      <Slider />
      <Jewelry />
      <Footer />
    </div>
  );
};

export default Home;

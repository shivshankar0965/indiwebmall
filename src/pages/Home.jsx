import React from "react";
import Slider from "../Components/First_Column_rrb/Slider";
import Jewelry from "../Components/Second_Column_rrb/Jewelry1";
import Vouchers from "./Vouchers";

const Home = () => {
  return <>
    <Vouchers />
    <Slider/>
    <Jewelry/>
  </>;
};

export default Home;

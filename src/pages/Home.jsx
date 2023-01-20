import React from "react";
import Slider from "../Components/First_Column_rrb/Slider";
import JewelleryFirst from "../Components/Second_Column_rrb/JewelleryFirst";
import JewelleryFourth from "../Components/Second_Column_rrb/JewelleryFourth";
import JewellerySecond from "../Components/Second_Column_rrb/JewellerySecond";
import JewelleryThird from "../Components/Second_Column_rrb/JewelleryThird";
import Jewelry from "../Components/Second_Column_rrb/Jewelry1";

const Home = () => {
  return <div>
    <Slider/>
    <Jewelry/>
    <JewelleryFourth/>
  </div>;
};

export default Home;

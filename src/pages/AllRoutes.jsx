import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./Home";
import Admin from "./Admin";
import Products from "../Components/Products/Products";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}>"
        <Route path="products" element={<Products/>}/>
      </Route>
    </Routes>
  );
};

export default AllRoutes;

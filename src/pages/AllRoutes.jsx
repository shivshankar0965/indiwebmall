import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Admin from "./Admin";
import MoreDetails from "../pages/MoreDetails";
import VoucherDetails from "../pages/VoucherDetails";
import Home from "./Home";
import Products from "./Products";
import Sale from "../Components/First_Column_rrb/Files/Sale";
import Men from "../Components/First_Column_rrb/Files/Men";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<Admin />}></Route>

      <Route path="/:voucher_id" element={<VoucherDetails />} />
        <Route path="/:voucher_id/:id" element={<MoreDetails />} />
        <Route path="products" element={<Products/>}></Route>
        <Route path="/products/sale" element={<Sale/>}/>
        <Route path="/products/men" element={<Men/>}/>
    </Routes>
  );
};

export default AllRoutes;

import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from "./Home";
import Admin from "./Admin";
import MoreDetails from "../pages/MoreDetails";
import VoucherDetails from "../pages/VoucherDetails";
const AllRoutes = () => {
  return <>
<Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
      <Route path="/:voucher_id" element={<VoucherDetails />} />
        <Route path="/:voucher_id/:id" element={<MoreDetails />} />
    </Routes>
  </>;
};

export default AllRoutes;

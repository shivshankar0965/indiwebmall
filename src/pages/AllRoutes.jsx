import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Admin from "./Admin";
import MoreDetails from "../pages/MoreDetails";
import VoucherDetails from "../pages/VoucherDetails";
import Home from "./Home";
import Dashboard from "../Components/Dashboard/Dashboard";
import Users from "../Components/AdminUsers/Users";
const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<Admin />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Dashboard />} />
      </Route>

      <Route path="/:voucher_id" element={<VoucherDetails />} />
    </Routes>
  );
};

export default AllRoutes;

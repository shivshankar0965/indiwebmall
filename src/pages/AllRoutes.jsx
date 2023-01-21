import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Admin from "./Admin";
import VoucherDetails from "../pages/VoucherDetails";
import Home from "./Home";
import Products from "./Products";
import Sale from "../Components/First_Column_rrb/Files/Sale";
import Men from "../Components/First_Column_rrb/Files/Men";
import Accessories from "../Components/First_Column_rrb/Files/Accesssories";
import Bags from "../Components/First_Column_rrb/Files/Bags";
import Clothing from "../Components/First_Column_rrb/Files/Clothing";
import Life from "../Components/First_Column_rrb/Files/Life";
import NewArrival from "../Components/First_Column_rrb/Files/NewArrival";

import Dashboard from "../Components/Dashboard/Dashboard";
import Users from "../Components/AdminUsers/Users";
import Cart from "./Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginAdmin from "./LoginAdmin/LoginAdmin";
import PrivateRouteAdmin from "../PrivateRoute/PrivateRouteAdmin";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}></Route>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/admin" element={<PrivateRouteAdmin><Admin /></PrivateRouteAdmin>}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Dashboard />} />
      </Route>

      <Route path="/:voucher_id" element={<VoucherDetails />} />
        <Route path="products" element={<Products/>}>
          <Route path="accessories" element={<Accessories/>}/>
          <Route path="bags" element={<Bags/>}/>
          <Route path="clothing" element={<Clothing/>}/>
          <Route path="life" element={<Life/>}/>
          <Route path="men" element={<Men/>}/>
          <Route path="newarrival" element={<NewArrival/>}/>
          <Route path="sale" element={<Sale/>}/>
        </Route>

        <Route path='/cart' element = {<PrivateRoute><Cart/></PrivateRoute> } />
        <Route path='/loginadmin' element = {<><Navbar/> <LoginAdmin/> <Footer/></>} />
    </Routes>
  );
};

export default AllRoutes;

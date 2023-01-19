import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from './Login/Login';
import Signup from './Signup/Signup';
import Home from "./Home";
import Admin from "./Admin";
const AllRoutes = () => {
  return <>
<Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/" element={<Home />}></Route>
      <Route path="/admin" element={<Admin />}></Route>
    </Routes>
  </>;
};

export default AllRoutes;

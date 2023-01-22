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
import Index from "./Index";

const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Navbar /> <Home /> <Footer />
          </>
        }
      >
        {" "}
      </Route>

      <Route
        path="login"
        element={
          <>
            <Navbar /> <Login /> <Footer />
          </>
        }
      />
      <Route
        path="signup"
        element={
          <>
            <Navbar /> <Signup /> <Footer />
          </>
        }
      />
      <Route
        path="/:voucher_id"
        element={
          <>
            <Navbar />
            <VoucherDetails />
            <Footer />
          </>
        }
      />
      <Route
        path="products"
        element={
          <>
            <Navbar />
            <Products />
            <Footer />
          </>
        }
      >
        <Route
          path="accessories"
          element={
            <>
              <Navbar />
              <Accessories />
              <Footer />
            </>
          }
        />
        <Route
          path="bags"
          element={
            <>
              <Navbar />
              <Bags />
              <Footer />
            </>
          }
        />
        <Route
          path="clothing"
          element={
            <>
              <Navbar />
              <Clothing />
              <Footer />
            </>
          }
        />
        <Route
          path="life"
          element={
            <>
              <Navbar />
              <Life />
              <Footer />
            </>
          }
        />
        <Route
          path="men"
          element={
            <>
              <Navbar />
              <Men />
              <Footer />
            </>
          }
        />
        <Route
          path="newarrival"
          element={
            <>
              <Navbar />
              <NewArrival />
              <Footer />
            </>
          }
        />
        <Route
          path="sale"
          element={
            <>
              <Navbar />
              <Sale />
              <Footer />
            </>
          }
        />
      </Route>

      <Route
        path="cart"
        element={
          <PrivateRoute>
            <Cart />
          </PrivateRoute>
        }
      />
      <Route
        path="loginadmin"
        element={
          <>
            <Navbar /> <LoginAdmin /> <Footer />
          </>
        }
      />

      <Route
        path="/admin"
        element={
          <PrivateRouteAdmin>
            <Admin />
          </PrivateRouteAdmin>
        }
      >
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="orders" element={<Dashboard />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<Dashboard />} />
      </Route>
    </Routes>
  );
};

export default AllRoutes;

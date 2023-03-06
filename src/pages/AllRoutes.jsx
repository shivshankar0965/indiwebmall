import React from "react";
import { Route, Routes } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import Admin from "./Admin";
import VoucherDetails from "../pages/VoucherDetails";
import Home from "./Home";
import AdminProducts from "../Components/AdminComponents/Products/AdminProducts";
import Sale from "../Components/First_Column_rrb/Files/Sale";
import Men from "../Components/First_Column_rrb/Files/Men";
import Accessories from "../Components/First_Column_rrb/Files/Accesssories";
import Bags from "../Components/First_Column_rrb/Files/Bags";
import Clothing from "../Components/First_Column_rrb/Files/Clothing";
import Life from "../Components/First_Column_rrb/Files/Life";
import NewArrival from "../Components/First_Column_rrb/Files/NewArrival";
import JewelleryFirst from "../Components/Second_Column_rrb/JewelleryFirst";
import JewellerySecond from "../Components/Second_Column_rrb/JewellerySecond";
import JewelleryThird from "../Components/Second_Column_rrb/JewelleryThird";
import JewelleryFourth from "../Components/Second_Column_rrb/JewelleryFourth";
import Dashboard from "../Components/Dashboard/Dashboard";
import Users from "../Components/AdminUsers/Users";
import {Cart} from "../Components/Cart/Cart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import LoginAdmin from "./LoginAdmin/LoginAdmin";
import PrivateRouteAdmin from "../PrivateRoute/PrivateRouteAdmin";
import Navbar from "../Components/Navbar/Navbar";
import Footer from "../Components/Footer/Footer";
import Order from "../Components/Orders/Order";
import Products from "./Products";
import Checkout from "../Components/Cart/Checkout";
const AllRoutes = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <>
            <Home />
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
            {/* <Navbar /> */}
            <Products />
            {/* <Footer /> */}
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
        <Route
          path="earrings"
          element={
            <>
              <Navbar />
              <JewelleryFirst />
              <Footer />
            </>
          }
        />
        <Route
          path="rings"
          element={
            <>
              <Navbar />
              <JewellerySecond /> <Footer />
            </>
          }
        />
        <Route
          path="necklace"
          element={
            <>
              {" "}
              <Navbar />
              <JewelleryThird /> <Footer />
            </>
          }
        />
        <Route
          path="jewellery"
          element={
            <>
              {" "}
              <Navbar />
              <JewelleryFourth /> <Footer />
            </>
          }
        />
        <Route
          path="shoes"
          element={
            <>
              {" "}
              <Navbar />
              <NewArrival /> <Footer />
            </>
          }
        />
        <Route
          path="items"
          element={
            <>
              {" "}
              <Navbar />
              <JewelleryFirst /> <Footer />
            </>
          }
        />
        <Route
          path="cosmetics"
          element={
            <>
              {" "}
              <Navbar />
              <JewellerySecond /> <Footer />
            </>
          }
        />
      </Route>

      <Route
        path="cart"
        element={
          <PrivateRoute>
            <Navbar />
            <Cart />
            <Footer />
          </PrivateRoute>
        }
      />
      <Route
        path="checkout"
        element={
          <PrivateRoute>
            <Navbar />
            <Checkout />
            <Footer />
          </PrivateRoute>
        }
      />
      <Route
        path="loginadmin"
        element={
          <>
            {/* <PrivateRouteAdmin> */}
            <Navbar /> <LoginAdmin /> <Footer />
            {/* </PrivateRouteAdmin> */}
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
        <Route path="orders" element={<Order />} />
        <Route path="users" element={<Users />} />
        <Route path="products" element={<AdminProducts />} />
      </Route>
      <Route path="/:voucher_id" element={<VoucherDetails />} />
    </Routes>
  );
};

export default AllRoutes;

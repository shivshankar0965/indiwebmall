import React, { useState, useEffect } from "react";
import img from "../../Assets/indiwebmall_logo.png";
import styles from "./navbar.module.css";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import "./navbarPopup.css";
import { useContext } from "react";
import { AuthContext } from "./../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { RxDragHandleDots2 } from "react-icons/rx";
import axios from "axios";
import { useSelector } from "react-redux";
import { useToast } from "@chakra-ui/react";

const Navbar = () => {
  const { logoutUser } = useContext(AuthContext);
  const toast = useToast();
  // all toasts are here
  const wrongEmail = () => {
    toast({
      title: "Wrong Email or Password.",
      description: "Please enter right email or password!!!",
      status: "error",
      duration: 9000,
      isClosable: true,
    });
  };
  const loginSuccess = () => {
    toast({
      title: "Login Successful.",
      description: "Thank You For Login!!!",
      status: "success",
      duration: 9000,
      isClosable: true,
    });
  };
  // all toasts are here
  // console.log("auth", isAuth);
  let authentication = localStorage.getItem("auth");
  // console.log(authentication);

  const Show_Login_Page = () => {
    document.querySelector(".popup").classList.add("active");
  };

  const Hide_Login_Page = () => {
    document.querySelector(".popup").classList.remove("active");
  };

  const getCartitem = () => {
    return axios.get(`http://localhost:8080/cart`);
  };

  // navbar Login start

  const [email, setemail] = useState("");
  const [password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);
  const [display, setDisplay] = useState("displayNone");
  const [display1, setDisplay1] = useState("displayNone1");
  const [display2, setDisplay2] = useState("displayNone2");
  const [display3, setDisplay3] = useState("displayNone3");
  const [cartLength, setCartLength] = useState(0);

  const { cart } = useSelector((store) => store.cart);
  console.log("cart:", cart);

  useEffect(() => {
    getCartitem().then((d) => setCartLength(d.data.length));
  }, []);

  const submitLogin = async () => {
    setload(true);
    // console.log(load);
    try {
      let res = await fetch(`https://indiweb-api-json.vercel.app/users`);
      let data = await res.json();
      // console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].password === password) {
          Auth = true;
          localStorage.setItem("auth", true);
          localStorage.setItem("name", data[i].name);
          loginUser(data[i].name);
          // console.log(data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        // alert("Please enter right email or password!");
        wrongEmail();
      } else {
        // alert("Login Successfull!");
        loginSuccess();
        navigate("/");
      }
      // console.log(Auth);
    } catch (error) {
      setload(false);

      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  //navbar Login End

  const manageDisplay = () => {
    // setDisplay('displayNone');
    if (display === "display") {
      return setDisplay("displayNone");
    } else {
      return setDisplay("display");
    }
  };

  const manageDisplay1 = () => {
    // setDisplay('displayNone');
    if (display1 === "display1") {
      return setDisplay1("displayNone1");
    } else {
      return setDisplay1("display1");
    }
  };

  const manageDisplay2 = () => {
    // setDisplay('displayNone');
    if (display2 === "display2") {
      return setDisplay2("displayNone2");
    } else {
      return setDisplay2("display2");
    }
  };

  const manageDisplay3 = () => {
    // setDisplay('displayNone');
    if (display3 === "display3") {
      return setDisplay3("displayNone3");
    } else {
      return setDisplay3("display3");
    }
  };

  return (
    <div
      style={{
        background: "rgb(250, 250, 245)",
        paddingBottom: "10px",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
      }}
    >
      {/* navbar for mobile 0-414px */}
      <div className={styles.mobileOnly}>
        {/* logo */}
        <div className={styles.logoDiv}>
          <Link to="/">
            <img
              src="./iwm_logo_without_bg.png"
              alt="Logo"
              className={styles.logoImg}
            />
          </Link>
        </div>
        {/* 3 section */}
        <div className={styles.threeSection}>
          <div onClick={manageDisplay1} className={styles.product}>
            <RxDragHandleDots2 className={styles.log} />
            Products
          </div>
          <div className={styles.input2}>
            <input
              className={styles.input1}
              type="text"
              placeholder="Search for a Product, Brand or Category"
            />
          </div>
          <div onClick={manageDisplay} className={styles.product}>
            <RxDragHandleDots2 className={styles.log} />
            dashBoard
          </div>
        </div>
        <div className={display}>
          <div style={{ border: "1px solid transparent", padding: "10px" }}>
            <img
              onClick={manageDisplay}
              style={{ width: "12px", marginLeft: "90%" }}
              src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
              alt="close"
            />
            <p onClick={manageDisplay} style={{ cursor: "pointer" }}>
              <Link to="/cart">My Order</Link>
            </p>
            <p onClick={manageDisplay} style={{ cursor: "pointer" }}>
              <Link to="/cart">My Cart : {cart.length}</Link>
            </p>
            <p onClick={manageDisplay} style={{ cursor: "pointer" }}>
              <Link onClick={manageDisplay} to="/login">
                {authentication ? (
                  <div>
                    😎{localStorage.getItem("name")}😎
                    <span
                      onClick={logoutUser}
                      style={{
                        color: "white",
                        background: "lightgray",
                        padding: "5px",
                        marginLeft: "15px",
                        borderRadius: "10px",
                      }}
                    >
                      Logout
                    </span>
                  </div>
                ) : (
                  "Sign up/Login"
                )}
              </Link>
            </p>
          </div>
        </div>

        <div className={display1}>
          <div style={{ border: "1px solid transparent", padding: "10px" }}>
            <img
              onClick={manageDisplay1}
              style={{ width: "12px", marginLeft: "90%" }}
              src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
              alt="close"
            />
            <p onClick={manageDisplay1} style={{ cursor: "pointer" }}>
              <span onClick={manageDisplay2}>
                <a href="#">Products</a>
              </span>
            </p>
            <p onClick={manageDisplay1} style={{ cursor: "pointer" }}>
              <span onClick={manageDisplay3}>
                <a href="#">Gift Cards</a>
              </span>
            </p>
          </div>
        </div>
        {/* products */}
        <div onClick={manageDisplay2} className={display2}>
          <img
            onClick={manageDisplay2}
            style={{ width: "12px", marginLeft: "90%" }}
            src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
            alt="close"
          />
          <h3
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "rgb(251,81,0)",
              fontWeight: "600",
            }}
          >
            Products
          </h3>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/products/accessories">Accessories</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/products/bags">Bags</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/products/clothing">Clothes</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/products/cosmetics">Cosmetics</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/products/products">Items</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/products/sale">Sale</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/products/shoes">Shoes</Link>
          </p>
        </div>
        {/* gift cards */}
        <div onClick={manageDisplay3} className={display3}>
          <img
            onClick={manageDisplay3}
            style={{ width: "12px", marginLeft: "90%" }}
            src="https://cdn-icons-png.flaticon.com/128/9068/9068699.png"
            alt="close"
          />
          <h3
            style={{
              textAlign: "center",
              fontSize: "12px",
              color: "rgb(251,81,0)",
              fontWeight: "600",
            }}
          >
            Gift Cards
          </h3>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/jockey">Jockey</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/levis">Levis</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/pantaloons">Pantaloons</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/unitedcolors">United Colors</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/biba">Biba</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/indianterrain">Indian Terrain</Link>
          </p>
          <p style={{ marginLeft: "10px" }}>
            <Link to="/decathlon">Decathlon</Link>
          </p>
        </div>
      </div>

      {/* navbar for tab & comuter */}
      <div className={styles.cancel}>
        <div className={styles.empty}></div>
        <div>
          <div className={styles.logoDiv} style={{ padding: "10px" }}>
            <Link to="/">
              <img
                src={"./iwm_logo_without_bg.png"}
                alt="Logo"
                className={styles.logoImg}
              />
            </Link>
          </div>
        </div>
        <div>
          <div className={styles.mainDiv}>
            <div className={styles.category}>
              <div>
                <HamburgerIcon className={styles.logo} w={6} h={5} />
                <div className={styles.shopby} style={{ fontWeight: "600" }}>
                  <a href="#">Shop by Category</a>
                  <ul>
                    <li>
                      <a className={styles.dropMenu} href="#">
                        <span className={styles.products}>Products</span>{" "}
                      </a>
                      <ul>
                        <li>
                          <span
                            style={{
                              fontWeight: "700",
                              fontSize: "20px",
                              color: "rgb(255, 81, 0)",
                            }}
                            className={styles.productssmall}
                          >
                            Products
                          </span>
                        </li>
                        <li>
                          <a href="/products/accessories">
                            <span className={styles.productssmall}>
                              Accessories
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/bags">
                            <span className={styles.productssmall}>Bags</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/clothing">
                            <span className={styles.productssmall}>
                              Clothes
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/cosmetics">
                            <span className={styles.productssmall}>
                              Cosmetics
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/products">
                            <span className={styles.productssmall}>Items</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/sale">
                            <span className={styles.productssmall}>Sale</span>
                          </a>
                        </li>
                        <li>
                          <a href="/products/shoes">
                            <span className={styles.productssmall}>Shoes</span>
                          </a>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <a className={styles.dropMenu} href="#">
                        <span className={styles.giftcard}>Gift Cards</span>{" "}
                      </a>
                      <ul>
                        <li>
                          <span
                            style={{
                              fontWeight: "700",
                              fontSize: "20px",
                              color: "rgb(255, 81, 0)",
                            }}
                            className={styles.productssmall}
                          >
                            Gift Cards
                          </span>
                        </li>
                        <li>
                          <a href="/jockey">
                            <span className={styles.giftcardsmall}>Jockey</span>
                          </a>
                        </li>
                        <li>
                          <a href="/levis">
                            <span className={styles.giftcardsmall}>Levis</span>
                          </a>
                        </li>
                        <li>
                          <a href="/pantaloons">
                            <span className={styles.giftcardsmall}>
                              Pantaloons
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/unitedcolors">
                            <span className={styles.giftcardsmall}>
                              United Colors
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/biba">
                            <span className={styles.giftcardsmall}>Biba</span>
                          </a>
                        </li>
                        <li>
                          <a href="/indianterrain">
                            <span className={styles.giftcardsmall}>
                              Indian Terrain
                            </span>
                          </a>
                        </li>
                        <li>
                          <a href="/decathlon">
                            <span className={styles.giftcardsmall}>
                              Decathlon
                            </span>
                          </a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className={styles.search}>
              <input
                className={styles.input}
                type="search"
                placeholder="Search for a Product, Brand or Category"
              />
              <Search2Icon className={styles.searchicon} />
            </div>
            <div className={styles.orderBagLogin}>
              <div className={styles.order}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2666/2666505.png"
                  width={20}
                  alt="icon"
                />
                <div className={styles.login}>
                  {" "}
                  <Link to="/cart">My Orders</Link>
                </div>
              </div>
              <div className={styles.bag}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                  width={20}
                  alt="logo"
                />
                <div className={styles.login}>
                  <Link to="/cart">My Cart : {cart.length}</Link>{" "}
                </div>
              </div>
              <div className={styles.login1}>
                <img
                  src="https://cdn-icons-png.flaticon.com/128/2584/2584602.png"
                  width={20}
                  alt="icon"
                />

                {localStorage.getItem("name") ? (
                  <>
                    <div
                      style={{
                        color: "rgb(251,81,0)",
                        fontWeight: "600",
                        fontSize: "16px",
                      }}
                      className={styles.login}
                    >
                      {localStorage.getItem("name")}
                    </div>
                    <span
                      onClick={logoutUser}
                      style={{
                        color: "red",
                        padding: "5px",
                        fontWeight: 400,
                        background: "rgb(245,229,206)",
                        borderRadius: "5px",
                        cursor: "pointer",
                      }}
                    >
                      logout
                    </span>
                  </>
                ) : (
                  <div
                    style={{ cursor: "pointer" }}
                    className={styles.login}
                    onClick={Show_Login_Page}
                  >
                    {" "}
                    Log In/Sign Up
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popup login component*/}

      <div className="popup">
        <div className="close-btn" onClick={Hide_Login_Page}>
          &times;
        </div>
        <div className="form">
          <h2>Log in</h2>
          <div className="form-element">
            <label for="email">Email</label>
            <input
              id="email"
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
              required
            />
            <span>It should be a valid email address!</span>
          </div>
          <div className="form-element">
            <label for="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Enter Your Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              pattern="^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$"
            />
            <span>
              Password should be 8-15 characters and include at least 1 letter,
              1 number and 1 special character!
            </span>
          </div>
          <div className="form-element">
            <input id="checkbox" type="checkbox" />
            <label for="checkbox">Remember me</label>
          </div>
          <div className="form-element" onClick={Hide_Login_Page}>
            <button onClick={submitLogin}>Log in</button>
          </div>
          <div>
            <p>
              Don't have an account ?{" "}
              <Link
                to="/signup"
                style={{ color: "rgb(255, 81, 0)" }}
                onClick={Hide_Login_Page}
              >
                Sign up!
              </Link>
            </p>
          </div>
          <div>
            <p>
              Are you an admin ?{" "}
              <Link
                to="/loginadmin"
                style={{ color: "rgb(255, 81, 0)" }}
                onClick={Hide_Login_Page}
              >
                Click Here!
              </Link>
            </p>
          </div>
          <div className="form-element">
            <a href="#">Forget Password</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

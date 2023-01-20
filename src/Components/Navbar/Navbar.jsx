import React, { useState } from "react";
import img from "../../Assets/indiwebmall_logo.png";
import styles from "./navbar.module.css";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import "./navbarPopup.css";
import { useContext } from "react";
import { AuthContext } from "./../../Context/AuthContext";
import { Link, useNavigate } from "react-router-dom";
import { RxDragHandleDots2 } from "react-icons/rx";

const Navbar = () => {
  const { name, isAuth,logoutUser } = useContext(AuthContext);

  const Show_Login_Page = () => {
    document.querySelector(".popup").classList.add("active");
  };

  const Hide_Login_Page = () => {
    document.querySelector(".popup").classList.remove("active");
  };

  // navbar Login start

  const [email, setemail] = useState("");
  const [Password, setPassword] = useState("");
  const [load, setload] = useState(false);
  const navigate = useNavigate();
  const { loginUser } = useContext(AuthContext);

  const submitLogin = async () => {
    setload(true);
    console.log(load);
    try {
      let res = await fetch(`https://mockserver-fhbg.onrender.com/users`);
      let data = await res.json();
      console.log(data);
      let Auth = false;
      for (let i in data) {
        if (data[i].email === email && data[i].Password === Password) {
          Auth = true;
          loginUser(data[i].name);
          console.log(data[i].name);
          break;
        }
      }
      setload(false);
      if (Auth === false) {
        alert("Please enter right email or password!");
      } else {
        alert("Login Successfull!");
        navigate("/");
      }
      console.log(Auth);
    } catch (error) {
      setload(false);

      console.log(error);
    }
    setemail("");
    setPassword("");
  };

  //navbar Login End

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
            <img src={img} alt="Logo" className={styles.logoImg} />
          </Link>
        </div>
        {/* 3 section */}
        <div className={styles.threeSection}>
          <div className={styles.product}><RxDragHandleDots2 className={styles.log}/>Products</div>
          <div className={styles.input2}><input className={styles.input1} type="text" placeholder="Search for a Product, Brand or Category" /></div>
          <div className={styles.product}><RxDragHandleDots2 className={styles.log}/>dashBoard</div>
        </div>
      </div>

      {/* navbar for tab & comuter */}
      <div className={styles.cancel}>
      <div className={styles.empty}></div>
      <div>
        <div className={styles.logoDiv}>
          <Link to="/">
            <img src={img} alt="Logo" className={styles.logoImg} />
          </Link>
        </div>
      </div>
      <div>
        <div className={styles.mainDiv}>
          <div className={styles.category}>
            <div>
              <HamburgerIcon className={styles.logo} w={6} h={5} />
              <div
                className={styles.shopby}
                style={{ fontWeight: "600" }}
              >
                <a href="#">Shop by Category</a>
                <ul>
                  <li >
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
                        <a href="#">
                          <span className={styles.productssmall}>Fashion</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.productssmall}>
                            Grocery & Home Decor
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.productssmall}>
                            Jewellery
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.productssmall}>
                            Furniture & Electronics
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.productssmall}>
                            Entertainment
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.productssmall}>
                            Beauty & Health
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.productssmall}>
                            Travel & Holidays
                          </span>
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
                        <a href="#">
                          <span className={styles.giftcardsmall}>Fashion</span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.giftcardsmall}>
                            Grocery & Home Decor
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.giftcardsmall}>
                            Jewellery
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.giftcardsmall}>
                            Furniture & Electronics
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.giftcardsmall}>
                            Entertainment
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.giftcardsmall}>
                            Beauty & Health
                          </span>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <span className={styles.giftcardsmall}>
                            Travel & Holidays
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
                My Orders
              </div>
            </div>
            <div className={styles.bag}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
                width={20}
                alt="logo"
              />
              <div className={styles.login}>
                {" "}
                the Bag
              </div>
            </div>
            <div className={styles.login1}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2584/2584602.png"
                width={20}
                alt="icon"
              />
              {isAuth ? (
                <>
                <div style={{color:'rgb(251,81,0)',fontWeight:'600',fontSize:'16px'}} className={styles.login}>{name}</div><span onClick={logoutUser} style={{color:'red',padding:'5px',fontWeight:400,background:'rgb(245,229,206)',borderRadius:'5px',cursor:'pointer'}}>logout</span></>
              ) : (
                <div style={{cursor:'pointer'}}
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
              type="text"
              placeholder="Enter Your Email"
              value={email}
              onChange={(e) => setemail(e.target.value)}
            />
          </div>
          <div className="form-element">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter Your Password" value={Password}
            onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-element">
            <input type="checkbox" />
            <label for="password">Remember me</label>
          </div>
          <div className="form-element" onClick={Hide_Login_Page}>
            <button onClick={submitLogin} >Log in</button>
          </div>
          <div>
            <p>
              if you don't have account{" "}
              <Link
                to="/signup"
                style={{ color: "rgb(255, 81, 0)" }}
                onClick={Hide_Login_Page}
              >
                Sign up
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

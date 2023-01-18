import React from "react";
import img from "../../Assets/indiwebmall_logo.png";
import styles from "./navbar.module.css";
import { HamburgerIcon, Search2Icon } from "@chakra-ui/icons";
import './navbar1.css'

const Navbar = () => {

  const Show_Login_Page = ()=>{
      document.querySelector(".popup").classList.add("active")
  }

  const Hide_Login_Page = () =>{
    document.querySelector(".popup").classList.remove("active")
  }

  return (
    <div
      style={{
        background: "white",
        paddingBottom: "10px",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
      }}
    >
      <div className={styles.empty}></div>
      <div>
        <div className={styles.logoDiv}>
          <img src={img} alt="Logo" className={styles.logoImg} />
        </div>
      </div>
      <div style={{}}>
        <div className={styles.mainDiv}>
          <div className={styles.category}>
            <div>
              <HamburgerIcon className={styles.logo} w={6} h={5} />
              <div
                className={styles.shopby}
                style={{ fontWeight: "600", padding: "2%" }}
              >
                <a href="#">Shop by Category</a>
                <ul>
                  <li>
                    <a href="#">
                      <span className={styles.products}>Products</span>{" "}
                    </a>
                    <ul>
                      <li>
                        
                          <span style={{fontWeight:'700',fontSize:'20px',color:'rgb(255, 81, 0)'}} className={styles.productssmall}>Products</span>
                        
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
                    <a href="#">
                      <span className={styles.giftcard}>Gift Cards</span>{" "}
                    </a>
                    <ul>
                    <li>
                        
                        <span style={{fontWeight:'700',fontSize:'20px',color:'rgb(255, 81, 0)'}} className={styles.productssmall}>Gift Cards</span>
                      
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
                src="https://cdn-icons-png.flaticon.com/128/839/839860.png"
                width={20}
              ></img>
              <div
                style={{ fontSize: "14px", marginLeft: "5%", fontSize: "13px" }}
              >
                {" "}
                My Orders
              </div>
            </div>
            <div className={styles.bag}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/2838/2838895.png"
                width={20}
                height={10}
              ></img>
              <div
                style={{ fontSize: "14px", marginLeft: "5%", fontSize: "13px" }}
              >
                {" "}
                No Items in the Bag
              </div>
            </div>
            <div className={styles.login}>
              <img
                src="https://cdn-icons-png.flaticon.com/128/158/158417.png"
                width={20}
                alt='icon'
              ></img>
              <div onClick={Show_Login_Page}
                style={{ fontSize: "14px", marginLeft: "5%", fontSize: "13px",border:'1px solid' }}
              >
                {" "}
                Log In/Sign Up
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* popup login component*/}

      <div className="popup">
        <div className="close-btn" onClick={Hide_Login_Page}>&times;</div>
        <div className="form">
          <h2>Log in</h2>
          <div className="form-element">
            <label for="email">Email</label>
            <input type="text" placeholder="Enter Your Email"/>
          </div>
          <div className="form-element">
            <label for="password">Password</label>
            <input type="password" placeholder="Enter Your Password"/>
          </div>
          <div className="form-element">
            <input type="checkbox"/>
            <label for="password">Remember me</label>
          </div>
          <div className="form-element">
            <button>Log in</button>
          </div>
          <div>
            <p>if you don't have account <a href="#" style={{color:'rgb(255, 81, 0)'}}>Sign up</a></p>
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

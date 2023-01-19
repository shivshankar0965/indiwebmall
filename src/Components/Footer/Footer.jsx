import React from "react";
import styles from "./footer.module.css";
import { BsHeart } from "react-icons/bs";
import { BsArrowUpRightSquare } from "react-icons/bs";
import { BsStar } from "react-icons/bs";
import { BsBagCheck } from "react-icons/bs";

const Footer = () => {
  return (
    <div>
      <div className={styles.paraContainer}>
        <h3 className={styles.heading1}>
          Paytm Mall - India’s Leading Online Shopping Experience, Brought to
          You by Paytm
        </h3>
        <p className={styles.para1}>
          Online shopping with Paytm Mall is quick, convenient and trouble-free.
          You can shop for the desired product right from the comfort of your
          home and get them delivered straight to your doorstep.
        </p>

        <p className={styles.para1}>
          Browse Paytm Mall and get access to over 65 million products ranging
          from smartphones, tablets to laptops, sarees, kurtas & kurtis to
          t-shirts, sneakers, sport shoes to sandals, earrings, watches to
          fitness bands, chimneys, cookware to gas stoves, dairy products, baby
          products to makeup kits and many more.
        </p>

        <h3 className={styles.heading2}>
          What are we offering on Paytmmall.com?
        </h3>

        <p className={styles.para1}>
          Paytm Mall strives hard to make your online shopping a more pleasant
          and cost-effective experience by providing the top quality products at
          the best price rates in India. Our collection of products consist of
          electronic appliances, clothes, grocery, home and kitchen products,
          backpacks, automobiles, books and stationery, to name a few.
        </p>
        <p className={styles.para1}>
          The super value bazaar offers an extensive range of grocery products
          like daily food staples, ready to cook food, high on nutrition food,
          beauty, make-up, personal care, health, baby care products and many
          more. Also take a look at the latest Automobile section that consists
          of cars, bikes, scooters, sports bikes, accessories, riding gear and
          automotive care.
        </p>
        <p className={styles.para1}>
          Shop by categories, check out all the available deals, limited period
          offers, cashback offers, seasonal sales, and there is so much more to
          make your online shopping experience enjoyable & gratifying!
        </p>

        <h3 className={styles.heading2}>
          Benefits of shopping on Paytmmall.com
        </h3>

        <p className={styles.para1}>
          <span className={styles.bold}>User-Friendly:</span> Leading online
          shopping experience in India which is simple and faster to load. Shop
          on the go and get the products delivered in just a few easy clicks.
        </p>

        <p className={styles.para1}>
          <span className={styles.bold}>Safe & Secure Shopping:</span>You need
          not worry about your account credentials or personal details.
        </p>
        <p className={styles.para1}>
          Each and every transaction at Paytm Mall is securely processed and you
          can be rest assured that your money is in safe hands.
        </p>
        <p className={styles.para1}>
          <span className={styles.bold}>Check Out Closely:</span>View products of your choice in detail with clear images and thorough descriptions before buying.
        </p>
        <p className={styles.para1}>
          <span className={styles.bold}>Multiple Payment Options:</span>Choose a payment option of your choice i.e. Credit/Debit Cards, Netbanking and UPI.
Use Paytm Wallet for quick checkouts & hassle-free payments
        </p>
        <p className={styles.para1}>
          <span className={styles.bold}>Paytm Postpaid Services:</span>Now, you can buy today and pay next month with Paytm-ICICI Bank Postpaid.
        </p>
        <p className={styles.para1}>
          <span className={styles.bold}>Order History:</span>All your orders show up at one place, you can track them or repeat them with ease.
Trouble-free returns, track request & replacement of your orders
        </p>
        <p className={styles.para1}>
          <span className={styles.bold}>24x7 Customer Care:</span> For all your queries and concerns regarding your shopping orders, head over to paytmmall.com/care or call us at 01204606060 anytime
        </p>
        <p className={styles.para1}>
        The products paired with amazing deals are a topping on the cake that no one would want to miss. Paytm Mall World Store offers access to imported products ranging from beauty and personal care, watches, jewellery and so much more that too at exclusive price rates.
        </p>
        <p className={styles.para1}>
        Paytm Mall presents benefits like faster delivery with easy returns and payment options. Moreover, you can also take delight in online shopping with cash on delivery (COD) option as & when needed.
        </p>
      </div>
      <div className={styles.boxContainer}>
        <div className={styles.eachBox}>
          <div className={styles.logo}><BsArrowUpRightSquare style={{fontSize:'130%'}}/></div>
          <div className={styles.caption}>24x7 Help</div>
          <div className={styles.desc}>Need Help? <span className={styles.orange}>Click Here</span> . You can also talk to us on 0120 4606060 to resolve your query.</div>
        </div>

        <div className={styles.eachBox}>
          <div className={styles.logo}><BsHeart style={{fontSize:'130%'}}/></div>
          <div className={styles.caption}>Paytm Trust</div>
          <div className={styles.desc}>Your money is yours! All refunds come with no question asked guarantee.</div>
        </div>

        <div className={styles.eachBox}>
          <div className={styles.logo}><BsStar style={{fontSize:'130%'}}/></div>
          <div className={styles.caption}>100% Assurance</div>
          <div className={styles.desc}>At Paytm, we provide 100% assurance. If you have any issue, your money is immediately refunded. Sit back and enjoy your shopping.</div>
        </div>

        <div className={styles.eachBox}>
          <div className={styles.logo}><BsBagCheck style={{fontSize:'130%'}}/></div>
          <div className={styles.caption}>Paytm Mall Promise</div>
          <div className={styles.desc}>Products with this tag are quality checked, and shipped the same day from certified warehouses. So you get the right product, faster.</div>
        </div>
      </div>
      <div className={styles.empty}></div>
      <div className={styles.smalldesc}>Cashback would be added as Paytm Cash, which is One97 Communications Ltd loyalty program. It can be used to pay for goods & services sold by merchants that accept ‘Pay with Paytm’</div>
      <div className={styles.empty}></div>

      <div className={styles.optionContainer}>
        <div className={styles.optionDiv}>
          <div>About Us</div>
          <div>Partner with us</div>
          <div>Terms & Condition</div>
          <div>Blog</div>
          <div>Media</div>
          <div>24x7 Help</div>
          <div>Grivence policy</div>
          <div>Bug bounty</div>
          <div>Return/Cancellation policy</div>
        </div>
        <div className={styles.logoDiv}>
          <img src="https://cdn-icons-png.flaticon.com/128/831/831278.png" alt="apple" className={styles.logo} />
          <img src="https://cdn-icons-png.flaticon.com/128/888/888882.png" alt="windows" className={styles.logo}/>
          <img src="https://cdn-icons-png.flaticon.com/128/226/226770.png" alt="android" className={styles.logo}/>
          <div style={{color:'gray',marginLeft:'10px',marginRight:'10px'}}> | </div>
          <img src="https://cdn-icons-png.flaticon.com/128/733/733579.png" alt="twitter" className={styles.logo}/>
          <img src="https://cdn-icons-png.flaticon.com/128/5968/5968764.png" alt="" className={styles.logo}/>
          <img src="https://cdn-icons-png.flaticon.com/128/1409/1409946.png" alt="" className={styles.logo}/>
          <img src="https://cdn-icons-png.flaticon.com/128/1384/1384060.png" alt="" className={styles.logo}/>
        </div>
      </div>
{/* most lower div */}
      <div className={styles.optionContainer1}>
        <div className={styles.optionDiv1}>
        <img src="https://cdn-icons-png.flaticon.com/128/349/349221.png" alt="apple" className={styles.logo1} />
          <img src="https://cdn-icons-png.flaticon.com/128/1651/1651898.png" alt="windows" className={styles.logo1}/>
          <img src="https://cdn-icons-png.flaticon.com/128/9334/9334540.png" alt="android" className={styles.logo1}/>
          <img src="https://cdn-icons-png.flaticon.com/128/349/349228.png" alt="twitter" className={styles.logo1}/>
          <img src="https://cdn-icons-png.flaticon.com/128/714/714867.png" alt="" className={styles.logo1}/>
          <img src="https://cdn-icons-png.flaticon.com/128/3347/3347459.png" alt="" className={styles.logo1}/>
          <img src="https://cdn-icons-png.flaticon.com/128/179/179431.png" alt="" className={styles.logo1}/>
          <img src="https://cdn-icons-png.flaticon.com/128/3345/3345090.png" alt="" className={styles.logo1}/>
          <img src="https://cdn-icons-png.flaticon.com/128/349/349230.png" alt="" className={styles.logo1}/>
        </div>
      </div>

    </div>
  );
};

export default Footer;

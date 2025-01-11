import companyname from "../../../assets/home-page/name.png";
import Tshirt from "../../../assets/home-page/tshirt.png";

import Tshirt2 from "../../../assets/home-page/tshirt2.png";

import style from "./home-component.module.css";
import { Link } from "react-router";

function HomeComponent() {
  return (
    <>
      <img src={companyname} alt="company name" className={style.companyname} />

      <div className={style.first_tshirt}>
        <img src={Tshirt} alt="tshirt" />
      </div>

      <div className={style.header}>
       <Link to={'/'}> <span>HOME </span></Link>
        <span>ABOUT US</span>
        <span>CONTACT US</span>
      </div>
      <div className={style.merch}>
        <span>MERCH </span>
      </div>

      <div className={style.merch_quote}>
        <span className={style.quote_style}>
          {" "}
          Refresh your wardrobe with our collection of easygoing, stylish
          <br />
          clothing. Whether you’re looking for everyday basics or something a
          <br />
          little bolder, we’ve got you covered. Simple, comfortable, and always
          <br />
          on trend. shop now and find your new favorites.
        </span>
      </div>
      <div className={style.custom}>
        <span>CUSTOM</span>
      </div>

      <div className={style.custom_quote}>
        <span className={style.quote_style}>
          Create your own style with our custom clothing options. Design unique{" "}
          <br />
          pieces that are all about you, whether it’s a personalized graphic tee
          <br />
          custom hoodie, or one of a kind accessory. Express yourself with
          colors
          <br /> designs, and details that are all your own. Start customizing
          today and <br /> wear something that’s as unique as you are!
        </span>
      </div>
      <div className={style.second_tshirt}>
        <img src={Tshirt2} alt="tshirt" />
      </div>

      <div className={style.navbar}>
        <Link to={'/login'}>
        <span>
          <button
            style={{
              width: "8.13vw",
              height: "3.72vh",
              background: "#3A513F99",
              color: "white",
              borderRadius: "5px",
              opacity: "0px",
              border: "none",
            }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = "0 0 10px 2px black")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
          >
            Login
          </button>
        </span></Link>
       <Link to={'/signup'}> <span>
          {" "}
          <button
            style={{
              width: "8.13vw",
              height: "3.72vh",
              background: "#3A513F99",
              color: "white",
              borderRadius: "10px",
              opacity: "0px",
              border: "none",
            }}
            onMouseEnter={(e) =>
              (e.target.style.boxShadow = "0 0 10px 2px black")
            }
            onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
          >
            Sign Up
          </button>
        </span></Link>
      </div>
    </>
  );
}

export default HomeComponent;

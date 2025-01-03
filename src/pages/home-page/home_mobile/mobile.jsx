import style from "./mobile.module.css";
import first_tshirt from "../../../assets/home-page/tshirt.png";
import second_tshirt from "../../../assets/home-page/tshirt2.png";
import Mobile_header from "../../common/head-background/mobile/header-background-mobile";
const Mobileview = () => {
  return (
    <>
    <Mobile_header/>
      <div className={style.first_image}>
        <img
          src={first_tshirt}
          alt="tshirt"
          style={{ width: "45.7vw", height: "20.7vh" }}
        />
      </div>

      <div className={style.merch}>
        <span className={style.quote_header}>MERCH</span> <br />
        <span className={style.quote}>
          REFRESH YOUR WARDROBE WITH EASYGOING, STYLISH CLOTHES. FROM EVERYDAY
          BASICS TO BOLDER TRENDS, WE'VE GOT YOU COVERED. SHOP NOW AND FIND YOUR
          NEW FAVORITES.
        </span>
      </div>
      <div className={style.custom}>
        <span className={style.quote_custom}>CUSTOM</span> <br />
        <span className={style.quote}>
          CREATE YOUR OWN UNIQUE STYLE WITH OUR PREMIUM QUALITY MATERIAL CUSTOM
          CLOTHING DESIGNS, PERSONALIZED TEES, HOODIES, & ACCESSORIES. EXPRESS
          YOURSELF. START CUSTOMIZING TODAY!{" "}
        </span>
      </div>

      <div className={style.second_image}>
        <img
          src={second_tshirt}
          alt="second tshirt"
          style={{ width: "45.7vw", height: "20.7vh" }}
        />
      </div>
    </>
  );
};

export default Mobileview;

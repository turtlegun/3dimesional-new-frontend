import style from "./common.module.css";
import compyname from "../../../assets/home-page/name.png";
import { useEffect, useState } from "react";
import arrow from "../../../assets/choose/back_arrow.svg";
import back_arrow from "../../../assets/sign-up/mobile_arrow.svg";
import { Link } from "react-router";

function Common_verification() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handlresize = () => {
      const width = document.documentElement.clientWidth;
      if (width >= 1440) {
        setScreenSize("desktop");
      } else {
        setScreenSize("tablet or phone");
      }
    };
    handlresize();
    window.addEventListener("resize", handlresize);

    return () => {
      window.removeEventListener("resize", handlresize);
    };
  }, []);
  return (
    <>
      <div className={style.common_container}>
        {screenSize === "desktop" && (
          <div className={style.header}>
            <img
              src={compyname}
              alt="company name"
              style={{ width: "10.42vw", height: "4.29vh" }}
              loading="lazy"
            />
          </div>
        )}
      <Link to={'/'}>
        {screenSize==='desktop' ? (
  <div className={`w-[3.125] h-[4.394] top-[11.328vh] left-[0.833] absolute p-[0.97vh] gap-[0.694vw] 
    flex justify-center items-center`}>
  <img src={arrow} alt="back arrow"/>
  </div>
        ) :  (<div className={`tablet:w-[2.93vw] tablet:h-[2.196vh] tablet:top-[36.011vh] tablet:left-[32.422vw] tablet:absolute
          mobile:w-[6.818vw] mobile:h-[3.138vh] mobile:top-[34.313vh] mobile:left-[9.091vw] mobile:p-[0.294vh] mobile:absolute`}>
        <img src={back_arrow} alt="back arrow"/>
        </div>)}
</Link>

        <div className={`absolute w-[27.78vw] h-[11.46vh] top-[44.24vh] left-[15.42vw]

 tablet:w-[29.297vw] tablet:h-[6.440vh] tablet:top-[22.398vh] tablet:left-[35.352vw] tablet:absolute
          tablet:flex tablet:justify-center tablet:items-center

        mobile:absolute mobile:w-[68.182vw] mobile:h-[9.206vh] mobile:top-[14.952vh] mobile:left-[15.909vw] 
        mobile:flex mobile:justify-center mobile:items-center
         `}>
          <img src={compyname} alt="company name" />
        </div>
      </div>
    </>
  );
}
export default Common_verification;

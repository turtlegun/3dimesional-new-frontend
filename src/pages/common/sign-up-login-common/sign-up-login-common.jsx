import style from "./style.module.css";
import compyname from "../../../assets/home-page/name.webp";
import google from "../../../assets/home-page/google3.webp";
import { Link } from "react-router";
import { useEffect, useState } from "react";

function Signup_login_common() {
  const [screenSize, setScreenSize] = useState("desktop");
  const [widthandheigth, setwidthandheight] = useState({
    width: "1.67vw",
    height: "2.34vh",
  });

  useEffect(() => {
    const handlerize = () => {
      const width = document.documentElement.clientWidth;

      if (width >= 1440) {
        setScreenSize("desktop");

        setwidthandheight({
          width: "1.67vw",
          height: "2.34vh",
        });
      } else if (width > 440) {
        setScreenSize("tablet");

        setwidthandheight({
          width: "1.2vw",
          height: "2vh",
        });
      } else {
        setScreenSize("mobile");

        setwidthandheight({
          width: "4vw",
          height: "3vh",
        });
      }
    };

    handlerize();

    window.addEventListener("resize", handlerize);

    return () => {
      window.removeEventListener("resize", handlerize);
    };
  }, []);

  const handlegoogle_signup = async () => {
    try {
      console.log("clicked");
      window.location.href = "http://localhost:3000/api/auth/google";
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className={`w-[100vw] h-[100vh] ${style.common_container}`}>
        <div className={`w-[100vw] h-[8.3vh] top-[0vh] ${style.header}`}>
          {screenSize === "desktop" && (
            <img
              src={compyname}
              alt="company name"
              style={{ objectFit: "cover" }}
              loading="lazy"
            />
          )}
        </div>
        <div
          className={`w-[27vw] h-[11.46vh] top-[44.24vh] left-[15.42vw] ${style.middle_content}`}
        >
          <img src={compyname} alt="company name" loading="lazy" />
        </div>

        <div
          className={`w-[25vw] h-[4.88vh] top-[82.91vh] left-[62.15vw] ${style.google_athuentication}`}
          onClick={handlegoogle_signup}
        >
          <span className={`${style.signup_text}`}>SIGN UP WITH GOOGLE</span>
          <span>
            <img
              src={google}
              loading="lazy"
              alt="google icon"
              style={{
                width: widthandheigth.width,
                height: widthandheigth.height,

                marginLeft: "2vw",
              }}
            />
          </span>
        </div>

        <Link to={"/home"} style={{ textDecoration: "none" }}>
          <button 
            className={`absolute w-[10.76vw] h-[3.91vh] top-[75.1vh] left-[69.24vw] ${style.skip}`}
          >
            SKIP NOW
          </button>
        </Link>
      </div>
    </>
  );
}

export default Signup_login_common;

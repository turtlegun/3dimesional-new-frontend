import React, { lazy, useState } from "react";
import style from "./signup.module.css";
import validation from "./validation";
import axiosInstance from "../../../axios-config";
import Error_page from "../common/error-page/error";
import arrow from "../../assets/choose/back_arrow.svg";
import { Link } from "react-router";
import { useEffect } from "react";
import back_arrow from "../../assets/sign-up/mobile_arrow.svg";
const Country_code=lazy(()=>import('./country-code/country-code'))
const Signup_login_common = lazy(() =>
  import("../common/sign-up-login-common/sign-up-login-common")
);
function Signup() {
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handlerize = () => {
      const width = document.documentElement.clientWidth;
      if (width <= 440) {
        setScreenSize("mobile");
      } else if (width >= 1440) {
        setScreenSize("desktop");
      } else {
        setScreenSize("tablet");
      }
    };
    handlerize();
    window.addEventListener("resize", handlerize);
  }, []);

  const [isfocused, setIsfocused] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
  });

  const [server_error, setServer_error] = useState("");
  const [isfailure, setIsfailure] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
  });
  const [placeholder, setplaceholder] = useState({
    name: "USERNAME",
    phone: "PHONE NUMBER",
    email: "EMAIL",
    password: "PASSWORD",
  });

  const [form_values, setForm_values] = useState({
    name: "",
    phone: "",
    country_code:"+91",
    email: "",
    password: "",
  });

  const handleform = async () => {
    setIsfailure({
      name: false,
      phone: false,
      email: false,
      password: false,
    });
    try {
      console.log(form_values);
      const result = validation(form_values);
      if (!result) {
        throw new Error("something wrong went with validation");
      }
      const response = await axiosInstance.post(
        "/signup/user-create",
        form_values
      );

      setForm_values({
        name: "",
        phone: "",
        email: "",
        password: "",
      });
    } catch (error) {
      if (error.type === "validation") {
        if (error.name === "all") {
          setIsfailure({
            name: true,
            phone: true,
            email: true,
            password: true,
          });
        } else {
          setIsfailure((prev) => ({ ...prev, [error.name]: true }));
         
        }
      }
      if (error.name === "AxiosError") {
        console.log(error.response.data.error.details);
        const error_data = error.response.data.error.details;
        setServer_error(error_data);
      }
    }
  };
  const handlechange = (e) => {
    const { name, value } = e.target;
    setForm_values((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <>
      <div>
        <Signup_login_common />
        {screenSize === "desktop" && (
          <div
            className={`absolute w-[10.63vw] h-[6.54vh] top-[10.25vh] left-[4.79vw] flex text-center ${style.page_header}`}
          >
            SIGNUP
          </div>
        )}
        <div
          className={`absolute w-[19.51vw] h-[10.05vh] top-[6.11vh] left-[64.86vw] flex justify-center items-center text-center ${style.main_header}`}
        >
          {screenSize === "desktop" ? (
            <>
              {" "}
              HEY!
              <br />
              GLAD TO HAVE YOU WITH US.{" "}
            </>
          ) : (
            <>REGISTER</>
          )}
        </div>

        <Link to={"/"}>
          <div
            className={`absolute  w-[3.13vw] h-[4.39vh] top-[11.33vh] left-[0.83vw] ${style.image_conatiner} `}
          >
            {screenSize === "desktop" ? (
              <img src={arrow} alt="back arrow" loading="lazy" />
            ) : (
              <img src={back_arrow} alt="back arrow" loading="lazy" />
            )}
          </div>
        </Link>

        <div
          className={`absolute w-[29.93vw] h-[57.07vh] top-[16.12vh] left-[59.65vw] rounded-[0.69vw] border-2 border-[rgba(244,245,249,0.25)]
 flex flex-col items-center justify-center gap-[0.29vw]  ${style.input_container}
  `}
        >
          <label
            htmlFor="name"
            className={`${
              isfocused.name
                ?screenSize==='desktop' ? "translate-x-[-8.3vw] translate-y-[0vh] opacity-100"
                : screenSize==='tablet' ? "translate-x-[-12.3vw] translate-y-[0vh] opacity-100 ":
             "translate-x-[-29.3vw] translate-y-[0vh] opacity-100 "   : "translate-x-[-8.3vw] translate-y-[0.98vh] opacity-0 "
            } transition-all duration-300 ease-in-out'} `}
          >
            USERNAME
          </label>
          <input
            type="text"
            placeholder={placeholder.name}
            onClick={() => {
              setplaceholder((prev) => ({ ...prev, name: "" }));
              setIsfocused((prev) => ({ ...prev, name: true }));
            }}
            
            onChange={handlechange}
            name="name"
          />
          <span style={{ opacity: isfailure.name ? 1 : 0 }}>
            NAME MUST BE AT LEAST 3 CHARACTERS LONG
          </span>

          <label
            htmlFor="phone"
            className={`${
              isfocused.phone
                ? screenSize==='desktop' ? "translate-x-[-9.3vw] translate-y-[0vh] opacity-100"
               :screenSize==='tablet' ?  "translate-x-[-14.1vw] translate-y-[0vh] opacity-100"
               :"translate-x-[-32.9vw] translate-y-[0vh] opacity-100"  : "translate-x-[-9.3vw] translate-y-[0.98vh] opacity-0"
            } transition-all duration-300 ease-in-out'}`}
          >
            PHONE
          </label>
          <Country_code placeholder={placeholder} setIsfocused={setIsfocused} setplaceholder={setplaceholder} handlechange={handlechange} setForm_values={setForm_values}/>
        
       
          <span style={{ opacity: isfailure.phone ? 1 : 0 }}>
            PHONE NUMBER SHOULD BE VALID
          </span>

          <label
            htmlFor="email"
            className={`${
              isfocused.email
                ?screenSize==='desktop' ? "translate-x-[-9.3vw] translate-y-[0vh] opacity-100"
               : screenSize==="tablet" ? "translate-x-[-14.3vw] translate-y-[0vh] opacity-100" 
              :"translate-x-[-33.6vw] translate-y-[0vh] opacity-100"  : "translate-x-[-9.3vw] translate-y-[0.98vh] opacity-0"
            } transition-all duration-300 ease-in-out'}`}
          >
            EMAIL
          </label>
          <input
            type="email"
            placeholder={placeholder.email}
            onClick={() => {
              setplaceholder((prev) => ({ ...prev, email: "" }));
              setIsfocused((prev) => ({ ...prev, email: true }));
            }}
            
            onChange={handlechange}
            name="email"
          />
          <span style={{ opacity: isfailure.email ? 1 : 0 }}>
            EMAIL SHOULD BE VALID
          </span>

          <label
            htmlFor="password"
            className={`${
              isfocused.password
                ?screenSize==="desktop" ? "translate-x-[-8.3vw] translate-y-[0vh] opacity-100"
               :screenSize==="tablet" ? "translate-x-[-12.5vw] translate-y-[0vh] opacity-100" 
               :"translate-x-[-29.7vw] translate-y-[0vh] opacity-100" : "translate-x-[-8.3vw] translate-y-[0.98vh] opacity-0"
            } transition-all duration-300 ease-in-out'}`}
          >
            PASSWORD
          </label>
          <input
            type="password"
            placeholder={placeholder.password}
            onClick={() => {
              setplaceholder((prev) => ({ ...prev, password: "" }));
              setIsfocused((prev) => ({ ...prev, password: true }));
            }}
            onChange={handlechange}
            name="password"
          />
          <span style={{ opacity: isfailure.password ? 1 : 0 }}>
            PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG,CONTAIN <br />
            AT LEAST 1 DIGIT1 ALPHABET, AND 1 SPECIAL SYMBOL.
          </span>

          <button
            className={` bg-[#161515] border-[#F4F5F940] border-2 w-[15.08vw] h-[3.91vh] rounded-[0.69vw] text-[#F4F5F940]`}
            onClick={handleform}
          >
            CREATE ACCOUNT
          </button>
        </div>

        {server_error && (
          <Error_page
            server_error={server_error}
            setServer_error={setServer_error}
          />
        )}
      </div>
    </>
  );
}
export default Signup;

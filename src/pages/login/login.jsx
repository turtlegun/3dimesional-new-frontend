import style from "./login.module.css";
import arrow from "../../assets/choose/back_arrow.svg";
import mobile_arrow from "../../assets/sign-up/mobile_arrow.svg";
import { Link } from "react-router";
import { lazy, useEffect, useState } from "react";
const Signup_login_common=lazy(()=>import('../common/sign-up-login-common/sign-up-login-common'))
function Login() {
  const [screenSize, setScreenSize] = useState("desktop");
  const [formvalue,setformValues]=useState({
    username:'',
    password:''
  })
  const[placeholder,setplaceholder]=useState({
    username:'USERNAME',
    password:'PASSWORD'
  })
  const[formstate,setformstate]=useState({
    username:false,
    password:false
  })
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
  return (
    <>
      <Signup_login_common />
      <Link to={"/"}>
        <div className={`absolute w-[3.13vw] h-[4.41vh] top-[11.33vh] left-[0.83vw] ${style.back_arrow}`}>
          {screenSize === "desktop" ? (
            <img src={arrow} alt="back arrow" loading="lazy"  style={{objectFit: "cover"}} />
          ) : (
            <img src={mobile_arrow} alt="back arrow" loading="lazy"  style={{objectFit: "cover"}} />
          )}
        </div>
      </Link>
  
      <div className={`absolute w-[8.54vw] h-[6.53vh] top-[10.23vh] left-[4.79vw] ${style.heading}`}>
      {screenSize === "desktop" ? "LOGIN" : "WELCOME BACK"}
       
      </div>
  
      <div className={`absolute w-[29.93vw] h-[41.41vh] top-[23.44vh] left-[59.64vw] ${style.login_container} `}>
        {screenSize === "desktop" && (
 
     <div className={`absolute w-[22.22vw] h-[4.49vh] top-[5.04vh] left-[4.54vw] ${style.container_header}`}>
            PLEASE ENTER YOUR USER NAME AND PASSWORD
          </div>
        )}

        <div className={`absolute w-[22.22vw] h-[20vh] top-[10.5vh] left-[4.4vw] ${style.input_conatiner}`}>
          <label style={{color:'white'}} className={formstate.username ? style.clicked : ""}>USERNAME</label>
          <input type="text" className={style.input} placeholder={placeholder.username} required onClick={()=>{setformstate((prev) => ({ ...prev, username: true }));
        setplaceholder((prev)=>({...prev,username:''}));
        }}/>
          <label  className={formstate.password ? style.clicked : ""}> PASSWORD</label>
          <input type="text" className={style.input} placeholder={placeholder.password} onClick={()=>{setformstate((prev) => ({ ...prev, password: true }));
        setplaceholder((prev)=>({...prev,password:''}));
        }} />
        </div>

        <button className={`absolute w-[15.1vw] h-[3.91vh] top-[32.7vh] left-[8.1vw] ${style.proccessed}`}>LOGIN</button>
      </div>
    </>
  );
}

export default Login;

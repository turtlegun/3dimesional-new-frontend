import style from "./style.module.css";
import compyname from "../../../assets/home-page/name.png";
import google from '../../../assets/home-page/google3.png'
import { Link } from "react-router";
import axiosInstance from "../../../../axios-config";

function Signup_login_common() {
  const handlegoogle_signup=async()=>{
    try{
      console.log("clicked")
      window.location.href = "http://localhost:3000/api/auth/google";
      console.log(response)
    }catch(error){
console.log(error)
    }
  }
  return (
    <>
      <div className={style.common_container}>
        <div className={style.header}>
          <img
            src={compyname}
            alt="company name"style={{width: "10.42vw",height: "4.29vh",
            }}
          />
        </div>
        <div className={style.middle_content}
        >
            <img src={compyname} alt="company name" />
        </div>

        <div className={style.google_athuentication} onClick={handlegoogle_signup} >
<span className={style.signup_text}>SIGN UP WITH GOOGLE</span>
<span><img src={google} alt="google icon" style={{width:"1.67vw",height:"2.34vh",marginLeft:"2vw"}}/></span>
        </div>
        <div className={style.skip}><Link to={'/home'} style={{textDecoration:"none"}}><span>SKIP FOR NOW</span> </Link></div>
      </div>
    </>
  );
}
export default Signup_login_common;

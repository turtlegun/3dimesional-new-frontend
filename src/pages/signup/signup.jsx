import React, { lazy, useState } from "react";
import style from "./signup.module.css";
import validation from "./validation";
import axiosInstance from "../../../axios-config";
import Error_page from "../common/error-page/error";

const Signup_login_common = lazy(() =>
  import("../common/sign-up-login-common/sign-up-login-common")
);
function Signup() {
  const [isfocused, setIsfocused] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
  });

  const[server_error,setServer_error]=useState('')
  const [isfailure, setIsfailure] = useState({
    name: false,
    phone: false,
    email: false,
    password: false,
  });
  

  const [form_values, setForm_values] = useState({
    name: "",
    phone: "",
    email: "",
    password: "",
  });

  const handleform = async (e) => {
    e.preventDefault();
    setIsfailure({
        name: false,
        phone: false,
        email: false,
        password: false,
      });
    try {
        console.log(form_values)
        const result=validation(form_values)
        if(!result){
            throw new Error("something wrong went with validation")
        }
        const response=await axiosInstance.post('/signup/user-create',form_values)
        console.log(response,"response")

        setForm_values({
            name: "",
            phone: "",
            email: "",
            password: "", 
        })
    } catch (error) {
  
      if(error.type==="validation"){
        if(error.name==="all"){
            setIsfailure({
                name: true,
                phone: true,
                email: true,
                password: true,
              });
             
        }else{
            setIsfailure((prev)=>({...prev,[error.name]:true}))
            setError_message(error.message)
        }
      }
      if(error.name==='AxiosError'){
        console.log(error.response.data.error.details)
        const error_data=error.response.data.error.details
        setServer_error(error_data)

      }
     
   }
 
  };
const handlechange=(e)=>{
    const {name,value}=e.target
    setForm_values((prev)=>({...prev,[name]:value,}))
}

  return (
    <>
      <div>
        <Signup_login_common />

        <form className={style.input_container} onSubmit={handleform}>
          <label
            htmlFor="username"
            className={`${style.label} ${isfocused.name ? style.clicked : ""}`}
          >
            NAME
          </label>
          <input
            type="text"
            required
            onClick={() => setIsfocused((prev) => ({ ...prev, name: true }))}
            placeholder="NAME"
            name="name"
            onChange={handlechange}
            value={form_values.name}
            style={{color:'black'}}
          />
          <span className={`${isfailure.name ? style.error:style.error_not}`}>
          NAME MUST BE AT LEAST 3 CHARACTERS LONG
          </span>
          <label
            htmlFor="phone"
            className={`${style.label} ${isfocused.phone ? style.clicked : ""}`}
          >
            PHONE NUMBER
          </label>
          <input
            type="text"
            required
            onClick={() => setIsfocused((prev) => ({ ...prev, phone: true }))}
            placeholder="PHONE NUMBER"
            name="phone"
            value={form_values.phone}
            onChange={handlechange}
            style={{color:'black'}}
          />
    <span className={`${isfailure.phone ? style.error:style.error_not}`}> 
    PHONE NUMBER SHOULD BE VALID
    </span>
          <label
            htmlFor="email"
            className={`${style.label} ${isfocused.email ? style.clicked : ""}`}
          >
            EMAIL
          </label>
          <input
            type="email"
            required
            onClick={() => setIsfocused((prev) => ({ ...prev, email: true }))}
            placeholder="EMAIL"
            name="email"
            onChange={handlechange}
            style={{color:'black'}}
            value={form_values.email}
          />
          <span className={`${isfailure.email ? style.error:style.error_not}`}>
          EMAIL SHOULD BE VALID
          </span>
          <label
            htmlFor="password"
            className={`${style.label} ${
              isfocused.password ? style.clicked : ""
            }`}
          >
            PASSWORD
          </label>
          <input
            type="password"
            required
            onClick={() =>
              setIsfocused((prev) => ({ ...prev, password: true }))
            }
            placeholder="PASSWORD"
            name="password"
            onChange={handlechange}
            style={{color:'black'}}
            value={form_values.password}
          />
           <span className={`${isfailure.password ? style.error:style.error_not}`}>
           PASSWORD MUST BE AT LEAST 8 CHARACTERS LONG,<br/>
           CONTAIN AT LEAST 1 DIGIT1 ALPHABET,<br/>
            AND 1 SPECIAL SYMBOL.
           </span>
          <button type="submit"> CREATE ACCOUNT </button>
        </form>

    {server_error &&(
 <Error_page server_error={server_error} setServer_error={setServer_error}/>
    )}   
      </div>
    </>
  );
}
export default Signup;

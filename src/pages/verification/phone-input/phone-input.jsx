import { useEffect, useState } from "react"
import Common_verification from "../common/common"
import style from './style.module.css'
import phone_validation from "./phone-validation"
import axiosInstance from "../../../../axios-config"
import Error_page from "../../common/error-page/error"

const Phone_input=()=>{
const [placeholder,setplaceholder]=useState('PHONE NUMBER')  
const[clicked,setclicked]=useState(false)
const[phone,setphone]=useState('')
const [error,seterror]=useState(false)
const [server_error,setserver_error]=useState('')
const [screenSize,setScreenSize]=useState('desktop')

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

const handleSubmit=async()=>{
    try{

        const queryParams = new URLSearchParams(window.location.search);
        const name = queryParams.get('name');
        console.log(name)
        const phone_valid=phone_validation(phone)
        if(!phone_valid){
            throw new Error("phone number should be valid")
        }
        console.log(phone_valid)
        const response=await axiosInstance.patch(`/auth/phone-update?name=${name}`,{phone})
        if(response.status===200){
            sessionStorage.setItem('phone',JSON.stringify({phone:phone}))
        }
        console.log(response)
        setphone('')
    }
    catch(error){
    console.log(error)
        if(error.type==="validation"){
            seterror(true)
            console.log("validation")
        }
        if(error.name==='AxiosError'){
            const error_data=error.response.data.error.message
            setserver_error(error_data)
        }
    }
}
    return(
        <>

        <Common_verification/>

        {screenSize==='desktop' &&(
 <div className={`absolute w-[8.542vw] h-[6.641vh] top-[10.254vh] left-[4.792vw] flex text-center ${style.main_header}`}>
 LOGIN
</div>
          )}  

        <div className={` absolute w-[29.93vw] h-[35.45vh] top-[32.23vh] left-[59.65vw] rounded-[0.4vw] border-[1px]
            border-solid border-[#F4F5F940] tablet:border-none tablet:w-[35.1562vw] tablet:[14.655vh] 
            tablet:left-[2vw] mobile:border-none ${style.main_conatiner}`}>

            
            {screenSize ==='desktop' &&(
   <div className={`absolute w-[22.22vw] h-[4.49vh] top-[5.01vh] left-[4.54vw] flex text-center
    justify-center items-center 
         ${style.inside_input }`}>
    PLEASE ENTER YOUR
    PHONE NUMBER 
      </div>
            )}
     
       
          <div className={`absolute w-[25.22vw] h-[16.1vh] left-[3vw] top-[8vh] flex flex-col items-center 
            justify-center ${style.input_conatiner}`}>
            <label  className={` ${clicked ? style.clicked : ""}`}>PHONE NUMBER</label>
        <input type="text" placeholder={placeholder} 
        value={phone}
        onClick={()=>(
            setplaceholder(""),
            setclicked(true)
            
            )} onChange={(e)=>(setphone(e.target.value))}/>
        <span className={error ? style.input_error :""}> PLEASE ENTER A VALID PHONE NUMBER</span>    
        </div>


        <button className={`${style.submit_button} w-[15.07vw] h-[3.91vh] top-[26.98vh] left-[8.08vw] absolute 
        border-solid border-[1px] border-[#F4F5F940] rounded-[0.4vw] outline-none bg-[ #161515]
        `} onClick={handleSubmit}>SUBMIT</button>
        </div>
       {server_error && (<Error_page server_error={server_error} setServer_error={setserver_error} redirect={'redirect'}/>)} 
        </>
    )
}
export default Phone_input
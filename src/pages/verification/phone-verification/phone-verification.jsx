import { useEffect, useState } from "react";
import Common_verification from "../common/common"
import Desktop_Phone_Verification from "./desktop/desktop";

const Phone_verification=()=>{
const [screensize,setScreenSize]=useState('')
    useEffect(() => {
        const handlerize = () => {
          const width = document.documentElement.clientWidth;
          
          if (width >= 1440) {
 
            setScreenSize("desktop");
          } else if (width > 440) {

            setScreenSize("tablet");
          } else {
 
            setScreenSize("mobile");
          }
        };
    
        handlerize();
    
        window.addEventListener("resize", handlerize);
    
    
        return () => {
          window.removeEventListener("resize", handlerize);
          
        };
      }, []);

    return(
        <>
        <Common_verification/>   
      <Desktop_Phone_Verification/>    
        </>
    )
}
export default Phone_verification
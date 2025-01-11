import { useEffect, useState } from "react";
import style from "./style.module.css";

const Desktop_Phone_Verification = () => {
  const [phone, setPhone] = useState("7025046703");
  const [otp, setOtp] = useState(["", "", "", "", ""]);
  const [timeleft, setTimeleft] = useState(30);

  const [screensize,setScreenSize]=useState('')
    useEffect(() => {
        const handlerize = () => {
  
          const width = document.documentElement.clientWidth;
            let screen=""
          if (width >= 1440) {
 
            screen='desktop'
          } else if (width > 440) {

            screen='tablet'
          } else {
 
            screen='mobile';
          }
          if(screen !==screensize){
            setScreenSize(screen)
          }
        };
        let settimeout
        handlerize();
        const debounse=()=>{
          clearTimeout(settimeout)
          settimeout=setTimeout(handlerize,200)
          
        }

        window.addEventListener("resize", debounse);
    
    
        return () => {
          window.removeEventListener("resize", debounse);
          
        };
      }, [screensize]);

  useEffect(() => {
    if (timeleft > 0) {
      const timer = setInterval(() => {
        setTimeleft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    }
  }, [timeleft]);

  const handlechange=(e,index)=>{
    const value=e.target.value
    if(/[^0-9]/.test(value)) return
    setOtp((prev)=>{
        const updateotp=[...prev]
         updateotp[index]=value
         return updateotp
    })
  }
const handleverify=()=>{
    
}
  return (
    <>
  
      <div>
        

      {screensize==='desktop' &&(
     <div className={`absolute w-[30.83vw] h-[6.54vh] top-[10.25vh] left-[4.79vw]  ${style.header}`}>
     PHONE VERIFICATION
    </div> 
    )}

        <div className={`absolute w-[29.931vw] h-[66.601vh] top-[16.699vh] left-[59.653vw] 
                rounded-[0.694vw]  border-[#F4F5F940] border-solid border-[1px] tablet:border-none 
                mobile:border-none
                ${style.verification_container}`}>
  
          <div className={`absolute w-[17.22vw] h-[6.84vh] top-[3.8vh] left-[6.68vw] flex justify-center items-center
          text-[2.22vw] tablet:w-[18.16vw] tablet:h-[5.13vh] tablet:top-[0vh] tablet:left[4.92vw]
          tablet:text-[2.34vw] mobile:w-[42.27vw] mobile:h-[7.32vh] mobile:top-[2vh] mobile:left-[14vw] mobile:text-[4.45vw]
             ${style.container_header}`}>
         VERIFY YOUR PHONE NUMBER
          </div>
    
          <div className={`absolute w-[10.63vw] h-[4.79vh] top-[13.98vh] left-[10.38vw]  flex flex-col
            text-center  items-center text-[1.09vw] mobile:text-[3.15vw]  ${style.phone_number_showing}`}>
          
              SEND OTP TO <span className={` text-[#4063F0BF] text-[1.39vw] mobile:text-[3.15vw]  `}>{phone}</span>
        
          </div>
    
          <button className={`absolute w-[8.33vw] h-[3.42vh] top-[21.7vh] left-[11.49vw] border-[#f4f5f9] 
            border-[1px] border-[solid] bg-[#161515] outline-none text-[1.39vw] cursor-pointer rounded-[0.6vw]
            mobile:w-[27.27vw] mobile:h-[3.66vh] mobile:text-[2.64vw] mobile:rounded-[2.12vw]  mobile:top-[18.7vh]
            mobile:left-[20.95vw] 
            ${style.send_button}`}>SEND</button>

       
          <div className={`absolute w-[24.58vw] h-[2.44vh] top-[28.04vh] left-[2.86vw] flex text-center
          justify-center items-center text-[1.39vw] 
          tablet:absolute tablet:w-[27.54vw] tablet:h-[1.83vh] tablet:top-[17.26vh] tablet:left-[0.23vw]
          mobile:text-[2.64vw] mobile:w-[51.36vw] mobile:h-[2.62vh] mobile:top-[24.99vh] mobile:left-[8.92vw]
            ${style.otp_header}`}>
            ENTER YOUR OTP CODE HERE
          </div>


          <div className={`absolute w-[24.58vw] h-[6.86vh] flex justify-center items-center  gap-[0.6944vw] top-[33.02vh] 
            left-[3.2vw]
            tablet:absolute tablet:w-[27.54vw] tablet:h-[4.83vh] tablet:top-[20.26vh] tablet:left-[0.23vw]
            ${style.otp_container} `}>
            {otp.map((_,index)=>(
                <input
                key={index}
                className={`${style.otp_input} `}
                type="text"
                maxLength="1"
                onChange={(e)=>(handlechange(e,index))}
                />
            ))}
          </div>
          
          <div className={`${style.timer} absolute w-[3.19vw] h-[2.44vh] top-[40vh] left-[14.03vw] ext-[0.89vw]
          tablet:absolute tablet:w-[4.00vw] tablet:h-[1.83vh] tablet:top-[27.89vh] tablet:left-[12.05vw]
          mobile:w-[9.32vw] mobile:h-[2.61vh] mobile:top-[37vh] mobile:left-[30.03vw]
          `}>
          00:{timeleft}
          </div>
         
          <div className={`${style.resend_header} w-[14.17vw] h-[2.44vh] top-[46.18vh] left-[8.57vw] absolute text-[1.09vw]
          flex justify-center items-center
          tablet:absolute  tablet:w-[17.38vw] tablet:h-[1.83vh] tablet:top-[30.45vh] tablet:left-[5.31vw] tablet:text-[1.29vw]
          mobile:w-[40.45vw] mobile:h-[2.61vh] mobile:text-[2.64vw] mobile:top-[41vh] mobile:left-[14.57vw]
          `}>
            DIDN'T RECEIVE YOUR OTP
          </div>


          <div className={`absolute w-[5.35vw] h-[2.44vh] top-[52.55vh] left-[13.01vw] cursor-pointer text-[1.09vw]
            tablet:absolute tablet:w-[5.27vw] tablet:h-[1.83vh] tablet:top-[33.02vh] tablet:left-[11.36vw]
            mobile:w-[54px] mobile:h-[25px] mobile:text-[2.84vw] mobile:top-[46vh] mobile:left-[28.01vw]
            ${style.resend}`}>
            RESEND
          </div>
          <button className={`absolute w-[12.85vw] h-[4.88vh] top-[59.88vh] left-[9.26vw] text-[1.39vw] bg-[#161515] text-[#F4F5F940] 
            rounded-[0.6vw] outline-none border border-[#F4F5F9] 

            tablet:absolute tablet:w-[18.07vw] tablet:h-[3.66vh] tablet:top-[37.76vh] tablet:left-[5.02vw]
            mobile:w-[42.05vw] mobile:h-[5.23vh] mobile:rounded-[1.12vw] mobile:text-[2.64vw] mobile:top-[50.65vh] mobile:left-[12.76vw]
            ${style.verify}`} onClick={handleverify}>
            VERIFY
          </button>
        </div>
      </div>
    </>
  );
};
export default Desktop_Phone_Verification;

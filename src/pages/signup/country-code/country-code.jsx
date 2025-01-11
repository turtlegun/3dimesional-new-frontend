import usa from "../../../assets/countries/usa.svg";
import aus from "../../../assets/countries/australia.svg";
import canada from "../../../assets/countries/canada.svg";
import china from "../../../assets/countries/china.svg";
import russia from "../../../assets/countries/russia.svg";
import uk from "../../../assets/countries/uk.svg";
import afgan from "../../../assets/countries/afgan.svg";
import japan from '../../../assets/countries/japan.svg';
import brazil from '../../../assets/countries/brazil-flag.svg';
import italy from '../../../assets/countries/italy.svg';
import south_africa from '../../../assets/countries/south-africa.svg';
import mexico from '../../../assets/countries/mexico.svg';
import drop_down from "../../../assets/countries/drop_down.svg";
import { useState } from "react";
import style from './style.module.css'


const Country_code = ({
  placeholder,
  setIsfocused,
  setplaceholder,
  handlechange,
  setForm_values
}) => {
  const countryOptions = [
    { label: "+1", value: "+1", flag: usa },
    { label: "+44", value: "+44", flag: uk },
    { label: "+1", value: "+1", flag: canada },
    { label: "+61", value: "+61", flag: aus },
    { label: "+86", value: "+86", flag: china },
    { label: "+7", value: "+7", flag: russia },
    { label: "+93", value: "+93", flag: afgan },
    { label: "+81", value: "+81", flag: japan },
    { label: "+55", value: "+55", flag: brazil },
    { label: "+39", value: "+39", flag: italy },
    { label: "+27", value: "+27", flag: south_africa },
    { label: "+52", value: "+52", flag: mexico },
];

  const [select, setselect] = useState({
    selected_country: "+91",
    isopen: false,
  });

  return (
    <div
      className={` w-[22.22vw] h-[3.91vh] bg-[white] flex items-center  relative ${style.phone_conatiner}`}
    >
      <img src={drop_down} alt="drop_down" loading="lazy" onClick={() => setselect((prev)=>({...prev,isopen:!prev.isopen}))} />
 
   <b >{select.selected_country}</b>
      <input
        type="text"
        placeholder={placeholder.phone}
        onClick={() => {
          setplaceholder((prev) => ({ ...prev, phone: "" }));
          setIsfocused((prev) => ({ ...prev, phone: true }));
        }}
        onChange={handlechange}
        name="phone"
        className={` ml-3 `}
      />
      {select.isopen &&( 
        <div className={`absolute top-full h-[15vh] overflow-y-scroll z-50`}>
        {countryOptions.map((value, key) => (
          <div key={key} className={`flex items-center  bg-[white] cursor-pointer  `}  onClick={()=>
           { setselect((prev)=>({...prev,selected_country:value.value}))
            setselect((prev)=>({...prev,isopen:!prev.isopen}));
            setForm_values((prev)=>({...prev,country_code:value.value}))
            
        } 
          }
         
          >
            
            <img src={value.flag} alt={value.label} className={`p-2 `} loading="lazy"/>
            <b className={` mr-1 `}  >{value.label}</b>
          </div>
        ))}
      </div>
      )}
      
    </div>
  );
};

export default Country_code;

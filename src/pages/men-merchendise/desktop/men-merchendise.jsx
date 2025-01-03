import Header_Background from "../../common/head-background/desktop/header-background-desktop"
import back_arrow from '../../../assets/choose/back_arrow.svg'
import style from './style.module.css'
import axiosInstance from '../../../../axios-config'
import { useEffect, useState } from "react"
import Model_viewer from "../model-viewer/model-viewer"
import Loading from "../../common/loading/loading"

const Men_merchendise_desktop=()=>{

    const[images,setImages]=useState([])

useEffect(()=>{

const getmodel=async()=>{

    try{

        const result=await axiosInstance.get('tag/get-alltag')
  
        setImages(result.data)

    }catch(error){
        console.log(error)
    }
}   
    
getmodel()

},[])

    return(
        <>
<Header_Background/>
<div className={style.back_arrow}>
<img src={back_arrow} alt="back arrow"/>
</div>
<div className={style.choose_heading}>
<span>MEN</span>

</div>


<div className={style.model_grid}>

{images.length > 0 ? (
          images.map((value, index) => {

return(<div key={index} style={{display:'flex',justifyContent:'center',textAlign:'center',
  alignItems: 'center',flexDirection: 'column'}}>
     <Model_viewer url={value.modelUrl} position={value.position} scale={value.scale} size={'desktop'}/>
     <div className={style.model_name}>
     <span > {value.name }</span>
         </div>
 
 </div>
        )})) : (
          <p>No models available</p>
        )}

</div>


        </>
    )

}

export default Men_merchendise_desktop



import style from './error.module.css'
import error_logo from '../../../assets/sign-up/error_logo.svg'
import cross from '../../../assets/sign-up/cross.svg'
import { Link } from 'react-router'

const Error_page_vericication=({server_error,setServer_error,redirect='not redirect'})=>{
    return(
        <>
        <div className={style.div_container}>
        <div className={style.error_log}>
        <img src={error_logo}alt='error logo'/>
        </div>
        <div className={style.message_container}>
      <span > {server_error} </span> 
        </div>
        <div className={style.try_again}>
       <span className={style.display}>PLEASE TRY AGAIN</span> 
        </div>
    {redirect ==='not redirect' ? (<button className={style.dismiss} onClick={()=>(setServer_error(''))}>DISMISS</button> ):
    <Link to={'/'}>(<button className={style.dismiss} >HOME</button> )</Link>
    }    
        <div className={style.cross}  onClick={()=>(setServer_error(''))}>
        <img src={cross} alt='close'/>
        </div>
        </div>
        </>
    )
}
export default Error_page_vericication
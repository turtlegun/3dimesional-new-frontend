import style from './error.module.css'
import error_logo from '../../../assets/sign-up/error_logo.svg'
import cross from '../../../assets/sign-up/cross.svg'


const Error_page=({server_error,setServer_error})=>{
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
        <button className={style.dismiss} onClick={()=>(setServer_error(''))}>DISMISS</button>
        <div className={style.cross}  onClick={()=>(setServer_error(''))}>
        <img src={cross} alt='close'/>
        </div>
        </div>
        </>
    )
}
export default Error_page
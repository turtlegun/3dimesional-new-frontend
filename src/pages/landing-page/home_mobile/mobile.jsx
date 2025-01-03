import style from './mobile.module.css'
import home from '../../../assets/home-page/home.svg'
import cart from '../../../assets/home-page/cart.svg'
import wishlist from '../../../assets/home-page/heart.svg'
import default_user from '../../../assets/home-page/default_user.svg'
import order from '../../../assets/home-page/order.svg'
import companyname from '../../../assets/home-page/name.png'
import first_tshirt from '../../../assets/home-page/tshirt.png'
import second_tshirt from '../../../assets/home-page/tshirt2.png'
const Mobileview=()=>{

return(
    <>
  <div className={style.companyname}>
     <img src={companyname} alt='company name' /> 
     </div>
            
            <div className={style.first_image}>
             <img src={first_tshirt} alt='tshirt' style={{width:'45.7vw',height:'20.7vh'}}/>
 
            </div>


            <div className={style.merch}>
 <span className={style.quote_header}>MERCH</span> <br/>
 <span className={style.quote}>REFRESH YOUR WARDROBE WITH EASYGOING, STYLISH CLOTHES. 
   FROM EVERYDAY BASICS TO BOLDER TRENDS, WE'VE GOT YOU COVERED. SHOP NOW AND FIND YOUR NEW FAVORITES.</span>
         </div>
         <div className={style.custom}>
 
 <span className={style.quote_custom}>CUSTOM</span> <br/>
 <span className={style.quote}>CREATE YOUR OWN UNIQUE STYLE WITH OUR PREMIUM 
   QUALITY MATERIAL CUSTOM CLOTHING DESIGNS,
    PERSONALIZED TEES, HOODIES, & ACCESSORIES. EXPRESS YOURSELF. START CUSTOMIZING TODAY! </span>
         </div>
 
    <div className={style.second_image}>
     <img src={second_tshirt} alt='second tshirt' style={{width:'45.7vw',height:'20.7vh'}} />
     </div>
 
     <div className={style.navbar}>
     <span> 
    <button
    style={{ width: '14.13vw', height: '2.72vh' , background: '#3A513F99',color:'white',
      borderRadius:'5px',opacity:'0px',border: 'none',fontSize:'8px'}}
    onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
    onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
  >
    Login
  </button>
    </span>
    <span> <button
    style={{ width: '14.13vw', height: '2.72vh' , background: '#3A513F99',color:'white',
      borderRadius:'10px',opacity:'0px',border: 'none',fontSize:'8px'}}
    onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
    onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
  >
    Sign Up
  </button></span>
 
         </div> 

         {/* 
 

 
     */}

         
    </>
)

}

export default Mobileview
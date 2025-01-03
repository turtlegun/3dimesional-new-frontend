
import companyname from '../../../../assets/home-page/name.png'
import cart from '../../../../assets/home-page/cart.svg'
import wishlist from '../../../../assets/home-page/heart.svg'
import default_user from '../../../../assets/home-page/default_user.svg'
import style from './header.module.css'

function Header_Background() {
   return (<>
 <img src={companyname} alt="company name" className={style.companyname}/>
 <div className={style.header} >
<span >HOME </span>
<span>ABOUT US</span>
<span>CONTACT US</span>
</div>
<div className={style.navbar}>
    <span> <img src={cart}alt="cart" style={{width:'1.14vw',height:'1.61'}}  onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
    onMouseLeave={(e) => e.target.style.boxShadow = 'none'}/> </span>
    <span><img src={wishlist}alt="wishlist" style={{width:'2.08vw',height:'2.93vh'  }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
        onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
         /></span>
        <span><img src={default_user}alt="default_user" style={{width:'2.08vw',height:'2.93vh'  }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
        onMouseLeave={(e) => e.target.style.boxShadow = 'none'} /></span>
</div>
</>
       
    )
  

}
  


export default Header_Background;
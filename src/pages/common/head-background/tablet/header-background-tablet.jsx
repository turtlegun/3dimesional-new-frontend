
import companyname from '../../../../assets/home-page/name.png'
import style from './header.module.css'
import home from '../../../../assets/home-page/home.svg'
import cart from '../../../../assets/home-page/cart.svg'
import order from '../../../../assets/home-page/order.svg'
import wishlist from '../../../../assets/home-page/heart.svg'
import default_user from '../../../../assets/home-page/default_user.svg'
function Header_tablet(){

    return(
  <>
    <div className={style.companyname}>
    <img src={companyname} alt='company name' /> 
    </div>
        <div className={style.footer}>
       <span> <img src={home}alt="home" style={{width:'5.37vw',height:'4.03vh'}}  onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
          onMouseLeave={(e) => e.target.style.boxShadow = 'none'}/> </span>
          <span><img src={wishlist}alt="wishlist" style={{width:'5.37vw',height:'4.03vh'  }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
              onMouseLeave={(e) => e.target.style.boxShadow = 'none'}
               /></span>
              <span><img src={order}alt="order" style={{width:'5.37vw',height:'4.03vh'  }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
              onMouseLeave={(e) => e.target.style.boxShadow = 'none'} /></span>
              <span><img src={cart}alt="cart" style={{width:'5.37vw',height:'4.03vh'  }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
              onMouseLeave={(e) => e.target.style.boxShadow = 'none'} /></span>
              <span><img src={default_user}alt="default_user" style={{width:'5.37vw',height:'4.03vh'  }} onMouseEnter={(e) => e.target.style.boxShadow = '0 0 10px 2px black'}
              onMouseLeave={(e) => e.target.style.boxShadow = 'none'} /></span>

        </div>     


       </>
    )
}

export default Header_tablet
import first_tshirt from '../../../assets/home-page/tshirt_tablet.png'
import style from './tabelet.module.css'
import second_tshirt from '../../../assets/home-page/tshirt2.png'
import Header_tablet from '../../common/head-background/tablet/header-background-tablet'

function Home_tablet(){

    return(
  <>
    <Header_tablet/>
           
           <div className={style.first_image}>
            <img src={first_tshirt} alt='tshirt'/>

           </div>

        <div className={style.merch}>
<span className={style.quote_header}>MERCH</span> <br/>
<span className={style.quote}>Refresh Your Wardrobe With Our Collection Of <br/> Easygoing, Stylish Clothing. 
    Whether You’re Looking <br/>For Everyday Basics Or Something A Little Bolder, We’ve<br/> Got You Covered. Simple,
     Comfortable, And Always On<br/> Trend. Shop Now And Find Your New Favorites. </span>
        </div>

<div className={style.custom}>

<span className={style.quote_custom}>CUSTOM</span> <br/>
<span className={style.quote}>CREATE YOUR OWN STYLE WITH OUR CUSTOM CLOTHING <br/>OPTIONS. 
    DESIGN UNIQUE PIECES THAT ARE ALL ABOUT YOU<br/> WHETHER IT’S A PERSONALIZED GRAPHIC TEE, CUSTOM<br/> HOODIE, OR 
    ONE-OF-A-KIND ACCESSORY. EXPRESS YOURSELF <br/>WITH COLORS, DESIGNS, AND DETAILS THAT ARE ALL YOUR <br/>OWN.
     START CUSTOMIZING TODAY AND WEAR SOMETHING <br/>THAT’S AS UNIQUE AS YOU ARE! </span>
        </div>

   <div className={style.second_image}>
    <img src={second_tshirt} alt='second tshirt'/>
    </div>

  


       </>
    )
}

export default Home_tablet
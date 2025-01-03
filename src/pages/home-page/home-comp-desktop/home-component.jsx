import Tshirt2 from '../../../assets/home-page/tshirt2.png'
import style from './home-component.module.css'
import Header_Background from '../../common/head-background/desktop/header-background-desktop'

function HomeComponent() {
   return (<>
 
   
<Header_Background/> 
<div  className={style.merch}>
<span>MERCH </span>

</div>

<div className={style.merch_quote}>
<span  className={style.quote_style}> Refresh your wardrobe with our collection of easygoing, stylish<br/>
  clothing. Whether you’re looking for everyday basics or something a<br/>
  little bolder, we’ve got you covered. Simple, comfortable, and always<br/>
  on trend. shop now and find your new favorites.</span>
    </div>
<div className={style.custom}>
<span >CUSTOM</span>
</div>

<div className={style.custom_quote}>
<span className={style.quote_style}>
  Create your own style with our custom clothing options. 
  Design unique <br/>pieces that are all about you, whether it’s a personalized graphic tee<br/> 
  custom hoodie, or one of a kind accessory. Express yourself with colors<br/> designs, 
  and details that are all your own.
  Start customizing today and <br/> wear something that’s as unique as you are!
</span>
</div>
<div className={style.second_tshirt}>
<img src={Tshirt2} alt='tshirt'/> 
</div >

</>
       
    )
  

}
  


export default HomeComponent
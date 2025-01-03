import background from '../../../assets/home-page/background.png'
import style from './men-women.module.css'
import backarrow from '../../../assets/choose/back_arrow.svg'
import { Link } from 'react-router'

function MenAndWomen(){

return(
    <>
    <div style={{backgroundImage:`url(${background})`, width: '100vw',
        height: '100vh',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        opacity:"95%"}} >

      

<Link to={'/home'}> <div className={style.arrow}>
<img src={backarrow}/>
</div>
</Link>
<div>
<button className={style.men}>
MEN
</button>
</div>
<div>
<button className={style.women}>
WOMEN
</button>
</div>
    </div>


    </>
)

}
export default MenAndWomen
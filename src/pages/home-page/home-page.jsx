import background from '../../assets/home-page/background.png'
import background_tablet from '../../assets/home-page/background_tablet.jpg'
import { lazy, Suspense, useEffect, useState } from 'react';
const Mobileview  =lazy(()=>import('./home_mobile/mobile'))
const AnimatedSVG=lazy(()=>import('./animation/animated-svg'))
import background_mobile from '../../assets/home-page/mobile_background.jpg'
const HomeComponent =lazy(()=>import('./home-comp-desktop/home-component'))
const Home_tablet =lazy(()=>import('./home-tablet/home-tablet'))

function Home() {
  const [background_image, setBackground_image] = useState('');
  const [loading, setLoading] = useState(true);  
  const [screenSize, setScreenSize] = useState('desktop');

  useEffect(() => {
    const handlerize = () => {

      const width = document.documentElement.clientWidth;
      console.log("width",width)
      if (width >= 1440) {
        console.log("desktop")
        setBackground_image(background); 
        setScreenSize('desktop');
      } 
      else if (width > 440 ) {
        console.log("tablet")
        setBackground_image(background_tablet);
        setScreenSize('tablet');
      }
       else {
        console.log("mobile")
        setBackground_image(background_mobile);
        setScreenSize('mobile');
      }
    };


    handlerize();

   
    window.addEventListener('resize', handlerize);

    
    const timer = setTimeout(() => {
      setLoading(false); 
    }, 1200);


    return () => {
      window.removeEventListener('resize', handlerize);
      clearTimeout(timer); 
    };
  }, []);

  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        backgroundColor: loading ? 'black' : 'transparent', 
        backgroundImage: !loading ? `url(${background_image})` : 'none', 
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        transition: 'background-image 1s ease', 
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden',
        opacity:"95%"
   
      }}
    >
      <AnimatedSVG />
      <Suspense fallback={<AnimatedSVG />}>
  {screenSize === 'desktop' && <HomeComponent />}
  {screenSize === 'tablet' && <Home_tablet />} 
  {screenSize === 'mobile' && <Mobileview />}
</Suspense>
    </div>
  );
}

export default Home;

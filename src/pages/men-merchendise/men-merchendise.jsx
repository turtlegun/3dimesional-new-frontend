import background from "../../assets/home-page/background.webp";
import { lazy, useEffect, useState } from "react";
const Men_merchendise_desktop = lazy(() => import("./desktop/men-merchendise"));
import background_mobile from "../../assets/home-page/mobile_background.webp";
import background_tablet from "../../assets/home-page/background_tablet.jpg";

const Mobileview=lazy(()=>import('./mobile/mobile-merchendise'))
function Men_merchendise() {
  const [background_image, setBackground_image] = useState("");
  const [loading, setLoading] = useState(true);
  const [screenSize, setScreenSize] = useState("desktop");

  useEffect(() => {
    const handlerize = () => {
      const width = document.documentElement.clientWidth;
      console.log("width", width);
      if (width >= 1440) {
        console.log("desktop");
        setBackground_image(background);
        setScreenSize("desktop");
      } else if (width > 440) {
        console.log("tablet");
        setBackground_image(background_tablet);
        setScreenSize("tablet");
      } else {
        console.log("mobile");
        setBackground_image(background_mobile);
        setScreenSize("mobile");
      }
    };

    handlerize();

    window.addEventListener("resize", handlerize);

    const timer = setTimeout(() => {
      setLoading(false);
    }, 1200);

    return () => {
      window.removeEventListener("resize", handlerize);
      clearTimeout(timer);
    };
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        backgroundColor: loading ? "black" : "transparent",
        backgroundImage: !loading ? `url(${background_image})` : "none",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        transition: "background-image 1s ease",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
   
        opacity: "95%",
      }}
    >
      {/* <AnimatedSVG /> */}
    
        {screenSize === "desktop" && <Men_merchendise_desktop />}
      
        {/* {screenSize === 'tablet' && <Home_tablet />} */}
  {screenSize === 'mobile' && <Mobileview />} 
 
    </div>
  );
}

export default Men_merchendise;

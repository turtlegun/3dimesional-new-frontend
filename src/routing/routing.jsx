import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";

const Email_Verification=lazy(()=>import('../pages/verification/email-verification/email-verification'))
const  Landing_page= lazy(() => import("../pages/landing-page/home-page"));
const AnimatedSVG=lazy(() => import("../pages/home-page/animation/animated-svg"));
const Login = lazy(() => import("../pages/login/login"));
const Home = lazy(() => import("../pages/home-page/home-page"));
const MenAndWomen=lazy(() => import("../pages/men-women-choose-page/desktop/men-women-desktop"));
const Signup=lazy(()=>import('../pages/signup/signup'))
const Men_merchendise=lazy(()=>import('../pages/men-merchendise/men-merchendise'))

const Phone_input=lazy(()=>import('../pages/verification/phone-input/phone-input'))

 const Phone_verification=lazy(()=>import( "../pages/verification/phone-verification/phone-verification"))
const Routing = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<AnimatedSVG/>}>
        <Routes>
          <Route index element={<Landing_page />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
          <Route path="/choose" element={<MenAndWomen/>}/>
          <Route path="/merch" element={<Men_merchendise/>}/>
          <Route path="/signup" element={<Signup/>}/>
          <Route path="/phone-input" element={<Phone_input/>}/>    
          <Route path="/phone-verify" element={<Phone_verification/>}/>  
          <Route path="/email-verify" element={<Email_Verification/>}/>    
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;

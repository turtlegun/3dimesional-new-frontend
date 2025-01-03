import { BrowserRouter, Routes, Route } from "react-router";
import { lazy, Suspense } from "react";
const  Landing_page= lazy(() => import("../pages/landing-page/home-page"));
const AnimatedSVG=lazy(() => import("../pages/home-page/animation/animated-svg"));
const Login = lazy(() => import("../pages/login/login"));
const Home = lazy(() => import("../pages/home-page/home-page"));
const MenAndWomen=lazy(() => import("../pages/men-women-choose-page/desktop/men-women-desktop"));
const Signup=lazy(()=>import('../pages/signup/signup'))
const Men_merchendise=lazy(()=>import('../pages/men-merchendise/men-merchendise'))
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
         
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default Routing;

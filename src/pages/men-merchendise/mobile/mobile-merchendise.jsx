import { lazy, Suspense, useEffect, useState } from "react";
import style from "./mobile.module.css";

const Mobile_header = lazy(() =>
  import("../../common/head-background/mobile/header-background-mobile")
);
import axiosInstance from "../../../../axios-config";
import Model_viewer from "../model-viewer/model-viewer";

const Mobile_Merchendise = () => {
  const [images, setImages] = useState([]);
 
  useEffect(() => {
    const getModel = async () => {
      try {
        const result = await axiosInstance.get("tag/get-alltag");
        console.log(result);

       

        setImages(result.data);
      } catch (error) {
        console.log(error);
      }
    };

    getModel();
  }, []);

  


  return (
    <>
      <Mobile_header />
      <div className={style.model_grid}>
  {images &&
    images.map((value, i) => (
      <Suspense key={i} fallback={<p>Loading</p>}>
      <div className={i % 2 === 0 ? style.left : style.right}>
        <Model_viewer
          url={value.modelUrl}
          size={'mobile'}
          position={value.position}
          scale={value.scale}
        />
      </div>
      </Suspense>
    ))}
</div>
    </>
  );
};

export default Mobile_Merchendise;

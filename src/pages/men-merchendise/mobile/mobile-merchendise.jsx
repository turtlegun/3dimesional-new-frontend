import { lazy, useEffect, useState } from "react";
import style from "./mobile.module.css";

const Mobile_header = lazy(() =>
  import("../../common/head-background/mobile/header-background-mobile")
);
import { generatePattern } from "./helper";
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
      <div className={i % 2 === 0 ? style.left : style.right} key={i}>
        <Model_viewer
          url={value.modelUrl}
          size={'mobile'}
          position={value.position}
          scale={value.scale}
        />
      </div>
    ))}
</div>
    </>
  );
};

export default Mobile_Merchendise;

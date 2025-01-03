import React, { lazy, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {  useGLTF } from "@react-three/drei";
import Lighting from "../../common/model-lighting/lighting";
const Loading=lazy(()=>import('../../common/loading/loading')) 

const Model = ({url,position,scale}) => {
    const { scene, loading } = useGLTF(url); 
    const modelRef = useRef();

   
    useFrame(() => {
      if (modelRef.current) {
        modelRef.current.rotation.y += 0.01; 
      }
    });
    if (loading) {
      return <Loading/>; 
    }

  return <primitive ref={modelRef} object={scene} scale={scale} position={position}/>;
};

const Model_viewer = ({url,position,scale,size}) => {
  return (
    <div style={size==='desktop' ? { width: "16.88vw", height: "30.57vh"  }:{width:'45.45vw',height:'20.92vh'}}>
      <Canvas camera={{ position: [0, 0.2, 2], fov: 80 }}>
        <Lighting/>
        <Model url={url}position={position} scale={scale} />
     
      </Canvas>
    </div>
  );
};

export default Model_viewer;

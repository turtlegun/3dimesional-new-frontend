
import { OrbitControls } from '@react-three/drei'


const Lighting=()=>{


return(
<>
<ambientLight intensity={0.6}/>
    <pointLight position={[10, 10, 10]} />
  
    <pointLight
      position={[0, 6, 4]} // Position the light above the model
      intensity={3.4} // Adjust intensity as needed
      castShadow
    />
<directionalLight
      position={[0, 6, 0]} // Position the light above the model
      intensity={3.4} // Adjust intensity as needed
      castShadow
      
    />
  <spotLight
    position={[0, 1, 2]} // Position the light above the model
    intensity={3.4} // Adjust intensity as needed
    castShadow
    
   />


    <spotLight
    position={[0, 0, -2]} // Position the light above the model
    intensity={3.4} // Adjust intensity as needed
    castShadow
   
   /> 
    <spotLight
    position={[0, 0, 2]} // Position the light above the model
    intensity={3.4} // Adjust intensity as needed
    castShadow
    
   />
    <ambientLight intensity={0.4} /> 

  
    {/* <OrbitControls  minDistance={6.7} maxDistance={6.9} 
     enableRotate={true}
     
     maxPolarAngle={Math.PI / 1.8} // Restricts vertical rotation
     minPolarAngle={Math.PI / 2.2}// Restricts vertical rotation
     enableZoom={true}
     enablePan={false} // Optional: Disable panning if desired
     rotateSpeed={1.0}
     maxAzimuthAngle={Infinity} // Remove restrictions on horizontal rotation
     minAzimuthAngle={-Infinity}
     enableDamping={true}
     dampingFactor={0.1}
     autoRotate={false}
    /> */}


</>
)

}

export default Lighting;
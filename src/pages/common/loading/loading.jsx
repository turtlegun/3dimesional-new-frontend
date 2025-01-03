import { useEffect, useState } from 'react';

import frame1 from '../../../assets/logo_animation/logo.png';
import frame2 from '../../../assets/logo_animation/logo3.png';
import frame3 from '../../../assets/logo_animation/logo2.png';
import style from './loading.module.css';

function Loading() {
  const [currentFrame, setCurrentFrame] = useState(0);


  const frames = [
    { id: 0, src: frame1, alt: 'frame1' },
    { id: 1, src: frame2, alt: 'frame2' },
    { id: 2, src: frame3, alt: 'frame3' },
    { id: 3, src: frame1, alt: 'frame1' },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentFrame((prev) => {
        if (prev < frames.length - 1) {
          return prev + 1;
        } else {
     
          return 0;
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
   <div style={{backgroundColor:"black",height:"100vh",width:"100vw" ,display:"flex",
    alignItems:"center",justifyContent:"center"

   }}>
    <div 
      className={`${style.animated_frame} `}
      
    >
      <img src={frames[currentFrame].src} alt={frames[currentFrame].alt} />
    </div>
    </div>
   
  );
}

export default Loading;

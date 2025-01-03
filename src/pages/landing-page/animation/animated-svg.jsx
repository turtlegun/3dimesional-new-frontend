import { useEffect, useState } from 'react';

import frame1 from '../../../assets/logo_animation/logo.png';
import frame2 from '../../../assets/logo_animation/logo3.png';
import frame3 from '../../../assets/logo_animation/logo2.png';
import style from './animation.module.css';

function AnimatedSVG() {
  const [currentFrame, setCurrentFrame] = useState(0);
  const [animationComplete, setAnimationComplete] = useState(false); 

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
          clearInterval(interval); 
          setAnimationComplete(true); 
          return prev;
        }
      });
    }, 400);

    return () => clearInterval(interval);
  }, [frames.length]);

  return (
   
    <div 
      className={`${style.animated_frame} ${animationComplete ? style.fade_out : ''}`}
      
    >
      <img src={frames[currentFrame].src} alt={frames[currentFrame].alt} />
    </div>
   
  );
}

export default AnimatedSVG;

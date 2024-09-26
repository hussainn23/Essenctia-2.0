import { useAnimation } from 'framer-motion';  
import { useEffect, useRef, useState } from 'react';  

const UseScrollAnimation = () => {  
  const controls = useAnimation();  
  const cardsRef = useRef(null);  
  const [isVisible, setIsVisible] = useState(false);  

  useEffect(() => {  
    const scrollHandler = () => {  
      const elementPosition = cardsRef.current.getBoundingClientRect().top;  
      const scrollPosition = window.innerHeight / 1.5;  

      // Check visibility based on position  
      if (elementPosition < scrollPosition && !isVisible) {  
        setIsVisible(true); // Only set it visible if it isn't already marked as such  
      }  
    };  

    const updateAnimation = async () => {  
      if (isVisible) {  
        await controls.start({ opacity: 1, y: 0 });  
      }  
    };  

    window.addEventListener('scroll', scrollHandler);  
    updateAnimation(); // Call to update animation  

    return () => {  
      window.removeEventListener('scroll', scrollHandler); // Cleanup  
    };  
  }, [controls, isVisible]);  

  return { controls, cardsRef };  
};  

export default UseScrollAnimation;
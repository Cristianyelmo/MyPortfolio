import { useState, useEffect, useRef } from 'react';

function useIsVisible(): [boolean, React.RefObject<HTMLDivElement>]{
  const [isVisible, setIsVisible] = useState(false);
  
  const elementRef = useRef<HTMLDivElement | null>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        console.log(entry)
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.2, 
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return [isVisible, elementRef];
};
 

export default useIsVisible;
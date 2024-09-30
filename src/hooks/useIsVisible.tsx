import { useState, useEffect, useRef } from "react";

function useVisibilityTracker() {
  const [visibility, setVisibility] = useState({
    presentacion: false,
    sobreMi: false,
    proyectos: false,
    tecnologias: false,
    contacto: false,
  });

  const elementRefs = {
    presentacion: useRef(null),
    sobreMi: useRef(null),
    proyectos: useRef(null),
    tecnologias: useRef(null),
    contacto: useRef(null),
  };
 
  useEffect(() => {

  
    const observer = new IntersectionObserver(
      
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id;
    
          if (entry.isIntersecting) {
            setVisibility((prev) => ({ ...prev, [id]: true }));
           
          } else {
            setVisibility((prev) => ({ ...prev, [id]: false }));
          }
        
        });

        
      },
      { threshold: 0.5 }
      
    );


const holas = observer

  console.log(holas)
    Object.values(elementRefs).forEach((ref) => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    return () => {
      Object.values(elementRefs).forEach((ref) => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });
    };
  }, []);

  return { visibility, elementRefs };
}

export default useVisibilityTracker;

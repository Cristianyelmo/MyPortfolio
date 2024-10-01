import { useEffect, useRef,useCallback } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import * as THREE from "three";
import { MainHook } from "../Context/MainContext";

export default function Modelsx() {
  const modelRef = useRef(null);
  const mixersRef = useRef<THREE.AnimationMixer[]>([]); 
  const glbRef = useRef(null);
  const clock = useRef(new THREE.Clock());

  const  {clipname,setClipname,playText,textChibi, setIsVisible} =MainHook()
  const containerRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 800);
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      const container = containerRef.current;
      const width = container?.clientWidth ?? window.innerWidth;
      const height = container?.clientHeight ?? window.innerHeight;;

      renderer.setSize(width, height);
      container && container.appendChild(renderer.domElement);
      renderer.setPixelRatio(  window.devicePixelRatio *  window.innerWidth > 600 ? 1 : 0.80); 
      camera.position.set(2, 2, 68);

      const loader = new GLTFLoader();
      loader.load(
        "/caca.glb",
        function (gltf:any) {
          const model = gltf.scene;
          model.scale.set(9, 9, 9);
          modelRef.current = model;
          glbRef.current = gltf;

          scene.add(model);

          const ambientLight = new THREE.AmbientLight(0xffffff, 4); // Lower intensity
          scene.add(ambientLight);

    

          if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(model);
           
             const action = mixer.clipAction(gltf.animations[clipname]);
             /*  action.play();  */
              action.reset().fadeIn(0.5).play();
         
 

            mixersRef.current.push(mixer);
          }

        
        },
        
        
      );
     
      
      function animate() {
        const delta = clock.current.getDelta();
        
        mixersRef.current.forEach((mixer) => mixer.update(delta)); 

        renderer.render(scene, camera);
        
        renderer.setAnimationLoop(animate);
      }

      animate();

      
      return () => {
        renderer.setAnimationLoop(null);
        container && container.removeChild(renderer.domElement);
        renderer.dispose();
      };
    }
  }, [clipname]);


  const timeoutDelay = (textChibi.length * 50) + 1500;
  
  useEffect(()=>{
    if (!playText) return;
   
      const timeoutId= setTimeout(() => {
       
        setClipname(6)
      },timeoutDelay);
      



      return () => {
        clearTimeout(timeoutId);
      };

  },[playText,timeoutDelay])



  const toggleVisibility = useCallback(() => {
    if (window.scrollY > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }

    if (window.scrollY === 0) {
      setClipname(6);
    }
  }, [setIsVisible, setClipname]);

  useEffect(() => {
   
    window.addEventListener('scroll', toggleVisibility);

   
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

 
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div ref={containerRef} className={`w-[150px] h-[150px] md:w-[300px] md:h-[300px]`}></div>

    
   
    </div>
  );
}

import { useEffect, useRef } from "react";
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

         /*  const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
          directionalLight.position.set(1, 1, 1).normalize();
          scene.add(directionalLight);

          const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 4);
          scene.add(hemiLight); */

          if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(model);
           
             const action = mixer.clipAction(gltf.animations[clipname]);
              action.play(); 
          
         
 

            mixersRef.current.push(mixer);
          }

        
        },
        
        
      );

      // Animar la escena
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



  
  useEffect((
    
      
  )=>{
    let lengthText = textChibi.length
    let timeoutId:any;
    if(playText){
      timeoutId= setTimeout(() => {
       
        setClipname(6)
      }, (lengthText * 50) + 1500);
      } 



      return () => {
        clearTimeout(timeoutId);
      };

  },[playText])






  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }


      if (window.scrollY === 0) {
        setClipname(6)
      }
    };

    window.addEventListener('scroll', toggleVisibility);

   
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

 
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div ref={containerRef} className={`w-[150px] h-[150px] md:w-[300px] md:h-[300px]`}></div>

      <div>
     {/*  {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-black/50 text-white p-4 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </button>
      )} */}
    </div>
   
    </div>
  );
}

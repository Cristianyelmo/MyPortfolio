import { useEffect, useRef, useState } from "react";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import * as THREE from "three";
import { MainHook } from "../Context/MainContext";

export default function Modelsx() {
  const modelRef = useRef(null);
  const mixersRef = useRef([]); 
  const glbRef = useRef(null);
  const clock = useRef(new THREE.Clock());
  const [loading, setLoading] = useState(true);
  const [loadProgress, setLoadProgress] = useState(0);
  const containerRef = useRef(null);
const  {clipname,setClipname,Playbutton,playText} =MainHook()
  useEffect(() => {
    if (typeof window !== "undefined") {
      const scene = new THREE.Scene();
      const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 800);
      const renderer = new THREE.WebGLRenderer({ alpha: true });

      const container = containerRef.current;
      const width = container && container.clientWidth;
      const height = container && container.clientHeight;

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

          const directionalLight = new THREE.DirectionalLight(0xffffff, 3);
          directionalLight.position.set(1, 1, 1).normalize();
          scene.add(directionalLight);

          const hemiLight = new THREE.HemisphereLight(0xffffff, 0x444444, 4);
          scene.add(hemiLight);

          if (gltf.animations && gltf.animations.length > 0) {
            const mixer = new THREE.AnimationMixer(model);
            gltf.animations.forEach((clip,index) => {
            
         if(clip.name == clipname){
             const action = mixer.clipAction(clip);
              action.play(); 
            }
            });
 

            mixersRef.current.push(mixer);
          }

          setLoading(false);
        },
        function (xhr) {
          const percentComplete = (xhr.loaded / xhr.total) * 100;
          setLoadProgress(Math.round(percentComplete));
        },
        function (error) {
          console.error(error);
        }
      );

      // Animar la escena
      function animate() {
        const delta = clock.current.getDelta();
        mixersRef.current.forEach((mixer) => mixer.update(delta)); // Actualizar mixers

        renderer.render(scene, camera);
        requestAnimationFrame(animate);
      }

      animate();

      
      return () => {
        renderer.dispose();
        if (container) container.removeChild(renderer.domElement);
      };
    }
  }, [clipname]);





  const [isVisible, setIsVisible] = useState(false);


  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) { 
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }


      if (window.scrollY === 0) {
        setClipname('Move01')
      }
    };

    window.addEventListener('scroll', toggleVisibility);

   
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

 
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });

    setClipname('Move01.002')
  };
  return (
    <div className="fixed bottom-4 right-4 z-50">
      <div ref={containerRef} className={`w-[150px] h-[150px] md:w-[300px] md:h-[300px]`}></div>

      <div>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-10 right-10 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-700 transition"
        >
          ↑
        </button>
      )}
    </div>
    <button className="bg-black text-white" onClick={()=>Playbutton()}>{!playText ? 'play' : 'stop'}</button>
{/*       <button className="bg-black text-white" onClick={()=>setClipname('Move02.001')}>hoola</button> */}
    </div>
  );
}

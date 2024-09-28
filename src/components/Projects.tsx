import { MainHook } from "../Context/MainContext";
import Resizable from "./Carousel";
import useIsVisible from '../hooks/useIsVisible';
import { useEffect } from "react";
function Projects() {
  const [isVisible, elementRef] = useIsVisible();
const {valueProject,openModal,setOpenModal} = MainHook()
 const {setTextchibi} = MainHook()
useEffect(() => {
  if (isVisible) {
    console.log("El componente Contacto está visible en pantalla");
    setTextchibi('buenas cabros fsgsgsgsgsdgsfgfsgdfgdfhfdhdfhdfhdfhdfhdfhdfhdfhdfhdfhfdhfdhdfhfdhdhfdhdfh')
  }
}, [isVisible]);

console.log(valueProject)
const href = valueProject && valueProject.Link;
  return (
    <div ref={elementRef} className="overflow-hidden mt-20 md:h-screen w-full relative">
 
{ openModal && <div className="fixed inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70 z-50">
 <div className="flex justify-end">
      <button
        onClick={() => setOpenModal(false)} 
        className="px-4 py-2 bg-black/50 text-white rounded-lg"
      >
        X
      </button>
    </div>
  <div className="relative  glow-effect p-2">
    <video width="640" height="640" controls autoPlay className="relative z-10">
      <source src={`/${valueProject && valueProject.name}.mp4`} type="video/mp4" />
      Tu navegador no soporta la etiqueta de video.
    </video>
    
  </div>
  <p className="text-white glow-text max-w-[640px] breakP">Holaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaadfdsfsdfsdgdsgsdgsdgsdgsdgsdgsgsgsgdsdetrersterteteteyeyeyreyeyertetet</p>
  <a className="bg-black text-white p-3" target="_blank"   href={href || (valueProject ? valueProject.Link : "#")}>Ver Demo</a>
</div> }
    

<h1 className="text-white glow-text text-center text-4xl">Proyectos</h1>

<div className="relative md:top-[-30%]">
<img src="/cloud.png" alt="" className="absolute z-10 left-[50%] top-[-120%]" />

</div>


<div className="relative md:top-[-20%]">

<img src="/cloud.png" alt="" className="absolute z-10 right-[60%] top-[-120%]" />
</div>

<div className="flex justify-center mt-10 z-20">
<Resizable/>
</div>
    </div>
  );
}

export default Projects;

import { MainHook } from "../Context/MainContext";
import Resizable from "./Carousel";
 import useVisibilityTracker from '../hooks/useIsVisible';
import { useEffect } from "react"; 
function Projects() {
  const {visibility, elementRefs} = useVisibilityTracker();
const {valueProject,openModal, videoRef,
  closeProjectModal} = MainHook() 
const {setTextchibi} = MainHook() 
 useEffect(() => {
  if (visibility.proyectos) {
    console.log("El componente Contacto está visible en pantalla proyectos");

    setTextchibi('Los proyectos están enfocados para portafolio, por eso no tienen ni registro ni inicio de sesión.')
  
  
}}, [visibility.proyectos]); 


const href = valueProject && valueProject.Link;


/* const isGrid = valueProject?.tecnologias.length && valueProject?.tecnologias.length > 7;  */
  return (
    <div  ref={elementRefs.proyectos} id="proyectos" className="md:h-screen" >
 
{ openModal && <div className="fixed inset-0 flex flex-col space-y-4 items-center justify-center bg-black bg-opacity-70 index-button">
 <div className="flex justify-end">
      <button
        onClick={() =>closeProjectModal()} 
        className="px-4 py-2 bg-black/50 text-white rounded-lg"
      >
        X
      </button>
    </div>
  <div className="relative  glow-effect p-2">
    <video ref={videoRef} width="640" height="640" controls autoPlay className="relative z-10">
      <source src={`/videos/${valueProject && valueProject.name}.mp4`} type="video/mp4" />
      Tu navegador no soporta la etiqueta de video.
    </video>
  
  </div>
  <div className={`flex`}>
  {valueProject && valueProject.tecnologias.map((item,index)=>(
    <div  key={index} className="grid-item">
    <img src={`/icons/${item}.webp`} alt="" width={50} height={50}/>
    </div>
  ))}
  

  </div>
  <p className="text-white glow-text max-w-[640px] breakP text-center font2">{valueProject?.texto}</p>
  <a className="bg-black text-white p-3" target="_blank"   href={href || (valueProject ? valueProject.Link : "#")}>Ver Demo</a>
</div> }
    

<h1 className="text-white glow-text text-center text-4xl">Proyectos</h1>

<div className="relative md:top-[-30%]">
<img src="/cloud2.webp" width={600} alt="" className="absolute z-10 right-0 top-[-70%]" />

</div>


<div className="relative md:top-[-20%]">

<img src="/cloud1.webp" alt="" className="absolute z-10 right-[60%] top-[-120%]" />
</div>

<div className="flex justify-center mt-10 z-20">
<Resizable/>
</div>
    </div>
  );
}

export default Projects;

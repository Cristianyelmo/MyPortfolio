import { MainHook } from "../Context/MainContext";
import { useEffect } from "react";
import useVisibilityTracker from '../hooks/useIsVisible';


function Technologies() {

const {Technologies,setTextchibi} = MainHook()
const {visibility, elementRefs} = useVisibilityTracker();;

useEffect(() => {
  if (visibility.tecnologias) {
    console.log("El componente Contacto está visible en pantalla");
    setTextchibi('aca esta las tecnologias que conozco,quisiera en un futuro aprender mas sobre JAVA y sobre la Programacion orientadas a objetos porque javascript es Programacion funcional para tener otra panorama')
  }
}, [visibility.tecnologias]);
  return (
    <div ref={elementRefs.tecnologias} id="tecnologias" className="">
  

<h1 className="text-white glow-text text-center text-4xl">Tecnologias</h1>
<section className="flex justify-center items-center grid md:grid-cols-4 grid-cols-3 gap-4 p-5">
{
   Technologies && Technologies.map((tech,index)=>(
    <div className="flex flex-col text-center items-center text-white glow-text" key={index}>
      <img src={tech.image} alt="" width={150} height={150}/>
      <p>{tech.name}</p>
    </div>
   ))
}
 
</section>




    </div>
  );
}

export default Technologies;

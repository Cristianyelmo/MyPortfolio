import { MainHook } from "../Context/MainContext";
 import { useEffect } from "react";
import useVisibilityTracker from '../hooks/useIsVisible'; 


function Technologies() {

const {Technologies ,setTextchibi } = MainHook()
 const {visibility, elementRefs} = useVisibilityTracker();;

useEffect(() => {
  if (visibility.tecnologias) {
    console.log("El componente Contacto está visible en pantalla");
    setTextchibi('Las tecnologías que conoce están centradas en JavaScript y tiene conocimiento de PHP. En un futuro, quiere aprender lenguaje como JAVA o C# y Framework como Angular.')
  }
}, [visibility.tecnologias]); 
  return (
    <div ref={elementRefs.tecnologias}  id="tecnologias" className="md:min-h-screen" >
  

<h1 className="text-white glow-text text-center text-4xl">Tecnologias</h1>
<section className="flex justify-center items-center grid md:grid-cols-4 grid-cols-3 gap-4 p-5">
{
   Technologies && Technologies.map((tech,index)=>(
    <div className="flex flex-col text-center items-center text-white glow-text" key={index}>
      <img src={`/icons/${tech.image}.webp`} alt="" width={150} height={150}/>
      <p>{tech.name}</p>
    </div>
   ))
}
 
</section>




    </div>
  );
}

export default Technologies;

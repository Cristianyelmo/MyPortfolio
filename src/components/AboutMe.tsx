import { useEffect } from "react";
import useIsVisible from '../hooks/useIsVisible';
import { MainHook } from "../Context/MainContext";
function AboutMe() {
  const [isVisible, elementRef] = useIsVisible();
  const {setTextchibi} = MainHook()
  useEffect(() => {
    if (isVisible) {
      console.log("El componente Contacto está visible en pantalla");
      setTextchibi('esta parte habla sobre mi,aunque tengo conocimiento de fullstack muchos dicen que tengo mucho mas de frontend que de backend')
    }
  }, [isVisible]);

  return (
    <div   ref={elementRef} className=" h-screen w-full relative">


<h1 className="text-white glow-text text-center text-4xl">Sobre mi</h1>
<section className="flex md:justify-center flex-col md:flex-row items-center relative">
<img src="/cloud2.webp" width={700} alt="" className="absolute z-10 right-0 md:top-0" />

<div className="relative">
<img src="/marco.webp" alt="" width={453} height={600}  className="absolute z-20 w-[453px] " />
<img src="/marco1.webp" alt="" width={453} height={600} className=" z-10 w-[453px] "/>
</div> 

<div className="bg-black/40 glow-effect max-w-[600px]   z-20 h-full  p-3 m-3">
<p className="text-white glow-text">Hola me llamo cristian y soy desarrollador full stack cuando tenia 8 años me culiee un perro en la calle</p>
</div>
</section>


    </div>
  );
}

export default AboutMe;

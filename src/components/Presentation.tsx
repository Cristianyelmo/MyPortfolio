

import useIsVisible from '../hooks/useIsVisible';
import { MainHook } from "../Context/MainContext";
import { useEffect } from 'react';
function Presentation() {

  const [isVisible, elementRef] = useIsVisible();
  const {setTextchibi} = MainHook()
  useEffect(() => {
    if (isVisible) {
      console.log("El componente Contacto está visible en pantalla");
      setTextchibi('hola como estan mi nombre es mono,y voy a mostrarte cada detalle de mi portfolio')
    }
  }, [isVisible]);


  return (
    <div ref={elementRef}  className="h-screen pt-10  flex justify-center items-center">
  

<section className="text-white glow-text text-xl">
  <div className='flex justify-center'>

 
 
 
    <div className="z-20 text-center flex flex-col items-center relative">
<h2 className="text-sm md:text-base z-20">Hola soy cristian amarilla y soy</h2>
<h1 className="md:text-7xl mt-7 text-3xl z-20">Desarrollador</h1>

<img src="/photoroom.webp" alt="" className="" />
</div>

</div>

<img src="/cloud2.webp" alt="" width={200} className="absolute z-10 right-0 top-0 md:w-[550px]" />
<img src="/cloud1.webp" alt="" width={200} className="absolute z-10 left-0 top-0 md:w-[550px]" />




</section>



    </div>
  );
}

export default Presentation;

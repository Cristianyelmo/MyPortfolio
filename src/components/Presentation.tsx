

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
    <div ref={elementRef}  className="overflow-hidden h-screen  w-full">
  

<section className="text-white glow-text mt-20 text-xl relative ">
    <div className="z-20 text-center flex flex-col items-center relative">
<h2 className="text-sm md:text-base z-20">Hola soy cristian amarilla y soy</h2>
<h1 className="md:text-7xl mt-7 text-3xl z-20">Desarrollador</h1>

<img src="/photoroom.webp" alt="" className="absolute z-50 top-[100%]" />
</div>



<img src="/cloud.png" alt="" className="absolute z-10 left-[50%] top-[-150%]" />
<img src="/cloud.png" alt="" className="absolute z-10 right-[60%] top-[-120%]" />

<div className="relative ml-10 top-[150px] md:top-0">
   
<img src="/Querubin1.webp" alt="" width={120} height={120} className="z-30 absolute Querubin1-1 w-[100px] md:w-[120px]" />
<img src="/Querubin1-2.webp" alt="" width={120} height={120} className="z-20 absolute Querubin1 w-[100px] md:w-[120px]" />

</div>


<div className="relative flex justify-end mr-10 top-[150px] md:top-0">
   
<img src="/Querubin2.webp" alt="" width={150} height={150} className="z-30 absolute Querubin1-1 w-[120px] md:w-[150px]" />
<img src="/Querubin2-1.webp" alt="" width={150} height={150} className="z-20 absolute  w-[120px] md:w-[150px]" />
<img src="/Querubin2-2.webp" alt="" width={150} height={150} className="z-20 absolute Querubin1 w-[120px] md:w-[150px]" />

</div>

</section>



    </div>
  );
}

export default Presentation;

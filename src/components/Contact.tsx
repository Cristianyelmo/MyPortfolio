 import { useEffect } from "react";
import useVisibilityTracker from '../hooks/useIsVisible';
import { MainHook } from "../Context/MainContext";
 
function Contact() {
 const {visibility, elementRefs} = useVisibilityTracker();;
  const { setTextchibi } = MainHook();
  useEffect(() => {
    if (visibility.contacto) {
      console.log("El componente Contacto está visible en pantalla");
      setTextchibi(
        "este es mi redes de contacto donde puedas ver mi perfiles y darme trabajo a jajaj"
      );
    }
  }, [visibility.contacto]); 

  return (
    <div ref={elementRefs.contacto}  id="contacto" className=" mt-20 md:h-screen content-center" >
      <h1 className="text-white glow-text text-center text-4xl">Contacto</h1>

      <div className="relative md:top-[-30%] z-10">
        <img
          src="/cloud2.webp"
          alt=""width={600}
          className="absolute z-10 right-0 top-[-50%]"
        />
      </div>

      <div className="relative md:top-[-30%] z-10">
        <img
          src="/cloud1.webp" width={600}
          alt=""
          className="absolute z-10 left-0 top-[-50%]"
        />
      </div>
      <div className="flex flex-col md:justify-center md:flex-row z-50">
        <img src="/Tv3.gif" alt="" className="z-20" />

        <div className="flex flex-col self-center z-20">
          <a
            target="__blank"
            href="/Amarilla-Cristian-CV-Desarrollo-web full-stack (2).pdf"
            className="bg-black/50 p-4  glow-effect text-white text-center glow-text mb-10"
          >
            Descargar CV
          </a>
          <div className="flex ">
            <a
              href="https://www.linkedin.com/in/amarillacristian/"
              target="__blank"
            >
              <img
                src="/Linkedin.webp"
                alt=""
                className="w-[80px] h-[80px] md:w-[200px] md:h-[200px]"
              />
            </a>
            <a href="https://www.behance.net/cristiaamarill" target="__blank">
              <img
                src="/Behance.webp"
                alt=""
                className="w-[80px] h-[80px] md:w-[200px] md:h-[200px]"
              />
            </a>
            <a href="https://github.com/Cristianyelmo" target="__blank">
              <img
                src="/Github.webp"
                alt=""
                className="w-[80px] h-[80px] md:w-[200px] md:h-[200px]"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;

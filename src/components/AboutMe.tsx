import { useEffect } from "react";
import useVisibilityTracker from '../hooks/useIsVisible';
import { MainHook } from "../Context/MainContext"; 

function AboutMe() {
  const { visibility, elementRefs } = useVisibilityTracker();
  const { setTextchibi } = MainHook();

  useEffect(() => {
    if (visibility.sobreMi) {
      console.log("El componente Contacto está visible en pantalla sobre mi");
      setTextchibi(
        'Aunque siempre busca aprender de manera FullStack, cuando buscó trabajo, la mayoría sentía que su fuerte era en Front-End.'
      );
    }
  }, [visibility.sobreMi, setTextchibi]);

  return (
    <div ref={elementRefs.sobreMi} id="sobreMi"  className="md:min-h-screen relative" >
      <h1 className="text-white glow-text text-center text-4xl">Sobre mi</h1>
      <img src="/cloud2.webp" width={700} alt="decorative" className="absolute z-10 right-0 md:top-0" />
      <div  className="flex justify-center items-center md:h-screen" >
      <section className="flex flex-col md:justify-center md:flex-row items-center ">
      
      {/*   <div className="relative flex justify-center items-center">
           <img src="/marco.webp" alt="decorative" width={453} height={600} className="absolute z-30 w-[453px]" />
          <img src="/ssaaas.webp" alt="decorative" width={253} height={600} className="absolute z-20 w-[300px]" />
          <img src="/marco1.webp" alt="decorative" width={453} height={600} className="z-10 w-[453px]" /> 
          <img src="/xc (1).webp" alt="" width={300} height={300} className="z-20"/>
        </div> */}
        <img src="/perfil.webp" alt="" width={300} height={300} className="z-20"/>
        <div className="bg-black/40 glow-effect max-w-[500px] z-20 h-full text-center flex justify-center items-center p-3 m-3">
          <p className="text-white glow-text font2">
            Hace más de un año que estoy en este camino de la programación, estudié en Digital House gracias a la beca de
            Formar y desde ahí seguí mi camino autodidacta haciendo proyectos propios. En marzo pude conseguir mi primer
            trabajo como programador Front-End aunque duró solo 2 meses, tuve una experiencia buena y sigo manteniendo
            contacto haciendo trabajos freelance mientras iba creando mi nuevo portafolio. Además de eso, tengo
            conocimiento en programas de edición, 3D y diseño UX/UI.
          </p>
        </div>
      </section>
      </div>
    </div>
  );
}

export default AboutMe;



import Resizable from "./Carousel";

function Contact() {

  



  return (
    <div className="overflow-hidden mt-20 h-screen w-full">
 

    

<h1 className="text-white glow-text text-center text-4xl">Contacto</h1>

<div className="relative md:top-[-30%] z-10">
<img src="/cloud.png" alt="" className="absolute z-10 left-[50%] top-[-120%]" />

</div>


<div className="relative md:top-[-30%] z-10">
<img src="/cloud.png" alt="" className="absolute z-10 right-[50%] top-[-120%]" />

</div>
<div className="flex flex-col md:justify-center md:flex-row   z-20">

    <img src="/TV.webp" alt="" className="z-20" />
    <div className="flex flex-col self-center z-20">
    <div className="bg-black/50 p-4 text-white text-center glow-text mb-10">Descargar CV</div>
    <div className="flex ">
    <img src="/Linkedin.webp" alt="" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
    <img src="/Behance.webp" alt="" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
    <img src="/Github.webp" alt="" className="w-[100px] h-[100px] md:w-[200px] md:h-[200px]"/>
    
    </div>
    </div>
</div>


    </div>
  );
}

export default Contact;
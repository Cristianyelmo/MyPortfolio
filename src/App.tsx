import "./App.css";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modelsx from "./components/Chibi";
import { MainHook } from "./Context/MainContext";
import { useEffect, useState} from "react";
import Typewriter from "./components/Typewriter";

function App() {
  const { textChibi, playText, Playbutton, setPlayText,setClipname,isVisible, setIsVisible,scrollToTop } = MainHook();

  const body = document.body;

  useEffect(() => {
    let timeoutId;

    timeoutId = setTimeout(() => {
      setPlayText(true);
      setClipname(10);
      setIsVisible(false)
      setClassname('hidden')
    }, 1800);

    return () => {
      clearTimeout(timeoutId);
    };
  }, []); 



  useEffect(() => {
    if (playText) {
      body.classList.add("overflow-y-hidden");
    } else {
      body.classList.remove("overflow-y-hidden");
    }
  }, [playText]);


const [classname,setClassname]=useState('')
  
  useEffect(()=>{
    let timeoutId;

    timeoutId = setTimeout(() => {
      
      setClassname('test')
      document.body.style.backgroundImage = "url('/public/Motivo.webp')";
document.body.style.backgroundRepeat = "repeat";
document.body.style.backgroundSize = "auto";
    }, 1000);

    return () => {
      clearTimeout(timeoutId);
    };
  },[])

  return (
    <div className={``}>
   <div className={`fixed ${classname} z-50 black-background inset-0 bg-black flex justify-center items-center text-white text-center`}>
    cargando...
</div>
   <Modelsx />
      
      <div  className="flex index-button flex-col space-y-4 text-white p-3 fixed bottom-4 right-4">
      
      

      {isVisible && (
        <button className="p-4 bg-black/50 rounded-full"
          onClick={scrollToTop}
         
        >
          ↑
        </button>
      
      )}

<button className="bg-black/90 text-white p-1"
       
       onClick={() => Playbutton()}
     >
       {!playText ? "play" : "stop"}
     </button>
        </div>




      {playText && (
        <div className="breakP z-50 bg-black/60 text-white max-w-[900px] min-h-[100px] p-4 fixed  bottom-4  ">
          {playText && <Typewriter text={textChibi} speed={50} />}
        </div>
      )}

      <Presentation />
      <AboutMe />
      <Technologies />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;

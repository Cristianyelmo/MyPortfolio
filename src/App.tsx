import "./App.css";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modelsx from "./components/Chibi";
import { MainHook } from "./Context/MainContext";
import { useEffect} from "react";
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
     
    }, 500);

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


  return (
    <div className={``}>
   
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

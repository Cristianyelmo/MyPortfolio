import "./App.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modelsx from "./components/Chibi";
import { MainHook } from "./Context/MainContext";
import { useEffect, useRef } from "react";
import Typewriter from "./components/Typewriter";

function App() {
  const { textChibi, playText, Playbutton, setPlayText,setClipname } = MainHook();

  const body = document.body;

  useEffect(() => {
    let timeoutId;

    timeoutId = setTimeout(() => {
      setPlayText(true);
      setClipname('Move02.001')
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
      {/*  <style>
{keyframes}
      </style> */}
      <Header />
      <Modelsx />
      <button
        className="index-button bg-black text-white fixed bottom-4 right-4"
        onClick={() => Playbutton()}
      >
        {!playText ? "play" : "stop"}
      </button>
      {playText && (
        <div className="breakP z-20 bg-black/60 text-white max-w-[900px] min-h-[100px] p-4 fixed bottom-4 z-50 ">
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

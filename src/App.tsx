import "./App.css";
import Header from "./components/Header";
import Presentation from "./components/Presentation";
import AboutMe from "./components/AboutMe";
import Technologies from "./components/Technologies";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Modelsx from "./components/Chibi";
import { MainHook } from "./Context/MainContext";


function App() {
 
  

  const {textChibi,playText} =MainHook()

  const text = textChibi;
  const letterCount = text.split('').length;
console.log(letterCount)

  const keyframes = `
  .animate-writting${letterCount}{
  display: block;
  white-space: nowrap;
  width: ${letterCount}ch;
  animation:escribiendo${letterCount} 10s steps(${letterCount}),
            parpadeo${letterCount} 0.4s infinite alternate;
  overflow: hidden;
  border-right:3px solid
}

@keyframes escribiendo${letterCount} {
  from{
    width: 0;
  }
  
}

@keyframes parpadeo${letterCount}{
  70%{
    border-color: transparent;
  }
}`

  return (
    <div>
      <style>
{keyframes}
      </style>
     <Header/>
      <Modelsx/>
      {playText && <div className=" breakP bg-black text-white w-[100px] h-[100px] fixed bottom-4 z-50">
   <span className={`animate-writting${letterCount}`}>{textChibi}</span>
      </div>}

      <Presentation />
      <AboutMe/>
      <Technologies/>
      <Projects/>
      <Contact/>
    </div>
  
      
   

  );
}

export default App;

import React, { createContext, useContext, ReactNode, useState,useRef } from "react";

interface MainContextType {
  Technologies: Array<{ name: string; image: string }>;
  valueProject:
    | {
        name: string;
        texto: string;
        Link: string;
        size: number;
        marco: string;
        tecnologias: string[];
      }
    | null
    | undefined;
  ArrayProject: Array<{
    name: string;
    texto: string;
    Link: string;
    size: number;
    marco: string;
    tecnologias: string[];
  }>;
  FindProject: (name: string) =>
    | {
        nombre: string;
        texto: string;
        Link: string;
        size: number;
        marco: string;
        tecnologias: string[];
      }
    | undefined;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  textChibi: string;
  setTextchibi: (open: string) => void;
  clipname: number;
  playText: boolean;
  setPlayText: (open: boolean) => void;
  setClipname: (open: number) => void;
  Playbutton: () => void;
  isVisible: boolean;
  setIsVisible: (open: boolean) => void;
  scrollToTop:() => void;
  closeProjectModal:() => void;
  videoRef: React.RefObject<HTMLVideoElement>;
}
export const MainContext = createContext<MainContextType | null>(null);
export const MainHook = () => {
  const context = useContext(MainContext);

  if (context == null) {
    throw new Error("useMainContext must be used within a MainProvider");
  }

  return context;
};

interface MyProviderProps {
  children: ReactNode;
}

export const MainProvider: React.FC<MyProviderProps> = ({ children }) => {
  const Technologies = [
    { name: "Javascript", image: "Javascript" },
    { name: "Firebase", image: "Firebase" },
    { name: "MySQL", image: "MySQL" },
    { name: "Postgresql", image: "Postgresql" },
    { name: "Prisma", image: "Prisma" },
    { name: "Tailwind CSS", image: "Tailwind CSS" },
    { name: "Postman", image: "Postman" },
    { name: "React Js", image: "React" },
    { name: "Node Js", image: "NodeJs" },
    { name: "Figma", image: "Figma" },
    { name: "Next Js", image: "Next Js" },
    { name: "PHP", image: "PHP" },
    { name: "Vite", image: "Vite" }
  ];

  const ArrayProject = [
    {
      name: "MangaLomas",
      size: 500,
      texto:
        "Manga Lomas es un e-commerce con estética de manga y anime, es un proyecto que tiene una base de datos PostgreSQL con Prisma y React de Front-end",
      Link: "https://manga-lomas.vercel.app/",
      marco: "marco1-2 (3)",
      tecnologias: ["Javascript","React", "Postgresql", "Postman","NodeJs","Figma","Next Js"]
    },
    {
      name: "Petmaker",
      size: 500,
      texto: "Pet Maker es un proyecto donde puedes crear una mascota y ponerle accesorios: color, anteojos, remera y nombre,está hecho con Next JS usando la base de datos de Firebase No SQL",
      Link: "https://pet-maker.vercel.app/",
      marco: "marco1-2 (4)",
      tecnologias: ["Javascript", "Firebase","React","NodeJs","Next Js"]
    },
    {
      name: "The Boys",
      size: 300,
      texto: "The Boys es una landing donde puedes elegir a los personajes de la serie y ver sus detalles y la diferencia del cómic y la serie",
      Link: "https://the-boys-frontend.vercel.app/",
      marco: "marco1-2 (2)",
      tecnologias: ["Javascript","React","Next Js"]
    },
    {
      name: "Intensamente",
      size: 500,
      texto: "Intensamente, es un proyecto inspirado en la película donde te puedes sacar fotomatones y te detecta la emoción de tu rostro. Está hecha con la API de IA Face API",
      Link: "https://intensamente-sable.vercel.app/",
      marco: "marco1-2 (5)",
      tecnologias: ["Javascript","React","Figma","Vite"]
    },
  ];

  interface Project {
    name: string;
    texto: string;
    Link: string;
    size: number;
    marco: string;
    tecnologias:string[]
  }

  const [valueProject, setValueProject] = useState<Project | null>();

  const FindProject = (name: string) => {
    const find = ArrayProject.find((item) => item.name === name);

    setOpenModal(true);
    if (find) {
      setValueProject(find);
    } else {
      return undefined;
    }
  };

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [textChibi, setTextchibi] = useState<string>("hola como estan mi nombre es mono,y voy a mostrarte cada detalle de mi portfolio");

  const [clipname, setClipname] = useState(6);

  const [playText, setPlayText] = useState(false);

 
  const [isVisible, setIsVisible] = useState(false);
  

 
  const Playbutton = () => {
    setPlayText((prevState) => !prevState);
   
    if (!playText) {
      
    
      setClipname(10);
      setIsVisible(false);
    } else {
      setClipname(6);
      
   
    }

    







  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  
    setClipname(5)
  };

  
  const videoRef = useRef<HTMLVideoElement | null>(null);
  const closeProjectModal =()=>{
    setOpenModal(false);
    if(videoRef.current){
    videoRef.current.pause(); 
      videoRef.current.currentTime = 0; 
    }
  }
  return (
    <MainContext.Provider
      value={{
        Technologies,
        valueProject,
        FindProject,
        ArrayProject,
        openModal,
        setOpenModal,
        textChibi,
        setTextchibi,
        clipname,
        setClipname,
        playText,
        setPlayText,
        Playbutton,
        isVisible,
        setIsVisible,
        scrollToTop,
        videoRef,
        closeProjectModal,
       
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

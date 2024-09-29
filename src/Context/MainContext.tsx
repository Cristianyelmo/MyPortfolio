import React, { createContext, useContext, ReactNode, useState } from "react";

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
    { name: "Javascript", image: "/Javascript.webp" },
    { name: "Firebase", image: "/Firebase.webp" },
    { name: "MySQL", image: "/MySQL.webp" },
    { name: "Postgresql", image: "/Postgresql.webp" },
    { name: "Prisma", image: "/Prisma.webp" },
    { name: "Tailwind CSS", image: "/Tailwind CSS.webp" },
    { name: "Postman", image: "/Postman.webp" },
    { name: "React Js", image: "/React.webp" },
    { name: "Node Js", image: "/NodeJs.webp" },
    { name: "Figma", image: "/Figma.webp" },
    { name: "Next Js", image: "/Next Js.webp" },
    { name: "PHP", image: "/PHP.webp" },
    { name: "Vite", image: "/Vite.webp" }
  ];

  const ArrayProject = [
    {
      name: "MangaLomas",
      size: 500,
      texto:
        "Manga Lomas es un ecommerce con estetica de manga e anime,es un proyecto que tiene una base de datos Postgresql con Prisma y React de Frontend ",
      Link: "https://manga-lomas.vercel.app/",
      marco: "marco1-2 (3)",
      tecnologias: ["Javascript","React", "Postgresql", "Postman","NodeJs","Figma","Next Js"]
    },
    {
      name: "Petmaker",
      size: 500,
      texto: "Pet Maker es un proyecto donde podes crear una mascota y ponerle accesorios,color,anteojos,remera y nombre,esta hecho con Next JS usando la base de datos de FireBase NoSQL",
      Link: "https://pet-maker.vercel.app/",
      marco: "marco1-2 (4)",
      tecnologias: ["Javascript", "Firebase","React","NodeJs","Next Js"]
    },
    {
      name: "The Boys",
      size: 300,
      texto: "The Boys es una landing donde podes elegir a los personaje de la serie y ver sus detalles y la diferencia de los comic y la serie",
      Link: "https://the-boys-frontend.vercel.app/",
      marco: "marco1-2 (2)",
      tecnologias: ["Javascript","React","Next Js"]
    },
    {
      name: "Intensamente",
      size: 500,
      texto: "Intensamente es un proyecto inspirado en la pelicula donde te podes sacar fotomatones y te detecta la emocion de tu rostro,esta hecha con la API de IA Face API",
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

  const [textChibi, setTextchibi] = useState<string>("Hola como estannnnn");

  const [clipname, setClipname] = useState(6);

  const [playText, setPlayText] = useState(false);

  console.log(playText);
  const [isVisible, setIsVisible] = useState(false);
  const Playbutton = () => {
    setPlayText((prevState) => !prevState);

    if (!playText) {
      setClipname(10);
      setIsVisible(false);
    } else {
      setClipname(6);
    }

    /*  if(!playText){
setTimeout(() => {
 
  setClipname('Move01')
}, (209 * 50) + 2200);
}  */







  };


  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth', 
    });
  
    setClipname(5)
  };

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
        scrollToTop 
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

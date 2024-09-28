import React, { createContext, useContext, ReactNode, useState } from "react";

interface MainContextType {
  Technologies: Array<{ name: string; image: string }>;
  valueProject:
    | { name: string; texto: string; Link: string; size: number; marco: string }
    | null
    | undefined;
  ArrayProject: Array<{
    name: string;
    texto: string;
    Link: string;
    size: number;
    marco: string;
  }>;
  FindProject: (
    name: string
  ) =>
    | {
        nombre: string;
        texto: string;
        Link: string;
        size: number;
        marco: string;
      }
    | undefined;
  openModal: boolean;
  setOpenModal: (open: boolean) => void;
  textChibi:String;
  setTextchibi: (open: string) => void;
  clipname:string;
  playText:boolean;
  setPlayText :(open: boolean) => void;
  setClipname:(open: string) => void;
  Playbutton: () => void;
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
  ];

  const ArrayProject = [
    {
      name: "MangaLomas",
      size: 500,
      texto: "fgdfgdfgdgdfgfdgdg",
      Link: "https://manga-lomas.vercel.app/",
      marco: "marco1-2 (3)",
    },
    {
      name: "Petmaker",
      size: 500,
      texto: "fgdfgdfgdgdfgfdgdg",
      Link: "https://pet-maker.vercel.app/",
      marco: "marco1-2 (4)",
    },
    {
      name: "The Boys",
      size: 300,
      texto: "fgdfgdfgdgdfgfdgdg",
      Link: "https://the-boys-frontend.vercel.app/",
      marco: "marco1-2 (2)",
    },
    {
      name: "Intensamente",
      size: 500,
      texto: "fgdfgdfgdgdfgfdgdg",
      Link: "https://intensamente-sable.vercel.app/",
      marco: "marco1-2 (5)",
    },
  ];

  interface Project {
    name: string;
    texto: string;
    Link: string;
    size: number;
    marco:string
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

  const [textChibi,setTextchibi]= useState<string>('Hola como estannnnn');


  const [clipname,setClipname] = useState('Move01')

const [playText,setPlayText]= useState(false);



const Playbutton = ()=>{

  setPlayText(prevState => !prevState);


  if(!playText){
  setClipname('Move02.001')
}else{
  setClipname('Move01')
}

if(!playText){
setTimeout(() => {
  setPlayText(false)
  setClipname('Move01')
}, 11000);
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
        textChibi,setTextchibi,
        clipname,setClipname,
        playText,setPlayText,
        Playbutton
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

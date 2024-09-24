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

  return (
    <MainContext.Provider
      value={{
        Technologies,
        valueProject,
        FindProject,
        ArrayProject,
        openModal,
        setOpenModal,
      }}
    >
      {children}
    </MainContext.Provider>
  );
};

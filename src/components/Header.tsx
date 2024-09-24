function Header() {
    return (
   
     <header className="p-4 hidden md:block">
    <nav className="flex justify-center">
      <ul className="flex text-white glow-text space-x-10 text-2xl">
        <li><a href="#home">Inicio</a></li>
        <li><a href="#about">Sobre mi</a></li>
        <li><a href="#services">Tecnologias</a></li>
        <li><a href="#services">Proyectos</a></li>
        <li><a href="#contact">Contacto</a></li>
      </ul>
    </nav>
  </header>
  
  
    );
  }
  
  export default Header;
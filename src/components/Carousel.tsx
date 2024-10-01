import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MainHook } from "../Context/MainContext";



function Carousel() {
    const {FindProject,ArrayProject} =MainHook()

  const [width, setWidth] = useState<number>();
const widthResponsive = window.innerWidth
  
  useEffect(()=>{
    setWidth(widthResponsive < 600 ? 300 :1000)
  },[])
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: window.innerWidth < 600 ? 1 : 3,
    slidesToScroll: 1
  };
  return (
    <div className="slider-container z-20">
      
    
      <div
        style={{
          width: width + "px",
         
        }}
      >
        <Slider {...settings}>
        {ArrayProject.map((item,index)=>(
          <div className="" key={index} >
       

       
            <div className="flex flex-col items-center">
                <div className="relative">
            <img src="/marco1-2.webp" alt="" width={900} height={900} className="z-20  absolute"/>
            <img src={`/${item.marco}.webp`} alt="" width={900} height={900} className="z-10"/>
            </div>
           <img src={`/${item.name}.webp`} alt="" width={item.size} height={item.size}/>
           <button className="text-white glow-text bg-black/40 p-4" onClick={()=>FindProject(item.name)}>Ver</button>
            </div>
          
          </div>
           ))}
        </Slider>
      </div>
    </div>
  );
}

export default Carousel;

import { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { MainHook } from "../Context/MainContext";
function SamplePrevArrow(props:any) {
  const {onClick } = props;

 
  return (
      
    <div
      className=" bg-black/70 rounded-full w-[50px] h-[50px] cursor-pointer glow-effect absolute text-2xl text-white flex justify-center items-center z-20 bottom-[50%] left-0"
      onClick={onClick}
    >

&lt;
    </div>
  );
}
function SampleNextArrow(props:any) {
  const {onClick } = props;
  
  return (
      <div
      className=" bg-black/70 rounded-full w-[50px] h-[50px] cursor-pointer glow-effect text-2xl absolute text-white flex justify-center items-center z-20 bottom-[50%] right-0"
      onClick={onClick}
    >

&gt;
    </div>
  );
}


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
    slidesToScroll: 1,
    
    nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />
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

import { MainHook } from "../Context/MainContext";


function Technologies() {

const {Technologies} = MainHook()

  return (
    <div className="overflow-hidden  w-full">
  

<h1 className="text-white glow-text text-center text-4xl">Tecnologias</h1>
<section className="flex justify-center items-center grid md:grid-cols-4 grid-cols-3 gap-4 p-5">
{
   Technologies && Technologies.map((tech,index)=>(
    <div className="flex flex-col text-center items-center text-white glow-text" key={index}>
      <img src={tech.image} alt="" width={150} height={150}/>
      <p>{tech.name}</p>
    </div>
   ))
}
 
</section>




    </div>
  );
}

export default Technologies;

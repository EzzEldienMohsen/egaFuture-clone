import { arr, arrFooter } from "../assets";
import { Table } from "../subcomponent";
const ComplexFirstSection = () => {
  return (
    <>
     
      <h1 className="text-[#ffffffc6] text-xl md:text-2xl lg:text-3xl text-start font-lato font-semibold mb-2">
        Noticias para usuarios de EGA Futura 📢
      </h1>
      <div className="flex flex-col justify-start items-start font-lato">
        {arr.map((c) => {
          return <Table key={c.id} c={c} />;
        })}
      </div>
      <div className="flex flex-col justify-start items-start font-lato mt-4">
        {arrFooter.map((c) => {
          return <Table key={c.id} c={c} />;
        })}
      </div>
    </>
  );
}

export default ComplexFirstSection
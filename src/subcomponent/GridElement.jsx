import { gridCheckMark, gridElements } from '../assets';

const GridElement = () => {
  return (
    <div className="grid-section py-6 md:py-10 lg:py-14 px-2 text-center justify-center items-center md:px-4 lg:px-14 flex-flex-col bg-[#f5f5f5]">
      <h2 className="text-[#f39019] font-lato text-xl md:text-3xl lg:text-5xl font-bold my-1 md:my-3">
        Te ayudamos a crecer y a vender más 📈
      </h2>
      <p className=" my-1 md:my-3 text-center">
        Aumenta la productividad de tu negocio con un sistema de gestión
        comercial fácil de usar, y con toda la funcionalidad que necesitas para
        potenciar tu éxito
      </p>
      <div className="my-4 md:my-6 flex flex-col justify-start items-start px-3 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-2">
        {gridElements.map((e) => {
          return (
            <div key={e} className="flex  items-center">
              <img
                src={gridCheckMark}
                alt="logo"
                className="w-2 md:w-4 lg:w-6 mr-2 md:mr-4 lg:mr-6"
              />
              <p className="font-thin text-start text-sm md:text-sm lg:text-md">{e}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridElement;

import React from 'react'
import AOS from 'aos';

const BlueSection = () => {
    React.useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div className="blue py-8 md:py-14 px-6">
      <div className="flex justify-center items-center flex-col md:justify-start md:items-start md:mb-10 md:mx-6">
        <h2
          data-aos="fade-up"
          data-aos-debug="true"
          data-aos-duration="3000"
          className="text-[#fffffff4] font-bold text-xl md:tex-2xl lg:text-3xl md:w-3/5"
        >
          Toma el Control de tu Empresa con el Sistema de Gestión, Facturación y
          Stock de EGA Futura
        </h2>
        <p
          data-aos="fade-up-right"
          data-aos-debug="true"
          data-aos-duration="1500"
          className="text-[#ffffffca] font-semibold text-md md:text-lg lg:text-xl mt-10 md:w-3/5"
        >
          Es instalado más de 60.000 veces al año, y además es muy fácil de
          usar, se configura en minutos y no requiere de capacitación previa
          para su funcionamiento
        </p>
        <div
          data-aos="fade-down-left"
          data-aos-debug="true"
          data-aos-duration="3000"
          className="flex flex-col justify-center items-center md:w-3/5 mt-10"
        >
          <div className=" rounded-3xl py-3 px-2 text-[#ffffffca] border-[2px] border-[#ffffffae] hover:border-white">
            Quiero mi Software Gratis Ahora 🎁
          </div>
          <p className="text-[#ffffffca] text-sm md:text-md lg:text-lg text-center mt-10">
            👉 Descárgalo full Totalmente Gratis, sin la necesidad de ingresar
            datos de tarjetas de crédito ni tener que pagar absolutamente nada
          </p>
        </div>
      </div>
    </div>
  );
}

export default BlueSection
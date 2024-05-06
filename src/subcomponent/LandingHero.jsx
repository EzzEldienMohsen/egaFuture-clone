import React from 'react'
import { Link } from 'react-router-dom';
import AOS from 'aos';

const LandingHero = () => {
   React.useEffect(() => {
     AOS.init();
   }, []);
  return (
    <div className="h-[60vh] md:h-[120vh] lg:h-auto flex relative flex-col justify-evenly items-center w-full landing-hero py-12 md:py-20 lg:py-32">
      <h1
        data-aos="fade-up-left"
        data-aos-debug="true"
        data-aos-duration="2000"
        className="text-[#FFFFFFF2] mt-8 md:mt-4 lg:mt-0 lg:w-4/5 text-3xl md:text-5xl lg:text-7xl text-center font-lato font-bold"
      >
        Software de Gestión Empresarial
      </h1>
      <p
        data-aos="fade-down-right"
        data-aos-debug="true"
        data-aos-duration="2000"
        className="the-para-shade mb-[120px] my-6 md:mb-6 text-lg font-bold font-lato md:text-xl lg:text-2xl px-8 py-6 w-5/6 md:w-3/5 text-center text-white"
      >
        Ahora tu PyME va a crecer, vas a tener todo organizado, y mucho más
        tiempo para vender y hacer negocios
      </p>
      <Link
        to="/"
        className="mt-8 lg:mt-12 hidden lg:flex justify-center items-center"
      >
        <button className="hero-btn   text-white text-center cursor-pointer font-semibold font-lato text-4xl rounded-[60px] px-8 py-2 w-4/5 shadow-lg hover:scale-125 hover:shadow-2xl">
          Quiero potenciar mi Empresa 🚀
        </button>
      </Link>
      <p
        data-aos="zoom-in"
        data-aos-debug="true"
        data-aos-duration="2000"
        className="absolute p-4 md:px-10 md:py-4 lg:px-28 lg:py-6 text-white font-normal text-center font-lato text-lg md:text-xl lg:text-xl text hero-footer bottom-0 mt-10"
      >
        Nuestro software de gestión empresarial es muy simple y fácil de usar,
        se configura en minutos, y todos los años es instalado por más de 60.000
        empresas 😃
      </p>
    </div>
  );
}

export default LandingHero
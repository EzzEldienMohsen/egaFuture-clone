
const Landing = () => {
  return (
    <div className="h-[100vh] flex flex-col justify-center items-center w-full landing-hero">
      <h1
        data-aos="fade-up"
        data-aos-debug="true"
        data-aos-duration="8000"
        className="text-[#FFFFFFF2] md:mt-12  lg:w-4/5  text-3xl md:text-5xl lg:text-7xl text-center font-lato font-bold"
      >
        Software de Gestión Empresarial
      </h1>
      <p
        data-aos="fade-down"
        data-aos-debug="true"
        data-aos-duration="8000"
        className="the-para-shade my-6 text-lg font-bold font-lato md:text-xl lg:text-2xl px-8 py-6 w-5/6 md:w-3/5 text-center text-[white]"
      >
        Ahora tu PyME va a crecer, vas a tener todo organizado, y mucho más
        tiempo para vender y hacer negocios
      </p>
    </div>
  );
}

export default Landing
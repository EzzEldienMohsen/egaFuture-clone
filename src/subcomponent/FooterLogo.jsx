import { Link } from 'react-router-dom';
import { logo } from './../assets/index';
const FooterLogo = () => {
  return (
    <div className="flex justify-start  items-center footer-logo p-16">
      <img
        src={logo}
        alt="logo"
        className="w-20 h-20 md:w-28 md:h-28 lg:w-32 lg:h-32 mr-4 md:mr-6 lg:mr-8"
      />
      <div className="flex flex-col justify-start items-start">
        <Link to="/" className="mb-3">
          <h1 className="text-[#FFFFFFDB] font-lato font-extrabold text-xl tracking-widest md:text-3xl lg:text-5xl">
            EGA Future
          </h1>
        </Link>
        <p className="text-sm md:text-xl lg:text-2xl font-lato font-light tracking-wide text-[white] opacity-50">
          Software de Gestión Empresarial en la Nube [fácil de usar]
        </p>
      </div>
    </div>
  );
}

export default FooterLogo
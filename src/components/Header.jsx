import React  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { headerLinks, logo } from '../assets';
import { Link } from 'react-router-dom';


const Header = () => {
  React.useEffect(() => {
        AOS.init();
      }, [])
  return (
    // The FIXED BACKGROUND DIV
    <div className="fixed top-0 left-0 headerClass px-2 w-full">
      {/* THE MOTION PARENT DIV */}
      <div data-aos="fade-down" className="flex justify-between items-center">
      {/* THE LOGO DIV */}
        <div className='flex gap-4 justify-evenly items-center'>
        <img src={logo} alt="logo" className="hidden lg:block w-12 h-12"/>
        <h1 className='font-lato text-xl md:text-2xl lg:text-3xl font-semibold text-[#ffffffed]'>
          EGA Future
        </h1>
        </div>
        {/* NAV BAR */}
        <ul className='list-none font-man w-2/3 hidden lg:flex justify-between items-center gap-6'>
          {headerLinks.map((li)=>{
            return (
              <Link key={li.text} to={li.to}>
                <li className="font-lato lg:text-xl font-light text-[#ffffffff] hover:border-2 hover:btn hover:btn-ghost hover:text-white hover:border-white hover:btn-block  hover:bg-[blur-md] hover:text-xl ">
                  {li.text}
                </li>
              </Link>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Header;

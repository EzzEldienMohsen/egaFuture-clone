import React  from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import { Logo, Menu, NavBar } from '../subcomponent';


const Header = () => {
  React.useEffect(() => {
        AOS.init();
      }, [])
  return (
    // The FIXED BACKGROUND DIV
    <div className="fixed top-0 left-0 headerClass px-5 w-full">
      {/* THE MOTION PARENT DIV */}
      <div data-aos="fade-down" className="flex justify-between items-center">
        {/* THE LOGO DIV */}
        <Logo/>
        {/* NAV BAR */}
        <NavBar/>
        {/* Menu */}
        <Menu/>
      </div>
    </div>
  );
};

export default Header;

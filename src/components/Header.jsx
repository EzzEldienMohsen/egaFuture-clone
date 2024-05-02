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
    <div 
    data-aos="fade-down"
    data-aos-debug="true"
    data-aos-duration="2000"
    className="flex fixed z-10 top-0 left-0 headerClass px-5 w-full justify-between items-center"
    >
      {/* THE MOTION PARENT DIV */}
    
        {/* THE LOGO DIV */}
        <Logo />
        {/* NAV BAR */}
        <NavBar />
        {/* Menu */}
        <Menu />
      </div>
    
  );
};

export default Header;

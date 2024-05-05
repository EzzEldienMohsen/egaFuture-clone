import { LandingHero } from '../subcomponent';

const Landing = () => {
  return (
    <>
      <LandingHero/>
      <div className="bg-[#d8c5c5] shadow-gray flex md:flex-col lg:flex py-3 px-6 justify-evenly md:justify-start lg:justify-between items-center md:items-start lg:items-center">
        <div className='flex flex-col md:flex-row justify-between items-stretch md:justify-evenly md:items-center'></div>
        <div className='flex flex-col md:flex-row justify-between items-stretch md:justify-evenly md:items-center md:ml-7 lg:ml-0'></div>
      </div>
    </>
  );
};

export default Landing;

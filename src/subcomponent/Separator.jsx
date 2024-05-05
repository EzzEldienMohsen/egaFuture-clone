import { sDiv, win } from '../assets';

const Separator = () => {
  return (
    <div className="bg-[#d8c5c5] shadow-gray the-shadow flex md:flex-col lg:flex-row py-3 px-6 justify-evenly md:justify-start lg:justify-between items-center md:items-start lg:items-center overflow-x-hidden">
      <div className="flex flex-col h-[235px] md:h-auto md:flex-row justify-between md:my-4 lg:my-0 lg:justify-evenly  md:w-11/12 lg:w-1/2 md:justify-between md:items-center">
        {win.map((l) => {
          return (
            <img
              key={l.id}
              src={l.winLogo}
              alt="logo"
              className="w-32 hover:scale-105 "
            />
          );
        })}
      </div>
      <div className="flex flex-col  h-[235px] md:h-auto md:flex-row justify-between  md:justify-between lg:justify-evenly md:w-11/12 lg:w-1/2 md:items-center md:ml-16 lg:ml-0">
        {sDiv.map((l) => {
          return (
            <img
              key={l.id}
              src={l.sDivLog}
              alt="logo"
              className={`hover:scale-105 ${l.id === 1 ? 'w-24 md:w-32' : ''} ${l.id === 2 ? 'w-24 md:w-32' : ''}${l.id === 3 ? 'w-16  ' : ''} ${l.id === 4 ? 'w-16' : ''}`}
            />
          );
        })}
      </div>
    </div>
  );
}

export default Separator
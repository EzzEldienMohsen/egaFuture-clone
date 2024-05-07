import { motion } from 'framer-motion';
import { cards, hiddenPara, longDiv, yearVariant } from '../assets';
import React from 'react';
import AOS from 'aos';

const Cards = () => {
  React.useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos="flip-up"
      data-aos-debug="true"
      data-aos-duration="3000"
      data-aos-anchor-placement="top-bottom"
      className="flex flex-col justify-center items-center px-4 py-4 md:grid md:grid-cols-3 md:px-2 lg:px-6 md:gap-4 lg:gap-6 "
    >
      {cards.map((card) => {
        return (
          <div
            key={card.id}
            className={`${card.div} h-[600px] w-full md:w-auto relative my-6 md:my-0`}
          >
            <motion.div
              variants={longDiv}
              initial={longDiv.initial}
              whileHover={longDiv.hover}
              className={`${card.hiddenDiv} absolute bottom-0 left-0 w-full flex flex-col justify-between items-center `}
            >
              <div
                className={`${card.titleDiv} text-center font-lato text-md md:text-lg lg:text-xl text-white font-normal tracking-wide w-full py-2 px-4  `}
              >
                {card.title}
              </div>
              <div className="text-black px-4 text-sm md:text-md lg:text-lg font-lato font-light mt-2 mb-4">
                {card.text}
              </div>
              <motion.div
                variants={hiddenPara}
                initial={hiddenPara.initial}
                whileHover={hiddenPara.final}
                className="flex flex-col justify-between items-center relative w-full h-[300px]"
              >
                <div className="text-black px-4 text-xs md:text-sm lg:text-md font-lato font-thin">
                  {card.hText}
                </div>
                <button className="button">{card.btn}</button>
              </motion.div>
              <motion.div
                variants={yearVariant}
                initial={yearVariant.initial}
                whileHover={yearVariant.final}
                className={`text-[#ffffffba] ${card.yearColor} w-full py-2 text-center font-lato text-md md:text-lg lg:text-xl`}
              >
                {card.year}
              </motion.div>
            </motion.div>
          </div>
        );
      })}
    </div>
  );
};

export default Cards;

import { motion } from 'framer-motion';
import { cards, longDiv } from '../assets';

const Cards = () => {
  return (
    <div className="flex flex-col justify-center items-center px-4 py-4 md:grid md:grid-cols-3 md:px-2 lg:px-6 md:gap-4 lg:gap-6 ">
      {cards.map((card)=>{
        return (
          <div
            key={card.id}
            className={`${card.div} h-[420px] relative `}
          >
            <motion.div
              variants={longDiv}
              initial={longDiv.initial}
              whileHover={longDiv.hover}
              className={`${card.hiddenDiv} absolute bottom-0 left-0 w-full`}
            >
              hhhhhhh
            </motion.div>
          </div>
        );
      })}
    </div>
  );
}

export default Cards
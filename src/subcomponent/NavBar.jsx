import { headerLinks } from '../assets';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <ul className="list-none font-man w-2/3 hidden lg:flex justify-between items-center gap-6">
      {headerLinks.map((li, index) => {
        return (
          <Link key={li.text} to={li.to}>
            <li
              className={`${
                index === headerLinks.length - 1
                  ? 'rounded-3xl font-lato text-xl font-light text-[#ffffffff] shadow-md bg-[#58a60a] px-5 py-2 hover:scale-125 hover:shadow-xl'
                  : 'font-lato lg:text-xl font-light text-[#ffffffff] hover:border-2 hover:btn hover:btn-ghost hover:rounded-xl hover:text-white hover:border-white hover:btn-block  hover:bg-[blur-md] hover:text-xl'
              } `}
            >
              {li.text}
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default NavBar
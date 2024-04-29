import { headerLinks } from '../assets';
import { Link } from 'react-router-dom';
import { IoReorderThreeOutline } from 'react-icons/io5';

const Menu = () => {
  return (
    <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn m-1 btn-ghost bg-[blur-md]"
          >
            <IoReorderThreeOutline className="text-white text-3xl" />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content justify-center items-center z-[1] menu p-2 shadow bg-black rounded-box w-[95vw]"
          >
            {headerLinks.map((li, index) => {
              return (
                <Link key={li.text} to={li.to}>
                  <li
                    className={`${
                      index === headerLinks.length - 1
                        ? 'rounded-3xl font-lato my-3 text-xl font-light text-[#ffffffff] shadow-md bg-[#58a60a] px-5 py-2 hover:scale-125 hover:shadow-xl'
                        : 'font-lato lg:text-xl my-3 font-light text-[#ffffffff] hover:border-2 hover:btn hover:btn-ghost hover:text-white hover:border-white hover:btn-block  hover:bg-[blur-md] hover:text-xl'
                    } `}
                  >
                    {li.text}
                  </li>
                </Link>
              );
            })}
          </ul>
        </div>
  )
}

export default Menu
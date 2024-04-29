import { Link } from "react-router-dom";
import { logo } from "../assets";

const Logo = () => {
  return (
    <Link to="/">
          <div className="flex gap-4 justify-evenly items-center">
            <img src={logo} alt="logo" className="hidden lg:block w-12 h-12" />
            <h1 className="font-lato text-xl md:text-2xl lg:text-3xl font-semibold text-[#ffffffed]">
              EGA Future
            </h1>
          </div>
        </Link>
  )
}

export default Logo
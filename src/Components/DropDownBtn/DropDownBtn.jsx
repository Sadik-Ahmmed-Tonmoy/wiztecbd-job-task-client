import { GoChevronDown } from "react-icons/go";
import { Fade } from "react-awesome-reveal";
import { NavLink } from "react-router-dom";
import AOS from "aos";
import "aos/dist/aos.css";
import { AiOutlineMenu } from "react-icons/ai";
import { MdKeyboardArrowDown } from "react-icons/md";
AOS.init();

const DropDownBtn = ({ title, items }) => {
  return (
    <div className="relative group w-min">
      <div className="flex items-center justify-between font-semibold h-11 w-60 ps-5 pe-3 bg-[#F5CCDC] text-[#471D6B] hover:cursor-pointer">
        <div className="flex items-center gap-2">
          <AiOutlineMenu />
          <span>{title}</span>
        </div>
        <MdKeyboardArrowDown />
      </div>

      <div className="absolute top-7 -left-4 hidden pt-5 bg-transparent group-hover:block px-4">
        <ul
          data-aos="fade-up"
          className="first-letter:space-y-4 bg-[#F5CCDC] shadow-2xl rounded-md group-hover:block px-4 py-2"
        >
          {items?.map((item, i) => (
            <Fade key={i} duration="1000">
              <li className="my-2 w-52 rounded-md">
                <NavLink
                  className={({ isActive }) =>
                    isActive ? "text-blue-600 font-bold" : ""
                  }
                >
                 <span className="text-[#471D6B] capitalize">{item}</span>
                </NavLink>
              </li>{" "}
            </Fade>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default DropDownBtn;

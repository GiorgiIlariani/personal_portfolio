import { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from "react-scroll";
import IconLoader from "./IconLoader";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleClick = () => setNav(!nav);

  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-5 bg-[#0a192f] text-gray-300 z-50">
      <div className="w-[40px] text-[#64ffda] cursor-pointer">
        <IconLoader />
      </div>

      {/* menu */}
      <ul className="hidden md:flex">
        <li>
          <span className="text-[#64ffda]">01.</span>{" "}
          <Link
            to="home"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] transition duration-150">
            Home
          </Link>
        </li>
        <li>
          <span className="text-[#64ffda]">02.</span>{" "}
          <Link
            to="about"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] transition duration-150">
            About
          </Link>
        </li>
        <li>
          <span className="text-[#64ffda]">03.</span>{" "}
          <Link
            to="skills"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] transition duration-150">
            Skills
          </Link>
        </li>
        <li>
          <span className="text-[#64ffda]">04.</span>{" "}
          <Link
            to="work"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] transition duration-150">
            Work
          </Link>
        </li>
        <li>
          <span className="text-[#64ffda]">05.</span>{" "}
          <Link
            to="contact"
            smooth={true}
            duration={500}
            className="hover:text-[#64ffda] transition duration-150">
            Contact
          </Link>
        </li>
      </ul>

      {/* Hamburger */}
      <div onClick={handleClick} className="md:hidden z-10">
        {!nav ? <FaBars size={30} /> : <FaTimes size={30} />}
      </div>

      {/* Mobile menu */}
      <ul
        className={
          !nav
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
        }>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="about" smooth={true} duration={500}>
            About
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="work" smooth={true} duration={500}>
            Work
          </Link>
        </li>
        <li className="py-6 text-4xl">
          <Link onClick={handleClick} to="contact" smooth={true} duration={500}>
            Contact
          </Link>
        </li>
      </ul>

      {/* Social icons */}
      <div className="hidden xl:flex fixed flex-col top-[35%] left-0">
        <ul>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-blue-600">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://www.linkedin.com/in/giorgi-ilariani-69869a260/"
              target="_blank">
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#333333]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="https://github.com/GiorgiIlariani"
              target="_blank">
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#6fc2b0]">
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="flex justify-between items-center w-full text-gray-300">
              Email
              <HiOutlineMail size={30} />
            </Link>
          </li>
          <li className="w-[160px] h-[60px] flex justify-between items-center ml-[-103px] hover:ml-[-10px] duration-300 bg-[#565f69]">
            <a
              className="flex justify-between items-center w-full text-gray-300"
              href="/"
              target="_blank">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

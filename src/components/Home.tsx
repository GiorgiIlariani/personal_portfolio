import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div id="home" className="w-full h-screen bg-[#0a192f] xs:pt-0 pt-20">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto flex flex-col justify-center h-full space-y-2 px-5">
        <p className="text-[#64ffda] text-xl py-4">Hi, my name is</p>
        <h1 className="text-[40px] sm:text-7xl font-bold text-[#ccd6f6]">
          Giorgi Ilariani.
        </h1>
        <h2 className="text-[50px] sm:text-7xl font-bold text-[#8892b0]">
          I'm a Frontend Web developer.
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px] mt-2 text-xl">
          A Frontend focused Web Developer building the Frontend of Websites and
          Web Applications that leads to the success of the overall product.
        </p>
        <div>
          <Link to="work" smooth={true} duration={500}>
            <button className="group px-9 py-[15px] mt-6 flex items-center bg-transparent border border-[#64ffda] text-[#64ffda] rounded tracking-wider">
              Check out my work
              <span className="group-hover:rotate-90 duration-300">
                <HiArrowNarrowRight className="ml-3" />
              </span>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;

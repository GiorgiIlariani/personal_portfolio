import { data } from "../data/data.ts";

export interface ProjectItemProps {
  id: number;
  name: string;
  image: string;
  github: string;
  live: string;
}

const Work = () => {
  // projects file
  const project = data;

  return (
    <div id="work" className="w-full h-auto  text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto px-4 pt-[200px] flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <div className="flex items-center">
            <div className="text-[#64ffda] text-3xl">04.</div>
            <div className="text-[#ccd6f6] text-4xl ml-3 mr-5">work</div>
            <div className="border border-[#233554] w-[350px] hidden sm:block"></div>
          </div>
          <p className="py-6 text-xl">// Check out some of my recent work</p>
          <p className="text-xl max-w-[700px]">
            I decided to show Javascript projects(without changing code), so you
            will notice my progress in just one year. from below to top, you
            will see how I got better on every project. Here you will find
            projects which is fully responsive, however, there are projects
            which is not responsive yest.
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item: ProjectItemProps) => {
            return (
              <div
                key={item.id}
                style={{ backgroundImage: `url(${item.image})` }}
                className="shadow-lg shadow-[#040c16] group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                {/* Hover effect for images */}
                <div className="opacity-0 group-hover:opacity-100 ">
                  <span className="text-2xl font bold text-white tracking-wider ">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-3 m-2
                       bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Work;

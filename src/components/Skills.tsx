import { data } from "../data/Skills";
export interface SkillProps {
  id: number;
  img: string;
  skill: string;
}

const Skills = () => {
  const skills = data;
  return (
    <div
      id="skills"
      className="w-full pt-[150px] h-auto bg-[#0a192f] text-gray-300">
      {/* Container */}
      <div className="max-w-[1080px] mx-auto px-5 flex flex-col justify-center w-full h-full">
        <div>
          <div className="flex items-center">
            {/* <div className="text-[#64ffda] text-3xl">03.</div> */}
            <div className="text-[#64ffda] text-4xl mr-5">Skills</div>
            <div className="border border-[#233554] w-[350px] hidden sm:block"></div>
          </div>
          <p className="py-4 text-xl">
            // These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid xs:grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-8 text-center py-8">
          {skills.map(({ id, img, skill }) => (
            <div
              className="shadow-md shadow-[#040c16] hover:scale-110 duration-500"
              key={id}>
              <img className="w-20 mx-auto" src={img} alt="html" />
              <p className="my-4">{skill}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;

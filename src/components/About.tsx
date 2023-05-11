import my_photo from "../assets/images/my_photo.jpg";

const About = () => {
  return (
    <div
      id="about"
      className="w-full pt-[200px] h-screen bg-[#0a192f] text-gray-300">
      <div className="max-w-[1080px] mx-auto px-10 flex flex-col justify-center h-full">
        <div className="flex items-center">
          <div className="text-[#64ffda] text-3xl">02.</div>
          <div className="text-[#ccd6f6] text-3xl ml-3 mr-5">About Me</div>
          <div className="border border-[#233554] w-[350px] hidden sm:block"></div>
        </div>

        <div className="flex flex-col justify-between items-center xl:flex-row">
          <div className="max-w-[550px] mt-4">
            <p className="text-[#8892b0] text-[20px] mt-4">
              Hello! My name is Giorgi and I enjoy creating things as a Web
              Developer. My interest in web development started one year ago,
              this one year gave me quite a lot of experience.
            </p>
            <p className="text-[#8892b0] text-[20px] mt-4">
              It all started with Bitcamp(a group that brings together web
              developers). I started learning Html, Css and Javascript concepts
              for the first time. After that, I gradually realized how much I
              liked creating web sites and started developing as a frondent
              developer.
            </p>
            {/* <p className="text-[#8892b0] text-[20px] mt-4">
              First three-four months were really difficult, but time by time, I
              thought about success I could achieve in this field. After 5
              months, I started learning React and realized how much I loved
              working with it. At this moment I am focused on learning new
              things, for me learning new things means one step towards success.
            </p> */}
          </div>
          <div className="relative my-8 hidden xs:block">
            <div className="rounded w-[350px] h-[350px] border-[3px] border-[#64ffda] absolute left-6 top-6 cursor-pointer" />
            <img
              src={my_photo}
              alt="my photo"
              className="rounded w-[350px] object-contain z-100 relative"
            />
            <div className="absolute bg-[#64ffda] w-full h-full z-10 top-0 opacity-40 hover:opacity-0 duration-200" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

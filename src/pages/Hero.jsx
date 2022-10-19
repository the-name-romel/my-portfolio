import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub } from "react-icons/fa";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-bgColor">
      <div className="mx-auto w-full h-full flex justify-between items-center">
        <div className="max-w-[1000px] w-full mx-auto border-red-100 rounded-[50px] shadow-xl flex justify-between items-center p-[60px]">
          <div>
            <p className="uppercase text-[18px] text-primary opacity-70">
              welcome to my portfolio
            </p>
            <h1 className="text-[75px] text-primary">
              I'm <span className="font-bold">Romel Acopra</span>
            </h1>
            <h2 className="text-[36px]">
              I'm a{" "}
              <span className="text-primary">
                <Typewriter
                  words={[
                    "web developer.",
                    "student.",
                    "future full-stack developer.",
                  ]}
                  loop={false}
                  cursor
                  cursorStyle="|"
                  typeSpeed={70}
                  deleteSpeed={50}
                  delaySpeed={1000}
                />
              </span>
            </h2>
            <button className="border bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px]">
              Contact me
            </button>
          </div>

          <div className="flex flex-col p-5 space-y-[40px] justify-center items-center">
            <a
              href="https://facebook.com"
              className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[70px] h-[70px] cursor-pointer hover:scale-105 ease-in-out duration-300 group"
            >
              <FaFacebook
                size={42}
                className="text-primary opacity-80 group-hover:opacity-100"
              />
            </a>
            <a className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[70px] h-[70px] cursor-pointer hover:scale-105 ease-in-out duration-300 group">
              <FaGithub
                size={42}
                className="text-primary opacity-80 group-hover:opacity-100"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

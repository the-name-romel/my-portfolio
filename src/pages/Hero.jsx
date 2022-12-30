import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-scroll";

export const Hero = () => {
  return (
    <div className="w-full h-screen bg-bgColor mb-[50px]" name="home">
      <div className="mx-auto w-full h-full flex justify-between items-center px-4 md:px-[30px]">
        <div className="max-w-[1000px] w-full mx-auto border-red-100 rounded-[50px] shadow-xl shadow-gray-400 md:flex-col lg:flex-row flex justify-center md:justify-between items-center px-[30px] py-[50px] lg:p-[60px] text-center lg:text-left">
          <div className="">
            <p className="uppercase text-[16px] lg:text-[18px] text-textColor opacity-70">
              welcome to my portfolio
            </p>
            <h1 className="text-[36px] md:text-[50px] lg:text-[75px] text-textColor">
              I'm <span className="font-bold text-primary">Romel Acopra</span>
            </h1>
            <h2 className="text-[20px] lg:text-[36px]">
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
            <button>
              <Link
                type="button"
                to="contact"
                spy={true}
                smooth={true}
                offset={-43}
                duration={300}
                delay={500}
                isDynamic={true}
                className="border-none bg-primary rounded-[8px] text-white text-[18px] px-[28px] py-[16px] mt-[30px] hover:bg-opacity-80"
              >
                Contact me
              </Link>
            </button>
          </div>

          <div className="hidden md:flex gap-10 p-4 lg:flex-col">
            <a
              href="https://facebook.com"
              className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] cursor-pointer hover:scale-105 ease-in-out duration-300 group"
            >
              <FaFacebook className="text-primary opacity-80 group-hover:opacity-100 text-[30px] lg:text-[42px]" />
            </a>
            <a
              href="https://github.com/the-name-romel"
              className="bg-bgColor rounded-full shadow-xl flex justify-center items-center w-[50px] h-[50px] lg:w-[70px] lg:h-[70px] cursor-pointer hover:scale-105 ease-in-out duration-300 group"
            >
              <FaGithub className="text-primary opacity-80 group-hover:opacity-100 text-[30px] lg:text-[42px]" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

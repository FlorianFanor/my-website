import { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";
import { HiOutlineDocument } from "react-icons/hi";

const Sidenav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(actualNave => !actualNave);
  };

  return (
    <div>
      <button
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden rounded-full glass bg-white/20 backdrop-blur-md p-4 hover:bg-white/30 transition-all duration-300 hover:scale-110 shadow-lg"
      >
        <AiOutlineMenu size="20" className="text-slate-700" />
      </button>
      {nav && (
        <div className="fixed w-full h-screen bg-gradient-to-br from-white/95 via-blue-50/90 to-purple-100/85 backdrop-blur-lg flex flex-col justify-center items-center z-20">
          <a
            href="#main"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-3 p-5 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
          >
            <AiOutlineHome
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
            <span className="pl-4 font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              Home
            </span>
          </a>
          <a
            href="#work"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-3 p-5 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
          >
            <GrProjects
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
            <span className="pl-4 font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              Experience
            </span>
          </a>
          <a
            href="#projects"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-3 p-5 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
          >
            <AiOutlineProject
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
            <span className="pl-4 font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              Projects
            </span>
          </a>
          <a
            href="#resume"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-3 p-5 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
          >
            <BsPerson
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
            <span className="pl-4 font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              About
            </span>
          </a>
          <a
            href="#contact"
            onClick={handleNav}
            className="w-[75%] flex justify-center items-center rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-3 p-5 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
          >
            <AiOutlineMail
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
            <span className="pl-4 font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
              Contact
            </span>
          </a>
        </div>
      )}
      <div className="md:block hidden fixed top-[25%] z-10">
        <div className="flex flex-col space-y-2">
          <a
            href="/#main"
            className="rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
            aria-label="Main"
          >
            <AiOutlineHome
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
          </a>
          <a
            href="/#work"
            className="rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
            aria-label="Work Experience"
          >
            <GrProjects
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
          </a>
          <a
            href="/#projects"
            className="rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
            aria-label="Projects"
          >
            <AiOutlineProject
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
          </a>
          <a
            href="/#resume"
            className="rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
            aria-label="About Me"
          >
            <BsPerson
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
          </a>
          <a
            href="/#contact"
            className="rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
            aria-label="Contact"
          >
            <AiOutlineMail
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
          </a>
          <a
            href="/blog"
            className="rounded-2xl glass bg-white/80 backdrop-blur-sm border border-white/20 m-2 p-4 cursor-pointer hover:scale-110 hover:bg-white/90 transition-all duration-300 hover:shadow-xl group"
            aria-label="Blog"
          >
            <HiOutlineDocument
              size="24"
              className="text-slate-700 group-hover:text-blue-600 transition-colors duration-300"
              role="presentation"
            />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Sidenav;

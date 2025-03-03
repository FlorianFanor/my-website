import { useState } from "react";
import { AiOutlineHome, AiOutlineMail, AiOutlineMenu, AiOutlineProject } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { GrProjects } from "react-icons/gr";

const Sidenav = () => {

    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav((actualNave) => !actualNave);
    }



    return (
        <div>
            <button onClick={handleNav}  className="absolute top-4 z-[99] md:hidden m-2 rounded-full shadow-lg bg-gray-100/90 p-4">
                <AiOutlineMenu size="20" />
            </button>
            {
                nav && ( 
                    <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
                        <a href="#main" onClick={handleNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineHome size="20" role="presentation" />
                            <span className="pl-4">Home</span>
                        </a>
                        <a href="#work" onClick={handleNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <GrProjects size="20" role="presentation" />
                            <span className="pl-4">Work</span>
                        </a>
            
                        <a href="#projects" onClick={handleNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineProject size="20" role="presentation" />
                            <span className="pl-4">Projects</span>
                        </a>
                        <a href="#resume" onClick={handleNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <BsPerson size="20" role="presentation" />
                            <span className="pl-4">Resume</span>
                        </a>
                        <a href="#contact" onClick={handleNav} className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-200">
                            <AiOutlineMail size="20" role="presentation" />
                            <span className="pl-4">Contact</span>
                        </a>
                    </div>
                   
                ) 
            }
            <div className="md:block hidden fixed top-[25%] z-10">
                <div className="flex flex-col">
                    <a href="#main" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" aria-label="Main">
                        <AiOutlineHome size="20" role="presentation" />
                    </a>
                    <a href="#work" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" aria-label="Work">
                        <GrProjects size="20" role="presentation" />
                    </a>
                    <a href="#projects" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" aria-label="Projects">
                        <AiOutlineProject size="20" role="presentation" />
                    </a>
                    <a href="#resume" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" aria-label="Resume">
                        <BsPerson size="20" role="presentation" />
                    </a>
                    <a href="#contact" className="rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-4 cursor-pointer hover:scale-110 ease-in duration-300" aria-label="Contact">
                        <AiOutlineMail size="20" role="presentation" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Sidenav;
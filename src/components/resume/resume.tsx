import { FaHtml5, FaCss3, FaJs, FaReact, FaSailboat, FaUniversalAccess } from "react-icons/fa6";
import { GiFrisbee } from "react-icons/gi";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiApollographql } from "react-icons/si";


const Resume = () => {
    return (
        <div id="resume" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
            <h2 className="text-4xl font-bold text-center text-gray-800">About me</h2>
            <h3 className="text-2xl font-bold text-center text-gray-700 py-6">Professional</h3>
            <p className="text-center py-3">I'm a Technical Lead specializing in React, Next.js, Apollo GraphQL, JavaScript, HTML, and CSS, with a focus on building scalable, high-performance web applications. I have extensive experience in architecting front-end solutions, optimizing rendering performance, and integrating GraphQL APIs for efficient data handling. My background also includes working with .NET, Python, and Angular, giving me a strong foundation in backend development, RESTful APIs, and full-stack architecture. I'm skilled in code optimization, design patterns, and modern development workflows, ensuring that projects are both efficient and maintainable.
            </p>


           
            <div className="flex justify-evenly text-sky-800 py-6">
                <FaCss3 size={40} role="presentation" />
                <FaHtml5 size={40} role="presentation" />
                <FaJs size={40} role="presentation" />
                <FaReact size={40} role="presentation" />
                <SiApollographql size={40} role="presentation" />
                <RiNextjsFill size={40} role="presentation" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-700 py-6">Accessibility</h3>
            <p className="text-center py-3">
                Accessibility is something I care deeply about because the web should be for everyone. Ensuring that digital experiences are usable by people of all abilities isn’t just the right thing to do, it also leads to better, more inclusive design for everyone.
                Many developers assume accessibility is complex, but in reality, it’s not difficult to learn or implement when you take it step by step.
                I’ve been expanding my knowledge with <a href="https://access42.net/" className="underline text-sky-800">Access42</a>, gaining insights into best practices, and inclusive design. I believe that accessibility should be a core part of development, not an afterthought, and I strive to integrate it into everything I build.
            </p>
            <div className="flex justify-center text-sky-800 py-6">
                <FaUniversalAccess size={40} role="presentation" />
            </div>
            <h3 className="text-2xl font-bold text-center text-gray-700 py-6">Personal life</h3>
            <p className="text-center py-3">On a personal note, I enjoy sailing, playing ultimate frisbee, and volunteering at the Red Cross. Whether I’m out on the water, on the field, or helping out in the community, I love being in active and collaborative environments. These experiences keep me sharp, push me to adapt, and remind me of the value of teamwork, something I bring into my work as well.
            </p>
             <div className="flex justify-evenly text-sky-800 text-center">
                <FaSailboat size={40} role="presentation" />
                <GiFrisbee size={40} role="presentation" />
                <MdOutlineVolunteerActivism size={40} role="presentation" />
            </div>


        </div>
    );
}
export default Resume;
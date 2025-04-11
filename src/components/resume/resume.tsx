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
            <section className="bg-white px-6 py-12 max-w-4xl mx-auto text-gray-800">
                <h3 className="text-2xl font-bold text-center text-gray-700 py-6">Accessibility Matters</h3>

                <p className="mb-4 text-lg leading-relaxed">
                    <strong>Accessibility</strong> is something I care deeply about because the web should be for everyone.
                    Ensuring that digital experiences are usable by people of all abilities isn’t just the right thing to do, it also leads to better, more inclusive design for all users.
                </p>

                <p className="mb-4 text-lg leading-relaxed">
                    Many developers assume accessibility is complex, but in reality, it’s approachable when you take it step by step.
                    I’ve been expanding my knowledge with{" "}
                    <a
                        href="https://access42.net/"
                        className="underline text-sky-800 hover:text-sky-600 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Access42
                    </a>
                    , where I earned a certification in auditing websites for accessibility.
                    This experience gave me a deeper understanding of WCAG principles, screen reader testing, keyboard navigation, and common design pitfalls.
                </p>

                <p className="mb-6 text-lg leading-relaxed">
                    To put my skills into practice, I built an open-source app that simulates real-world accessibility challenges:
                </p>

                <div className="bg-gray-100 border border-gray-200 rounded-lg p-6 mb-8">
                    <h3 className="text-xl font-semibold mb-2 text-gray-900">Accessibility Challenge App</h3>
                    <p className="mb-3 text-gray-700">
                        This interactive experience lets users test keyboard traps, inaccessible forms, and visual impairments.
                        It’s designed to raise awareness by putting people in the shoes of users with disabilities.
                    </p>
                    <a
                        href="https://florianfanor.github.io/the-inaccessible-app/"
                        className="inline-block bg-sky-800 text-white px-4 py-2 rounded hover:bg-sky-700 transition"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        View Project on GitHub →
                    </a>
                </div>

                <p className="text-lg leading-relaxed">
                    I believe accessibility should be a core part of the development process and not an afterthought.
                    That’s why I strive to integrate inclusive thinking into everything I build.
                    I’d love for you to try the challenge and share your feedback!
                </p>
            </section>

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
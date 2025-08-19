import { FaHtml5, FaCss3, FaJs, FaReact, FaSailboat, FaUniversalAccess } from "react-icons/fa6";
import { GiFrisbee } from "react-icons/gi";
import { MdOutlineVolunteerActivism } from "react-icons/md";
import { RiNextjsFill } from "react-icons/ri";
import { SiApollographql } from "react-icons/si";


const Resume = () => {
    const skills = [
        { icon: FaReact, name: "React", color: "text-blue-500" },
        { icon: RiNextjsFill, name: "Next.js", color: "text-slate-800" },
        { icon: SiApollographql, name: "GraphQL", color: "text-pink-500" },
        { icon: FaJs, name: "JavaScript", color: "text-yellow-500" },
        { icon: FaHtml5, name: "HTML5", color: "text-orange-500" },
        { icon: FaCss3, name: "CSS3", color: "text-blue-600" },
    ];

    return (
        <section id="resume" className="py-20 bg-gradient-to-b from-slate-50 to-blue-50">
            <div className="max-w-6xl mx-auto px-4 md:px-8">
                <div className="text-center mb-16 animate-fade-in-up">
                    <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">About Me</h2>
                    <h3 className="text-2xl md:text-3xl font-bold text-slate-700 mb-8">Technical Lead & Full-Stack Developer</h3>
                </div>

                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Bio Section */}
                    <div className="space-y-8 animate-fade-in-up">
                        <div className="glass rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <span className="w-2 h-8 gradient-primary rounded-full mr-4"></span>
                                Professional Background
                            </h4>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                I'm a Technical Lead specializing in React, Next.js, Apollo GraphQL, JavaScript, HTML, and CSS,
                                with a focus on building scalable, high-performance web applications. I have extensive experience
                                in architecting front-end solutions, optimizing rendering performance, and integrating GraphQL APIs
                                for efficient data handling.
                            </p>
                        </div>

                        <div className="glass rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold text-slate-800 mb-6 flex items-center">
                                <span className="w-2 h-8 gradient-accent rounded-full mr-4"></span>
                                Full-Stack Expertise
                            </h4>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                My background includes working with .NET, Python, and Angular, giving me a strong foundation
                                in backend development, RESTful APIs, and full-stack architecture. I'm skilled in code optimization,
                                design patterns, and modern development workflows, ensuring projects are both efficient and maintainable.
                            </p>
                        </div>
                    </div>

                    {/* Skills Section */}
                    <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                        <div className="glass rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
                            <h4 className="text-2xl font-bold text-slate-800 mb-8 text-center">Core Technologies</h4>
                            <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
                                {skills.map((skill, index) => (
                                    <div
                                        key={skill.name}
                                        className="flex flex-col items-center space-y-3 group hover:scale-110 transition-transform duration-300"
                                        style={{ animationDelay: `${index * 0.1}s` }}
                                    >
                                        <div className="p-4 rounded-2xl bg-white shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                                            <skill.icon size={48} className={`${skill.color} group-hover:scale-110 transition-transform duration-300`} role="presentation" />
                                        </div>
                                        <span className="text-sm font-semibold text-slate-700 group-hover:text-blue-600 transition-colors duration-300">
                                            {skill.name}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                {/* Accessibility Section */}
                <div className="mt-20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
                    <div className="glass rounded-3xl p-8 bg-white/80 backdrop-blur-sm">
                        <div className="text-center mb-8">
                            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full gradient-accent mb-4">
                                <FaUniversalAccess size={32} className="text-white" role="presentation" />
                            </div>
                            <h3 className="text-3xl font-bold text-slate-800">Accessibility Matters</h3>
                        </div>

                        <div className="space-y-6">
                            <p className="text-lg text-slate-600 leading-relaxed">
                                <strong className="text-slate-800">Accessibility</strong> is something I care deeply about because the web should be for everyone.
                                Ensuring that digital experiences are usable by people of all abilities isn't just the right thing to do,
                                it also leads to better, more inclusive design for all users.
                            </p>

                            <p className="text-lg text-slate-600 leading-relaxed">
                                Many developers assume accessibility is complex, but in reality, it's approachable when you take it step by step.
                                I've been expanding my knowledge with{" "}
                                <a
                                    href="https://access42.net/"
                                    className="text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300 underline decoration-2 underline-offset-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    Access42
                                </a>
                                , where I earned a{" "}
                                <a
                                    href="https://certificate.bcdiploma.com/check/1C3F9E77264C4DF26A41E2B14CDDDA69A63870CA09C0413E102E454C158A1D00UlVlUG4vYzdKakJSUW1TT3VNOHl1cFA4NGcxQXNnUUFjRDc1azcxRmdrOGxUWlhZ"
                                    className="text-blue-600 hover:text-purple-600 font-semibold transition-colors duration-300 underline decoration-2 underline-offset-2"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    certified credential in accessibility audit
                                </a>
                                . This certification gave me a deeper understanding of WCAG principles, screen reader testing, keyboard navigation, and common design pitfalls.
                            </p>

                            <div className="gradient-secondary rounded-2xl p-6 border border-slate-200">
                                <h4 className="text-xl font-bold text-slate-800 mb-4 flex items-center">
                                    <span className="w-2 h-6 gradient-accent rounded-full mr-3"></span>
                                    Accessibility Challenge App
                                </h4>
                                <p className="text-slate-600 mb-4 leading-relaxed">
                                    This interactive experience lets users test keyboard traps, inaccessible forms, and visual impairments.
                                    It's designed to raise awareness by putting people in the shoes of users with disabilities.
                                </p>
                                <a
                                    href="https://florianfanor.github.io/the-inaccessible-app/"
                                    className="inline-flex items-center space-x-2 gradient-primary text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <span>View Project</span>
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Personal Life Section */}
                <div className="mt-16 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
                    <div className="glass rounded-3xl p-8 bg-white/80 backdrop-blur-sm text-center">
                        <h3 className="text-3xl font-bold text-slate-800 mb-8">Beyond Code</h3>
                        <p className="text-lg text-slate-600 leading-relaxed mb-8 max-w-4xl mx-auto">
                            On a personal note, I enjoy sailing, playing ultimate frisbee, and volunteering at the Red Cross.
                            Whether I'm out on the water, on the field, or helping out in the community, I love being in active
                            and collaborative environments. These experiences keep me sharp, push me to adapt, and remind me of
                            the value of teamwork, something I bring into my work as well.
                        </p>
                        <div className="flex justify-center space-x-12">
                            <div className="flex flex-col items-center space-y-3 group">
                                <div className="p-4 rounded-2xl bg-blue-100 group-hover:bg-blue-200 transition-colors duration-300">
                                    <FaSailboat size={48} className="text-blue-600" role="presentation" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">Sailing</span>
                            </div>
                            <div className="flex flex-col items-center space-y-3 group">
                                <div className="p-4 rounded-2xl bg-green-100 group-hover:bg-green-200 transition-colors duration-300">
                                    <GiFrisbee size={48} className="text-green-600" role="presentation" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">Ultimate Frisbee</span>
                            </div>
                            <div className="flex flex-col items-center space-y-3 group">
                                <div className="p-4 rounded-2xl bg-red-100 group-hover:bg-red-200 transition-colors duration-300">
                                    <MdOutlineVolunteerActivism size={48} className="text-red-600" role="presentation" />
                                </div>
                                <span className="text-sm font-semibold text-slate-700">Volunteering</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Resume;
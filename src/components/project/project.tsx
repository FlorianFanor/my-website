import ProjectItem from "./project-item";
import GitHubProjectItem from "./github-project-item";
import pampers from "../../assets/pampers.webp";
import bulma from "../../assets/bulma.webp";
import sonepar from "../../assets/sonepar.webp";
import unireso from "../../assets/unireso.webp";

const Project = () => {
  const githubProjects = [
    {
      name: "The Inaccessible App",
      description:
        "An interactive accessibility challenge that simulates color blindness and other visual impairments to raise awareness about inclusive web design.",
      tech: ["TypeScript", "React", "Accessibility", "Educational"],
      githubUrl: "https://github.com/FlorianFanor/the-inaccessible-app",
      liveUrl: "https://florianfanor.github.io/the-inaccessible-app/",
      featured: true,
    },
    {
      name: "Translation App",
      description:
        "A full-stack platform enabling organizations to collaboratively manage and edit multilingual content for digital products.",
      tech: ["TypeScript", "Full-Stack", "Multilingual", "Collaboration"],
      githubUrl: "https://github.com/FlorianFanor/translation-app",
      liveUrl: null,
      featured: true,
    },
    {
      name: "File Analyzer AI",
      description:
        "An AI-powered system for uploading, analyzing, and exploring time series data to automatically detect anomalies and understand patterns.",
      tech: ["JavaScript", "AI/ML", "Time Series", "Data Analysis"],
      githubUrl: "https://github.com/FlorianFanor/file-analyzer-AI",
      liveUrl: null,
      featured: true,
    },
    {
      name: "React Task Tracker",
      description:
        "A comprehensive tutorial project demonstrating React Hooks usage with practical task management functionality.",
      tech: ["JavaScript", "React", "Hooks", "Tutorial"],
      githubUrl: "https://github.com/FlorianFanor/reactjs_task_tracker",
      liveUrl: null,
      featured: false,
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gradient-to-b from-white to-slate-50">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-black text-gradient mb-6">Featured Projects</h2>
          <p className="text-xl text-slate-600 max-w-4xl mx-auto leading-relaxed">
            A showcase of both client work and personal projects, highlighting my ability to deliver
            scalable solutions and explore innovative technologies.
          </p>
        </div>

        {/* Client Projects */}
        <div className="mb-20">
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Client Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
              <ProjectItem image={sonepar} title="Sonepar" link="https://www.sonepar.fr/fr-fr" />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
              <ProjectItem
                image={bulma}
                title="Bulma Solution"
                link="https://bulma-solution.com/#home"
              />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
              <ProjectItem image={unireso} title="Unireso" link="https://www.unireso.com/" />
            </div>
            <div className="animate-fade-in-up" style={{ animationDelay: "0.4s" }}>
              <ProjectItem image={pampers} title="Pampers" link="https://www.pampers.com/en-us" />
            </div>
          </div>
        </div>

        {/* Personal Projects */}
        <div>
          <h3 className="text-3xl font-bold text-slate-800 text-center mb-12">Personal Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {githubProjects
              .filter(project => project.featured)
              .map((project, index) => (
                <div
                  key={project.name}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${(index + 5) * 0.1}s` }}
                >
                  <GitHubProjectItem project={project} />
                </div>
              ))}
          </div>
        </div>
      </div>
    </section>
  );
};
export default Project;

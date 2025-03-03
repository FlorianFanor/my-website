import ProjectItem from "./project-item";
import pampers from "../../assets/pampers.webp";
import bulma from "../../assets/bulma.webp";
import sonepar from "../../assets/sonepar.webp";
import unireso from "../../assets/unireso.webp";

const Project = () => {
    return (
        <div id="projects" className="max-w-[1040px] m-auto md:pl-20 p-4 py-16">
              <h2 className="text-4xl font-bold text-center text-gray-800">Projects</h2>
              <p className="text-center py-8">This section features real-world projects I developed for clients, focusing on scalable, efficient, and user-centric solutions. Each project highlights my ability to deliver high-quality software tailored to business needs. Take a look!</p>
              <div className="grid sm:grid-cols-2 gap-12">
                <ProjectItem image={sonepar} title='Sonepar' link="https://www.sonepar.fr/fr-fr" />
                <ProjectItem image={bulma} title='Bulma Solution' link="https://bulma-solution.com/#home" />
                <ProjectItem image={unireso} title='Unireso' link="https://www.unireso.com/" />
                <ProjectItem image={pampers} title='Pampers' link="https://www.pampers.com/en-us" />
            </div>

        </div>
    ); 
}
export default Project;
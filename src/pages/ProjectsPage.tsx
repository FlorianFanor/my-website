import { useEffect } from "react";
import { Projects } from "../components/projects/Projects";

export const ProjectsPage = () => {
  useEffect(() => {
    document.title = "Projects - Florian Fanor";
  }, []);

  return <Projects />;
};

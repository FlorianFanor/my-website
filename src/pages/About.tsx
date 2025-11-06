import { useEffect } from "react";
import { AboutMe } from "../components/about/AboutMe";

export const About = () => {
  useEffect(() => {
    document.title = "About - Florian Fanor";
  }, []);

  return <AboutMe />;
};

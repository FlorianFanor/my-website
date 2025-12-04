import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Hero } from "../components/home/Hero";
import { Projects } from "../components/projects/Projects";
import { Skills } from "../components/home/Skills";

// Home page composed of hero, a projects teaser, and skills
export const Home = () => {
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "Florian Fanor - Full-Stack Developer";
  }, []);

  return (
    <>
      <Hero onNavigate={page => navigate(page === "home" ? "/" : `/${page}`)} />
      <Projects featuredIds={[8, 4, 6]} onViewMore={() => navigate("/projects")} />
      <Skills />
    </>
  );
};

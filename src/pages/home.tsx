import Banner from "../components/banner";
import Project from "../components/project/project";
import Work from "../components/work/work";
import Resume from "../components/resume/resume";
import Contact from "../components/contact/contact";

const Home = () => {
  return (
    <>
      <Banner />
      <Work />
      <Project />
      <Resume />
      <Contact />
    </>
  );
};

export default Home;

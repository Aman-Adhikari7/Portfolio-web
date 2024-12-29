import AboutMe from "./Componenets/AboutMe";
import Contact from "./Componenets/Contactme";
import Experience from "./Componenets/Experience";
import Navbar from "./Componenets/Navbar";
import Photo from "./Componenets/Photosection";
import Project from "./Componenets/Projects";

const App = () => {
  return (
    <div className="flex flex-col md:px-12 ">
      <Navbar/>
      <Photo/>
      <AboutMe/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  );
};

export default App;
import "./style.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Skill from "./components/skill/skill.jsx";
import Project from "./components/project/project.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
    </div>
  );
}

export default App;

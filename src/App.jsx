import "./style.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Skill from "./components/skill/skill.jsx";
import Project from "./components/project/project.jsx";
import Footer from "./components/footer/footer.jsx";

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <About />
      <Skill />
      <Project />
      <Footer />
    </div>
  );
}

export default App;

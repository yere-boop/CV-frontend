import "./style.css";
import Header from "./components/header/header.jsx";
import Hero from "./components/hero/hero.jsx";
import About from "./components/about/about.jsx";
import Skill from "./components/skill/skill.jsx";
import Project from "./components/project/project.jsx";
import Footer from "./components/footer/footer.jsx";
import { useState, useEffect } from "react";
import { ColorRing } from "react-loader-spinner";

const App = () => {
  const [loading, setloading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setloading(false);
    }, 1500);
  }, []);

  return (
    <>
      {loading && (
        <div style={styles.blurOverlay}>
          <ColorRing width="200" color="#007bff" />
        </div>
      )}
      <div>
        <Header />
        <Hero />
        <About />
        <Skill />
        <Project />
        <Footer />
      </div>
    </>
  );
};

const styles = {
  blurOverlay: {
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backdropFilter: "blur(10px)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "transparent",
    zIndex: 9999,
  },
};

export default App;

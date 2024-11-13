import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function Project() {
  const [project, setproject] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const projectRef = ref(db, "project/");
    onValue(projectRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setproject(data);
    });
  }, []);

  return (
    <section className="portfolio" id="portfolio">
      <div className="center-text" data-aos="fade-down">
        <h2>
          {project.my}
          <span>{project.projek}</span>
        </h2>
      </div>
      <div className="Portfolio-content" data-aos="zoom-in-up">
        <div className="row">
          <div className="main-row">
            <div className="row-text">
              <h5>{project.web}</h5>
            </div>
            <div className="row-icon">
              <i className="ri-github-fill" />
            </div>
          </div>
          <h4>{project.desc}</h4>
          <img src={project.foto1} alt />
        </div>
        <div className="row">
          <div className="main-row">
            <div className="row-text">
              <h5>{project.uiux}</h5>
            </div>
            <div className="row-icon">
              <i className="ri-github-fill" />
            </div>
          </div>
          <h4>{project.desc2}</h4>
          <img src={project.foto2} alt />
        </div>
      </div>
    </section>
  );
}

export default Project;

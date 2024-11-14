import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function Skill() {
  const [skill, setskill] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const skillRef = ref(db, "skill/");
    onValue(skillRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setskill(data);
    });
  }, []);

  return (
    <section className="services" id="services">
      <div className="center-text" data-aos="fade-down">
        <h2>
          {skill.my}&nbsp;
          <span>{skill.skil}</span>
        </h2>
      </div>
      <div className="services-content" data-aos="zoom-in-up">
        <div className="box">
          <img src={skill.fotohtml} alt="#" />
          <p>{skill.html}</p>
        </div>
        <div className="box">
          <img src={skill.fotocss} alt="#" />
          <p>{skill.css}</p>
        </div>
        <div className="box">
          <img src={skill.fotojs} alt="#" />
          <p>{skill.js}</p>
        </div>
        <div className="box">
          <img src={skill.fotofigma} alt="#" />
          <p>{skill.figma}</p>
        </div>
      </div>
    </section>
  );
}

export default Skill;

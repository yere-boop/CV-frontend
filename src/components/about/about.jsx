import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function About() {
  const [about, setabout] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const aboutRef = ref(db, "about/");
    onValue(aboutRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setabout(data);
    });
  }, []);

  return (
    <section className="about" id="about">
      <div className="about-img" data-aos="zoom-in-down">
        <img src={about.img} />
      </div>
      <div className="about-text" data-aos="zoom-in-up">
        <h2>
          {about.about}
          <span>{about.me}</span>
        </h2>
        <h2>
          {about.iam}
          <span>{about.design}</span>
          <br />
          {about.web}
        </h2>
        <div className="exp-area">
          <p className="exp">{about.kenalan}</p>
        </div>
        <a href="#portfolio" className="btn">
          {about.view}
        </a>
      </div>
    </section>
  );
}

export default About;

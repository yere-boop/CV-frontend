import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";
import app from "../../config/firebase";

function Hero() {
  const [hero, sethero] = useState({});

  useEffect(() => {
    const db = getDatabase(app);
    const headerRef = ref(db, "hero/");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      sethero(data);
    });
  }, []);

  return (
    <section className="hero" id="home">
      <div className="main-content" data-aos="none">
        <h4>{hero.hello}</h4>
        <h1>
          {hero.iam}
          <span>&nbsp;{hero.nama}</span>
        </h1>
        <p>{hero.desc}</p>
        <div className="social">
          <a href="https://www.facebook.com/profile.php?id=100080963656120&mibextid=kFxxJD">
            <i className="ri-facebook-fill" />
          </a>
          <a href="https://www.instagram.com/adithiach/">
            <i className="ri-instagram-fill" />
          </a>
          <a href="https://www.linkedin.com/learning/">
            <i className="ri-linkedin-fill" />
          </a>
        </div>
        <div className="main-btn">
          <a href="#portfolio" className="btn btn2">
            {hero.cv}
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;

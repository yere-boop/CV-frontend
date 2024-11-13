import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function Header() {
  const [header, setheader] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const headerRef = ref(db, "header/");
    onValue(headerRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setheader(data);
    });
  }, []);

  return (
    <header>
      <a href="#" className="logo">
        Adithia<span>Christian</span>
      </a>
      <div className="bx bx-menu" id="menu-icon" />
      <ul className="navlist">
        <li>
          <a href="#home">{header.home}</a>
        </li>
        <li>
          <a href="#about">{header.about}</a>
        </li>
        <li>
          <a href="#services">{header.skill}</a>
        </li>
        <li>
          <a href="#portfolio">{header.project}</a>
        </li>
      </ul>
      <div className="top-btnn">
        <a
          href="https://wa.me/6281240001025?text=Halo,%20saya%20tertarik%20untuk%20mengenal%20lebih%20jauh!"
          target="_blank"
          className="h-btn"
          rel="noreferrer"
        >
          {header.me}
        </a>
      </div>
    </header>
  );
}

export default Header;

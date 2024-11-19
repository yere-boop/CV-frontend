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
      </ul>
      <div className="top-btnn">
        <a
          href="https://wa.me/6283137435063"
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

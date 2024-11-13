import { getDatabase, ref, onValue } from "firebase/database";
import { useEffect, useState } from "react";

function Footer() {
  const [footer, setfooter] = useState({});

  useEffect(() => {
    const db = getDatabase();
    const footerRef = ref(db, "footer/");
    onValue(footerRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data);
      setfooter(data);
    });
  }, []);

  return (
    <div className="footer">
      <div className="copyright">
        <p>{footer.copy}.</p>
      </div>
      <a href="#home" className="scroll-top">
        <i className="ri-arrow-up-s-fill" />
      </a>
    </div>
  );
}

export default Footer;

import { HashLink as Link } from "react-router-hash-link";
import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "../style/Header.css";
import "animate.css";
import moi from "../assets/IMG_5476.jpeg";

function Header() {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth", // Animation de défilement en douceur
    });
  };
  
  return (
    <header className="header">
      <nav style={navStyle}>
        <Link
          to="/#home"
          style={linkStyle}
          scroll={(el) => scrollWithOffset(el, 100)}
          className="link-image"
        >
          <img
            src={moi}
            alt="moi"
            className="animate__animated animate__backInDown"
          />
        </Link>
        <Link
          to="/#about"
          scroll={(el) => scrollWithOffset(el, 100)}
          style={linkStyle}
          className=" animate__animated animate__backInDown"
        >
          A propos
        </Link>
        <Link
          to="/#skills"
          scroll={(el) => scrollWithOffset(el, 100)}
          style={linkStyle}
          className=" animate__animated animate__backInDown"
        >
          Mes compétences
        </Link>
        <Link
          to="/#projects"
          scroll={(el) => scrollWithOffset(el, 100)}
          style={linkStyle}
          className=" animate__animated animate__backInDown"
        >
          Mes Projets
        </Link>
        <Link
          to="/#contact"
          scroll={(el) => scrollWithOffset(el, 100)}
          style={linkStyle}
          className=" animate__animated animate__backInDown"
        >
          Contact
        </Link>
        <div id="darkmode">
        <input type="checkbox" className="checkbox" id="checkbox" />
        <label htmlFor="checkbox" className="label">
          <BsMoonStarsFill color="white" />
          <BsFillSunFill color="yellow" />
          <div className="ball"></div>
        </label>
      </div>
      </nav>
    </header>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100px",
  backgroundColor: "rgb(253, 247, 235)",
};

const linkStyle = {
  color: "var(--primary-color)",
  textDecoration: "none",
  fontSize: "1.2rem",
  fontFamily: "var(--primary-font)",
  fontWeight:'600'
};

export default Header;

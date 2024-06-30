import { HashLink as Link } from "react-router-hash-link";
// import { BsMoonStarsFill, BsFillSunFill } from "react-icons/bs";
import "./Header.css";
import "animate.css";
import moi from "../../assets/IMG_5476.jpeg";
import MenuBurger from "../MenuBurger/MenuBurger";
function Header() {
  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth", 
    });
  };

  return (
    <header id="header">
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
        <MenuBurger />
      </nav>
    </header>
  );
}

const navStyle = {
  display: "flex",
  justifyContent: "space-around",
  alignItems: "center",
  height: "100px",
};

const linkStyle = {
  color: "var(--primary-color)",
  textDecoration: "none",
  fontSize: "1.2rem",
  fontFamily: "var(--primary-font)",
  fontWeight: "600",
};

export default Header;

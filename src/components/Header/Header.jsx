import { HashLink as Link } from "react-router-hash-link";
import "./Header.css";
import "animate.css";
import moi from "../../assets/IMG_5476.jpeg";
import MenuBurger from "../MenuBurger/MenuBurger";
import { useState } from "react";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollWithOffset = (el, offset) => {
    const elementPosition = el.offsetTop - offset;
    window.scroll({
      top: elementPosition,
      left: 0,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header id="header">
      <nav className="navStyle">
        <Link
          to="/#home"
          className="linkStyle link-image"
          scroll={(el) => scrollWithOffset(el, 100)}
        >
          <img
            src={moi}
            alt="moi"
            className="animate__animated animate__backInDown"
          />
        </Link>
        <div className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          <Link
            to="/#about"
            className="linkStyle animate__animated animate__backInDown"
            scroll={(el) => scrollWithOffset(el, 100)}
            onClick={toggleMenu}
          >
            A propos
          </Link>
          <Link
            to="/#skills"
            className="linkStyle animate__animated animate__backInDown"
            scroll={(el) => scrollWithOffset(el, 100)}
            onClick={toggleMenu}
          >
            Mes compétences
          </Link>
          <Link
            to="/#projects"
            className="linkStyle animate__animated animate__backInDown"
            scroll={(el) => scrollWithOffset(el, 100)}
            onClick={toggleMenu}
          >
            Mes Projets
          </Link>
          <Link
            to="/#contact"
            className="linkStyle animate__animated animate__backInDown"
            scroll={(el) => scrollWithOffset(el, 100)}
            onClick={toggleMenu}
          >
            Contact
          </Link>
        </div>
        <MenuBurger toggleMenu={toggleMenu} isMenuOpen={isMenuOpen} />
      </nav>
    </header>
  );
}

export default Header;

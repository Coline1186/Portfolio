import { FaBars, FaTimes } from "react-icons/fa";
import "./MenuBurger.css";

function MenuBurger({ toggleMenu, isMenuOpen }) {
  return (
    <div className="menu-burger" onClick={toggleMenu}>
      {isMenuOpen ? <FaTimes size={30} /> : <FaBars size={30} />}
    </div>
  );
}

export default MenuBurger;

import { useState } from "react";
import "./MenuBurger.css";
import { Link } from "react-router-dom";

function MenuBurger() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };
  
    return (
      <div id="menuBurger">
        <div className={`burgermenu ${isOpen ? "show-burger" : "hide-burger"}`}>
          <ul className="burgermenu-links">
            <li className="burgermenu-items">
              <Link to="/" className="burgermenu-link">
                Page d'entrée
              </Link>
            </li>
            <li
              className="burgermenu-items"
              role="presentation"
              onClick={handleOpen}
              onKeyDown={handleOpen}
            >
              <a href="#link-burger" className="burgermenu-link">
                Comment ça marche ?
              </a>
            </li>
            <li className="burgermenu-items">
              <Link to="/faq" className="burgermenu-link">
                FAQ
              </Link>
            </li>
          </ul>
          <button
            aria-label="button"
            type="button"
            className="burger-bar"
            onClick={handleOpen}
            onKeyDown={handleOpen}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48"
              viewBox="0 -960 960 960"
              width="48"
            >
              <path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z" />
            </svg>
          </button>
        </div>
      </div>
    );
}

export default MenuBurger;

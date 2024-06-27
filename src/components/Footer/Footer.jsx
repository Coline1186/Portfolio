import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import "./Footer.css";

function Footer() {
  return (
    <div id="footer">
      <div className="linkedin-git">
        <a
          href="https://github.com/Coline1186"
          target="_blank"
          rel="noopener noreferrer"
          className="link-media"
        >
          <FaGithub className="logo-git" />
        </a>
        <a
          href="https://www.linkedin.com/in/coline-grosso-063298247/"
          target="_blank"
          rel="noopener noreferrer"
          className="link-media"
        >
          <FaLinkedin className="logo-linkedin" />
        </a>
      </div>
      <p className="signature">© 2024 Coline GROSSO</p>
    </div>
  );
}

export default Footer;

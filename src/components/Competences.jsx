import { motion } from "framer-motion";
import htmlLogo from "../assets/logo/html5.png";
import cssLogo from "../assets/logo/css3.png";
import jsLogo from "../assets/logo/js.png";
import reactLogo from "../assets/logo/react.png";
import nodeLogo from "../assets/logo/node.png";
import expressLogo from "../assets/logo/express.png";
import mysqlLogo from "../assets/logo/mysql.png";

import "../style/Competences.css";

const skills = [
  { name: "HTML5", logo: htmlLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Express", logo: expressLogo },
  { name: "MySQL", logo: mysqlLogo },
];

function Competences() {
  return (
    <div id="competences">
      <h1 className="title">Mes compétences</h1>
      <div className="container-position">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            className="card-style"
            whileHover={{ scale: 1.1 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, delay: index * 0.2 }}
          >
            <img src={skill.logo} alt={skill.name} className="logo-style" />
            <p>{skill.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default Competences;

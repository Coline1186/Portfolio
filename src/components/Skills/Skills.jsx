/* eslint-disable react/no-unescaped-entities */
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";
import htmlLogo from "../../assets/logo/html5.png"
import cssLogo from "../../assets/logo/css3.png";
import jsLogo from "../../assets/logo/js.png";
import reactLogo from "../../assets/logo/react.png";
import nodeLogo from "../../assets/logo/node.png";
import expressLogo from "../../assets/logo/express.png";
import mysqlLogo from "../../assets/logo/mysql.png";
import cv from "../../assets/cv/cv portfolio.png";
import "../Skills/Skills.css";

const hardSkills = [
  { name: "HTML5", logo: htmlLogo },
  { name: "CSS3", logo: cssLogo },
  { name: "JavaScript", logo: jsLogo },
  { name: "React", logo: reactLogo },
  { name: "Node.js", logo: nodeLogo },
  { name: "Express", logo: expressLogo },
  { name: "MySQL", logo: mysqlLogo },
];

function Skills() {
  return (
    <div id="skills">
      <Fade duration={2000}>
        <h1 className="title-skills">Mes compétences</h1>
      </Fade>
      <div style={{ display: "flex" }}>
        <div className="container-position">
          <Fade duration={2000}>
            {hardSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="card-style"
                whileHover={{ scale: 1.1 }}
                animate={{ y: [0, -10, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  delay: index * 0.2,
                }}
              >
                <img src={skill.logo} alt={skill.name} className="logo-style" />
                <p>{skill.name}</p>
              </motion.div>
            ))}
          </Fade>
        </div>
        <div className="soft-skills">
          <p>cliquer sur mon CV pour l'agrandir</p>
          <img src={cv} alt="mon cv" className="cv"/>
          <a href="/public/cv/CV développement web.pdf" download>
            Télécharger mon CV
          </a>
        </div>
      </div>
    </div>
  );
}

export default Skills;

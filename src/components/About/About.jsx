/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";
import img1 from "../../assets/about/1img-4681.webp";
import img2 from "../../assets/about/2img-3902.webp";
import img3 from "../../assets/about/3IMG_4816.png";
import img4 from "../../assets/about/4img-1593.webp";
import img5 from "../../assets/about/5img-2585.webp";
import img6 from "../../assets/about/6e2480b.webp";
import img7 from "../../assets/about/7image0000001.webp";
import img8 from "../../assets/about/8img-5634-min.webp";
import img9 from "../../assets/about/9img-2178.webp";
import img10 from "../../assets/about/10img-4430.webp";

const images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about">
      <Fade duration={2000}>
        <div>
          <h1 className="title-about">A propos de moi</h1>
        </div>
        <div className="text-carousel">
          <div className="carousel-container-about">
            <AnimatePresence>
              {images.map(
                (URL, index) =>
                  index === currentIndex && (
                    <motion.div
                      key={index}
                      className="image-container-about"
                      initial={{ opacity: 0, scale: 0.7 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.7 }}
                      transition={{ duration: 3.5 }}
                    >
                      <img alt={`project-${index}`} src={URL} />
                    </motion.div>
                  )
              )}
            </AnimatePresence>
            <p className="first-pg">
              Après presque 14 ans comme secrétaire médicale en radiologie, j'ai
              choisi de me reconvertir dans le développement web, un domaine qui
              allie ma passion pour la résolution d'énigmes et l'informatique.
              Un bootcamp de 5 mois à la Wild Code School a confirmé mon choix.
            </p>
            <p>
              Mes compétences relationnelles et mon sens du travail en équipe
              sont des atouts précieux dans ce domaine.
            </p>
            <p>
              Prochaine étape,{" "}
              <span className="highlight">
                trouver une entreprise prête à me donner une chance
              </span>
              , idéalement sous la forme d'une alternance.{" "}
            </p>
            <p className="prg-responsive">
              En dehors du développement web, j'aime voyager aux quatre coins du
              monde en famille ou entre amis, assister à des concerts, passer du
              temps avec mon neveu... <br />
              Mais en vrai ce que j'aime par dessus tout c'est... MON CHAT 😻,
              faut dire qu'elle est vraiment parfaite non ? 😆
            </p>
          </div>
        </div>
      </Fade>
    </div>
  );
}

export default About;

/* eslint-disable react/no-unescaped-entities */
import "./About.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Fade } from "react-awesome-reveal";

const images = [
  require("../../assets/about/1img-4681.webp"),
  require("../../assets/about/2img-3902.webp"),
  require("../../assets/about/3IMG_4816.png"),
  require("../../assets/about/4img-1593.webp"),
  require("../../assets/about/5img-2585.webp"),
  require("../../assets/about/6e2480b.webp"),
  require("../../assets/about/7image0000001.webp"),
  require("../../assets/about/8img-5634-min.webp"),
  require("../../assets/about/9img-2178.webp"),
  require("../../assets/about/10img-4430.webp"),
];

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
          <Fade duration={2000}>
            <p className="first-pg">
              Après presque 14 ans en tant que secrétaire médicale en
              radiologie, j'ai ressenti le besoin de quitter un domaine qui,
              selon moi, perd peu à peu son aspect humain, pourtant crucial.
            </p>
            <p>
              Passionnée par la résolution d'énigmes et l'informatique, j'ai
              décidé d'explorer le développement web.
            </p>
            <p>
              Cette décision s'est révélée être la bonne. Le bootcamp de 5 mois
              à la Wild Code School a confirmé mon choix de reconversion. <br />
              Contrairement aux idées reçues, mon sens du relationnel et mon
              côté humain sont des atouts précieux dans ce domaine. Ils
              facilitent grandement le travail en équipe.
            </p>
            <p>
              Prochaine étape,{" "}
              <span className="highlight">
                trouver une entreprise prête à me donner une chance
              </span>
              , idéalement sous la forme d'une alternance.{" "}
            </p>
            <p>
              En dehors du développement web, j'aime voyager aux quatre coins du
              monde en famille ou entre amis, assister à des concerts, passer du
              temps avec mon neveu... <br />
              Mais en vrai ce que j'aime par dessus tout c'est... MON CHAT 😻,
              faut dire qu'elle est vraiment parfaite non ? 😆
            </p>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default About;

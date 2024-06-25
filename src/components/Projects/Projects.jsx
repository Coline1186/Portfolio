import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import hoverImages from "../../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Projects.css";
import { FaEarthAmericas } from "react-icons/fa6";
import { Fade } from "react-awesome-reveal";
import wildram from "../../assets/projects/Wildgram.png";
import hero from "../../assets/projects/The-hero-experience.png";
import rigol from "../../assets/projects/Rigol-App.png";
import gems from "../../assets/projects/Gems.png";
import portfolio from "../../assets/projects/portfolio.png";

const images = [wildram, hero, rigol, gems, portfolio];
const indexesToShowLogo3 = [1, 2, 4];

function Projects() {
  return (
    <div id="projects">
      <div className="box">
        <Fade duration={2000}>
          <h1 className="title-project">Mes projets</h1>
        </Fade>
        <Fade duration={2000}>
          <Carousel
            useKeyboardArrows={true}
            swipeable={true}
            emulateTouch={true}
            showThumbs={false}
            showStatus={false}
            dynamicHeight={true}
          >
            {images.map((URL, index) => (
              <div className="slide" key={index}>
                <img alt="sample_file" src={URL} />
                <div className="text-tag">
                  <h1 className="text-hover">{hoverImages[index].text}</h1>
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    animate={{ y: [2, -10, 2] }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: index * 0.2,
                    }}
                  >
                    <div style={{ display: "flex", justifyContent: "center" }}>
                      <img
                        src={hoverImages[index].logo}
                        alt="logo"
                        className="logo-hover"
                      />
                      <img
                        src={hoverImages[index].logo1}
                        alt="logo"
                        className="logo-hover"
                      />
                      <img
                        src={hoverImages[index].logo2}
                        alt="logo"
                        className="logo-hover"
                      />
                      {indexesToShowLogo3.includes(index) && (
                        <img
                          src={hoverImages[index].logo3}
                          alt="logo"
                          className="logo-hover"
                        />
                      )}
                      {index === 3 && (
                        <>
                          <img
                            src={hoverImages[index].logo4}
                            alt="logo"
                            className="logo-hover"
                            style={{
                              background: "rgb(255,255,255, 0.4)",
                              marginRight: "2vh",
                            }}
                          />
                          <img
                            src={hoverImages[index].logo5}
                            alt="logo"
                            className="logo-hover"
                            style={{
                              marginRight: "2vh",
                            }}
                          />
                          <img
                            src={hoverImages[index].logo6}
                            alt="logo"
                            className="logo-hover"
                          />
                        </>
                      )}
                    </div>
                  </motion.div>
                  <div style={{ display: "flex" }}>
                    <h2 className="link-hover">
                      <FaEarthAmericas
                        style={{
                          color: "black",
                          marginRight: "6%",
                          marginTop: "4%",
                        }}
                        className="FaEarth"
                      />
                      {index === 3 ? (
                        <a
                          href={hoverImages[index].site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="a-hover"
                        >
                          Lien GitHub
                        </a>
                      ) : (
                        <a
                          href={hoverImages[index].site}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="a-hover"
                        >
                          Lien du site
                        </a>
                      )}
                    </h2>
                  </div>
                </div>
              </div>
            ))}
          </Carousel>
        </Fade>
      </div>
    </div>
  );
}

export default Projects;

import { Carousel } from "react-responsive-carousel";
import hoverImages from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/Projects.css";
import { FaEarthAmericas } from "react-icons/fa6";

const images = [
  "src/assets/projects/Wildgram.png",
  "src/assets/projects/The-hero-experience.png",
  "src/assets/projects/Rigol-App.png",
  "src/assets/projects/Gems.png",
  "src/assets/projects/portfolio.png",
];

function Projects() {
  return (
    <div id="projects">
      <div className="box">
        <h1 className="title-project">Mes projets</h1>
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div className="slide" key={index}>
              <img alt="sample_file" src={URL} />
              <div className="text-tag">
                <h1
                  className="text-hover"
                  style={{ fontSize: "4rem", textDecoration: "underline" }}
                >
                  {hoverImages[index].text}
                </h1>
                <p className="text-hover" style={{ fontSize: "1.5rem" }}>
                  {hoverImages[index].projet}
                </p>
                <h2
                  className="text-hover"
                  style={{ fontSize: "2.5rem", textDecoration: "underline" }}
                >
                  {hoverImages[index].techno}
                </h2>
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
                  {index == 1 && (
                    <img
                      src={hoverImages[index].logo3}
                      alt="logo"
                      className="logo-hover"
                    />
                  )}
                </div>
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
                    <a
                      href={hoverImages[index].site}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="a-hover"
                    >
                      Lien du site
                    </a>
                  </h2>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Projects;

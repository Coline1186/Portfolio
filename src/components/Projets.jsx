import { Carousel } from "react-responsive-carousel";
import hoverImages from "../data";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../style/Projets.css";
import { FaEarthAmericas } from "react-icons/fa6";

const images = [
  "src/assets/Wildgram.png",
  "src/assets/The-hero-experience.png",
  "src/assets/Rigol-App.png",
  "src/assets/portfolio.png",
];

function Projets() {
  return (
    <div id="projets">
      <div className="box">
        <h1 className="title-project">Mes projets</h1>
        <Carousel useKeyboardArrows={true}>
          {images.map((URL, index) => (
            <div className="slide">
              <img alt="sample_file" src={URL} key={index} />
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
                  {index==1 &&
                    <img
                      src={hoverImages[index].logo3}
                      alt="logo"
                      className="logo-hover"
                    />
                  }
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
export default Projets;

// import React from "react";
// import {
//   CarouselProvider,
//   Slider,
//   Slide,
//   ButtonBack,
//   ButtonNext,
// } from "pure-react-carousel";
// import { FaArrowRight, FaArrowLeft } from "react-icons/fa";
// import { motion } from "framer-motion";
// import wildgram from "../assets/Wildgram.png";
// import hero from "../assets/The-hero-experience.png";
// import rigol from "../assets/Rigol-App.png";
// import portfolio from "../assets/portfolio.png";
// import { Link } from "react-router-dom";

// import "pure-react-carousel/dist/react-carousel.es.css";
// import "../style/Projets.css";

// function Projets() {
//   return (
//     <CarouselProvider
//       naturalSlideWidth={240}
//       naturalSlideHeight={100}
//       totalSlides={4}
//       style={{ paddingLeft: "15%", paddingTop: "1%" }}
//       id="projets"
//     >
//       <h1 className="title-project">Mes projets</h1>
//       <Slider>
//         <Slide index={0} className="container">
//           <img
//             src={wildgram}
//             alt="Wildgram"
//             style={{ maxHeight: "100%", width: "80%" }}
//             className="img-container"
//           />
//           <div className="text-tag">
//             <h1>Wildgram</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
//               voluptas distinctio perferendis iusto odio esse omnis aliquam
//               fuga, ipsum autem dolores tenetur consequatur at consequuntur
//               officia vitae dolor dignissimos id minus perspiciatis soluta
//               necessitatibus laboriosam! Repellat porro maiores perspiciatis
//               totam mollitia cumque, dignissimos modi, fugit reprehenderit
//               deserunt consequuntur optio nulla provident dolorem vitae hic
//             </p>
//           </div>
//         </Slide>
//         <Slide index={1} className="container">
//           <img
//             src={hero}
//             alt="Hero experience"
//             style={{ maxHeight: "100%", width: "80%" }}
//             className="img-container"
//           />
//           <div className="text-tag">
//             <h1>Wildgram</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
//               voluptas distinctio perferendis iusto odio esse omnis aliquam
//               fuga, ipsum autem dolores tenetur consequatur at consequuntur
//               officia vitae dolor dignissimos id minus perspiciatis soluta
//               necessitatibus laboriosam! Repellat porro maiores perspiciatis
//               totam mollitia cumque, dignissimos modi, fugit reprehenderit
//               deserunt consequuntur optio nulla provident dolorem vitae hic
//             </p>
//           </div>
//         </Slide>
//         <Slide index={2} className="container">
//           <img
//             src={rigol}
//             alt="Rigol'App"
//             style={{ maxHeight: "100%", width: "80%" }}
//             className="img-container"
//           />
//           <div className="text-tag">
//             <h1>Wildgram</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
//               voluptas distinctio perferendis iusto odio esse omnis aliquam
//               fuga, ipsum autem dolores tenetur consequatur at consequuntur
//               officia vitae dolor dignissimos id minus perspiciatis soluta
//               necessitatibus laboriosam! Repellat porro maiores perspiciatis
//               totam mollitia cumque, dignissimos modi, fugit reprehenderit
//               deserunt consequuntur optio nulla provident dolorem vitae hic
//             </p>
//             <button>
//               <a
//                 href="https://rigol-app-coline.vercel.app"
//                 target="_blank"
//                 rel="noopener noreferrer"
//               >
//                 Clique ici
//               </a>
//             </button>
//           </div>
//         </Slide>
//         <Slide index={3} className="container">
//           <img
//             src={portfolio}
//             alt="Portfolio"
//             style={{ maxHeight: "100%", width: "80%" }}
//             className="img-container"
//           />
//           <div className="text-tag">
//             <h1>Wildgram</h1>
//             <p>
//               Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illo
//               voluptas distinctio perferendis iusto odio esse omnis aliquam
//               fuga, ipsum autem dolores tenetur consequatur at consequuntur
//               officia vitae dolor dignissimos id minus perspiciatis soluta
//               necessitatibus laboriosam! Repellat porro maiores perspiciatis
//               totam mollitia cumque, dignissimos modi, fugit reprehenderit
//               deserunt consequuntur optio nulla provident dolorem vitae hic
//             </p>
//             <button>
//               <Link to="/#home">Clique ici</Link>
//             </button>
//           </div>
//         </Slide>
//       </Slider>
//       <div
//         style={{
//           marginBottom: "3%",
//           display: "flex",
//           justifyContent: "space-around",
//         }}
//       >
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
//         >
//           <ButtonBack style={{fontSize:"2.5rem", background:"transparent", border:"none", marginRight:"300px"}}>
//             <FaArrowLeft  />
//           </ButtonBack>
//         </motion.div>
//         <motion.div
//           whileHover={{ scale: 1.1 }}
//           animate={{ y: [0, -10, 0] }}
//           transition={{ repeat: Infinity, duration: 2, delay: 0.2 }}
//         >
//           <ButtonNext style={{fontSize:"2.5rem", background:"transparent", border:"none", marginRight:"200px"}}>
//             <FaArrowRight />
//           </ButtonNext>
//         </motion.div>
//       </div>
//     </CarouselProvider>
//   );
// }

// export default Projets;

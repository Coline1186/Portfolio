/* eslint-disable react/no-unescaped-entities */
import "../style/About.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = [
  "src/assets/about/1img-4681.webp",
  "src/assets/about/2img-3902.webp",
  "src/assets/about/3IMG_4816.png",
  "src/assets/about/4img-1593.webp",
  "src/assets/about/5img-2585.webp",
  "src/assets/about/6e2480b.webp",
  "src/assets/about/7image0000001.webp",
  "src/assets/about/8img-5634-min.webp",
  "src/assets/about/9img-2178.webp",
  "src/assets/about/10img-4430.webp",
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
        </div>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quas quam
          ab et aut non sequi facere fugiat perferendis doloribus laudantium,
          numquam voluptatum est? Eaque accusantium alias, assumenda aspernatur,
          quibusdam iure laborum beatae quasi earum, corporis blanditiis velit
          perspiciatis dolorum! Autem itaque nemo tenetur maxime aperiam alias
          praesentium saepe non!
        </p>
      </div>
    </div>
  );
}

export default About;

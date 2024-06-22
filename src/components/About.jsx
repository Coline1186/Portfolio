/* eslint-disable react/no-unescaped-entities */
import "../style/About.css";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

const images = ["src/assets/IMG_5476.jpeg", "src/assets/logoBack.jpg"];

function About() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div id="about">
      <div style={{display:'flex'}}>
        <AnimatePresence>
          {images.map(
            (URL, index) =>
              index === currentIndex && (
                <motion.div
                  key={index}
                  className="image-container-about"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ duration: 1 }}
                >
                  <img alt={`project-${index}`} src={URL} />
                </motion.div>
              )
          )}
        </AnimatePresence>
        <p>
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

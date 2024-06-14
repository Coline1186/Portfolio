import React from "react";
import Competences from "./Propos";
import "../style/Home.css";
import Propos from "./Competences";
import Projets from "./Projets";
import Contact from "./Contact";

function Home() {
  return (
    <div id="home">
      <div className="background">
        <div className="name">
          <h1 className="animate__animated animate__flipInX">Coline Grosso</h1>
          <h3 className="my-job">Developpeuse Web Full Stack</h3>
        </div>
      </div>
      <div>
        <Competences />
      </div>
      <div>
        <Propos />
        <div>
          <Projets />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;

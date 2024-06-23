import "./Home.css";
import Skills from "../Skills/Skills";
import About from "../About/About";
import Projects from "../Projects/Projects";
import Contact from "../Contact/Contact";

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
        <About />
        <div>
          <div>
            <Skills />
          </div>
          <Projects />
        </div>
        <div>
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Home;

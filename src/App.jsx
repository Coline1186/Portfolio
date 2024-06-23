import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home/Home";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Header from "./components/Header/Header";
import About from "./components/About/About";
import ScrollToTop from "react-scroll-to-top";

function App() {
  return (
    <>
      <div>
        <Router>
          <Header />
          <ScrollToTop smooth color="rgb(77, 76, 76)" />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;

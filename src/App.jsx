import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Competences from "./components/Propos";
import Projets from "./components/Projets";
import Propos from "./components/Competences";
import Contact from "./components/Contact";
import Header from "./components/header";
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
            <Route path="/propos" element={<Propos />} />
            <Route path="/projets" element={<Projets />} />
            <Route path="/competences" element={<Competences />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
      </Router>
      </div>
    </>
  );
}

export default App;

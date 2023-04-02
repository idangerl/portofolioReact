import React from "react";
import "./App.css";
import Home from "./components/Home";
import Services from "./components/Skills";
import Skills from "./components/Skills";
import Portfolio from "./components/portfolio/Portfolio";
import Resume from "./components/resume/Resume";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <main className="main">
      <Header/>
      <Home />
      <Skills />
      <Portfolio />
      <Resume/>
      <Contact/>
      <Footer/>
    </main>
  );
}

export default App;

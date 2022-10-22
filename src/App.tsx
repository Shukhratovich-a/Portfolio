import React from "react";

import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
        <Projects />
      </main>
    </div>
  );
};

export default App;

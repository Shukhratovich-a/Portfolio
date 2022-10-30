import React from "react";

import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";
import Projects from "./Components/Projects/Projects";
import Blog from "./Components/Blog/Blog";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
        <Projects />
        <Blog />
      </main>
    </div>
  );
};

export default App;

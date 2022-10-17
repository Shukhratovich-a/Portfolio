import React from "react";

import Hero from "./Components/Hero/Hero";
import About from "./Components/About/About";

import "./App.scss";

const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default App;

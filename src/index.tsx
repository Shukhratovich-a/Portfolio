import React from "react";
import ReactDOM from "react-dom/client";

import { Provider as ProjectProvider } from "./Context/ProjectName";
import { Provider as ProjectModalProvider } from "./Context/ProjectModal";

import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);

root.render(
  <React.StrictMode>
    <ProjectProvider>
      <ProjectModalProvider>
        <App />
      </ProjectModalProvider>
    </ProjectProvider>
  </React.StrictMode>
);

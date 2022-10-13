import React from "react";

import Particles from "react-tsparticles";
import { Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";

import styles from "./Canvas.module.scss";

const Canvas: React.FC = () => {
  const particlesInit = React.useCallback(async (engine: Engine) => {
    await loadFull(engine);
  }, []);

  // const particlesLoaded = React.useCallback(async (container?: Container) => {
  // }, []);

  return (
    <Particles
      className={`${styles.canvas__block}`}
      id="tsparticles"
      canvasClassName={`${styles.canvas}`}
      init={particlesInit}
      // loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        style: { position: "absolute" },
        fpsLimit: 80,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              // enable: true,
              mode: "push",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 1,
            },
            repulse: {
              distance: 100,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 200,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 0.5,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 120,
            },
            value: 10,
          },
          opacity: {
            value: 0.3,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 3 },
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default Canvas;

import React from "react";

import MyCanvas from "../Lib/Canvas/Canvas";

import Arrow from "../Lib/Icons/Arrow";

import Container from "../Container/Container";

import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={`${styles.hero}`} id={"hero"}>
      <MyCanvas />
      <Container className={`${styles.container}`}>
        <h1 className={`${styles.hero__heading}`}>
          <span>Hello, I'm</span> <strong>Abdulaziz Abdunabiyev</strong>.
          <br />
          <span>I'm a full-stack web developer.</span>
        </h1>

        <button className={`${styles.hero__button}`}>
          <span>View my work</span>
          <Arrow />
        </button>
      </Container>
    </section>
  );
};

export default Hero;

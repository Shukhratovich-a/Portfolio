import React from "react";

import Nav from "../../Components/Nav/Nav";

import MyCanvas from "../Lib/Canvas/Canvas";

import Arrow from "../Lib/Icons/Arrow";

import { Link } from "react-scroll";

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

        <Link className={`${styles.hero__button}`} to={"about"}>
          <span>View my work</span>
          <Arrow />
        </Link>
      </Container>
      <Nav />
    </section>
  );
};

export default Hero;

import React from "react";
import { Link } from "react-scroll";
import parser from "html-react-parser";

import hero from "../../Datas/Hero";

import Nav from "../../Components/Nav/Nav";

import MyCanvas from "../Lib/Canvas/Canvas";
import Arrow from "../Lib/Icons/Arrow";
import Container from "../Container/Container";

import styles from "./Hero.module.scss";

const Hero: React.FC = () => {
  return (
    <section className={`${styles.hero}`} id={"hero"}>
      <MyCanvas />
      <Container className={`${styles.container}`}>
        <h1 className={`${styles.hero__heading}`}>{parser(hero.describtion)}</h1>

        <Link className={`${styles.hero__button}`} to={"about"}>
          <span>{hero.button}</span>
          <Arrow />
        </Link>
      </Container>
      <Nav />
    </section>
  );
};

export default Hero;

import React from "react";
import parser from "html-react-parser";

import skills from "../../Datas/Skills";
import about from "../../Datas/About";

import Benefits from "../Benefits/Benefits";

import Container from "../Container/Container";

import styles from "./About.module.scss";

const About: React.FC = () => {
  const headingTextRef = React.useRef<HTMLHeadingElement>(null);
  const headingLineRef = React.useRef<HTMLSpanElement>(null);
  const aboutInfoRef = React.useRef<HTMLDivElement>(null);
  const aboutScillsRef = React.useRef<HTMLDivElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        headingTextRef.current &&
        headingTextRef.current!.offsetTop < window.scrollY + window.innerHeight - 150
      ) {
        headingTextRef.current?.classList.add(styles["about__heading__text--show"]);
      }
      if (
        headingLineRef.current &&
        headingLineRef.current!.offsetTop < window.scrollY + window.innerHeight - 100
      ) {
        headingLineRef.current?.classList.add(styles["about__top__line--show"]);
      }
      if (
        aboutInfoRef.current &&
        aboutInfoRef.current!.offsetTop < window.scrollY + window.innerHeight - 200
      ) {
        aboutInfoRef.current?.classList.add(styles["about__info__left--show"]);
      }
      if (
        aboutScillsRef.current &&
        aboutScillsRef.current!.offsetTop < window.scrollY + window.innerHeight - 200
      ) {
        aboutScillsRef.current?.classList.add(styles["about__info__right--show"]);
      }
    });
  }, []);

  return (
    <section className={`${styles.about}`} id={"about"}>
      <Container>
        <div className={`${styles.about__top}`}>
          <h2 className={`${styles.about__heading}`}>
            <span className={`${styles.about__heading__text}`} ref={headingTextRef}>
              About
            </span>
          </h2>

          <span className={`${styles.about__top__line}`} ref={headingLineRef}></span>
        </div>

        <Benefits />

        <div className={`${styles.about__info}`}>
          <div className={`${styles.about__info__left}`} ref={aboutInfoRef}>
            <img
              className={`${styles.about__info__image}`}
              src={about.image}
              alt="I'm a Front-End Developer for ChowNow in Los Angeles, CA. I have serious passion for UI effects, animations and creating intuitive, dynamic user experiences. Let's make something special."
              width={290}
              height={250}
            />

            <h3 className={`${styles.about__info__heading}`}>{about.title}</h3>

            <p className={`${styles.about__info__description}`}>{parser(about.describtion)}</p>
          </div>

          <div className={`${styles.about__info__right}`} ref={aboutScillsRef}>
            <ul className={`${styles.about__list}`}>
              {skills.length > 0 &&
                skills.map((skill, index) => (
                  <li className={`${styles.about__item}`} key={index}>
                    <span className={`${styles.about__item__lang}`}>{skill.title}</span>
                    <span className={`${styles.about__item__fill}`}>
                      <span
                        style={{
                          width: skill.procent,
                          transitionDelay: String(0.75 + index / 10) + "s",
                          transitionDuration: String(0.75 + index / 10) + "s",
                        }}
                      ></span>
                    </span>
                    <span className={`${styles.about__item__procent}`}>{skill.procent}</span>
                  </li>
                ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;

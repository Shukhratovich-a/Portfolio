import React from "react";

import Filter from "../Filter/Filter";

import Container from "../Container/Container";

import styles from "./Projects.module.scss";

const Projects: React.FC = () => {
  const [activeLang, setActiveLang]: [string, (state: string) => void] = React.useState("all");

  const headingTextRef = React.useRef<HTMLHeadingElement>(null);
  const headingLineRef = React.useRef<HTMLSpanElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (headingTextRef.current!.offsetTop < window.scrollY + window.innerHeight - 150) {
        headingTextRef.current?.classList.add(styles["projects__heading__text--show"]);
      }
      if (headingLineRef.current!.offsetTop < window.scrollY + window.innerHeight - 100) {
        headingLineRef.current?.classList.add(styles["projects__top__line--show"]);
      }
    });
  }, []);

  return (
    <section className={`${styles.projects}`}>
      <Container>
        <div className={`${styles.projects__top}`}>
          <h2 className={`${styles.projects__heading}`}>
            <span className={`${styles.projects__heading__text}`} ref={headingTextRef}>
              Projects
            </span>
          </h2>

          <span className={`${styles.projects__top__line}`} ref={headingLineRef}></span>
        </div>

        <Filter activeLang={activeLang} setActiveLang={setActiveLang} />
      </Container>
    </section>
  );
};

export default Projects;

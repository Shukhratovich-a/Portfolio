import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import projects from "../../Datas/Projects";

import Filter from "../Filter/Filter";
import ProjectCard from "../Cards/Project/Project";

import Container from "../Container/Container";

import styles from "./Projects.module.scss";

const Projects: React.FC = () => {
  const [activeLang, setActiveLang]: [string, (state: string) => void] = React.useState("all");
  const [filteredProjects, setFilteredProjects]: [Project[], (state: Project[]) => void] =
    React.useState([...projects]);

  const [projectsShow, setProjectsShow]: [boolean, (state: boolean) => void] =
    React.useState(false);

  const headingTextRef = React.useRef<HTMLHeadingElement>(null);
  const headingLineRef = React.useRef<HTMLSpanElement>(null);
  const projectsListRef = React.useRef<HTMLUListElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (headingTextRef.current!.offsetTop < window.scrollY + window.innerHeight - 150) {
        headingTextRef.current?.classList.add(styles["projects__heading__text--show"]);
      }
      if (headingLineRef.current!.offsetTop < window.scrollY + window.innerHeight - 100) {
        headingLineRef.current?.classList.add(styles["projects__top__line--show"]);
      }
      if (projectsListRef.current!.offsetTop < window.scrollY + window.innerHeight - 100) {
        projectsListRef.current?.classList.add(styles["projects__list--show"]);
        setProjectsShow(true);
      }
    });
  }, []);

  return (
    <section className={`${styles.projects}`} id={"portfilio"}>
      <Container className={`${styles.container}`}>
        <div className={`${styles.projects__top}`}>
          <h2 className={`${styles.projects__heading}`}>
            <span className={`${styles.projects__heading__text}`} ref={headingTextRef}>
              Projects
            </span>
          </h2>

          <span className={`${styles.projects__top__line}`} ref={headingLineRef}></span>
        </div>

        <Filter
          activeLang={activeLang}
          setActiveLang={setActiveLang}
          allProjects={projects}
          setFilteredProjects={setFilteredProjects}
        />

        <motion.ul
          className={`${styles.projects__list}`}
          ref={projectsListRef}
          viewport={{ root: projectsListRef }}
          layout
        >
          <AnimatePresence>
            {filteredProjects.length > 0 &&
              filteredProjects.map((project) => (
                <ProjectCard
                  className={`${styles.project}`}
                  project={project}
                  projectsShow={projectsShow}
                  key={project.id}
                />
              ))}
          </AnimatePresence>
        </motion.ul>
      </Container>
    </section>
  );
};

export default Projects;

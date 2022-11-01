import React from "react";
import { motion, AnimatePresence } from "framer-motion";

import projects from "../../Datas/Projects";

import useWindowDimensions from "../../Hooks/useWindowDimesions";

import Filter from "../Filter/Filter";
import ProjectCard from "../Cards/Project/Project";
import ProjectModal from "../Modals/Project/Project";

import Container from "../Container/Container";

import styles from "./Projects.module.scss";

const Projects: React.FC = () => {
  const [activeLang, setActiveLang]: [string, (state: string) => void] = React.useState("all");
  const [filteredProjects, setFilteredProjects]: [Project[], (state: Project[]) => void] =
    React.useState([...projects]);
  const [projectsShow, setProjectsShow]: [boolean, (state: boolean) => void] =
    React.useState(false);
  const [height, setHeight]: [number, (state: number) => void] = React.useState(463);
  const { width } = useWindowDimensions();

  const projectsRef = React.useRef<HTMLDivElement>(null);
  const headingTextRef = React.useRef<HTMLHeadingElement>(null);
  const headingLineRef = React.useRef<HTMLSpanElement>(null);
  const projectsListRef = React.useRef<HTMLUListElement>(null);
  const projectCardRef = React.useRef<HTMLLIElement>(null);

  React.useEffect(() => {
    window.addEventListener("scroll", () => {
      if (
        headingTextRef.current &&
        headingTextRef.current!.offsetTop < window.scrollY + window.innerHeight - 150
      ) {
        headingTextRef.current?.classList.add(styles["projects__heading__text--show"]);
      }
      if (
        headingLineRef.current &&
        headingLineRef.current!.offsetTop < window.scrollY + window.innerHeight - 100
      ) {
        headingLineRef.current?.classList.add(styles["projects__top__line--show"]);
      }
      if (
        projectsListRef.current &&
        projectsListRef.current!.offsetTop < window.scrollY + window.innerHeight - 200
      ) {
        projectsListRef.current?.classList.add(styles["projects__list--show"]);
        setProjectsShow(true);
      }
    });
  }, []);

  React.useEffect(() => {
    if (projectsRef.current && projectCardRef.current && projectsListRef.current && projectsShow) {
      setHeight(
        463 +
          Math.ceil(filteredProjects.length / (width >= 1210 ? 3 : width >= 820 ? 2 : 1)) *
            projectCardRef.current.offsetHeight
      );
    }
  }, [filteredProjects, projectsShow, width]);

  return (
    <motion.section
      className={`${styles.projects}`}
      id={"portfilio"}
      initial={{ height: height }}
      animate={{ height: height }}
      exit={{ height: height }}
      transition={{ duration: 0.6, ease: "easeInOut" }}
      ref={projectsRef}
    >
      <ProjectModal />

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

        <ul className={`${styles.projects__list}`} ref={projectsListRef}>
          <AnimatePresence>
            {filteredProjects.length > 0 &&
              filteredProjects.map((project, index) => (
                <ProjectCard
                  className={`${styles.project}`}
                  project={project}
                  projectsShow={projectsShow}
                  key={project.id}
                  order={index}
                  ref={projectCardRef}
                />
              ))}
          </AnimatePresence>
        </ul>
      </Container>
    </motion.section>
  );
};

export default Projects;

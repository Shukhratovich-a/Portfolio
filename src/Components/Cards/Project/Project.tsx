import React from "react";
import { motion, useIsPresent } from "framer-motion";

import useProjectName from "../../../Hooks/useProjectName";
import useProjectModal from "../../../Hooks/useProjectModal";

import styles from "./Project.module.scss";

const Card = React.forwardRef<
  HTMLLIElement,
  {
    className: string;
    project: Project;
    projectsShow: boolean;
    order: number;
  }
>(({ className, project, projectsShow, order }, ref) => {
  const [delay, setDelay] = React.useState<number>(projectsShow ? 0 : 0.2 * order);
  const [, setProjectName] = useProjectName();
  const [, setProjectModal] = useProjectModal();

  const isPresent = useIsPresent();

  const variants = {
    initial: { opacity: 0, y: 150, scale: 1 },
    start: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: 0, scale: 0 },
  };

  React.useEffect(() => {
    if (projectsShow === true) {
      setDelay(0);
    }
  }, [projectsShow]);

  return (
    <motion.li
      className={`${styles.card} ${className}`}
      layout
      style={{ position: isPresent ? "relative" : "absolute" }}
      initial={!projectsShow ? "initial" : "exit"}
      animate={!projectsShow ? "initial" : "start"}
      exit={"exit"}
      transition={{
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      }}
      variants={variants}
      ref={ref}
    >
      <img
        className={`${styles.card__banner}`}
        src={project.image}
        alt={project.title}
        width={390}
        height={300}
      />

      <div className={`${styles.card__text}`}>
        <h3 className={`${styles.card__heading}`}>{project.title}</h3>
        <span className={`${styles.card__lang}`}>{project.text}</span>
      </div>

      <button
        className={`${styles.card__button}`}
        type={"button"}
        onClick={() => {
          setProjectName(project.title.toLowerCase());
          setProjectModal(true);
        }}
      >
        <span>Learn more</span>
      </button>
    </motion.li>
  );
});

export default Card;

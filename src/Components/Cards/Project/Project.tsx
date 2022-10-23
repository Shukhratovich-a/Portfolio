import React from "react";
import { motion } from "framer-motion";

import styles from "./Project.module.scss";

const Card: React.FC<{ className: string; project: Project; projectsShow: boolean }> = ({
  className,
  project,
  projectsShow,
}) => {
  return (
    <motion.li
      className={`${styles.card} ${className}`}
      style={{ backgroundImage: `url(${project.image})` }}
      layout
      initial={{ opacity: 0, y: !projectsShow ? 150 : 0, scale: projectsShow ? 0 : 1 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: !projectsShow ? 150 : 0, scale: projectsShow ? 0 : 1 }}
      transition={{
        duration: 0.5,
        delay: !projectsShow ? 0.2 * project.id : 0,
        ease: "easeInOut",
      }}
    ></motion.li>
  );
};

export default Card;

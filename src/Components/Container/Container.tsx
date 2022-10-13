import React from "react";

import styles from "./Container.module.scss";

const Container: React.FC<Container> = ({ children, className }) => {
  return <div className={`${styles.container} ${className}`}>{children}</div>;
};

export default Container;
